// JOKER Node Engine — Local evolutive timeline (hash-chained)
// Policy: EU-first | audit-first | hash-only | fail-closed | no data custody

let __receipt = null;
let __timeline = null;

function nowISO(){ return new Date().toISOString(); }

function canonicalize(obj){
  const isObj = (x)=>x && typeof x==="object" && !Array.isArray(x);
  const sortRec = (x)=>{
    if(Array.isArray(x)) return x.map(sortRec);
    if(!isObj(x)) return x;
    const o={};
    Object.keys(x).sort().forEach(k=>o[k]=sortRec(x[k]));
    return o;
  };
  return JSON.stringify(sortRec(obj));
}

async function sha256Hex(str){
  const enc = new TextEncoder().encode(str);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  const arr = new Uint8Array(buf);
  return Array.from(arr).map(b=>b.toString(16).padStart(2,"0")).join("");
}

function setText(id, t){
  const el = document.getElementById(id);
  if(el) el.textContent = t;
}

function setResult(id, txt, ok){
  const el = document.getElementById(id);
  if(!el) return;
  el.className = "result " + (ok ? "ok" : "bad");
  el.textContent = txt;
}

function loadLastReceipt(){
  try{
    const r = localStorage.getItem("HBCE_LAST_RECEIPT");
    if(!r) return null;
    return JSON.parse(r);
  }catch(_){ return null; }
}

function saveTimeline(){
  try{
    localStorage.setItem("HBCE_JOKER_TIMELINE", JSON.stringify(__timeline));
  }catch(_){}
}

function loadTimeline(){
  try{
    const x = localStorage.getItem("HBCE_JOKER_TIMELINE");
    if(!x) return null;
    return JSON.parse(x);
  }catch(_){ return null; }
}

async function verifyReceiptLocal(receipt){
  // Deterministic re-hash (fail-closed)
  if(!receipt || typeof receipt !== "object") return { ok:false, reason:"RECEIPT_MISSING" };
  if(!receipt.payload_sha256) return { ok:false, reason:"PAYLOAD_SHA256_MISSING" };
  if(!receipt.receipt_sha256) return { ok:false, reason:"RECEIPT_SHA256_MISSING" };

  const canon = canonicalize({
    proto: receipt.proto,
    kind: receipt.kind,
    policy: receipt.policy,
    payload_sha256: receipt.payload_sha256,
    issued_at: receipt.issued_at,
    public: receipt.public,
    issuer: receipt.issuer
  });

  const calc = await sha256Hex(canon);
  if(calc !== receipt.receipt_sha256) return { ok:false, reason:"HASH_MISMATCH" };

  return { ok:true, reason:"AUTHORIZED" };
}

function ensureTimeline(payload_sha256, nickname){
  if(__timeline && __timeline.payload_sha256 === payload_sha256) return;

  __timeline = loadTimeline();
  if(__timeline && __timeline.payload_sha256 === payload_sha256) return;

  __timeline = {
    proto: "HBCE-JOKER-TIMELINE-v1",
    policy: ["EU_FIRST","AUDIT_FIRST","HASH_ONLY","APPEND_ONLY","FAIL_CLOSED","NO_DATA_CUSTODY"],
    payload_sha256,
    public: { nickname },
    sealed_by: "HERMETICUM B.C.E. S.r.l.",
    created_at: nowISO(),
    head_hash: "GENESIS",
    events: []
  };
  saveTimeline();
}

function renderTimeline(){
  const el = document.getElementById("joker_timeline");
  if(!el) return;

  if(!__timeline || !__timeline.events || __timeline.events.length === 0){
    el.className = "result";
    el.textContent = "No events yet.";
    return;
  }

  const lines = [];
  lines.push("events=" + __timeline.events.length);
  lines.push("head_hash=" + __timeline.head_hash);
  lines.push("");

  for(const ev of __timeline.events){
    lines.push("- " + ev.time + " | " + ev.type);
    lines.push("  note: " + ev.note);
    lines.push("  prev: " + ev.prev_hash);
    lines.push("  hash: " + ev.event_hash);
    lines.push("");
  }

  el.className = "result ok";
  el.textContent = lines.join("\n");
}

function downloadJSON(filename, obj){
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type:"application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function JOKER_clearDraft(){
  const t = document.getElementById("joker_type");
  const n = document.getElementById("joker_note");
  if(t) t.value = "";
  if(n) n.value = "";
}

async function JOKER_addEvent(){
  try{
    if(!__receipt) return setResult("joker_status", "DENIED\nreason_code=NO_RECEIPT_BOUND", false);

    const type = (document.getElementById("joker_type")?.value || "").trim() || "NOTE";
    const note = (document.getElementById("joker_note")?.value || "").trim() || "(empty)";

    // Hard rule: keep note public-safe (no personal identity)
    if(note.length > 280) return setResult("joker_status", "DENIED\nreason_code=NOTE_TOO_LONG", false);

    ensureTimeline(__receipt.payload_sha256, __receipt.public?.nickname || "public");

    const prev = __timeline.head_hash || "GENESIS";

    const event = {
      proto: "HBCE-JOKER-EVENT-v1",
      time: nowISO(),
      type,
      note,
      prev_hash: prev,
      payload_sha256: __receipt.payload_sha256,
      public: { nickname: __receipt.public?.nickname || "public" },
      issuer: { seal: "HERMETICUM B.C.E. S.r.l.", node: "AI-JOKER" }
    };

    const event_hash = await sha256Hex(canonicalize(event));
    event.event_hash = event_hash;

    __timeline.events.push(event);
    __timeline.head_hash = event_hash;
    saveTimeline();

    setResult("joker_status", "AUTHORIZED\nappended_event_hash=" + event_hash, true);
    renderTimeline();
    JOKER_clearDraft();

  }catch(e){
    setResult("joker_status", "DENIED\nreason_code=" + (e.message || "JOKER_EVENT_FAILED"), false);
  }
}

function JOKER_downloadTimeline(){
  if(!__timeline) return setResult("joker_status", "DENIED\nreason_code=NO_TIMELINE", false);
  const fn = "joker.timeline." + (__timeline.public?.nickname || "node") + ".json";
  downloadJSON(fn, __timeline);
  setResult("joker_status", "AUTHORIZED\ndownloaded=" + fn, true);
}

window.JOKER_addEvent = JOKER_addEvent;
window.JOKER_downloadTimeline = JOKER_downloadTimeline;
window.JOKER_clearDraft = JOKER_clearDraft;

window.addEventListener("DOMContentLoaded", async ()=>{
  __receipt = loadLastReceipt();

  if(!__receipt){
    setResult("joker_status", "DENIED\nreason_code=NO_LOCAL_RECEIPT\nhint=Generate in /create then verify.", false);
    return;
  }

  const check = await verifyReceiptLocal(__receipt);
  if(!check.ok){
    setResult("joker_status", "DENIED\nreason_code=" + check.reason, false);
    return;
  }

  setText("joker_nickname", __receipt.public?.nickname || "public");
  setText("joker_payload", __receipt.payload_sha256);
  setText("joker_receipt", __receipt.receipt_sha256);

  ensureTimeline(__receipt.payload_sha256, __receipt.public?.nickname || "public");
  renderTimeline();

  setResult("joker_status", "AUTHORIZED\nnode_bound_to_receipt\nappend_only=ON", true);
});

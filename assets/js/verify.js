// HBCE VERIFY ENGINE v3
// Deterministic | fail-closed | hash-only
// Also sets a verified flag + exposes JOKER Node entry.

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

function out(txt, ok){
  const el = document.getElementById("hbce_out");
  if(!el) return;
  el.className = "result " + (ok ? "ok" : "bad");
  el.textContent = txt;
}

function tryParseJSON(x){
  try{return JSON.parse(x);}catch{return null;}
}

async function verifyReceipt(obj){
  if(!obj || typeof obj !== "object") return out("DENIED\nreason_code=RECEIPT_MISSING", false);
  if(!obj.payload_sha256) return out("DENIED\nreason_code=PAYLOAD_SHA256_MISSING", false);
  if(!obj.receipt_sha256) return out("DENIED\nreason_code=RECEIPT_SHA256_MISSING", false);

  const canon = canonicalize({
    proto: obj.proto,
    kind: obj.kind,
    policy: obj.policy,
    payload_sha256: obj.payload_sha256,
    issued_at: obj.issued_at,
    public: obj.public,
    issuer: obj.issuer
  });

  const calc = await sha256Hex(canon);
  if(calc !== obj.receipt_sha256){
    return out("DENIED\nreason_code=HASH_MISMATCH", false);
  }

  // Persist verified marker (local-only)
  try{
    localStorage.setItem("HBCE_VERIFIED_AT", new Date().toISOString());
    localStorage.setItem("HBCE_VERIFIED_PAYLOAD", obj.payload_sha256);
  }catch(_){}

  return out(
    "AUTHORIZED\nreceipt valid\npayload=" + obj.payload_sha256 +
    "\n\nNext:\n- Open JOKER Node: ../joker/\n- Append timeline events (local hash-chain)",
    true
  );
}

async function HBCE_verify(){
  const raw = (document.getElementById("hbce_input")?.value || "").trim();
  if(!raw) return out("Waiting for input.", false);

  // SHA only check
  if(/^[a-f0-9]{64}$/i.test(raw)){
    return out("FORMAT OK\nhash received\n(no receipt object to verify)", true);
  }

  const parsed = tryParseJSON(raw);
  if(!parsed) return out("DENIED\nreason_code=INVALID_JSON", false);

  // wrapper
  if(parsed.receipt) return verifyReceipt(parsed.receipt);

  // direct receipt
  if(parsed.payload_sha256) return verifyReceipt(parsed);

  // array
  if(Array.isArray(parsed)){
    const r = parsed.find(x=>x && x.type==="receipt");
    if(r && r.data) return verifyReceipt(r.data);
  }

  return out("DENIED\nreason_code=UNSUPPORTED_FORMAT", false);
}

// AUTOLOAD RECEIPT FROM CREATE
window.addEventListener("DOMContentLoaded", ()=>{
  try{
    const r = localStorage.getItem("HBCE_LAST_RECEIPT");
    if(r){
      const obj = JSON.parse(r);
      const input = document.getElementById("hbce_input");
      if(input && !input.value.trim()){
        input.value = JSON.stringify(obj, null, 2);
      }
    }
  }catch(_){}
});

window.HBCE_verify = HBCE_verify;

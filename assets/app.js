// HERMETICUM — hash-only utilities (no data custody)

function sortKeys(obj){
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.map(sortKeys);
  const out = {};
  Object.keys(obj).sort().forEach(k => out[k] = sortKeys(obj[k]));
  return out;
}

function canonicalStringify(obj){
  return JSON.stringify(sortKeys(obj));
}

async function sha256Hex(str){
  const enc = new TextEncoder().encode(str);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  const arr = Array.from(new Uint8Array(buf));
  return arr.map(b => b.toString(16).padStart(2,"0")).join("");
}

function nowISO(){
  return new Date().toISOString();
}

function downloadText(filename, text){
  const blob = new Blob([text], {type:"application/json;charset=utf-8"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

async function buildReceipt({mode, payloadSha256, prevHash}){
  const core = {
    proto: "HBCE-REF-v1",
    kind: "HASH_RECEIPT",
    mode: mode,               // PUBLIC | PRIVATE
    created_at: nowISO(),
    payload_sha256: payloadSha256,
    prev_hash: prevHash || ""
  };
  const coreCanon = canonicalStringify(core);
  const receiptSha = await sha256Hex(coreCanon);
  return { ...core, receipt_sha256: receiptSha };
}

async function verifyReceipt(receiptObj, payloadObjOrNull){
  // Recompute payload hash if payload provided; otherwise trust receipt payload_sha256
  let payloadSha = receiptObj?.payload_sha256 || "";
  if (payloadObjOrNull !== null){
    const payloadCanon = canonicalStringify(payloadObjOrNull);
    payloadSha = await sha256Hex(payloadCanon);
  }

  const core = {
    proto: receiptObj?.proto || "",
    kind: receiptObj?.kind || "",
    mode: receiptObj?.mode || "",
    created_at: receiptObj?.created_at || "",
    payload_sha256: payloadSha,
    prev_hash: receiptObj?.prev_hash || ""
  };
  const expected = await sha256Hex(canonicalStringify(core));
  const declared = receiptObj?.receipt_sha256 || "";
  const pass = (expected === declared);

  return { pass, expected_receipt_sha256: expected, payload_sha256: payloadSha };
}

function safeParseJson(text){
  try { return { ok:true, value: JSON.parse(text) }; }
  catch(e){ return { ok:false, error: String(e) }; }
}

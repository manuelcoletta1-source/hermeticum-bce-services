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
  return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,"0")).join("");
}

function nowISO(){ return new Date().toISOString(); }

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

function safeParseJson(text){
  try { return { ok:true, value: JSON.parse(text) }; }
  catch(e){ return { ok:false, error: String(e) }; }
}

/**
 * HBCE-IPR-EU Receipt (BASE)
 * - JOKER FAIL-CLOSED: si attiva solo se clientStd.optional.joker_symbiotic_mode === true
 * - receipt_sha256 = sha256(canonical_json(core))
 */
async function buildStampedIpREuReceipt({ mode, payloadSha256, prevHash, clientStd }){
  const jokerOn = (clientStd?.optional?.joker_symbiotic_mode === true);

  const core = {
    proto: "HBCE-IPR-EU-v1",
    kind: "IPR_EU_BASE_RECEIPT",
    issuer: {
      hallmark: "HERMETICUM - BLINDATA · COMPUTABILE · EVOLUTIVA",
      legal: "HERMETICUM B.C.E. S.r.l.",
      symbol: "🜏"
    },
    policy: ["UE_FIRST","AUDIT_FIRST","HASH_ONLY","FAIL_CLOSED","NO_DATA_CUSTODY"],
    stamps: {
      UNEBDO: { proto: "UNEBDO-v1", stamp: "UNEBDO_STAMP_PRESENT" },
      OPC:   { proto: "OPC-v1",   stamp: "OPC_CONFIRMABLE" }
    },
    mode: mode, // PUBLIC | PRIVATE
    created_at: nowISO(),
    payload_sha256: payloadSha256,
    prev_hash: prevHash || "",
    client_std: {
      std: clientStd?.std || "HBCE-CLIENT-STD-UE-v1",
      scope: clientStd?.scope || "IPR_EU_ACTIVATION"
    },
    joker: jokerOn ? {
      enabled: true,
      mode: "SYMBIOTIC_TEMPORAL",
      tag: clientStd?.optional?.joker_tag || ""
    } : { enabled: false }
  };

  const receiptSha = await sha256Hex(canonicalStringify(core));
  return { ...core, receipt_sha256: receiptSha };
}

/**
 * OPC CONFIRM RECEIPT (UE NODE)
 * - Conferma un IPR_EU_BASE_RECEIPT
 * - prev_hash = receipt_sha256 del base receipt
 */
async function buildOpcConfirmReceipt({ baseReceipt, confirm_note }){
  const baseReceiptSha = baseReceipt?.receipt_sha256 || "";
  const basePayloadSha = baseReceipt?.payload_sha256 || "";

  const core = {
    proto: "OPC-CONFIRM-v1",
    kind: "OPC_CONFIRM_RECEIPT",
    issuer: {
      hallmark: "HERMETICUM - BLINDATA · COMPUTABILE · EVOLUTIVA",
      legal: "HERMETICUM B.C.E. S.r.l.",
      symbol: "🜏"
    },
    policy: ["UE_FIRST","AUDIT_FIRST","HASH_ONLY","FAIL_CLOSED","NO_DATA_CUSTODY"],
    stamps: {
      OPC: { proto: "OPC-v1", stamp: "OPC_CONFIRMED" },
      UNEBDO: { proto: "UNEBDO-v1", stamp: "UNEBDO_STAMP_PRESENT" }
    },
    created_at: nowISO(),
    // riferimento al base receipt (append-only)
    prev_hash: baseReceiptSha,
    base_receipt_sha256: baseReceiptSha,
    base_payload_sha256: basePayloadSha,
    note: (confirm_note || "").trim()
  };

  const confirmSha = await sha256Hex(canonicalStringify(core));
  return { ...core, receipt_sha256: confirmSha };
}

/**
 * Verify deterministico receipt timbrati / OPC confirm
 */
async function verifyStampedReceipt(receiptObj, payloadObjOrNull){
  let payloadSha = receiptObj?.payload_sha256 || "";
  if (payloadObjOrNull !== null){
    payloadSha = await sha256Hex(canonicalStringify(payloadObjOrNull));
  }

  const core = { ...receiptObj };
  delete core.receipt_sha256;

  // forza payload_sha256 coerente solo se il receipt ha payload_sha256
  if (Object.prototype.hasOwnProperty.call(core, "payload_sha256")){
    core.payload_sha256 = payloadSha;
  }

  const expected = await sha256Hex(canonicalStringify(core));
  const declared = receiptObj?.receipt_sha256 || "";
  const pass = (expected === declared);

  return {
    pass,
    expected_receipt_sha256: expected,
    declared_receipt_sha256: declared,
    payload_sha256: payloadSha
  };
}

/**
 * REGISTRY (public)
 * - entry_hash = sha256(canonical_json(entry_without_entry_hash))
 * - registry_prev_hash = hash dell'entry precedente (append-only)
 */
async function buildRegistryEntry({ registry_prev_hash, baseReceipt, opcConfirm }){
  const core = {
    proto: "HBCE-REGISTRY-v1",
    kind: "IPR_EU_REGISTRY_ENTRY",
    issuer: {
      hallmark: "HERMETICUM - BLINDATA · COMPUTABILE · EVOLUTIVA",
      legal: "HERMETICUM B.C.E. S.r.l.",
      symbol: "🜏"
    },
    created_at: nowISO(),
    registry_prev_hash: registry_prev_hash || "",
    ipr: {
      base_receipt_sha256: baseReceipt?.receipt_sha256 || "",
      base_payload_sha256: baseReceipt?.payload_sha256 || ""
    },
    opc: {
      confirm_receipt_sha256: opcConfirm?.receipt_sha256 || "",
      prev_hash: opcConfirm?.prev_hash || ""
    }
  };

  const entry_hash = await sha256Hex(canonicalStringify(core));
  return { ...core, entry_hash };
}

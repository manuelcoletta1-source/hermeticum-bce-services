function stripBOM(s){ return s.replace(/^\uFEFF/, ""); }
function isHex64(s){ return /^[0-9a-f]{64}$/i.test(s); }

function tryParseJSON(raw){
  const t = stripBOM(String(raw || "").trim());
  if (!t) return { ok:false, err:"EMPTY_INPUT" };

  if (isHex64(t)) return { ok:true, kind:"hash", value:t.toLowerCase() };

  try {
    const obj = JSON.parse(t);
    return { ok:true, kind:"json", value:obj };
  } catch (e) {
    return { ok:false, err:"INPUT_NOT_JSON_OR_HASH" };
  }
}

function normalize(parsed){
  if (parsed.kind === "hash") return { parsed_as:"hash", hash:parsed.value };

  const v = parsed.value;

  // wrapper
  if (v && typeof v === "object" && v.receipt) {
    return { parsed_as:"wrapper", receipt:v.receipt, client_std_full: v.client_std_full || null };
  }

  // array
  if (Array.isArray(v)) {
    const receipt = v.find(x => x && x.type === "receipt")?.data || null;
    const client  = v.find(x => x && x.type === "client_std")?.data || null;
    return { parsed_as:"array", receipt, client_std_full: client };
  }

  // receipt object
  return { parsed_as:"receipt", receipt:v, client_std_full:null };
}

function deny(outEl, reason, extra){
  outEl.className = "result bad";
  outEl.textContent = ["DENIED", "reason_code=" + reason, extra || ""].filter(Boolean).join("\n");
}

function ok(outEl, parsedAs, extra){
  outEl.className = "result ok";
  outEl.textContent = ["AUTHORIZED", "parsed_as=" + parsedAs, "policy=HASH_ONLY|FAIL_CLOSED", extra || ""].filter(Boolean).join("\n");
}

window.HBCE_verify = function(){
  const input = document.getElementById("hbce_input");
  const outEl = document.getElementById("hbce_out");

  const parsed = tryParseJSON(input.value);
  if (!parsed.ok) {
    return deny(outEl, parsed.err, "Atteso: JSON receipt (inizia con '{') oppure hash SHA-256 (64 caratteri).");
  }

  const n = normalize(parsed);

  if (n.parsed_as === "hash") {
    return ok(outEl, "hash", "note=Formato hash valido (64 hex).");
  }

  const r = n.receipt;
  if (!r || typeof r !== "object") return deny(outEl, "RECEIPT_MISSING");
  if (!r.payload_sha256 || !isHex64(String(r.payload_sha256))) return deny(outEl, "PAYLOAD_SHA256_INVALID");
  if (!r.receipt_sha256 || !isHex64(String(r.receipt_sha256))) return deny(outEl, "RECEIPT_SHA256_INVALID");

  // Qui (step futuro) aggiungiamo: ricalcolo deterministico receipt_sha256 e confronto.
  return ok(outEl, n.parsed_as, "note=Struttura receipt valida.");
};

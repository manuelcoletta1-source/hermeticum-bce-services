// IPR Create Engine (EU Base) — client-side only
// Policy: EU-first | audit-first | hash-only | fail-closed | no data custody

let __LAST_IPR = null;
let __LAST_RECEIPT = null;

function nowISO() {
  return new Date().toISOString();
}

function normalizeStr(s) {
  return String(s || "").trim();
}

function requireNonEmpty(value, fieldName) {
  const v = normalizeStr(value);
  if (!v) throw new Error("MISSING_FIELD:" + fieldName);
  return v;
}

function canonicalize(obj) {
  // Deterministic JSON string: sorted keys recursively
  const isObj = (x) => x && typeof x === "object" && !Array.isArray(x);

  const sortRec = (x) => {
    if (Array.isArray(x)) return x.map(sortRec);
    if (!isObj(x)) return x;

    const out = {};
    Object.keys(x).sort().forEach((k) => {
      out[k] = sortRec(x[k]);
    });
    return out;
  };

  return JSON.stringify(sortRec(obj));
}

async function sha256Hex(str) {
  const enc = new TextEncoder();
  const data = enc.encode(str);
  const digest = await crypto.subtle.digest("SHA-256", data);
  const bytes = new Uint8Array(digest);
  let hex = "";
  for (let i = 0; i < bytes.length; i++) {
    hex += bytes[i].toString(16).padStart(2, "0");
  }
  return hex;
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.value = text;
}

function downloadJSON(filename, obj) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function uiError(msg) {
  const out = document.getElementById("ipr_out");
  if (out) out.value = "DENIED\nreason_code=" + msg;
}

function uiOk(text) {
  const out = document.getElementById("ipr_out");
  if (out) out.value = text;
}

async function generateIPR() {
  try {
    // Required fields (private identity inputs)
    const name = requireNonEmpty(document.getElementById("name").value, "name");
    const surname = requireNonEmpty(document.getElementById("surname").value, "surname");
    const country = requireNonEmpty(document.getElementById("country").value, "country");
    const region = requireNonEmpty(document.getElementById("region").value, "region");
    const city = requireNonEmpty(document.getElementById("city").value, "city");
    const district = requireNonEmpty(document.getElementById("district").value, "district");

    // Public nickname (privacy)
    const nickname = requireNonEmpty(document.getElementById("nickname").value, "nickname_public");

    const ts = nowISO();

    // IPR object (private layer included here; user controls file custody)
    const ipr = {
      proto: "HBCE-IPR-v1",
      kind: "EU_BASE_IDENTITY",
      policy: ["EU_FIRST", "AUDIT_FIRST", "HASH_ONLY", "FAIL_CLOSED", "NO_DATA_CUSTODY"],
      subject: {
        private_identity: {
          name,
          surname,
          country,
          region,
          city,
          district
        },
        public_identity: {
          nickname
        }
      },
      time: {
        issued_at: ts
      },
      issuer: {
        seal: "HERMETICUM B.C.E. S.r.l.",
        mark: "IPR Infrastructure",
        note: "Sealed by infrastructure (client-side generation, user custody)."
      }
    };

    // Deterministic hashing of IPR canonical form
    const iprCanon = canonicalize(ipr);
    const ipr_sha256 = await sha256Hex(iprCanon);

    // Receipt (hash-only; safe to share)
    const receipt = {
      proto: "HBCE-RECEIPT-v1",
      kind: "IPR_EU_BASE_RECEIPT",
      policy: ["HASH_ONLY", "FAIL_CLOSED"],
      payload_sha256: ipr_sha256,
      issued_at: ts,
      public: {
        nickname
      },
      issuer: {
        seal: "HERMETICUM B.C.E. S.r.l.",
        gateway: "IPR — European Responsibility Infrastructure"
      }
    };

    const receiptCanon = canonicalize(receipt);
    const receipt_sha256 = await sha256Hex(receiptCanon);
    receipt.receipt_sha256 = receipt_sha256;

    // Store in memory for download buttons
    __LAST_IPR = ipr;
    __LAST_RECEIPT = receipt;

    // Output
    const view = {
      status: "AUTHORIZED",
      ipr_sha256,
      receipt_sha256,
      note: "Download IPR (private) and Receipt (shareable). Then verify receipt."
    };

    uiOk(JSON.stringify({ ipr: ipr, receipt: receipt, view: view }, null, 2));

    // Also prefill verify input by caching receipt in localStorage (optional hand-off)
    try {
      localStorage.setItem("HBCE_LAST_RECEIPT", JSON.stringify(receipt));
    } catch (_) {}

  } catch (e) {
    uiError(e.message || "CREATE_FAILED");
  }
}

function downloadIPR() {
  if (!__LAST_IPR) return uiError("NO_IPR_GENERATED");
  downloadJSON("ipr.eu-base.json", __LAST_IPR);
}

function downloadReceipt() {
  if (!__LAST_RECEIPT) return uiError("NO_RECEIPT_GENERATED");
  downloadJSON("receipt.ipr.eu-base.json", __LAST_RECEIPT);
}

// Optional: on load, attempt to restore last receipt (for user convenience)
window.addEventListener("DOMContentLoaded", () => {
  try {
    const r = localStorage.getItem("HBCE_LAST_RECEIPT");
    if (r && !__LAST_RECEIPT) {
      __LAST_RECEIPT = JSON.parse(r);
    }
  } catch (_) {}
});

// Expose functions to HTML onclick
window.generateIPR = generateIPR;
window.downloadIPR = downloadIPR;
window.downloadReceipt = downloadReceipt;

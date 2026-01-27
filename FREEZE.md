# FREEZE — IPR-3@ManuelColetta (Evidence Pack)

Date: 2026-01-27T00:00:00+01:00  
Scope: Evidence Pack (hash-only, audit-first)  
Policy: UE_FIRST / GDPR_MIN / HASH_ONLY / FAIL_CLOSED / AUDIT  
Positioning: B2B / B2G (gateway entrypoint; citizen is operational ingress)

## Declaration
This repository state is declared **FROZEN** for the IPR evidence pack listed below.  
From this commit forward: **APPEND-ONLY**.  
No file in the frozen set may be modified, regenerated, renamed, or reordered without creating a new versioned pack and a new manifest.

## Frozen set
The following files are frozen as a single verifiable set:

- `ipr.canon.json` — PRIMARY_RECORD (canonicalized)
- `ipr.json` — DERIVED_VIEW (human-facing view)
- `receipt.json` — CRYPTO_RECEIPT (ED25519 signature over SHA-512 digest of `ipr.canon.json`)
- `ed25519_pub.pem` — VERIFY_KEY (public verification key only)
- `anchor-pack.json` — ANCHOR_REFERENCES (external references; no availability guarantees)
- `PACK_MANIFEST.json` — EVIDENCE_PACK index (file list + hashes + assertions)

## Verification rule (fail-closed)
Verification MUST fail (and the pack MUST be treated as invalid) if any of the following occurs:

- Any SHA-512 hash in `PACK_MANIFEST.json` does not match the corresponding file
- `receipt.json` signature does not verify against the digest of `ipr.canon.json`
- Any required file is missing or differs by even one byte

## Anchors (external references)
This freeze does not claim legal recognition. Anchors are included for audit redundancy:

- IPFS CID: bafkreidhv73vqrxoweog33ls3rnwrgyicio234pcuks6mnep76yh56pj5q
- Bitcoin TXID: 9eeb29b67f4a649d563b95560fda5ddaa84777b13515f936837fc93d28554b45
- Ethereum TX: 0xf65eb314a1edd392fc15fcd9c65d22060ca39cbac04fcfcb48b978062500a7eff

## Data minimization
This pack is **hash-only** and stores **no personal documents**.  
Any personal data handling must occur outside this pack under separate lawful processes.

## Append-only note
Future updates MUST be done by creating a new versioned evidence pack (e.g., `PACK_MANIFEST/v2`) and leaving this frozen set unchanged.

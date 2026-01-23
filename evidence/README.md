# Evidence Bundles (EU Pilot)

This folder contains **public evidence bundles** for BioCyber Identity Card pilot instances.

The goal is reproducible verification:
- recompute hashes locally
- compare to manifest
- verify timestamp reference (if present)
- confirm fail-closed outcomes

## Minimal bundle structure

Each pilot bundle SHOULD follow:
evidence/ EVT-/ manifest.json (optional attachments)
Minimal publication rule:
- you may publish only `manifest.json` publicly
- attachments may remain private
- as long as hashes in the manifest remain verifiable

## Verification (summary)

1. Download the manifest (and any published attachments).
2. Compute SHA-512 hashes locally.
3. Compare with the values in `manifest.json`.
4. If a timestamp is provided, verify it binds to the same hash.
5. If DGV outcome is `DENY` or `FAIL_CLOSED`, the action must not have executed.

Golden rule:
**verification is "recompute and match", not "trust the website".**

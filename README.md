# Hermeticum B.C.E. — EU Gateway

Ingresso unico per **evidenze verificabili** e **audit riproducibile**.  
Progettato per contesti **B2B** e **B2G** secondo principi **UE-first**, **GDPR-min**, **hash-only** e **fail-closed**.

## Cosa fa
- Genera **IPR** (Identity Primary Record) in modalità hash-only
- Produce **receipt ED25519** verificabili offline
- Organizza **Evidence Pack** con manifest opponibile
- Consente **verifica indipendente** senza fiducia nel portale

## Cosa NON fa
- Non carica né conserva documenti personali
- Non sostituisce eIDAS/EUDI Wallet
- Non attribuisce valore legale automatico

## Percorsi
- **Create** — genera IPR, receipt, anchor-pack
- **Verify** — verifica hash, firme e manifest (fail-closed)
- **Map** — mappa ecosistema e ruoli dei repository
- **Tech** — standards, schemas, modules, audit
- **Catalog** — utilizzi e pacchetti B2B/B2G

## Output principali
- `ipr.json` / `ipr.canon.json`
- `receipt.json` (ED25519)
- `anchor-pack.json`
- `PACK_MANIFEST.json`
- `FREEZE.md` (append-only)

## Audit
Ogni output è verificabile **offline**.  
Qualsiasi mismatch di hash o firma invalida il pacchetto.

## Policy
UE_FIRST · GDPR_MIN · HASH_ONLY · FAIL_CLOSED · AUDIT_FIRST

---
© Hermeticum B.C.E. S.r.l.

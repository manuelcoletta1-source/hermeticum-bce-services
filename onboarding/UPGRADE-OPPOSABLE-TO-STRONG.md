# Upgrade — OPPOSABLE → STRONG (Level 2 → Level 3)

## Principio
- IPR-ID non cambia
- Il livello STRONG aggiunge ridondanza di prova (IPFS + BTC + ETH) e conservazione LTA-ready
- Nessun dato personale viene pubblicato

## Input richiesti (cliente)
1. IPR-ID / HRR reference (Level 2 ACTIVE)
2. Manifest Level 2 + public-proof (hash-only)
3. Consenso esplicito a multi-ancora e conservazione LTA

## Output consegnati (cliente)
- manifest Level 3 (STRONG)
- public-proof STRONG
- CID IPFS + TXID Bitcoin + TX Ethereum
- policy LTA (retention, recheck, vault reference)
- istruzioni di verifica

## Procedura operativa (noi)
1. Validare coerenza Level 2 (hash, timestamp, anchorRef)
2. Preparare Public Evidence Bundle STRONG (manifest + hashes) privo di dati personali
3. Calcolare SHA-512 del bundle e del manifest Level 3
4. Pubblicare bundle su IPFS (CID) e vincolare CID a bundleHash
5. Ancorare manifestHash su Bitcoin (tempo forte)
6. Registrare manifestHash su Ethereum (riferimento di processo)
7. Attivare policy LTA:
   - retention (default 10 anni)
   - recheck annuale
   - re-anchoring su degradazione o policy
8. Pubblicare (opzionale) evidence in `/evidence/<eventId>/`

## FAIL-CLOSED
Se IPFS o una delle due chain fallisce → esito FAIL_CLOSED e non dichiarare STRONG.

## Verifica
- ricalcolo hash
- confronto manifest
- verifica CID + TXID + TX
- verifica timestamp e ridondanza
- vedi: /verify.html

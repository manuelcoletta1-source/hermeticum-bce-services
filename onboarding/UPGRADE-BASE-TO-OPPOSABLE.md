# Upgrade — BASE → OPPOSABLE (Level 1 → Level 2)

Questo documento definisce la procedura standard per portare un IPR
da Livello 1 (BASE) a Livello 2 (OPPOSABLE) senza rigenerare l’identità.

## Principio
- l’IPR-ID non cambia
- cambia il livello di opponibilità tramite ancoraggio pubblico selettivo
- nessun dato personale viene pubblicato

## Input richiesti (cliente)
1. IPR-ID / HRR reference (Level 1)
2. Evidence Bundle BASE (privato) oppure hash manifest BASE
3. Consenso esplicito all’ancoraggio pubblico (IPFS + 1 chain)

## Output consegnati (cliente)
- manifest Level 2 (OPPOSABLE)
- public-proof.txt (pubblicabile)
- riferimenti di ancoraggio: CID + TX (BTC o ETH)
- istruzioni di verifica (link a verify.html)

## Procedura operativa (noi)
1. Validare che Level 1 sia ACTIVE e coerente (hash e timestamp)
2. Generare un *Public Evidence Bundle* (manifest + hash) privo di dati personali
3. Calcolare SHA-512 del manifest Level 2 e del bundle pubblico
4. Pubblicare su IPFS (ottenere CID) e vincolare CID al manifest Level 2
5. Ancorare su una chain pubblica (BTC o ETH) l’hash radice del manifest Level 2
6. Aggiornare lo stato: Level = OPPOSABLE
7. Pubblicare (opzionale) il bundle in `/evidence/<eventId>/` o `/evidence/sample/`

## Regola FAIL-CLOSED
Se uno dei passaggi 3–5 fallisce (hash, IPFS, chain),
l’upgrade deve risultare FAIL_CLOSED e non deve essere dichiarato opponibile.

## Verifica
- ricalcolo hash locali
- confronto con manifest
- controllo CID (IPFS) e TX (BTC/ETH)
- verifica tramite verify.html

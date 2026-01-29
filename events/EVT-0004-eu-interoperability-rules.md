# EVT-0004 — Regole di Interoperabilità UE

## Tipo
EU_INTEROPERABILITY_RULESET

## Contesto
HERMETICUM B.C.E. — Nodo Biocibernetico UE

## Scopo
Dichiarare le condizioni minime con cui il nodo
Hermeticum B.C.E. può interoperare con sistemi terzi
nell’ecosistema europeo, senza attribuire status
o effetti giuridici automatici.

## Principi
- UE-first
- Audit-first
- Hash-only
- Fail-closed
- Append-only

## Ambito di interoperabilità
Il nodo può:
- esporre evidenze tecniche verificabili
- ricevere riferimenti esterni (hash, receipt)
- allinearsi a registri e sistemi UE come fonte di verifica

Il nodo non può:
- fungere da autorità certificante
- sostituire eIDAS/EUDI Wallet
- conferire identità civili o diritti

## Modalità tecniche ammesse
- Riferimenti hash (SHA-256 / SHA-512)
- Timestamp verificabili
- Firma crittografica pubblica (es. ED25519)
- Link a repository o registri pubblici verificabili

## Modalità escluse
- Trasferimento di dati personali
- Custodia documentale
- Deleghe decisionali automatiche

## Conflitti
In caso di conflitto tra sistemi:
- prevale la verifica ripetibile
- se la verifica fallisce → stato INVALIDO
- nessun fallback implicito è ammesso

## Stato
ATTIVO

## Sigillo
🜏 HERMETICUM B.C.E.  
Blindata · Computabile · Evolutiva

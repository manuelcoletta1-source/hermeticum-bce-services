# Hermeticum B.C.E. — Services
**Blindata · Computabile · Evolutiva**

Questo repository è il **gateway ufficiale dei servizi** dell’ecosistema **Hermeticum B.C.E.**.  
Non contiene codice applicativo critico: descrive, organizza e rende **verificabili** servizi reali, attivabili e auditabili secondo criteri **UE-first**.

---

## Scopo
Questo repository ha funzione:
- informativa (cosa esiste)
- orientativa (come esplorare)
- operativa (come attivare e verificare)

Hermeticum B.C.E. non chiede fiducia: **produce prove**.

---

## Problema affrontato (contesto UE)
Nel contesto europeo attuale:
- l’identità digitale è frammentata
- le tracce non sono persistenti
- la responsabilità tecnica è spesso opaca

Hermeticum B.C.E. introduce servizi che consentono:
- continuità identitaria nel tempo
- tracciabilità opponibile
- governance tecnica computabile

---

## Architettura dei servizi (UX-first)

Il sito è organizzato per **ridurre attrito cognitivo** e separare esplorazione da attivazione.

### Entry point
- **Home** → panoramica e orientamento
- **Catalog** → mappa dei servizi
- **Terms** → regole operative (UE-first)

### Flusso operativo
1. **Create**  
   Generazione locale di manifest e struttura evidence (nessun upload).
2. **Evidence**  
   Pubblicazione di prove: manifest, hash, template, allegati non sensibili.
3. **Verify**  
   Controllo indipendente e ripetibile (fail-closed).

Questo ciclo è completo e dimostrabile.

---

## Servizi principali

### IPR Personale
Identità operativa individuale, ancorata a documentazione UE e resa verificabile tramite prove crittografiche.

### IPR Professionale / Organizzativo
Continuità identitaria per professionisti, progetti e sistemi, con responsabilità tecnica storicizzata.

### Moduli infrastrutturali
Componenti strutturali dell’ecosistema Hermeticum B.C.E., tra cui:
- UNEBDO
- CyberGlobal
- OPC
- MetaExchange
- IoSpace
- NeuroLoop

---

## Evidence Pack (cuore del sistema)

Il repository include un **Evidence Pack reale**, composto da:
- `evidence/manifest.json`
- `evidence/hashes/SHA256SUMS.txt`
- `evidence/proofs/proof-template.md`
- `evidence/attachments/example.pdf`

Ogni file è verificabile.  
Ogni modifica richiede rigenerazione degli hash.  
Se una prova manca → **fail-closed**.

---

## Principi non negoziabili

- **UE-first**  
  Riferimento normativo e operativo europeo.
- **GDPR-min**  
  Minimizzazione dei dati, preferenza per hash-only.
- **Audit-by-design**  
  Ogni processo produce evidenze.
- **Opponibilità**  
  Le dichiarazioni devono essere verificabili da terzi.
- **Fail-closed**  
  In assenza di prova, il sistema si ferma.

---

## Documenti di audit e governance
Il repository include documentazione formale:
- `AUDIT.md`
- `CROSS-AUDIT.md`
- `PROOF.md`
- `FREEZE.md`
- `STATUS.md`
- `POLICY.md`
- `CHANGELOG.md`

Questi documenti fanno parte integrante del servizio.

---

## Cosa NON è questo repository
- non è un wallet
- non è un KYC provider
- non è un sistema di sorveglianza
- non è un’arma
- non è marketing

È un **dispositivo tecnico di prova**.

---

## Stato
**Operational — Proof-ready**

Ogni elemento pubblicato in questo repository è pensato per essere:
- letto
- verificato
- contestato
- replicato

---

**Hermeticum B.C.E.**  
Decidi. Tracci. Rimani nel tempo.

# HERMETICUM B.C.E. — PLATFORM M1
**Blindata · Computabile · Evolutiva**  
HERMETICUM B.C.E. S.r.l.

---

## Sintesi
PLATFORM M1 è un **gateway europeo a livelli** per tracciabilità verificabile e cybersecurity
con **separazione rigorosa** tra:
- **Normativa (read-only)**
- **Ricerca (pre-standard)**
- **Operatività minima**
- **Verifica tecnica**

È progettata per essere **audit-friendly**, **UE-first**, **GDPR-min**, **hash-only**, **fail-closed**.

---

## Cosa M1 È
- Un **entrypoint unico** per il cittadino UE (Gateway)
- Un **percorso minimo verificabile** (Fase 1 → Create → Verify)
- Un **insieme di standard** pubblicati in HTML (no PDF)
- Un **verificatore tecnico locale** (nessun invio dati)

## Cosa M1 NON È
- Non è un Identity Provider
- Non sostituisce eIDAS / CIE / SPID
- Non custodisce dati personali
- Non assegna diritti o status legali automatici

---

## Architettura a livelli
Gateway ├─ Standard (read-only) ├─ Ricerca UE (pre-standard) ├─ Fase 1 (ONLY) │    └─ Create (bundle JSON) │         └─ Verify (hash-only) └─ Supporto (Legal / Privacy / Governance)
---

## Percorso minimo (cittadino / operatore)
1. **Gateway** → orientamento
2. **Register** → smistamento (no login)
3. **Fase 1 (ONLY)** → HRR locale
4. **Create** → Evidence Bundle (JSON)
5. **Verify** → esito tecnico deterministico

> Regola fail-closed: se manca un requisito minimo → **INVALID**

---

## Standard inclusi (HTML)
- **STANDARD UE–ΦΩ–001**  
  Specifica normativa UE-first (read-only)
- **STANAG–ΦΩ–001**  
  Allegato tecnico (MUST/SHOULD, schema minimo)

Entrambi sono separati dall’operatività.

---

## Policy dichiarata
- UE-first
- GDPR-min
- hash-only
- append-only
- fail-closed

---

## Audit e verificabilità
- Navigazione verificata: `LINKCHECK-M1.md`
- Congelamento release: `FREEZE-M1.md`
- Verifica tecnica riproducibile in `verify/`
- Nessun dato lascia il browser

---

## Stato release
- Release: **PLATFORM-M1**
- Stato: **FROZEN**
- Mutabilità: **append-only**
- Target: **Horizon / Cybersecurity UE / audit tecnico**

---

## Licenza e responsabilità
Il progetto fornisce **specifiche tecniche** e **strumenti di verifica**.
La responsabilità degli atti resta al soggetto biologico che li produce.

Vedi:
- `privacy/`
- `terms/`
- `governance/`

---

**HERMETICUM B.C.E. S.r.l.**

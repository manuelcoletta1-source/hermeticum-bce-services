# FREEZE — PLATFORM M1 (EU Gateway Pack)
HERMETICUM - BLINDATA · COMPUTABILE · EVOLUTIVA  
HERMETICUM B.C.E. S.r.l.

## Stato
- Release: **PLATFORM-M1**
- Tipo: **FREEZE (append-only)**
- Mutabilità: **FORBIDDEN**
- Obiettivo: stabilizzare il “pacchetto minimo” per presentazione UE / Horizon / audit.

---

## Scope M1 (cosa è incluso)
M1 definisce un portale a livelli con separazione rigorosa tra:
- **Gateway** (entry unica cittadino)
- **Fase 1 (ONLY)** (operatività minima)
- **Create** (generazione bundle locale)
- **Verify** (validazione tecnica hash-only)
- **Standards** (normativo in HTML, read-only)

---

## Non-scope M1 (cosa NON è incluso)
- Identity provider / login / database
- Custodia dati personali
- “Certificazione identità” o equivalenza eIDAS/CIE/SPID
- Promesse legali automatiche o status giuridici

---

## Policy dichiarata
- UE-first
- GDPR-min
- hash-only
- append-only
- fail-closed

---

## Artefatti M1 (file canonici)
### Root
- `index.html`

### Fase operativa minima
- `phase-1/index.html`
- (onboarding LIGHT/STRONG resta nel tree ma non è oggetto di claim identitari)

### Generazione bundle
- `create/index.html`

### Verifica tecnica
- `verify/index.html`

### Standard (read-only)
- `standards/index.html`
- `standards/standard-ue-phiomega-001.html`
- `standards/stanag-phiomega-001.html`

### Governance / Privacy / Legal (supporto)
- `privacy/`
- `terms/`
- `governance/`
- `legal/`
- `AUDIT-M1.md`

---

## Criteri di accettazione (freeze)
- Il cittadino ha **un solo entrypoint**: `index.html`
- Le pagine demo/orientamento non sono onboarding
- Verify è **solo tecnica** (esiti deterministici)
- Create e Verify sono **local-only**
- Standard è **read-only** e separato dall’operatività

---

## Nota operativa
Da questo punto in poi:
- modifiche al “core M1” devono essere tracciate con changelog e nuove milestone (M2, M3…)
- questo file non si riscrive: si aggiunge un nuovo freeze per la release successiva

**FREEZE M1: APPLICATO**

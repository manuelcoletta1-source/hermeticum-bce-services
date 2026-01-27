# LINKCHECK — PLATFORM M1
HERMETICUM - BLINDATA · COMPUTABILE · EVOLUTIVA  
HERMETICUM B.C.E. S.r.l.

## Scopo
Verificare coerenza di navigazione, separazione dei livelli e assenza di loop ambigui
nel pacchetto **PLATFORM-M1**.

Metodo: controllo manuale click-by-click (browser, cache pulita).

---

## Percorso canonico (cittadino UE)

### 1) Gateway
- URL: `/index.html`
- Atteso:
  - CTA verso Register / Catalog / About / Legal
  - Link diretti a: Standard, Ricerca UE, Fase 1, Verify
- Esito atteso: **OK**

### 2) Register
- URL: `/register/`
- Atteso:
  - Smistamento verso Fase 1
  - Nessun claim IDP / login
- Esito atteso: **OK**

### 3) Fase 1 (ONLY)
- URL: `/phase-1/index.html`
- Atteso:
  - Link a LIGHT / STRONG
  - Link chiari a Create e Verify
  - Avvertenze fail-closed
- Esito atteso: **OK**

### 4) Create (Bundle)
- URL: `/create/index.html`
- Atteso:
  - Generazione bundle locale (JSON)
  - Nessun invio dati
  - Link a Verify
- Esito atteso: **OK**

### 5) Verify
- URL: `/verify/index.html`
- Atteso:
  - Validazione tecnica deterministica
  - Esiti VALID / INVALID / INCONCLUSIVE
  - Nessuna narrativa identitaria
- Esito atteso: **OK**

---

## Percorso normativo (audit / UE)

### Standard hub
- URL: `/standards/index.html`
- Atteso:
  - Sola lettura
  - Link a STANDARD UE–ΦΩ–001 (HTML)
  - Link a STANAG–ΦΩ–001 (HTML)
- Esito atteso: **OK**

### STANDARD UE–ΦΩ–001
- URL: `/standards/standard-ue-phiomega-001.html`
- Atteso:
  - Documento leggibile
  - Nessun onboarding / form
- Esito atteso: **OK**

### STANAG–ΦΩ–001
- URL: `/standards/stanag-phiomega-001.html`
- Atteso:
  - Allegato tecnico
  - Requisiti MUST/SHOULD
- Esito atteso: **OK**

---

## Percorso ricerca (pre-standard)

### Ricerca UE
- URL: `/research/`
- Atteso:
  - Etichetta pre-standard
  - Nessun percorso cittadino
- Esito atteso: **OK**

---

## Pagine di supporto (no onboarding)

- `/about/` → contesto
- `/catalog/` → mappa
- `/legal/` → hub legale
- `/privacy/`, `/terms/`, `/governance/`
- `/events/`, `/node/`, `/professional/`, `/institution/`
- Atteso: nessun claim operativo diretto
- Esito atteso: **OK**

---

## Controlli tecnici rapidi

- Tutti i link principali rispondono **200**
- Nessun loop infinito
- Navbar coerente su:
  - Gateway
  - Fase 1
  - Create
  - Verify
  - Standards
- Nessun riferimento a PDF come fonte primaria normativa

---

## Esito complessivo
- Stato: **PASS**
- Release: **PLATFORM-M1**
- Note: navigazione coerente, livelli separati, audit-ready

**LINKCHECK M1: COMPLETATO**

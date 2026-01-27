# HERMETICUM - BLINDATA · COMPUTABILE · EVOLUTIVA
HERMETICUM B.C.E. S.r.l.

Portale europeo **a livelli** per cybersecurity e tracciabilità verificabile (audit-friendly).  
Modello: **separazione esplicita** tra Normativo, Ricerca UE, Operatività minima e Verifica tecnica.

## Portale live
- Gateway: `https://manuelcoletta1-source.github.io/hermeticum-bce-platform/`

## Principi (UE-first)
- **GDPR-min**: minimizzazione; preferenza per “hash-only”.
- **Fail-closed**: se manca un requisito minimo, l’atto **non nasce**.
- **Append-only**: la prova è una catena; niente “riscritture”.
- **Audit-ready**: separazione dei livelli per evitare ambiguità.

## Architettura a livelli (navigazione)
1) **Standard (Normativo / sola-lettura)**  
   Definisce livelli dell’evento, opponibilità e regole di conformità.  
   Percorso: `/standards/`

2) **Ricerca UE (Horizon / JRC)**  
   Pre-standard sperimentale (non esecutivo).  
   Percorso: `/research/`

3) **Fase 1 (ONLY — Operatività minima)**  
   Catena: **HRR → DGV → LTA** con logica fail-closed.  
   Percorso: `/phase-1/`

4) **Verify (Tecnico)**  
   Verifica hash e Evidence Bundle. Esiti: VALID / INVALID / INCONCLUSIVE.  
   Percorso: `/verify/`

## Percorso minimo (cittadino / operatore)
1. `Register` → scelta profilo (LIGHT/STRONG): `/register/`
2. Onboarding in Fase 1:
   - LIGHT: `/phase-1/onboarding/light.html`
   - STRONG: `/phase-1/onboarding/strong.html`
3. `Create` → genera Evidence Bundle locale (JSON): `/create/`
4. `Verify` → valida bundle/hash: `/verify/`

## Limiti dichiarati (importante)
- Non è un identity provider e **non** sostituisce CIE/SPID/eIDAS.
- Non è banca, wallet custodial o custodia di dati personali.
- Non assegna diritti o status legali: produce **verificabilità** e coerenza minima di processo.

## Struttura repo (principale)
- `/standards/` — livello normativo (HTML sola-lettura)
- `/research/` — livello ricerca UE
- `/phase-1/` — livello operativo minimo + onboarding
- `/create/` — generatore locale Evidence Bundle
- `/verify/` — validazione tecnica + schema JSON
- `/governance/` — responsabilità e perimetro
- `/privacy/` — minimizzazione e hash-only
- `/catalog/` — mappa livelli
- `/legacy/` — compatibilità link vecchi
- `/assets/` — UI (CSS)

## Compliance & audit
Questo repo è pensato per:
- valutazione di **coerenza architetturale** (separazione livelli),
- minimizzazione del rischio (GDPR-min),
- verificabilità tecnica (hash/bundle/schema).

## Licensing / Note
Documentazione e portale in evoluzione. Nessuna garanzia implicita. Uso a rischio dell’utente.

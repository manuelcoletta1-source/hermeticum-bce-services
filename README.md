# HERMETICUM
## Infrastruttura di Responsabilità Digitale (IPR) — allineata UE

Audit-first · Fail-closed · Hash-only · Nessuna custodia dati

---

## Sintesi esecutiva

HERMETICUM è un’infrastruttura tecnica progettata per migliorare  
**attribuzione, responsabilità e tracciabilità** nei processi digitali.

Introduce un meccanismo verificabile per rispondere a una domanda centrale:

> **Chi è responsabile di cosa e quando — in modo verificabile da terzi?**

Il sistema è progettato in ottica **UE-first**, allineato ai principi di:
- auditabilità  
- proporzionalità  
- minimizzazione dei dati  

---

## Cos’è HERMETICUM

- Un layer di attribuzione di responsabilità sopra sistemi esistenti  
- Un framework per audit verificabili e ripetibili  
- Un’infrastruttura pilot-ready per contesti B2B e B2G  
- Uno strumento per ridurre ambiguità, dispute e costo di audit  

---

## Cosa NON è HERMETICUM

- ❌ Non è un identity provider  
- ❌ Non custodisce dati personali  
- ❌ Non è un sistema di sorveglianza o scoring  
- ❌ Non prende decisioni al posto delle istituzioni  

Non richiede database centrali di identità.  
Non richiede custodia obbligatoria di dati personali.

---

## Principi fondamentali

**Fail-Closed**  
Se la verifica non è possibile, il risultato è invalido.

**Audit-First**  
Ogni output è progettato per essere ispezionabile e comparabile.

**Hash-Only Verification**  
La verifica usa riferimenti crittografici, non dati grezzi.

**No Data Custody**  
Superficie dati minima per design.

---

## Architettura (alto livello)

HERMETICUM segue un modello a **5 layer**:

1. Identity anchor (identità esterna o sovrana)
2. Attribuzione di responsabilità
3. Traccia append-only
4. Verifica pubblica pass/fail
5. Interoperabilità (B2B / B2G / eIDAS-ready)

Vedi:
- `/architecture/`
- `/assets/architecture-diagram.svg`

---

## Stato Pilot UE

Il repository include materiale pronto per valutazione:

- Entry pilot: `/eu/pilot/`
- Template report valutazione: `/eu/pilot/report-template.md`
- Report esempio compilato: `/eu/pilot/example-report.md`
- Policy sicurezza: `/SECURITY.md`

Il pilot è **tecnico**, non normativo.

---

## Casi d’uso principali

- Attribuzione responsabilità supply chain  
- AI e robotica (responsabilità decisionale)  
- Infrastrutture critiche  
- Processi di governance digitale  

Vedi: `/use-cases/`

---

## Modello di verifica

La verifica è:
- deterministica  
- ripetibile pubblicamente  
- con esito pass/fail  

Vedi: `/verify/`

---

## Livelli di maturità

**Demo**
- flussi UI
- nessun dato personale

**Pilot**
- manifest firmati
- evidence pack
- verifica deterministica

**Produzione (futuro)**
- sicurezza rafforzata
- governance definita
- compliance documentata

---

## Governance e responsabilità

HERMETICUM non sostituisce le strutture legali.  
Fornisce chiarezza tecnica per supportarle.

La responsabilità resta agli attori e alle istituzioni coinvolte.

---

## Disclaimer

Questo repository documenta un’infrastruttura tecnica in fase pilot.

Non stabilisce:
- identità legali
- autorità giuridica
- obblighi di custodia

---

Audit-first. Fail-closed. Hash-only. Nessuna custodia dati.

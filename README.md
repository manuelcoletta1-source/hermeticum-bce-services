# HERMETICUM B.C.E. — PLATFORM
**BLINDATA · COMPUTABILE · EVOLUTIVA**  
**HERMETICUM B.C.E. S.r.l.**

Piattaforma europea per il cittadino, progettata per garantire
**continuità digitale, tracciabilità e auditabilità**
nell’accesso ai servizi civili fondamentali.

---

## Scopo

Questo repository rappresenta la **piattaforma centrale** di HERMETICUM B.C.E.

La Platform è il **punto di ingresso unico** per il cittadino europeo
verso servizi digitali strutturati secondo i principi UE:

- minimizzazione dei dati (GDPR-min)
- tracciabilità verificabile
- audit-by-design
- comportamento fail-closed
- neutralità rispetto alle identità legali nazionali

La Platform **non è un servizio di identità legale**  
e **non sostituisce** SPID, CIE, eIDAS o EUDI Wallet.

---

## Cos’è (in breve)

La Platform è una **infrastruttura civile digitale** che permette al cittadino di:

- accedere ai servizi con identità UE esistenti
- mantenere continuità nel tempo delle proprie interazioni digitali
- verificare chi ha accesso ai propri dati
- produrre evidenze opponibili e auditabili

Il tutto senza creare identità parallele o archivi centralizzati di dati sensibili.

---

## Cosa NON è

- ❌ non è un sistema di identificazione legale
- ❌ non è un wallet eIDAS
- ❌ non è un sistema di sorveglianza
- ❌ non è una piattaforma commerciale
- ❌ non prende decisioni al posto del cittadino

---

## Principi Architetturali

- **UE-first**  
  Allineamento ai principi normativi e operativi dell’Unione Europea.

- **GDPR-min**  
  Solo hash, metadati e attestazioni verificabili.  
  Nessun dato superfluo.

- **Audit-by-design**  
  Ogni evento rilevante è tracciato, verificabile e opponibile.

- **Fail-closed**  
  In assenza di identità, consenso o policy → il sistema non opera.

- **Separazione dei ruoli**  
  Identità legale ≠ continuità tecnica ≠ servizi.

---

## Accesso del Cittadino

Il cittadino accede alla Platform utilizzando **identità già riconosciute**:
- SPID
- CIE
- eIDAS / EUDI Wallet (quando disponibile)

La Platform genera **solo un’attestazione tecnica**
per garantire continuità e tracciabilità delle operazioni.

Nessuna duplicazione di identità.
Nessuna appropriazione dei dati.

---

## Aree Funzionali

La Platform espone quattro domini civili principali:

- **Sanità**  
  Metadati, consenso, registro accessi (EHDS-ready).

- **Istruzione**  
  Titoli, competenze e credenziali verificabili.

- **Procedure Amministrative**  
  Timeline procedurali e logica once-only.

- **Emergenza / Soccorso**  
  Accesso temporaneo e tracciato in situazioni critiche.

Tutte le aree condividono:
- una timeline unificata
- evidenze verificabili
- revoca e controllo da parte del cittadino

---

## Struttura del Repository

/index.html        → Portale pubblico /policy/           → Regole operative e limiti dichiarati /verify/           → Verifica pubblica delle evidenze /evidence/         → Esempi di manifest ed export /changelog/        → Evoluzione append-only /assets/           → Brand e risorse statiche

---

## Governance e AI

La Platform può interfacciarsi con sistemi AI (es. AI JOKER-C2),
ma **nessuna AI opera senza**:
- identità valida
- policy esplicita
- tracciamento completo
- possibilità di verifica e spegnimento

---

## Stato del Progetto

- **Stato:** ACTIVE
- **Ambito:** Civile / Europeo
- **Maturità:** Infrastruttura in evoluzione controllata
- **Adozione:** Cittadini, professionisti, istituzioni

---

## Licenza e Responsabilità

Questo progetto è pubblicato per:
- trasparenza
- verifica pubblica
- valutazione tecnica e istituzionale

Non costituisce promessa di servizio,
né sostituisce sistemi pubblici esistenti.

---

## Riferimenti

- Ecosistema: **HERMETICUM - BLINDATA · COMPUTABILE · EVOLUTIVA**
- Società: **HERMETICUM B.C.E. S.r.l.**
- Standard: UE-first, GDPR, audit-by-design

---

## Contatto

Manuel Coletta  
Fondatore – HERMETICUM B.C.E.  
Email: manuelcoletta1@gmail.com




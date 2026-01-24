# Hermeticum B.C.E. — Services

> **Evidenze crittografiche. Identità verificabili. Zero data retention.**

**Hermeticum B.C.E. — Services** è il punto di ingresso pubblico dell’ecosistema **Hermeticum B.C.E.**  
Fornisce strumenti **client-side** per generare **prove verificabili** (hash e bundle locali) secondo principi **UE-first**, **privacy by design** e **audit-by-design**.

➡️ Nessun dato viene inviato, archiviato o tracciato su server.

---

## Stato del progetto
🟢 **ATTIVO — Trust Pack completo**

- onboarding guidato 1-2-3
- policy pubbliche (Privacy, Terms, Security)
- verifica offline supportata

---

## Principi chiave
- **Client-side only** (browser dell’utente)
- **Zero data retention**
- **Hash locali** (SHA-512)
- **Verifica offline indipendente**
- **Fail-closed**
- **UE-first** come standard di riferimento progettuale

> ⚠️ **Nota importante**  
> “UE-first” indica un orientamento progettuale (GDPR, minimizzazione, auditabilità).  
> **Non è una certificazione ufficiale UE** e **non sostituisce documenti statali** (CIE, passaporto, ecc.).

---

## Cosa fa questo servizio
- genera **hash crittografici locali** per documenti
- crea **Evidence Bundle** (JSON) verificabili offline
- abilita un **IPR Base** come ancora tecnica personale
- non carica, non salva, non traccia dati

## Cosa NON fa
- non è un’identità statale
- non è una certificazione pubblica UE
- non protegge da dispositivi o browser compromessi
- non archivia documenti o dati personali

---

## Onboarding — Procedura guidata 1-2-3

1. **Dati minimi (locali)**  
   Codice Fiscale obbligatorio.  
   Modalità *Minimale* o *Completa* (sempre locale).

2. **Documento & Hash**  
   Selezione file (PDF/JPG/PNG…).  
   Calcolo **SHA-512** nel browser.

3. **Bundle & Download**  
   Generazione **IPR Base / Evidence Bundle (JSON)**.  
   Download locale e verifica offline consigliata.

👉 Avvia onboarding:  
https://manuelcoletta1-source.github.io/hermeticum-bce-services/onboarding-base.html

---

## Verifica offline (consigliata)

```bash
# Linux / macOS
shasum -a 512 FILE

# Windows PowerShell
Get-FileHash -Algorithm SHA512 .\FILE

Confronta l’hash con quello presente nel bundle JSON.


---

Trust Pack (policy pubbliche)

Privacy Policy → privacy.html

Terms of Use → terms.html

Security & Verification → security.html


Tutti i documenti sono pubblici e linkati dalla home.


---

Output principali

HBCE-IPR-BASE (JSON)
Bundle locale contenente:

metadati

hash del documento

timestamp

note di verifica


Versione schema attuale: v0.1.0


---

A chi è rivolto

individui che vogliono prove verificabili senza cedere dati

sviluppatori e auditor

progetti UE-oriented che richiedono tracciabilità senza centralizzazione



---

Repository correlati

Questo repository è la vetrina e l’ingresso utente.

Altri moduli (technology, AI workers, corpus) vivono in repository dedicati e non sono richiesti per l’uso base.


---

Licenza e nota finale

Questo progetto fornisce strumenti tecnici, non riconoscimenti legali o istituzionali.
L’uso è a responsabilità dell’utente finale.

© Hermeticum B.C.E.
UE-first · audit-by-design · fail-closed


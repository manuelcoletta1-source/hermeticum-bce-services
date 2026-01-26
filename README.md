# HERMETICUM B.C.E. — Platform
**HERMETICUM - BLINDATA · COMPUTABILE · EVOLUTIVA**  
**HERMETICUM B.C.E. S.r.l.**

Piattaforma sperimentale **UE-first** per la gestione tecnica di **IPR (Identity Primary Record)**:
manifest + hash per **integrità**, **verificabilità** e **continuità operativa**.

> Questa piattaforma **non** è un sistema di identità legale, **non** è un servizio fiduciario qualificato e **non** produce effetti giuridici automatici.  
> Opera in regime **fail-closed**: se qualcosa non è verificabile, non viene “accettato”.

---

## Cos’è (in una frase)
Un **portale operativo** per creare, verificare e conservare **tracce tecniche riproducibili** (IPR) basate su hash, utili in contesti tecnici, professionali e di audit.

---

## Cosa NON è (perimetro chiaro)
- ❌ SPID / CIE / eIDAS / EUDI Wallet  
- ❌ Firma elettronica qualificata (QES)  
- ❌ Autorità di certificazione o riconoscimento  
- ❌ Prova legale automatica

La piattaforma **non sostituisce** sistemi istituzionali: li **precede** come strato tecnico di verificabilità.

---

## Concetto chiave: IPR
Un **IPR** è un record tecnico minimo che registra:
- un **oggetto** (testo/file)  
- un **hash** (SHA-256)  
- un **manifest** leggibile e conservabile  

Scopo: rendere possibile a un terzo **rifare i conti** senza fidarsi.

---

## Pipeline operativa (consigliata)

1. **Create**  
   Generi un **manifest IPR** con hash (SHA-256).  
   → output tecnico, GDPR-min.

2. **Output**  
   Scarichi e **conservi** il manifest.  
   → senza conservazione non esiste continuità.

3. **Verify**  
   Ricalcoli l’hash e confronti.  
   → esito standard: **Valid / Invalid / Inconclusive**.

4. **Evidence**  
   Costruisci un **Evidence Pack** (file + hash + manifest + report).  
   → catena minima di prova tecnica.

---

## Esiti (fail-closed)
- **Valid**: struttura coerente + hash combacia.  
- **Invalid**: mismatch o campi critici mancanti.  
- **Inconclusive**: struttura ok ma contenuto non verificabile.

Nessun “quasi valido”.

---

## Evidence Pack (in breve)
Un Evidence Pack è una cartella che contiene:
- `artifacts/` → file originali  
- `hashes/` → hash locale (SHA-256)  
- `ipr/` → manifest IPR + report di verifica  
- `meta/` → README/changelog

Serve a consentire una **verifica ripetibile** nel tempo.

---

## Struttura del portale

- `/` → Home (overview e accessi)
- `/create/` → Generazione manifest IPR
- `/verify/` → Verifica tecnica (hash/struttura)
- `/evidence/` → Linee guida Evidence Pack + sample
- `/citizen/` → Percorso introduttivo
- `/professional/` → Percorso tecnico/istituzionale
- `/terms/` → Perimetro e condizioni

---

## Regole di utilizzo
- **UE-first**  
- **GDPR-min** (evita dati personali inutili)
- **Hash-only** per l’integrità
- **Append-only** (le evoluzioni sono nuovi eventi)
- **Fail-closed** per ogni incoerenza

---

## Stato del progetto
- **Status:** Experimental  
- **Jurisdiction:** EU  
- **Audience:** Citizen · Professional · Technical · Forensic

---

## Avvertenze
Questo progetto è **tecnico** e **sperimentale**.  
Usalo solo se comprendi la differenza tra:
- *verificabilità tecnica*  
- *validità giuridica*

La piattaforma offre la prima.  
La seconda dipende da contesti, norme e autorità esterne.

---

© HERMETICUM B.C.E. S.r.l.

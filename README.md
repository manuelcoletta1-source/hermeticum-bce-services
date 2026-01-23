# Hermeticum B.C.E. — BioCyber Identity Card  
## EU Pilot Framework for Decision Accountability

**Hermeticum B.C.E. — Services** documenta il framework tecnico-operativo della  
**BioCyber Identity Card europea**:  
uno **standard di attribuzione umana, responsabilità decisionale e prova a lungo termine**  
per sistemi digitali ad alto rischio.

Questo repository **non introduce una nuova identità civile**,  
**non sostituisce documenti nazionali**  
e **non definisce diritti politici o morali**.

È un **layer tecnico di sicurezza e accountability**, progettato per rendere **impossibile**
l’esecuzione di decisioni digitali critiche **senza un responsabile umano opponibile**.

---

## Problema affrontato

I sistemi digitali contemporanei (in particolare quelli basati su AI) presentano tre falle strutturali:

- decisioni eseguite senza attribuzione umana opponibile  
- automazione priva di verifica ex-ante  
- prove digitali che decadono o diventano inutilizzabili nel tempo  

Queste falle generano:
- incertezza giuridica  
- incidenti operativi  
- scarico sistemico di responsabilità (“ha deciso l’algoritmo”)

---

## Soluzione proposta

La **BioCyber Identity Card** è una **card logica**, non un documento fisico.

Definisce una **catena tecnica minima e fail-closed** che garantisce che:

- ogni decisione critica sia collegata a **un essere umano reale**
- ogni decisione sia **verificata prima dell’esecuzione**
- ogni decisione lasci **prove opponibili che non scadono**

---

## Ambito di applicazione (Fase 1)

Il framework è progettato per contesti **ad alto rischio**, tra cui:

- sistemi di Intelligenza Artificiale ad alto rischio (AI Act UE)
- sanità critica
- sistemi di comando e controllo (C2 / C4ISR)
- procurement pubblico automatizzato

I contesti a basso rischio sono **fuori ambito**.

---

## Componenti principali

La BioCyber Identity Card si basa su quattro componenti tecnici essenziali:

### 1. Human Root Reference (HRR)
(ex IPR-5)

- attribuzione univoca a un essere umano reale  
- non duplicabile  
- auditabile  
- sospendibile ma non cancellabile  

**HRR non è un’identità legale.**  
È una radice tecnica di responsabilità.

---

### 2. Decision Gate Validator (DGV)
(ex GitJoker / AI JOKER)

- validazione ex-ante delle decisioni  
- modalità **fail-closed obbligatoria**  
- esiti standard:
  - ALLOW
  - REVIEW
  - DENY
  - FAIL_CLOSED  

FAIL non è un errore:  
FAIL è **protezione del sistema**.

---

### 3. Certified Time & Trace

- tempo certificato metrologicamente  
- tracciabilità verificabile degli eventi  
- sincronizzazione con riferimenti temporali opponibili  

Ciò che non è misurabile e tracciabile **non è opponibile**.

---

### 4. Long-Term Evidence Vault

- conservazione delle prove ≥ 20 anni  
- verificabilità offline  
- ri-marcatura temporale periodica  
- conformità ETSI / eIDAS (profilo LTA)

Il vault conserva **prove**, non interpretazioni.

---

## Architettura minima (fail-closed)
Evento → Human Root Reference → Decision Gate Validator → Certified Time & Trace → Long-Term Evidence Vault
Se uno solo di questi elementi manca  
→ **processo invalido**.

---

## Conformità normativa

Il framework è progettato per essere **nativamente compatibile** con:

- **AI Act (UE)** — attribuzione, human-in-the-loop, auditabilità  
- **eIDAS 2.0** — integrità, non ripudio, firme e conservazione  
- **ETSI EN 319 / PAdES-LTA** — prove digitali a lungo termine  
- **ISO 17025** — metrologia del tempo e della misura  

Non introduce nuove autorità civili o monetarie.

---

## Stato del progetto

🟢 **EU Pilot / Technical Specification — ACTIVE**

- framework operativo minimo definito  
- implementazione reference in corso  
- pronto per piloti istituzionali e audit tecnici  

---

## Nota finale

Questo repository **non promette un futuro migliore**.  
Serve a **evitare danni evitabili nel presente**.

Qualsiasi sistema che rifiuti:
- attribuzione umana,
- verifica ex-ante,
- memoria opponibile,

**non è idoneo a prendere decisioni critiche.**

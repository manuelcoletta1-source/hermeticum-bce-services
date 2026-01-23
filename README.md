# HERMETICUM B.C.E.
## Blindata · Computabile · Evolutiva

**HERMETICUM B.C.E.** è un framework tecnico-operativo per la costruzione di
**identità opponibili**, **responsabilità verificabile** e **prove digitali a lungo termine**
in sistemi ad alto rischio.

Questo repository documenta l’implementazione **Services**
del framework, con particolare riferimento alla
**BioCyber Identity Card** come strato di accountability tecnica.

---

## Cosa NON è questo progetto

Per chiarezza operativa, HERMETICUM B.C.E.:

- **non è** un documento di identità civile
- **non sostituisce** CIE, passaporti o sistemi nazionali
- **non è** una criptovaluta
- **non è** una piattaforma social
- **non è** un’ideologia

È un **layer tecnico** che rende **impossibile**
l’esecuzione di decisioni digitali critiche
senza attribuzione umana, verifica ex-ante e memoria opponibile.

---

## Il problema affrontato

I sistemi digitali contemporanei soffrono di tre fallimenti strutturali:

1. decisioni eseguite senza un responsabile umano opponibile  
2. automazione senza controllo ex-ante (fail-open)  
3. prove digitali che decadono nel tempo  

Il risultato è:
- incertezza giuridica
- incidenti operativi
- scarico sistemico di responsabilità (“ha deciso l’algoritmo”)

---

## La soluzione: BioCyber Identity Card

La **BioCyber Identity Card** non è una carta fisica.
È una **posizione verificabile nel tempo**.

Definisce una **catena minima e fail-closed** che garantisce:

- attribuzione a un essere umano reale
- validazione prima dell’esecuzione
- prova digitale che non scade

---

## Architettura minima (fail-closed)
Evento → Human Root Reference (IPR) → Decision Gate Validator (DGV) → Tempo certificato & tracciabilità → Evidence Vault a lungo termine
Se uno di questi elementi manca  
→ **l’azione non deve essere eseguita**.

---

## Componenti principali

### Human Root Reference (IPR)
Radice tecnica di responsabilità umana.
Univoca, non duplicabile, auditabile.
Non è un’identità civile.

### Decision Gate Validator (DGV)
Modulo di validazione ex-ante.
Esiti standard:
- ALLOW
- REVIEW
- DENY
- FAIL_CLOSED

FAIL_CLOSED è protezione del sistema, non errore.

### Evidence Bundle
Pacchetto minimo di prova:
- manifest leggibile da macchina
- hash verificabili
- riferimento temporale
- ancoraggi opzionali

### Anchoring Services
Servizi opzionali di opponibilità pubblica:
- IPFS (contenuto)
- Bitcoin (tempo forte)
- Ethereum (riferimenti logici)

L’ancoraggio è un **servizio**, non un obbligo.

---

## Catalogo Carte Biocyber

Il framework supporta diversi livelli di carta:

- **Base** — identità tecnica, uso interno
- **Opponibile** — prova pubblica, audit-ready
- **Forte / Istituzionale** — multi-ancora, conservazione LTA

Vedi `catalog.html` per i dettagli.

---

## Verifica pubblica

La verifica non richiede fiducia.

È basata su:
- ricalcolo locale degli hash
- confronto con il manifest
- verifica temporale
- conferma esiti fail-closed

Vedi `verify.html` e la cartella `/evidence`.

---

## Conformità e allineamento

Il framework è progettato per essere compatibile con:

- AI Act (UE)
- eIDAS 2.0
- ETSI EN 319 (LTA)
- principi ISO di auditabilità e metrologia

Non introduce nuove autorità civili o monetarie.

---

## Stato del progetto

🟢 **EU Pilot — ACTIVE**

- architettura minima definita
- sito pubblico operativo
- evidenze verificabili
- evoluzione controllata

---

## Principio guida

> Non tutto deve essere ancorato.  
> Ma ciò che conta deve poter essere provato.  

HERMETICUM B.C.E. esiste per questo.

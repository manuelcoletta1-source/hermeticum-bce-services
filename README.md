# HERMETICUM B.C.E.
## Blindata · Computabile · Evolutiva

**HERMETICUM B.C.E. nasce per la sicurezza digitale europea dell’individuo.**

Il framework fornisce strumenti tecnici per:
- attribuzione umana verificabile
- accountability ex-ante
- prova digitale opponibile nel tempo

in contesti digitali ad alto rischio.

---

## Cosa NON è
- non è un documento di identità civile
- non sostituisce CIE o passaporto
- non è una criptovaluta
- non è un sistema di sorveglianza

È uno **strato di sicurezza** che impedisce l’esecuzione di decisioni critiche
senza responsabilità umana e prova verificabile.

---

## Concetto centrale: BioCyber Identity Card

La BioCyber Identity Card non è una carta fisica.
È una **posizione verificabile nel tempo** che collega:

- una persona reale (HRR / IPR)
- una decisione o evento
- una validazione ex-ante
- una prova digitale durabile

---

## Architettura minima (fail-closed)
Evento → IPR / HRR → Decision Gate Validator (DGV) → Tempo certificato → Evidence Bundle
In assenza di uno di questi elementi,
l’esito corretto è **FAIL_CLOSED**.

---

## Componenti

### IPR / HRR
Radice tecnica di responsabilità umana.
Auditabile, non duplicabile, non pubblica.

### DGV
Gate di validazione ex-ante con esiti standardizzati.
FAIL_CLOSED è protezione del sistema, non errore.

### Evidence Bundle
Pacchetto minimo di prova:
manifest leggibile da macchina, hash, riferimento temporale,
ancoraggi opzionali.

### Servizi di ancoraggio
- IPFS — contenuto
- Bitcoin — tempo forte
- Ethereum — riferimenti logici

L’ancoraggio è un **servizio**, non un obbligo.

---

## Carte Biocibernetiche

- **BASE** — identità tecnica e prova minima
- **OPPONIBILE** — verifica pubblica selettiva
- **FORTE / ISTITUZIONALE** — multi-ancora e conservazione LTA

Vedi `catalog.html`.

---

## Attivazione e verifica

- Procedura di attivazione: `create.html`
- Verifica pubblica: `verify.html`
- Evidenze di esempio: `/evidence`

La verifica è sempre basata su:
**ricalcola e confronta**, non fiducia.

---

## Allineamento normativo

Progettato per compatibilità con:
- AI Act (UE)
- eIDAS 2.0
- ETSI EN 319 (LTA)
- principi ISO di auditabilità e tracciabilità

---

## Stato
🟢 **EU Pilot — ACTIVE**

---

## Principio guida

> La sicurezza digitale dell’individuo
> non è una funzione opzionale del sistema.

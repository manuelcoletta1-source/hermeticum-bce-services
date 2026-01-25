# OPC — Opponibilità Policy Computabile
**HERMETICUM B.C.E.**

Modulo **CORE STANDARD** di Hermeticum B.C.E.  
OPC definisce **come le policy diventano decisioni computabili**, deterministiche e opponibili.

---

## STANDARD ROLE
OPC è il **motore decisionale**.
- Valuta policy computabili
- Produce decisioni **ALLOW / DENY**
- NON esegue azioni
- NON gestisce identità
- NON memorizza evidenze

OPC decide. Altri eseguono.

---

## INPUT CONTRACT
OPC accetta esclusivamente input strutturati e verificabili:

- **Policy** (formalizzata, versionata)
- **Context** (azione richiesta, risorsa, tempo)
- **IPR State** (fornito da moduli IPR, non calcolato da OPC)

Input non validi o incompleti ⇒ **DENY**.

---

## OUTPUT GUARANTEES
OPC produce:

- Decisione deterministica: `ALLOW` o `DENY`
- Motivazione tecnica (policy applicata)
- Riferimento versionato della policy

Stesso input ⇒ **stesso output**. Sempre.

---

## FAILURE MODE (FAIL-CLOSED)
- Assenza di policy valida ⇒ **DENY**
- Ambiguità ⇒ **DENY**
- Errore ⇒ **DENY**

OPC **non degrada** mai in modalità permissiva.

---

## TRACE / EVIDENCE
OPC **non conserva evidenze**, ma:

- espone dati sufficienti affinché
- moduli downstream (es. `unebdo`, `ipr-gate`)
- possano generare evidenza opponibile

Ogni decisione è **ricostruibile a posteriori**.

---

## NON RESPONSABILITÀ
OPC **NON**:
- identifica soggetti
- autentica utenti
- esegue operazioni
- persiste dati

Queste funzioni sono deliberate **fuori scope**.

---

## COMPLIANCE
OPC è conforme allo **STANDARD Hermeticum B.C.E.** se e solo se:
- opera in modalità fail-closed
- produce decisioni deterministiche
- separa decisione ed esecuzione

---

## LINK
- **STANDARD:** https://github.com/manuelcoletta1-source/hermeticum-bce-services/blob/main/STANDARD.md
- **UNEBDO:** https://github.com/manuelcoletta1-source/unebdo
- **IPR CORE:** https://github.com/manuelcoletta1-source/ipr-core

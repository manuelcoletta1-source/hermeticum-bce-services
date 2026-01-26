# PLATFORM-M0 — Baseline UE & Portal Freeze

**Version:** v0.1  
**Status:** COMPLETED  
**Scope:** hermeticum-bce-platform  
**Date:** 2026-01-26  
**Authority:** HERMETICUM B.C.E. S.r.l.

---

## Obiettivo

Stabilire una **baseline europea difendibile** per la Platform,
definendo in modo esplicito:

- scopo
- limiti
- principi architetturali
- perimetro legale e tecnico

Questa milestone rende la Platform
**leggibile, auditabile e verificabile**.

---

## Decisioni Congelate

- La Platform **non è** un sistema di identità legale.
- IPR **non sostituisce** SPID, CIE, eIDAS, EUDI Wallet.
- Nessuna duplicazione di identità o dati sensibili.
- Il sistema opera esclusivamente in modalità **fail-closed**.
- Ogni evento rilevante è tracciato (**audit-by-design**).

---

## Artefatti Stabilizzati

- README.md (documento canonico di piattaforma)
- Struttura repository orientata all’audit
- Linguaggio UE-first, non commerciale
- Separazione netta:
  - identità legale
  - continuità tecnica
  - servizi civili

---

## Implicazioni

Da questo punto in avanti:
- ogni nuova funzione deve essere coerente con questa baseline
- ogni deviazione richiede nuova entry di changelog
- nessuna modifica retroattiva è ammessa

---

## Stato

PLATFORM-M0 è considerata **chiusa e congelata**.

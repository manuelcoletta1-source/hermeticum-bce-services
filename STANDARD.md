# Hermeticum B.C.E. — Standard
Blindata · Computabile · Evolutiva

## Scope
Hermeticum B.C.E. definisce uno **standard operativo europeo** per la gestione
di identità, policy ed evidenze digitali opponibili nel tempo.
Lo standard è progettato per ambienti UE-first e contesti ad alta responsabilità
istituzionale, tecnica e giuridica.

Lo standard NON definisce:
- una singola implementazione software
- un vendor
- un servizio commerciale

Lo standard DEFINISCE:
- vincoli minimi
- invarianti tecnici
- criteri di verificabilità indipendente

---

## Terminologia vincolante
- **IPR (Identity Primary Record)**: record identitario primario, versionato e verificabile.
- **Policy Computabile**: regola formalizzata ed eseguibile senza interpretazione umana.
- **Evidenza**: traccia tecnica opponibile, verificabile da terzi.
- **Fail-Closed**: condizione in cui l’assenza di autorizzazione implica negazione.
- **Opponibilità**: capacità di far valere un fatto tecnico nel tempo e verso terzi.

---

## Invarianti B.C.E.

### Blindata
- Nessuna fiducia implicita
- Nessuna esecuzione senza policy valida
- Ogni azione genera evidenza

### Computabile
- Decisioni deterministiche
- Policy eseguibili e verificabili
- Audit riproducibile

### Evolutiva
- Versionamento esplicito
- Continuità temporale
- Nessuna rottura retroattiva della validità

---

## Requisiti minimi di implementazione
Ogni implementazione conforme allo standard DEVE:
- supportare policy computabili ex-ante
- operare in modalità fail-closed
- produrre evidenze verificabili
- separare identità, decisione ed esecuzione
- consentire verifica indipendente

---

## Verificabilità indipendente
Un soggetto terzo DEVE poter:
- verificare un evento senza accesso privilegiato
- validare integrità e tempo dell’evidenza
- ricostruire la decisione applicata

Se ciò non è possibile, l’implementazione NON è conforme allo standard.

---

## Versionamento dello standard
Hermeticum B.C.E. è uno standard versionato.
Ogni versione:
- dichiara compatibilità o rottura
- mantiene tracciabilità delle precedenti
- non invalida evidenze già prodotte

La versione corrente è definita dal repository
`hermeticum-bce-services`.

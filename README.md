# HERMETICUM B.C.E. — Services
**Blindata · Computabile · Evolutiva**

Repository “vetrina” e punto di ingresso dell’ecosistema **HERMETICUM B.C.E.**: sicurezza digitale **UE-first**, identità verificabile, responsabilità umana opponibile, prove digitali resistenti nel tempo.

> **Principio operativo:** se un elemento essenziale non è verificabile, l’azione **non procede** (*fail-closed*).

---

## Cos’è HERMETICUM B.C.E.

**HERMETICUM B.C.E.** è un framework tecnico-operativo per decisioni digitali critiche, progettato per rendere ogni azione:

- **attribuibile** a una radice umana verificabile
- **validata ex-ante** (prima dell’esecuzione)
- **tracciabile nel tempo** con riferimento temporale coerente
- **auditabile** tramite evidenze riproducibili

### Catena minima (fail-closed)
**Evento → Identità umana verificabile (IPR/HRR) → Gate decisionale (DGV) → Tempo certificato → Evidence Bundle**

Se manca un requisito o la verifica non è riproducibile, l’esito deve essere: **FAIL_CLOSED**.

---

## Cosa NON è

- Non è “AI cosciente”.
- Non è un sistema che “decide al posto tuo”.
- Non sostituisce documenti civili (CIE, passaporto).
- Non richiede fiducia nel sito: la verifica è sempre “**ricalcola e confronta**”.

È un’infrastruttura per rendere le decisioni digitali **responsabili, verificabili, opponibili**.

---

## Principi (Pillar)

- **UE-first**: impostazione normativa e progettuale allineata al quadro europeo.
- **Fail-Closed**: niente esecuzione senza validazione.
- **Responsabilità umana non opzionale**: ogni azione riconduce a una radice umana verificabile.
- **Evidence-first**: senza prova strutturata non esiste opponibilità.
- **Audit-by-design**: ricostruibilità e controllabilità integrate.

---

## Componenti chiave

### IPR / HRR — Radice Umana
Collegamento tecnico a una persona reale, verificabile e non duplicabile, intesa come **soggetto tecnico e giuridico responsabile** dell’azione.

### DGV — Decision Gate Validator
Validazione ex-ante con outcome standardizzati:

`ALLOW · REVIEW · DENY · FAIL_CLOSED`

### Tempo certificato
Riferimento temporale consistente e verificabile. Senza tempo affidabile, la prova perde forza.

### Evidence Bundle
Pacchetto strutturato (manifest + hash + firme + tempo + metadati) per audit e opponibilità nel tempo.

### Anchors (opzionali)
Ancoraggi crittografici selettivi (es. **IPFS / Bitcoin / Ethereum**) attivati in base a criticità e policy, in modalità **hash-only**.

---

## A chi serve

- **Persone / professionisti**: accountability personale e prova digitale per azioni critiche.
- **Aziende / organizzazioni**: governance dei processi, ruoli e decisioni con auditabilità.
- **Istituzioni / PA**: procedimenti sensibili con verifica riproducibile e continuità nel tempo.

---

## Struttura del sito (GitHub Pages)

Questo repository pubblica un sito statico (GitHub Pages) con pagine stabili e coerenti:

- `index.html` → landing principale (percorso utente + principi)
- `services.html` → componenti e servizi (catena fail-closed)
- `catalog.html` → livelli (BASE / OPPONIBILE / FORTE)
- `create.html` → attivazione (onboarding Level 1)
- `verify.html` → verifica pubblica (recompute & match)
- `governance.html` → scope, policy, non-goals
- `use-cases.html` → casi d’uso UE/PA-ready
- `evidence.html` → struttura Evidence Bundle

---

## Link ufficiali

- **Sito (Services):** https://manuelcoletta1-source.github.io/hermeticum-bce-services/
- **Technology (architettura):** https://manuelcoletta1-source.github.io/hermeticum-bce-technology/
- **Verifica / IPR pubblica:** https://manuelcoletta1-source.github.io/manuhell/

---

## Call to action

- **Inizia Attivazione:** `create.html`
- **Verifica pubblica:** `verify.html`
- **Scegli un livello:** `catalog.html`
- **Approfondisci governance:** `governance.html`

---

## Stato

🟢 **ATTIVO — Repository di servizio e vetrina**  
Evoluzione controllata, semantica stabile, miglioramenti incrementali.

---

## Licenza

Da definire.  
Consigliata separazione tra:
- contenuti “vetrina” (testi/brand)
- specifiche tecniche
- eventuale codice operativo

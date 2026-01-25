# Hermeticum B.C.E. — Services
## Mappa ufficiale dello spazio di continuità operativa

Hermeticum B.C.E. è **uno spazio di continuità operativa sopra Internet**.  
Questo repository **Services** ne è la **mappa ufficiale**.

Qui non si esegue.  
Qui si **orchestrano** identità, regole, esecuzione e traccia.

---

## Cos’è uno spazio di continuità operativa

Uno spazio di continuità operativa è un ambiente in cui:

- l’identità non si resetta nel tempo
- le decisioni sono vincolate da regole opponibili
- l’esecuzione è controllata
- le azioni restano verificabili e difendibili

Non è una piattaforma.  
Non è un’applicazione.  
È un **livello di responsabilità persistente**.

---

## Ruolo di Services

Services è il **punto di verità** dell’ecosistema Hermeticum B.C.E.

- dichiara cosa esiste
- definisce i moduli
- collega i repository
- stabilisce l’ordine corretto

Nessuna decisione viene presa qui.  
Nessuna AI opera qui.

---

## Architettura a moduli

Hermeticum B.C.E. è composto da quattro domini operativi:

### 1. Identity — IPR
Identità operativa continua nel tempo.  
Senza IPR non esiste istanza personale o aziendale.

> Stato: **attivo / in evoluzione**

---

### 2. Policy — OPC
Opponible Policy Core.  
Policy deterministiche, versionate, fail-closed.

- accesso
- evoluzione
- limiti di responsabilità

> Repository: https://manuelcoletta1-source.github.io/opc/

---

### 3. Execution — AI JOKER-C2
Execution layer AI-first vincolato da IPR e OPC.

- senza IPR → DENY
- senza evidence → nessuna evoluzione

> Repository: https://manuelcoletta1-source.github.io/ai-joker-workers/

---

### 4. Evidence — Audit
Traccia append-only delle azioni.

- hash-only
- GDPR-min
- audit-by-design

> Stato: **in arrivo**

---

## Flusso minimo di ingresso

```text
Attivazione IPR
      ↓
Accettazione policy OPC
      ↓
Esecuzione (AI JOKER-C2)
      ↓
Produzione evidence (audit)

Questo flusso è deterministico.
Se una condizione manca, il sistema si ferma.


---

Cosa NON è Hermeticum B.C.E.

Hermeticum B.C.E. non è:

un nuovo Internet

un social network

un’AI autonoma

un wallet


È uno strato di continuità e responsabilità sopra l’infrastruttura esistente.


---

Destinatari

Questo spazio è progettato per:

Unione Europea (compliance, continuità, interoperabilità)

Pubblica Amministrazione (fascicolo operativo persistente)

Imprese (governance dell’AI e delle decisioni)


Lo stesso sistema, tre linguaggi diversi.




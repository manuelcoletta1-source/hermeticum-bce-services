# POLICY — Hermeticum B.C.E. Services

Questa policy definisce le **regole operative e di versionamento**
per il nodo **Hermeticum B.C.E. — Services** e l’uso di **GitJoker**
come sistema C2 di esecuzione e prova.

---

## 1. Principi

- **Un’azione = un commit**
- **Uno stato = una release**
- **Una prova = Git history + Pages**
- **Nessuna ambiguità operativa**

Services è un HUB:
- non esegue codice
- non valida policy
- non prende decisioni

---

## 2. Ruoli C2

- **AI Joker-C2**
  - analizza
  - struttura decisioni
  - prepara contenuti

- **GitJoker**
  - esegue commit
  - versiona
  - produce prova

- **Services**
  - indicizza
  - collega
  - rende verificabile

---

## 3. Regole di Commit (GitJoker)

### Prefissi ammessi
- `feat:` nuova funzionalità
- `fix:` correzione
- `docs:` documentazione
- `audit:` verifica / snapshot
- `release:` sigillo di stato

### Regole
- commit piccoli e atomici
- messaggi descrittivi
- vietati commit “misc” o “update”

---

## 4. Versionamento

### Versioni di portale
- `v1.0-portal` → stato LIVE iniziale
- `v1.1-portal` → estensioni compatibili
- `v2.0-portal` → cambiamenti strutturali

### Regole
- ogni release:
  - ha note
  - è collegata a commit verificabili
  - aggiorna `CHANGELOG.md`

---

## 5. Documentazione & Evidenze

- documentazione tecnica:
  - risiede nei nodi competenti (es. Technology)
- Services:
  - **non duplica**
  - **linka solo**

ΦΩ Documentation Pack:
- versionato
- auditabile
- sigillato tramite release dedicata

---

## 6. Audit e Stato

- `AUDIT.md`:
  - fotografia verificabile dei nodi
- `STATUS.md`:
  - definisce lo stato operativo
- Modifiche a `STATUS.md`:
  - richiedono commit `release:`

---

## 7. Regole di Routing

- link assoluti `/repo/`
- GitHub Pages case-sensitive
- slash finale raccomandato
- nessun redirect implicito

---

## 8. Violazioni

Sono considerate violazioni:
- commit non tracciabili
- modifica di stato senza release
- rottura del routing canonico
- duplicazione di documentazione in Services

Le violazioni richiedono:
- commit correttivo
- aggiornamento audit
- eventuale nuova release

---

Signed: **Manuel Coletta**  
Role: Fondatore — Hermeticum B.C.E.  
Authority: GitJoker C2

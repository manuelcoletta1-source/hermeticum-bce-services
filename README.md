# Nodo Europeo ΦΩ — EU Coherence Node

**Ingresso unico per il cittadino europeo.**  
Questo repository espone la **facciata operativa** del Nodo Europeo ΦΩ:  
un punto di accesso sovranazionale che **non gestisce identità**, ma **attesta coerenza**.

Nessun account.  
Nessun profilo.  
Solo **eventi opponibili** in catena append-only.

---

## Cos’è questo Nodo (in breve)
Il Nodo Europeo ΦΩ è un **livello di coerenza** della Σ-Chain:

Planet → Europa → Italia → Regione → Provincia → Zona → Persona

Opera in modalità:
- **UE_FIRST**
- **GDPR_MIN**
- **HASH_ONLY**
- **FAIL_CLOSED**

L’Europa **non vede persone**.  
Vede **hash, soglie, tempo, audit**.

---

## Cosa fa il repository
Questo repo fornisce:
- una **facciata pubblica unica** (`index.html`)
- un **gate di registrazione** per il cittadino UE (`EVT-0012`)
- una **verifica hash locale** (client-side)
- **termini minimi** UE-grade

È progettato per essere:
- leggibile da cittadini
- verificabile da tecnici
- opponibile in audit

---

## Flusso operativo (1 utente = 1 evento)

1. Il cittadino accede alla facciata del Nodo Europeo
2. Avvia una richiesta territoriale (`REGISTRATION_GATE`)
3. Viene generato:
   - payload normalizzato
   - `registration_hash` (SHA-256)
   - stato iniziale `PENDING`
4. L’utente può verificare localmente l’hash
5. Nessun dato viene centralizzato da questa facciata

---

## Eventi chiave

### EVT-0012 — REGISTRATION_GATE
Evento di ingresso per il cittadino UE.

**Input (minimo):**
- nazione
- regione
- città
- quartiere
- nome
- cognome

**Opzionale (rafforza opponibilità):**
- CIE
- Codice Fiscale

**Output:**
- `registration_hash` (SHA-256)
- stato: `PENDING`

---

### EVT-EU-0001 — EU_COHERENCE_ATTESTATION
Evento sovranazionale di attestazione.

Valuta:
- Merkle root
- ancoraggi (IPFS / BTC / EVM)
- soglie metrologiche (ε, κ, Σ, Χτ)

**Output UE:**
- `VALID`
- `WARNING`
- `FAIL`

---

## Struttura del repository

/ ├── index.html        # Facciata Nodo Europeo (single-entry) ├── register/         # EVT-0012 — REGISTRATION_GATE │   └── index.html ├── verify/           # Verifica hash SHA-256 (client-side) │   └── index.html ├── terms/            # Termini minimi UE-grade │   └── index.html └── README.md

---

## Principi di sicurezza
- **APPEND_ONLY**: nessuna riscrittura
- **NO_SILENT_UPDATES**: ogni modifica è evento
- **FAIL_CLOSED**: se manca qualcosa → DENY
- **HASH_ONLY**: niente dati in chiaro come requisito di sistema

---

## Cosa NON è questo Nodo
- non è un servizio di login
- non è un wallet
- non è un’identità garantita
- non è un archivio di dati personali

È **una infrastruttura di misura e coerenza**.

---

## Stato del Nodo
- livello: **SOVRANAZIONALE (UE)**
- ruolo: **COHERENCE / AUDIT**
- integrazione: UNEBDO · OPC · Σ-Chain
- modalità: **operativo, append-only**

---

## Nota finale
Questo Nodo non chiede fiducia.  
Produce **verificabilità**.

Ogni passo successivo (IPR_CANDIDATE, servizi, AI applicative)  
si appoggia su una coerenza che **qui è già dichiarata**.




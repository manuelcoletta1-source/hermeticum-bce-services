# MANIFEST — BIOCYBER EVENT PROTOCOL (HASH-ONLY)
HERMETICUM – BLINDATA · COMPUTABILE · EVOLUTIVA  
HERMETICUM B.C.E. S.r.l.

---

## 0. Scopo
Questo documento definisce il **protocollo minimo** per eventi pubblicabili sulla piattaforma:

- **eventi**, non profili
- **hash-only**, non dati personali
- **append-only**, non cancellabile
- **fail-closed**, ciò che non è verificabile non entra
- **UE-FIRST / GDPR-MIN**, progettazione normativa UE

Il protocollo è pensato per garantire:
- coerenza tecnica
- auditabilità
- opponibilità come prova di processo (non come identità automatica)

---

## 1. Termini essenziali
- **Evento**: record immutabile che descrive un’azione/istanza.
- **Payload off-chain**: dati custoditi dal soggetto (mai pubblicati qui).
- **Payload hash**: impronta crittografica del payload off-chain.
- **IPR (Identity Primary Record)**: riferimento di continuità identitaria (non account).
- **Nodo**: contesto territoriale/istituzionale che accetta e valida eventi.

---

## 2. Principi non negoziabili
### 2.1 HASH-ONLY
Nessun dato personale in chiaro deve essere pubblicato nel payload evento.

### 2.2 GDPR-MIN
Raccolta minima e finalità esplicita.  
Il nodo tratta metadati territoriali + hash + riferimenti.

### 2.3 APPEND-ONLY
Gli eventi non vengono eliminati.  
Correzioni o revoche avvengono tramite **nuovi eventi**.

### 2.4 FAIL-CLOSED
Se un evento è incompleto o non verificabile → **REJECTED**.

### 2.5 UE-FIRST
Il disegno è compatibile con norme UE (GDPR e principi privacy-by-design).

---

## 3. Gerarchia territoriale (normativa)
Ogni evento deve contenere un contesto territoriale minimo:

Planet → Europa → Nazione → Regione → Città → Zona/Quartiere → Soggetto

Campo minimo obbligatorio per la piattaforma:
- country
- region
- city
- district

---

## 4. Schema evento (minimo)
Un evento valido deve avere i seguenti campi:

```json
{
  "event_type": "CITIZEN_NODE_REQUEST",
  "territory": {
    "country": "IT",
    "region": "Piemonte",
    "city": "Torino",
    "district": "Barriera di Milano"
  },
  "subject_ref": "IPR-3",
  "payload_hash": "SHA-256:<64-hex>",
  "timestamp": "ISO-8601",
  "signature": null,
  "policy": ["UE-FIRST", "GDPR-MIN", "HASH-ONLY", "FAIL-CLOSED"]
}

4.1 Regole dei campi

event_type: string non vuota

territory: oggetto con campi minimi obbligatori

subject_ref: riferimento IPR o equivalente (string non vuota)

payload_hash: formato SHA-256: + 64 hex

timestamp: ISO-8601

signature: opzionale (null ammesso) — firma del soggetto sul JSON canonico

policy: array che deve contenere TUTTI i valori richiesti



---

5. Tipi evento (baseline)

Il protocollo baseline ammette (minimo):

CITIZEN_NODE_REQUEST
richiesta di ingresso / registrazione evento cittadino sul nodo territoriale

TERRITORY_NODE_REQUEST
richiesta di apertura/riconoscimento di un contesto territoriale (es. quartiere/città)

INSTITUTION_NODE_REQUEST
richiesta per nodo istituzionale (ente, servizio pubblico, ecc.)


Estensioni future sono ammesse solo se:

non violano HASH-ONLY

non rompono GDPR-MIN

restano append-only

definiscono criteri di validazione fail-closed



---

6. Lifecycle e stati

Ogni evento pubblicato nel sistema segue lo stato:

PENDING

ricevuto, parsing OK

in attesa di controlli/validazione


VALID

coerente con schema, policy e regole


REJECTED

non conforme (manca campo, hash errato, timestamp invalido, policy incompleta, ecc.)



Nota: lo stato può essere rappresentato come metadato interno o come evento successivo di validazione.


---

7. Criteri di VALID (checklist)

Un evento è VALID se:

1. JSON parsabile, oggetto


2. campi minimi presenti


3. territory completo (country/region/city/district)


4. payload_hash con formato corretto


5. timestamp ISO-8601 valido


6. policy contiene: UE-FIRST, GDPR-MIN, HASH-ONLY, FAIL-CLOSED



Se uno solo fallisce → REJECTED.


---

8. Firma digitale (opzionale, raccomandata)

Campo signature:

consente al soggetto di firmare l’evento canonico

migliora la robustezza probatoria


Formato raccomandato:

algoritmo: ECDSA (secp256k1)

firma su: SHA-256(canonical_json(event_without_signature))


Il nodo può accettare eventi senza firma (baseline), ma può richiederla per livelli di IPR più elevati.


---

9. Separazione OFF-CHAIN / ON-CHAIN

OFF-CHAIN: dati personali, documenti, prove, attestazioni (custodia soggetto/ente)

ON-CHAIN / PUBLIC: solo hash + metadati territoriali + riferimenti


Questa separazione è obbligatoria per rimanere GDPR-MIN.


---

10. Baseline territoriale attuale

Nodo operativo iniziale (pilota):

country: IT

region: Piemonte

city: Torino

district: Barriera di Milano


Questo baseline non implica autorità sovrana: è un contesto di coordinamento verificabile.


---

11. Compatibilità e versioning

Questo manifest definisce la baseline v1.

Regola: aggiornamenti compatibili devono essere additive-only. Break changes richiedono:

nuova versione manifest

migrazione esplicita

evento di transizione



---

HERMETICUM – BLINDATA · COMPUTABILE · EVOLUTIVA
HERMETICUM B.C.E. S.r.l.


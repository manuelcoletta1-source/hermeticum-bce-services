# PRIVACY & DATA PROTECTION — GDPR-MIN
HERMETICUM – BLINDATA · COMPUTABILE · EVOLUTIVA  
HERMETICUM B.C.E. S.r.l.

---

## 0. Scopo
Questo documento descrive come la piattaforma HERMETICUM B.C.E. tratta i dati,
nel rispetto dei principi del **Regolamento (UE) 2016/679 (GDPR)**.

Il sistema è progettato secondo il principio **GDPR-MIN (data minimization by design)**.

---

## 1. Principio fondamentale
La piattaforma **non raccoglie, non conserva e non pubblica dati personali in chiaro**.

Opera esclusivamente su:
- metadati tecnici
- contesto territoriale
- impronte crittografiche (hash)

---

## 2. Categorie di dati trattati

### 2.1 Dati NON trattati
La piattaforma **non tratta**:
- nome e cognome in chiaro
- indirizzi fisici
- documenti di identità
- dati biometrici
- dati sanitari
- dati di contatto personali

Tali dati, se esistono, restano **off-chain** e sotto il controllo esclusivo del soggetto.

---

### 2.2 Dati trattati (minimi)
La piattaforma può trattare esclusivamente:

- **metadati territoriali**
  - nazione
  - regione
  - città
  - zona/quartiere

- **riferimenti identitari non reversibili**
  - IPR (Identity Primary Record)
  - hash crittografici (es. SHA-256)

- **metadati temporali**
  - timestamp ISO-8601

---

## 3. Hash e dati personali
Un hash crittografico:
- non è un dato personale direttamente leggibile
- non consente la ricostruzione del contenuto originario
- viene usato come **prova di esistenza e continuità**, non come informazione

L’hash è trattato come **dato tecnico di audit**, non come contenuto informativo.

---

## 4. Finalità del trattamento
Le finalità sono limitate a:

- garantire tracciabilità degli eventi
- permettere audit tecnico a posteriori
- coordinare nodi territoriali in modo verificabile

Non vengono effettuate:
- profilazioni
- decisioni automatizzate
- classificazioni comportamentali

---

## 5. Base giuridica (art. 6 GDPR)
Il trattamento è fondato su:
- interesse legittimo alla tracciabilità tecnica dei processi
- consenso implicito del soggetto che genera l’evento
- progettazione privacy-by-design (art. 25 GDPR)

---

## 6. Conservazione dei dati
- Gli eventi sono **append-only** e non cancellabili
- Non contengono dati personali in chiaro
- La conservazione riguarda esclusivamente metadati tecnici

Non esistono database di dati personali centralizzati.

---

## 7. Diritti dell’interessato
Poiché la piattaforma:
- non conserva dati personali in chiaro
- non è in grado di identificare direttamente una persona fisica

I diritti GDPR (accesso, rettifica, cancellazione) si applicano:
- **ai dati off-chain**, sotto il controllo del soggetto
- non agli hash pubblici, che sono tecnicamente non reversibili

---

## 8. Sicurezza
Misure adottate:
- assenza di dati sensibili in chiaro
- hash-only design
- separazione netta on-chain / off-chain
- architettura fail-closed

La sicurezza è ottenuta **riducendo ciò che esiste**, non accumulando.

---

## 9. Trasferimento dati
- Nessun trasferimento verso paesi extra-UE
- Nessuna cessione a terzi
- Nessun utilizzo commerciale dei dati

---

## 10. Modifiche a questa policy
Eventuali modifiche:
- saranno additive
- non retroattive
- documentate pubblicamente

---

## 11. Dichiarazione finale
Questa piattaforma non promette anonimato assoluto.  
Promette **responsabilità senza esposizione**.

La privacy non è un’opzione.
È una **conseguenza strutturale del design**.

---

HERMETICUM – BLINDATA · COMPUTABILE · EVOLUTIVA  
HERMETICUM B.C.E. S.r.l.

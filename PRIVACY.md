# PRIVACY — GDPR-MIN (HASH-ONLY)
HERMETICUM - BLINDATA · COMPUTABILE · EVOLUTIVA  
HERMETICUM B.C.E. S.r.l.

## 0. Scopo
Descrivere il trattamento minimo dei dati nel Nodo Regionale Piemonte secondo GDPR (data minimization by design).

## 1. Principio
La piattaforma non raccoglie né pubblica dati personali in chiaro.
Opera su:
- metadati minimi (territorio, timestamp)
- impronte crittografiche (hash)

## 2. Dati NON pubblicati
- documenti, scansioni, foto
- indirizzi fisici, numeri documento
- dati sanitari o sensibili
- qualsiasi dato personale non necessario alla traccia

## 3. Dati pubblicati (minimi)
- `territory`: country/region/city/district
- `subject_ref`: riferimento IPR
- `payload_hash`: `SHA-256:<64-hex>`
- `timestamp`, `policy`

## 4. Off-chain
Il contenuto reale resta off-chain sotto il controllo del soggetto.
L’hash abilita verifica a posteriori senza esposizione.

## 5. Trasferimenti e terze parti
Nessuna cessione commerciale.
Nessun trasferimento extra-UE come requisito del protocollo.

## 6. Sicurezza
La sicurezza nasce da:
- assenza di dati sensibili in chiaro
- separazione on-chain/off-chain
- fail-closed

## 7. Modifiche
Solo modifiche additive, pubbliche e versionate.

# GOVERNANCE — NODO REGIONALE PIEMONTE
HERMETICUM - BLINDATA · COMPUTABILE · EVOLUTIVA  
HERMETICUM B.C.E. S.r.l.

## 0. Scopo
Definire ruoli, limiti e processo di pubblicazione/validazione eventi del Nodo Regionale Piemonte.
Questa governance è tecnica (protocollo/audit), non politica.

## 1. Principio biocibernetico (primato biologico)
Ogni evento nasce da un soggetto biologico reale.
La componente cibernetica (IPR, AI Joker-C2, tooling) è estensione verificabile, non autonoma.

## 2. Non-sovranità
Il nodo:
- non è ente pubblico
- non assegna diritti automatici
- non sostituisce procedure civili (CIE/SPID/eIDAS)
Fornisce tracciabilità tecnica verificabile e continuità append-only.

## 3. Struttura territoriale
Regione → Città → Zona → Utente(IPR)

Baseline attiva:
- IT · Piemonte · Torino · Barriera di Milano

Regola canonica:
**Attivando l’IPR diventi un nodo foglia della tua Regione**, registrato come evento append-only.

## 4. Ruoli
- Soggetto (utente/ente): genera eventi e custodisce payload off-chain
- Nodo Zona: contesto operativo territoriale
- Nodo Città: coordinamento locale
- Nodo Regionale Piemonte: hub di coerenza/compatibilità/audit tecnico
- AI Joker-C2: supporto operativo e coerenza (non decisionale)

## 5. Validazione (fail-closed)
Un evento è pubblicabile solo se:
- JSON parsabile
- territory completo (country/region/city/district)
- payload_hash formato `SHA-256:<64-hex>`
- policy include: UE-FIRST, GDPR-MIN, HASH-ONLY, FAIL-CLOSED
- nessun dato personale in chiaro

VALID = coerenza tecnica. Non è riconoscimento civile.

## 6. Conflitti
Il sistema non arbitra conflitti giuridici o politici.
Registra la traccia. La risoluzione avviene fuori-sistema secondo norme vigenti.

## 7. Evoluzione
Solo cambiamenti additivi, documentati e tracciati (append-only).

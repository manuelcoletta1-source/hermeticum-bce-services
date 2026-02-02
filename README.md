# Portale Europeo Biocybernetico — IPR / AI Governance (ex-ante)

Questo repository pubblica un portale **EU-ready** che descrive e dimostra un modello di governance tecnica **ex-ante** per sistemi digitali e Intelligenza Artificiale tramite **IPR (Identity / Integrity Primary Record)**.

## Idee chiave (senza marketing)
- **Ex-ante**: l’azione è vincolata *prima* dell’esecuzione.
- **Fail-closed**: in assenza di evidenza verificabile → **blocco** (nessuna esecuzione, nessun output).
- **Audit-first**: verifiche replicabili, deterministiche.
- **Hash-only / GDPR-min**: minimizzazione dei dati, nessuna custodia centrale.
- **Federazione**: interoperabilità tra domini senza trust implicito.

## Struttura del portale (GitHub Pages)
- `/index.html` — Home (porta d’ingresso istituzionale)
- `/citizen/` — Sezione Cittadini UE (difesa e protezione senza sorveglianza)
- `/ai-joker-c2/` — AI governance layer (gate ex-ante)
- `/institutions/` — Pacchetto valutativo per istituzioni UE (documentazione, accesso rapido)
- `/member-states/` — Adozione operativa per Stati Membri (federazione, timeline, GO/NO-GO)
- `/technology/` — Spiegazione tecnica (PASS/FAIL, determinismo, “virgola = FAIL”)
- `/security/` — Threat model e controlli preventivi (ENISA-style)
- `/governance/` — Limiti dichiarati (no surveillance, no custody, responsabilità umana)
- `/manual/` — Biblioteca (manuale e allegati)

## Asset comuni
- `/assets/hbce.css` — stile unificato “tech alien futuristico”
- `/assets/hbce.js` — attivazione nav (pill active)

## Regole di qualità (repo)
- Stesso stile e header/footer su ogni pagina.
- Linguaggio chiaro, verificabile, senza promesse.
- Se un contenuto cambia, deve essere tracciabile (approccio audit-first).

## Deploy (GitHub Pages)
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / folder: `/ (root)`
4. Salvare e attendere la pubblicazione

## Note di governance
- Il portale è **informativo e valutativo**: non produce effetti giuridici automatici.
- Non sostituisce framework istituzionali (es. eIDAS/EUDI). Descrive un modello tecnico di vincolo dell’azione ex-ante.

## Autore / Soggetto proponente
- **HERMETICUM B.C.E. S.r.l.**

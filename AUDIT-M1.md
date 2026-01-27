# AUDIT-M1 — Horizon / EU Cybersecurity Readiness Checklist
HERMETICUM - BLINDATA · COMPUTABILE · EVOLUTIVA  
HERMETICUM B.C.E. S.r.l.

Questo documento serve a mantenere il repo “review-ready” in contesti UE/Horizon (audit tecnico + governance + privacy).

---

## 1) Scope control (anti scope-creep)
- [ ] Il portale dichiara esplicitamente cosa è e cosa non è (About/Terms).
- [ ] Nessuna pagina suggerisce: “ID ufficiale”, “sostituisce eIDAS”, “certifica identità”, “custodia dati”.
- [ ] Percorso cittadino minimo è unico e coerente: Register → Fase 1 → Create → Verify.
- [ ] Pagine demo/istituzionali/ricerca sono declassate (non operative) e rimandano al Gateway.

## 2) Level separation (auditability)
- [ ] Standard (normativo) è sola-lettura e separato.
- [ ] Ricerca è pre-standard, non esecutiva.
- [ ] Fase 1 contiene solo operatività minima (HRR→DGV→LTA).
- [ ] Verify contiene solo validazione tecnica (hash/bundle) senza narrativa.
- [ ] Nessuna pagina mescola “ricerca + operatività + normativa” nello stesso testo senza avvisi.

## 3) Privacy (GDPR-min, data minimization)
- [ ] Onboarding LIGHT: nessun telefono, email opzionale, nessun indirizzo/PII superflua.
- [ ] STRONG: segnali contatto solo hashati (mai dati raw nel bundle).
- [ ] “Hash-only” esplicitato dove serve (Create/Verify/Privacy).
- [ ] Nessuna pagina incentiva upload documenti o dati sensibili su portale statico.

## 4) Fail-closed rules
- [ ] Verify produce esiti: VALID / INVALID / INCONCLUSIVE.
- [ ] Se manca requisito minimo → INVALID (fail-closed).
- [ ] Create/Onboarding dichiarano chiaramente che l’output è locale e non prova d’identità.

## 5) Non-equivalence eIDAS/EUDI
- [ ] Mapping normativo esplicita: il sistema non è equivalente a eIDAS/EUDI Wallet.
- [ ] Evitate parole ambigue tipo “firma digitale UE” se non in senso tecnico/metaforico e con disclaimer.

## 6) Security posture (static portal reality)
- [ ] Nessun endpoint, nessun login, nessun database nel portale.
- [ ] Controllo supply-chain: assets versionati, changelog/freeze presenti.
- [ ] 404 fail-closed coerente.

## 7) Documentation & traceability
- [ ] README.md coerente con navigazione reale.
- [ ] Audit docs aggiornati: AUDIT.md, FREEZE.md, STATUS.md (se applicabile).
- [ ] Changelog append-only e baseline freeze (M0) mantenuti.

## 8) UX sanity (cittadino / tecnico / auditor)
- [ ] Catalog è mappa, non shop.
- [ ] Register = entrypoint onboarding (non raccolta dati massiva).
- [ ] Legal hub non duplica contenuti, collega a canonici.

---

## Outcome atteso (M1)
Portale leggibile, coerente, “audit-friendly”, pronto a essere presentato come:
- dimostrazione di architettura a livelli,
- minimizzazione dati,
- validazione tecnica separata dalla narrativa,
- base per ricerca Horizon (non prodotto identity).

EVIDENCE PACK — DEMO (HERMETICUM B.C.E.)

Contenuto:
- artifacts/demo.txt            (file demo)
- hashes/sha256.txt             (hash locale del file)
- ipr/IPR-manifest.json         (manifest IPR che dichiara l’hash)
- ipr/IPR-verify-report.json    (report di verifica)

Regola fail-closed:
- Se l’hash ricalcolato != hash salvato -> INVALID
- Se manca file o hash -> INCOMPLETO
- Se manca contenuto verificabile -> INCONCLUSIVE

Scopo:
- Dimostrare struttura e riproducibilità (non effetti legali automatici).

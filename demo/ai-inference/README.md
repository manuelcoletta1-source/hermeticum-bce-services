# AI Inference ex-ante — IPR-Datacenter Demo

Questa demo mostra una inference AI eseguita
solo se preceduta da un IPR valido.

Flusso:
1. Input + IPR
2. Verifica ex-ante (Gate)
3. PASS → inference
4. Output + Evidence Pack (hash-only)

In assenza di prova → nessuna esecuzione (fail-closed).

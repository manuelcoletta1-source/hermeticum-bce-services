# Evidence Bundle — EU Pilot

Questa cartella contiene **bundle di evidenza pubblici** per i pilot della
**BioCyber Identity Card**.

L’obiettivo è la **verifica riproducibile**:
- ricalcolo locale degli hash
- confronto con il manifest
- verifica del riferimento temporale (se presente)
- conferma degli esiti fail-closed

## Struttura minima del bundle

Ogni bundle di pilot DOVREBBE seguire questa struttura:
evidence/ EVT-/ manifest.json (allegati opzionali)
**Regola minima di pubblicazione**
- è possibile pubblicare **solo `manifest.json`** in modo pubblico
- gli allegati possono restare privati
- a condizione che gli **hash nel manifest restino verificabili**

## Verifica (sintesi)

1. Scarica il manifest (e gli eventuali allegati pubblici).
2. Calcola localmente gli hash SHA-512.
3. Confronta i valori con quelli presenti nel `manifest.json`.
4. Se è presente un timestamp, verifica che sia vincolato allo stesso hash.
5. Se l’esito DGV è `DENY` o `FAIL_CLOSED`, l’azione **non deve** essere stata eseguita.

**Regola d’oro:**  
la verifica è “ricalcola e confronta”, non “fidati del sito”.

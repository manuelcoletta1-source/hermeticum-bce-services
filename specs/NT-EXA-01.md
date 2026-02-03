# NORMA TECNICA  
## NT-EXA-01  
### Vincolo ex-ante per l’esecuzione di azioni digitali e algoritmiche  
### Regime fail-closed di responsabilità preventiva

---

## 1. Scope

La presente norma definisce i requisiti tecnici obbligatori per l’implementazione di un **vincolo ex-ante** nei sistemi digitali, automatizzati e algoritmici, al fine di:

- impedire l’esecuzione di azioni prive di responsabilità attribuibile;
- garantire la verifica preventiva della legittimità tecnica;
- assicurare tracciabilità opponibile nel tempo;
- abilitare audit deterministico indipendente.

La norma non disciplina il merito delle decisioni né sostituisce autorità umane o istituzionali.

---

## 2. Ambito di applicazione

La presente norma si applica a:

- sistemi software automatizzati;
- sistemi di intelligenza artificiale;
- sistemi di supporto decisionale;
- infrastrutture digitali ad alto impatto;
- contesti B2B e B2G soggetti a requisiti di audit, accountability e conformità normativa.

---

## 3. Termini e definizioni

### 3.1 Azione  
Operazione che produce un effetto tecnico, giuridico, economico o sociale irreversibile o solo parzialmente reversibile.

### 3.2 Regime ex-ante  
Regime nel quale l’azione è subordinata alla verifica preventiva di condizioni tecniche di legittimità.

### 3.3 Regime ex-post  
Regime nel quale l’azione viene eseguita prima della verifica e valutata successivamente.

### 3.4 Decision Gate Cibernetico (DGC)  
Modulo tecnico che verifica le condizioni ex-ante e autorizza o blocca l’esecuzione dell’azione.

### 3.5 Fail-closed  
Modalità operativa nella quale l’assenza di prova costituisce condizione sufficiente per il blocco dell’azione.

---

## 4. Principio normativo fondamentale

**REQ-0**  
Un sistema conforme alla presente norma **NON DEVE** eseguire alcuna azione se non sono soddisfatte, prima dell’esecuzione, tutte le condizioni ex-ante definite nel Capitolo 5.

---

## 5. Requisiti ex-ante obbligatori

### 5.1 Attribuzione umana

**REQ-1.1**  
Per ogni azione, il sistema **DEVE** identificare un soggetto umano responsabile.

**REQ-1.2**  
Il soggetto responsabile **DEVE** essere attribuibile prima dell’esecuzione dell’azione.

**REQ-1.3**  
La responsabilità **NON DEVE** essere delegata esclusivamente al sistema o all’algoritmo.

---

### 5.2 Decisione esplicita

**REQ-2.1**  
Ogni azione **DEVE** derivare da una decisione esplicita e dichiarata.

**REQ-2.2**  
Esecuzioni implicite, silenziose o per default **NON DEVONO** essere ammesse.

**REQ-2.3**  
La decisione **DEVE** essere univocamente collegata all’azione.

---

### 5.3 Traccia opponibile

**REQ-3.1**  
Prima dell’esecuzione, il sistema **DEVE** generare una traccia tecnica verificabile.

**REQ-3.2**  
La traccia **DEVE** essere verificabile in modo indipendente dall’ambiente di esecuzione.

**REQ-3.3**  
La traccia **DEVE** essere deterministica e riproducibile.

---

### 5.4 Costo non neutralizzabile

**REQ-4.1**  
Ogni azione **DEVE** comportare una responsabilità o un costo non neutralizzabile retroattivamente.

**REQ-4.2**  
La cancellazione completa e retroattiva della responsabilità **NON DEVE** essere possibile.

---

### 5.5 Esposizione temporale

**REQ-5.1**  
La traccia **DEVE** rimanere verificabile nel tempo.

**REQ-5.2**  
Il sistema **DEVE** supportare audit futuri senza dipendere dallo stato interno del sistema originario.

---

## 6. Comportamento del Decision Gate

### 6.1 Esecuzione conforme

**REQ-6.1**  
Se tutti i requisiti REQ-1.x – REQ-5.x sono soddisfatti, il DGC **DEVE** autorizzare l’esecuzione dell’azione.

---

### 6.2 Esecuzione non conforme

**REQ-6.2**  
Se almeno uno dei requisiti REQ-1.x – REQ-5.x non è soddisfatto, il DGC **DEVE** negare l’esecuzione.

**REQ-6.3**  
Il sistema **NON DEVE** implementare fallback permissivi o bypass automatici.

---

## 7. Ruolo dell’algoritmo

**REQ-7.1**  
L’algoritmo **NON DEVE** decidere il merito sostanziale dell’azione.

**REQ-7.2**  
L’algoritmo **DEVE** limitarsi alla verifica delle condizioni tecniche di legittimità preventiva.

**REQ-7.3**  
L’autorità umana **DEVE** rimanere esterna all’algoritmo.

---

## 8. Requisiti di audit e sicurezza

**REQ-8.1**  
Il sistema **DEVE** supportare audit deterministico.

**REQ-8.2**  
La verifica dell’audit **DEVE** essere possibile in modo indipendente dal sistema esecutivo.

**REQ-8.3**  
Il trattamento dei dati **DOVREBBE** essere minimizzato (hash-only ove applicabile).

**REQ-8.4**  
La custodia di dati personali **NON DEVE** essere necessaria per la conformità alla presente norma.

---

## 9. Relazione con controlli ex-post

**REQ-9.1**  
L’adozione di controlli ex-ante **NON ESCLUDE** controlli ex-post.

**REQ-9.2**  
I controlli ex-post **NON DEVONO** annullare o sovrascrivere decisioni di blocco ex-ante.

---

## 10. Non conformità

Un sistema è considerato **NON CONFORME** se:

- esegue azioni senza soddisfare tutti i requisiti ex-ante;
- consente esecuzioni senza responsabilità attribuibile;
- permette esecuzioni implicite o silenziose;
- consente bypass del Decision Gate.

---

## 11. Interoperabilità ed estensioni

**REQ-11.1**  
Il sistema **PUÒ** supportare modelli di verifica federata.

**REQ-11.2**  
Il sistema **DOVREBBE** consentire integrazioni con infrastrutture di audit o registri esterni.

---

## 12. Conclusione normativa

La presente norma stabilisce una **condizione tecnica di eseguibilità** dell’azione digitale.

Non ridefinisce chi decide.  
Definisce **quando un’azione è ammessa**.

Un sistema conforme riconosce:
- la responsabilità come prerequisito operativo;
- il tempo come vincolo tecnico;
- l’esecuzione come atto condizionato e verificabile.

# Sintesi trasversale — FASE 5 · Ordine e dipendenze sull'intero percorso

Revisore: FASE 5 (ordine/dipendenze cross-pagina). Base: `audit/CHARTER.md`, i 24 report
`audit/pagine/<sigla>.md`, verifica diretta su `wiki/*.html` dove una dipendenza è load-bearing.

**Ordine di studio autorevole** (posizione fra parentesi):
F0.1 (1) · F0.2 (2) · F0.3 (3) · F0.4 (4) · F0.5 (5) · F0.6 (6) · F0.7 (7) · F0.8 (8) ·
1.1 (9) · F4 (10) · 1.2 (11) · F5 (12) · 1.3 (13) · F3 (14) · F6 (15) · 1.4 (16) · F2 (17) ·
2.1 (18) · 2.2 (19) · 2.3 (20) · 3.1 (21) · 3.2 (22) · 4.1 (23) · 4.2 (24) · 4.3 (25).

**Nota di completezza.** Non esiste `audit/pagine/F0.1.md`: la pagina di apertura
(«Frazioni e percentuali», pos 1) non ha report. Ogni giudizio su F0.1 qui sotto è inferito
dalle pagine che la citano, non da un audit diretto.

**Convenzioni codice.** (1) = concetto usato prima della sua pagina (o mai definito);
(2) = ciclo di dipendenza; (3) = toppa postuma (correzione/ipotesi che arriva DOPO la formula,
o su un'altra pagina); (4) = ipotesi che valida una formula ma compare dopo di essa / mai.
Ogni rilievo è già stato registrato localmente in almeno un report di pagina: qui si tratta
l'effetto **fra** pagine, che il singolo audit locale non poteva vedere.

---

## A. Verdetto trasversale

Il grafo delle dipendenze di contenuto è **quasi-aciclico**: l'unico anello reale è
F0.2↔F0.3 sull'esponenziale reale (T-01). I difetti d'ordine gravi non sono cicli ma tre
schemi che si ripetono lungo tutto il percorso:

1. **Fondazioni mai posate** — due convenzioni-cardine (esponenziale reale; insieme/somma
   vuoto e dominio del log) non sono definite nel Gradino 0 e vengono **rincorse e mancate**
   da 13+ pagine a valle (T-01, T-02).
2. **Toppe postume ricorrenti** — la stessa correzione (massa dangling / buona posizione della
   stazionaria) arriva sempre *dopo* la formula che dovrebbe reggere, e talvolta *non* viene
   ereditata dalla pagina che la riusa (T-03).
3. **Un simbolo che cambia significato lungo il cammino** senza che la pagina a valle rilegga
   la definizione a monte: r(x) con polarità invertita (T-04).

Il Glossario, «fonte di verità unica», non ha il blocco Gradino 0: attribuisce la «prima occ.»
di quasi tutti i simboli di pavimento a pagine successive alla loro reale introduzione (T-09).

Rilievi in ordine di gravità: **4 BLOCCANTI (T-01…T-04), 4 GRAVI (T-05…T-08), 2 MINORI
(T-09, T-10).**

---

## B. Rilievi

### T-01 — [BLOCCANTE] L'esponenziale reale `e^t` regge 1.1/F4/1.2 ma non è definito da nessuna pagina; F0.2 lo esclude. Anello F0.2↔F0.3. · categorie (1) + (2)

**Catena verificata.**
- **F0.2 §1** (pos 2): `a^b` è definito solo per `b` intero e il box §1 **esclude esplicitamente**
  gli esponenti non interi (`a^{1/2}`). *(F0.2 «Casi estremi»: «Esponente reale (e^t, a^{1/2}):
  esplicitamente escluso da F0.2».)*
- **F0.3 §3** (pos 3): nomina `e ≈ 2,718` «come `π`» e dichiara che `e` «vive nella regressione
  logistica e nel metodo di Fisher» (`wiki/F0_3_Logaritmi.html` riga 180) — ma **non definisce
  mai `e^t`** per `t` reale, né `e` come limite/serie (F0.3-09).
- **1.1 §5.2** (pos 9): `σ(t) = 1/(1 + e^{-t})` con `t` reale, e poi `e^{-t/2}`, `e^{-T/2}`,
  `e^{\ln u}`, `e^{-0,693}` (verificato con `grep` su `Bella_copia_1.1…html`). È qui la **prima
  occorrenza di percorso dell'esponenziale reale**, con definizione assente a monte.
- **F4 §2.2** (pos 10) e **1.2 §2** (pos 11): `r(x) = σ(θ^⊤x) = 1/(1+e^{-θ^⊤x})` — l'intera
  reputazione, la logistica, l'EWMA (`e^{-Δt/τ}`), il metodo di Fisher (`e^{-T/2}`) poggiano su
  `e^t` reale.

**Perché è (1) + (2).** (1) L'oggetto «funzione esponenziale reale» è usato al passo 9 e non ha
pagina: né F0.2 (che lo nega) né F0.3 (che nomina solo la costante). (2) Anello logico:
**F0.3** definisce `log_b c` come «l'esponente `x` tale che `b^x = c`» (F0.3-01), la cui buona
posizione richiede potenze reali `b^x` — **esattamente ciò che F0.2 rifiuta di definire**.
Log e potenza reale si rimandano l'un l'altro e nessuna delle due pagine chiude il cerchio.
Corollario già rilevato localmente ma di portata globale: la voce di Glossario `a^b` =
«moltiplicato per sé stesso `b` volte; copre `e^t`» è **falsa** su ciò che la wiki usa davvero
(1.1-R4; F0.2 sez. E, codice E).

**Dove va sanato.** Introdurre, al Gradino 0 (naturale sede: coda di F0.2 o box in F0.3),
l'esponenziale reale `a^x` come funzione continua (o `e^t` come oggetto primitivo del pavimento
dichiarato), **prima** di 1.1 §5.2. Correggere la voce di Glossario `a^b`. Finché manca, la
definizione del logaritmo (F0.3) e la sigmoide (1.1) — e con esse F4, 1.2, 1.3, 3.1 — restano
appese a un oggetto non definito.

---

### T-02 — [BLOCCANTE] Insieme/somma vuoto e denominatore nullo: convenzione mai fissata alla fonte (F0.4/F0.3), poi mancata da 13+ pagine a valle · categoria (4), sistemica

È il difetto d'ordine più diffuso dell'intera wiki: una **ipotesi validante** (l'insieme di
indici non è vuoto / il denominatore non è nullo / l'argomento del log è positivo) che dovrebbe
essere posata **una volta** in fondo al Gradino 0 e richiamata a valle, e che invece è assente
alla fonte e poi omessa, indipendentemente, da ogni pagina che ne ha bisogno.

**Le due fonti non posate.**
- **F0.4 §1/§3** (pos 4): `∑`/`∏` sono definite solo per `n≥1`; la convenzione
  **somma vuota = 0 / prodotto vuoto = 1** non compare, benché **F0.5** (pos 5) la usi
  immediatamente per `0! = 1` (F0.4-S1). È la sede naturale della convenzione, saltata.
- **F0.3 §2/§4** (pos 3): il **dominio del logaritmo** (`b>0, b≠1, c>0`; e `x_i>0` nella regola
  `log(∏)=∑log`) non è mai enunciato (F0.3-01/02/03; F0.4-S2). Nessun box «Onestà» dichiara la
  rinuncia.

**La stessa lacuna, riscoperta e mancata a valle** (ciascuna è un difetto locale I/P per la
regola C del charter, ma la radice è l'omissione alla fonte):

| pagina (pos) | punto d'urto | scheda |
|---|---|---|
| F0.5 §4 (5) | `0!` = prodotto vuoto | poggia su F0.4-S1 |
| 1.1 §5.6 / §3.2 (9) | Fisher `n=0` (χ²₀); denominatori MLE/Graham `N_S=0` | R1, R3 |
| F4 §6.2 / §5 (10) | NDCG `0/0` (IDCG=0); Wilson `m=0` | S1, S2 |
| F5 §1.2 (12) | z-score `σ=0` (baseline piatta), `n=0/1` | F5-02 |
| 1.3 §4 (13) | `z_V` con `σ_V=0` (proprio del warmup) | S2 |
| F3 §2/§3/§4 (14) | quote `v_i/Σv_j=0`; PMI `P(a,b)=0`, `P(a)=0` | S1, S2 |
| F6 §3 (15) | Jaccard `A∪B=∅` (raggiungibile dallo shingling di §3) | F6-01 |
| F2 §6 (17) | serie di Neumann, termine `k=0` → `M^0=I` (prodotto vuoto di matrici) | F2-08 |
| 2.1 §2 (18) | massa sui nodi dangling | S1 |
| 2.2 §2/§3 (19) | semi `S⁺=∅` (`1/0`); dangling in `M` | S1, S2 |
| 2.3 §2 (20) | `m = (PR−PR⁺)/PR` con `PR=0` | S3 |
| 3.2 §2/§3 (22) | entità isolata (colonna nulla → `0/0`); PMI `P(a,b)=0` | S1, S5 |
| 4.3 §2 (24) | batch di aggiunte vuota `P=0` | prova del nove, casi estremi |

**Perché è (4).** In ogni riga la formula è corretta *sotto* l'ipotesi mancante; l'ipotesi che
la valida (`insieme ≠ ∅`, `denom ≠ 0`, `arg > 0`) compare **dopo** la formula (in riscrittura) o
**mai**. Il charter (regola C) carica il difetto sulla pagina che usa la formula — ma il fatto
che 13 pagine ripetano la stessa omissione è un difetto **d'ordine di percorso**: le due
convenzioni-madre non sono state enunciate al loro posto (F0.4, F0.3), così ogni pagina è
costretta a ri-derivarle e nessuna lo fa.

---

### T-03 — [BLOCCANTE] Massa dangling e buona posizione della stazionaria: toppa sempre postuma, e talvolta non ereditata · categoria (3)

Lo stesso difetto — una distribuzione/stazionaria usata con l'articolo determinativo prima che
esista, e la sua **toppa** (ridistribuzione della massa dangling / ipotesi di
irriducibilità+aperiodicità) collocata dopo — ricorre su quattro pagine consecutive della
famiglia Markov, con esiti diversi.

- **F2 §3** (pos 17): «**la** distribuzione stazionaria `p*` … `M p* = p*`»; esistenza/unicità e
  ipotesi (irriducibile + aperiodica) arrivano **due sezioni dopo**, in §5. Presa alla lettera,
  `M p* = p*` è soddisfatta anche dal **vettore nullo** e — con l'identità `I` introdotta nella
  stessa §6 — da infiniti vettori. **Toppa postuma pura, intra-pagina** (F2-01, BLOCCANTE).
- **2.1 §2** (pos 18): la formula scalare del PageRank con un nodo dangling somma a
  `1 − d·m/(1−d) < 1` → non è la «frazione di tempo» promessa da §1; la toppa (§3 costruisce la
  matrice `G`) arriva **dopo** e **§2 non è mai corretto in loco** (2.1-S1/S2). È l'esempio di
  calibrazione del charter (righe 97–104).
- **2.2 §3** (pos 19): la ricorsione `t = αMt + (1−α)d` richiama **M grezzo di 2.1** e **non
  eredita `G`**; «la somma fa 1» regge solo senza dangling (controesempio: `Σt = 0,875`). La
  toppa esiste a monte (2.1 §3) ma **non viene propagata** alla pagina che la riusa (2.2-S1).
- **3.2 §3** (pos 22): la stessa «macchina» — `W` normalizzata per colonna → stocastica —
  **senza alcuna toppa**: un'entità isolata ha colonna nulla → `0/0 = nan`, `W` non è stocastica
  e il punto fisso `rep` non esiste (3.2-S1, BLOCCANTE).

**Perché è (3).** La correzione dei dangling / la buona posizione della stazionaria è, in tutti
i casi, o posticipata rispetto alla formula (F2 §3→§5; 2.1 §2→§3), o presente a monte ma non
ereditata (2.2), o del tutto assente pur essendo necessaria (3.2). Un lettore che si fermi alla
formula prima della toppa lavora con un oggetto mal posto.

---

### T-04 — [BLOCCANTE] `r(x)` usato in 1.3 con polarità invertita rispetto alla definizione a monte (F4/1.2) · contraddizione cross-pagina

- **F4 §2.2** (pos 10), **1.2 §1** (pos 11), Glossario: `r(x)` = probabilità stimata che il
  traffico sia **abusivo** → **alto = peggio** (1.3 cita 1.2 riga 155, F4 riga 201, Glossario
  riga 216).
- **1.3 §4** (pos 13): `P_accept = σ(a·r(x) − b·z_V)` con `a = 2 > 0`: l'accettazione **cresce**
  con `r(x)`. Controesempio (`z_V=0`): `P_accept(r=0,2)=0,599 < P_accept(r=0,8)=0,832` — il
  mittente più abusivo è accettato di più (1.3-S1, BLOCCANTE). L'esempio chiama `r=0,6`
  «reputazione discreta» mentre significa 60 % di abuso.

**Perché è un difetto d'ordine.** Non è «usato prima di essere definito» (F4/1.2 precedono 1.3),
ma **usato in contraddizione con la definizione studiata due pagine prima**: 1.3 non rilegge la
polarità fissata a monte. La formula è coerente solo con `1 − r(x)` (buona reputazione) o col
segno `−a·r(x)`. Chi prosegue verso 2.x porta con sé una polarità sbagliata di `r(x)`.

---

### T-05 — [GRAVE] Distribuzione normale: promessa «più avanti» in F4, mai consegnata; F5 la usa tacitamente · categoria (1)

- **F4 §5.2** (pos 10): «un numero preso dalla **distribuzione normale** (la classica curva a
  campana — **trattazione completa più avanti nella wiki**; per ora la usiamo come la `χ²`:
  valori tabulati)» (`wiki/F4_Statistica_e_ML.html` riga 299). `z = 1,96 ↔ 95%`.
- **Verificato con `grep`:** la parola «normale»/«campana» compare **solo in F4** (2 occorrenze);
  **nessuna pagina successiva** (F5, …, 4.3) definisce la normale. La «trattazione completa più
  avanti» **non arriva mai**: forward-reference a nulla.
- **F5 §1.2** (pos 12): la soglia `|z| = 2–3` «strano» presuppone una **legge a campana** mai
  dichiarata (Chebyshev dà solo `≤1/k²`; F5-03). E il quantile `z` di F4 (pos 10) collide col
  z-score `z` di F5 (pos 12) senza nota «≠» né box Trappola (F5-01).

**Perché è (1).** Un oggetto (la normale, e con essa il significato di `z=1,96↔95%`) è invocato
in F4/F5 come se fosse definito, ma la sua pagina non esiste nel percorso. `χ²` invece **è**
disponibile: è definita in 1.1 §5.5 (pos 9), che precede F4 — quindi l'analogia «come la χ²» di
F4 è lecita nell'ordine, la normale no.

---

### T-06 — [GRAVE] Rice-delta: il valore base non è mai trasmesso; identica lacuna a F6 (fonte) e 4.3 (uso) · categorie (3)/(4)

- **F6 §6** (pos 15): la codifica «tieni le **differenze** tra consecutivi», ma la decodifica
  «**somma dal primo valore**» — il primo valore non è trasmesso da alcuna regola dell'encoding;
  presa alla lettera la ricetta **non è invertibile** (F6-05).
- **4.3 Sol§1 / §2** (pos 24): la catena «ordina → delta → Rice» produce `P−1` delta e **omette il
  valore base**; dai soli codici l'insieme non è ricostruibile (4.3-S1). Il report 4.3 rinvia:
  «la convenzione va fissata in **F6 §6**».

**Perché è (3)/(4).** L'ipotesi che rende la catena corretta («il primo prefisso viaggia grezzo»)
manca **alla fonte** (F6, pos 15) e la pagina che la eredita nove posizioni dopo (4.3) la
ri-omette invece di correggerla: una toppa che né la fonte né l'utente appongono.

---

### T-07 — [GRAVE] F0.7 consegna a 1.1 la regola «MLE = derivata zero», falsa al bordo; la condizione validante non è scritta né a monte né a valle · categorie (3)/(4)

- **F0.7 §3-§4** (pos 7): «trovare dove la derivata è zero = trovare i punti più alti o più bassi
  … la MLE della 1.1». Falso nei due versi: `x³` (flesso a tangente orizzontale) e, sul bordo,
  la MLE con `k=0` su `n=5` sta a `θ=0` dove `L'(0)=−5≠0` (F0.7-01, BLOCCANTE).
- **1.1 §3.2** (pos 9): `MLE θ = k/n`; ai bordi `k=0`/`k=n` la derivata non si annulla. Il report
  F0.7 avverte: «1.1 va riletta su questo punto». La condizione validante — «punto **interno e
  liscio**» — non è enunciata **né** a F0.7 (che consegna la regola) **né** a 1.1 (che la usa).

**Perché è (3)/(4).** L'ipotesi che rende vera l'equivalenza «estremo ⇔ derivata zero» compare
solo in riscrittura, dopo la formula, su entrambe le pagine: difetto trasmesso in avanti e mai
chiuso.

---

### T-08 — [GRAVE] Serie di Neumann e forme chiuse a punto fisso: le ipotesi che le validano (`ρ(M)≤1`, `M^0=I`, `0<α<1`) sono incomplete già a F2 e solo implicite a valle · categoria (4)

- **F2 §6** (pos 17): `(I−αM)^{-1} = Σ_{k≥0} α^k M^k` **senza** l'ipotesi `ρ(M)≤1` — falsa per
  `M` generica (controesempio `M=2I, α=0,9`: la serie diverge; F2-03); e il termine `k=0`
  richiede `M^0=I`, mai enunciato (F2-08).
- **2.2 §3** (pos 19): la forma chiusa del TrustRank eredita la serie; l'ipotesi **`0<α<1`**
  (invertibilità di `(I−αM)`, convergenza) è data solo implicitamente come `α≈0,85` (2.2-S1/G3).
- **3.2 §3** (pos 22): `rep = (1−α)seed + αW·rep`; il punto fisso è unico solo se `(I−αW)` è
  invertibile, cioè `α∈(0,1)` e `W` stocastica — mai scritto; a `α=1`, `(I−W)` è singolare
  (3.2-S3).

**Perché è (4).** F2 precede 2.2/3.2 nell'ordine (17 < 19 < 22), quindi non c'è uso-prima-di-
definire; ma le ipotesi che rendono valide le forme chiuse a valle sono **già incomplete alla
fonte** (F2), e le pagine che le riusano non le enunciano prima della formula.

---

### T-09 — [MINORE, sistemico] Blocco Gradino 0 assente dal Glossario → «prima occ.» di quasi ogni simbolo di pavimento attribuita a una pagina successiva · categoria (1) apparente, difetto del Glossario

Il Glossario (fonte di verità unica) **non ha il blocco F0.x** (accertato meccanicamente,
`estrai_simboli_output.txt` sez. B). Conseguenza: la «prima occ.» diverge dall'ordine di studio
per l'intero pavimento. Sintesi delle incongruenze rilevate dalle singole pagine:

| simbolo | prima occ. reale (ordine) | attribuzione Glossario | report |
|---|---|---|---|
| `∑`, `∏` | F0.4 §1/§3 (4) | 1.1 | F0.4-S4 |
| `\|x\|`, `min`, `max` | F0.5 §1/§3 (5) | 1.1 | F0.5-E |
| `⌊·⌋` (floor) | F0.5 §2 (5) | F6 §6 | F0.5-E |
| `n!` | F0.5 §4 (5) | assente | F0.5-E |
| `√` (radice) | F0.2 §4 (2) | F4 §1.3 | F0.2-E |
| `a^b`, `a^{-b}` | F0.2 §1/§3 (2) | 1.1 §3.2 | F0.2-E |
| `∫`, `f(x)`, `dx` | F0.8 §3 (8) | 1.1 §2.2 | F08-01 |
| `log_2` | F0.3 §3 (3) | F3 §1 | F0.3-08 |
| `e`, `ln` | F0.3 §3 (3) | 1.1 §5.2 | F0.3-08 |
| `⟺` | F0.3 §1 (3) | 1.4 §4 | F0.3-08 |
| `x`, `θ`, `θ^⊤x`, `⊤` | F0.6 §1/§2 (6) | F4 | F0.6-3 |
| `x_i`, norma generale | F0.6 (6) | non censiti | F0.6-3 |

**Perché è (1) apparente ma non reale.** Nell'ordine di studio le F0.x **precedono** e
**definiscono** questi simboli: non c'è vero uso-prima-di-definire nel percorso. È il Glossario
a essere internamente incoerente con l'ordine — un difetto O sistemico che rende la «fonte di
verità» più debole delle pagine che dovrebbe indicizzare. Correlato: numerose collisioni di
lettera prive di nota «≠» (o con box Trappola mal posto), tutte a carico del Glossario o della
pagina del *secondo* uso — `z` (F4/F5), `N` (1.4/2.1/F6), `v` (F2/2.1), `α` (1.1/F2/2.2),
`I` (1.1/F2), `H` (1.1/F3), `∼` (1.1/1.2), `k` (1.1/F4/F6), `λ` (F4/F2).

---

### T-10 — [MINORE] Rimandi interni errati o incompleti · categoria (1) minore / navigazione

- **F0.5 §2** (pos 5): «Serve nella codifica Rice della **sezione 4**» — nessuna sezione 4 di
  F0.5 contiene la Rice; il referente reale è **F6 §6** (pos 15). Rimando in avanti a sezione
  sbagliata (F0.5-03).
- **1.4 Prerequisiti** (pos 16): l'elenco omette **F4** benché §4 usi `θ^⊤x` di F4. F4 precede
  1.4 (10 < 16): non è uso-prima-di-definire, ma lista di prerequisiti incompleta (1.4-S6).
- **F5 Prerequisiti** (pos 12): equipara `μ` (media di campione, F5 §1.1) a `E[X]` (aspettazione,
  1.1 App. D.2) senza dichiarare la distinzione campione/variabile aleatoria (F5-G2).
- **2.3 §6** (pos 20): la riga Simboli marca `10^{-k}` come «nuovo di 2.3», mentre `a^{-b}` è
  pavimento F0.2 (pos 2) — «prima occ.» incongruente ereditata dall'assenza del blocco Gradino 0
  (2.3-S6). Stesso schema di T-09.

---

## C. Cicli di dipendenza (categoria 2) — esito

**Nessun ciclo forte** tra le pagine di contenuto: la spina dorsale
`1.1 → F4 → 1.2 → 1.3` , `F2 → {2.1, 2.2, 2.3, 3.2}` , `F3 → 3.2` , `F6 → {1.4, 4.1, 4.3}` ,
`{4.1 → 4.2 → 4.3}` è aciclica; i puntatori all'indietro (2.1→2.2 «puntatori in avanti»,
1.4→F4 nei prerequisiti) sono riferimenti, non usi che chiudano un anello.

**Unico anello reale:** F0.2 ↔ F0.3 sull'esponenziale reale ↔ logaritmo (dettaglio in **T-01**):
`log_b c` è definito tramite potenze reali `b^x` che F0.2 rifiuta di definire, e l'esponenziale
reale a sua volta si àncora convenzionalmente a `exp`/`log`. Va spezzato introducendo `a^x`
reale (o `e^t`) come primitiva del pavimento, prima di F0.3 e 1.1.

---

## D. Priorità di intervento (ordine)

1. **Posare le fondazioni mancanti prima di 1.1** (pos 9): esponenziale reale `e^t` (T-01) e le
   due convenzioni-madre — somma/prodotto vuoto in F0.4, dominio del log in F0.3 (T-02). Chiude
   la radice di ~15 rilievi locali a valle.
2. **Consegnare la normale** dove F4 la promette, o marcarla [DA VERIFICARE] e ancorare `z=1,96`
   (T-05).
3. **Correggere le toppe postume in loco**: PageRank §2 (2.1), stazionaria §3 (F2), ereditare `G`
   in 2.2 e 3.2 (T-03); polarità di `r(x)` in 1.3 (T-04); valore base Rice in F6 §6 e 4.3 (T-06);
   condizione «interno e liscio» per la MLE in F0.7/1.1 (T-07).
4. **Ricostruire il blocco Gradino 0 nel Glossario** e correggere le «prima occ.» (T-09/T-10).

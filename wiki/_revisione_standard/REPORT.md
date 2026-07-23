# Dossier di revisione — run «standard F0.7»

- **Paper sorgente: ASSENTE dal repository.** Nessun PDF/TeX/DOCX presente. Come previsto dal Passo 0 del brief, si lavora **solo dal contenuto già in pagina**. La cartella `audit/` non è il paper e non è stata usata come fonte di contenuto.
- **Data di inizio del run:** 23/07/2026.
- **Branch:** `standard-f07`. Un commit per pagina, mai push.

---

## Passo 1 — esito confronto rendering (F0.7 vs style.css)

Verifica regola-per-regola dello `<style>` inline di F0.7 contro `style.css`:
**nessuna regola persa o alterata senza marca [v2].** Controllo anti-regressione
superato (criterio concordato con Alex il 23/07/2026: il controllo del Passo 1
è anti-regressione, non anti-cambiamento).

⚠ **Il rendering di F0.7 differisce dall'inline nelle sole modifiche [v2],
assunte come standard del run.** Delta accettati:

- ⚠ blocco Intuizione `.note`: da verde (`--accent`) a **blu** (`--note:#2a6199`), bordo 4px→5px
- ⚠ etichette `.lbl` e `.kicker`: rimosso `text-transform:uppercase` (il testo esce come scritto nell'HTML)
- ⚠ corpo testo: `letter-spacing .01em → var(--ls)=.08em`, aggiunto `word-spacing var(--ws)=.16em`, `hyphens:none` (profilo dislessia)
- ⚠ titoli h1-h3, nav, footer: spaziatura normale (leggibilità per forma complessiva)
- ⚠ `em/i/u` neutralizzati → resi come grassetto (unica enfasi ammessa)
- ⚠ formule (`mjx-container`) e codice: spaziatura azzerata (obbligatorio: la posizione dei simboli è il significato)
- ⚠ blocchi `.def/.note/.warn`: padding `.35em→.6em`, margin `1.15em→1.35em`
- ⚠ `figcaption`: da centrato ad allineato a sinistra
- ⚠ tabelle: righe pari con sfondo alternato
- ⚠ nuovi: `[id]{scroll-margin-top}`, `@media max-width:480px`, `@media print`

## Decisioni operative del run

- **D1** — La voce di dossier di ogni pagina viaggia **nello stesso commit** della pagina (un commit = pagina + voce REPORT.md). Le pagine saltate per dubbio hanno un commit di solo dossier con il nome pagina nel messaggio.
- **D2** — `check_pagina.py` è committato in `wiki/_revisione_standard/`: sopravvive alle sessioni ed è rieseguibile da Alex in revisione.
- **D3** — Delta [v2] accettati come standard (vedi sopra; decisione di Alex, 23/07/2026).
- **D4** — ⚠ Lo script `localStorage 'wiki-tappa'` a fine pagina **si conserva** nelle pagine riscritte: alimenta il «Riprendi» di `index.html`, che non si può toccare. Il modello F0.7 ne è privo (scelta del modello, non replicata a ritroso).
- **D5** — Collisione di classi: il vecchio `class="note"` (testo attenuato) ≠ nuovo `.note` (blocco Intuizione blu). Ogni occorrenza vecchia viene convertita (`p.lead` o prosa). Il controllo 5 esige il blocco `.note` **con** etichetta `Intuizione`, non la sola classe.
- **D6** — Glossario al Passo 4: strato meccanico + riallineamento terminologico, niente ristrutturazione a blocchi, controllo 5 sospeso (`--no-blocks`). Ogni voce modificata marcata ⚠ (revisione manuale di Alex in corso, voce 32 di 62).
- **1.1 Filtraggio Bayesiano: solo strato meccanico** (decisione di Alex, 23/07/2026) — è l'unica pagina VERIFICATA e al centro della revisione manuale in corso. Dettaglio nella sua voce di dossier.

---

# Pagine lavorate

<!-- voci in append, una per pagina, subito dopo il commit -->

## F0.7 — La derivata (Passo 1)

- **Modifica unica** (come da brief): rimosso il blocco `<style>` inline dal head, inserito `<link rel="stylesheet" href="style.css">`. Nessun'altra modifica a contenuto, struttura, figure.
- **Confronto rendering**: superato col criterio anti-regressione (vedi sezione «Passo 1» in cima). `style.css` entra nel repo con questo commit.
- **Controllo etichette `.lbl` maiuscole** (richiesto da Alex): eseguito su tutta `wiki/` — 14 etichette trovate, tutte già in capitalizzazione normale (`Definizione`, `Intuizione`, `Attenzione — …`, `Il simbolo`, `Come si calcola…`). Nessuna normalizzazione necessaria.
- **Definizioni / esempi / figure**: invariati (sono il modello dello standard).
- **Verifica meccanica**: controlli 1–9 tutti PASS.
- **Ancore rinominate**: nessuna.

## F0.1 — Frazioni e percentuali

**Definizioni scritte** (testo senza formula, per il cover test):
- Frazione — un numero: la quantità che ottieni tagliando un intero in b parti uguali e prendendone a; sopra e sotto due interi.
- Semplificare — riscrivere la frazione dividendo sopra e sotto per lo stesso numero: non cambia il valore, cambia la scrittura.
- Numero decimale — lo stesso valore della frazione, scritto con la virgola invece che con la barra; si ottiene eseguendo la divisione.
- Percentuale — un numero scritto «su cento»; il simbolo % significa «diviso 100».

**Esempi numerici** (aritmetica ricomputata con `fractions`/`decimal`, tutta OK):
- 3/4 di 800: 800 : 4 = 200; 3 · 200 = 600; in un colpo solo (3 · 800)/4 = 2400/4 = 600.
- Semplificare 6/8: 6 : 2 = 3; 8 : 2 = 4; quindi 6/8 = 3/4 = 0,75.
- Conversioni: 0,3% = 0,3 : 100 = 0,003; 0,05 · 100 = 5%; 20% di 300 = 0,20 · 300 = 60.
- Tabellina: 1/2 = 0,5; 1/4 = 0,25; 3/4 = 0,75; 1/10 = 0,1; 1/100 = 0,01; 1/3 = 0,333…
- Soluzioni: 0,5 · 50 = 25; 4/10 = 2/5 = 0,4; 2% = 0,02; 0,5% = 0,005; 0,10 · 200 = 20; 0,2% = 0,002.

**Figure**:
- Barra divisa in 4 parti uguali (larghezza 100 ciascuna su base 400), 3 colorate — illustra «3/4 di 800 g = 600 g» del §1. Geometria verificata (4 · 200 g = 800 g; 3 · 200 g = 600 g).

**Scelte di giudizio e incertezze**:
- ⚠ **Corretto errore aritmetico preesistente**: «0,001 — mille volte più piccolo» → «**cento** volte più piccolo» (0,1 ÷ 0,001 = 100; coerente con la divisione già in pagina 0,1 : 100 = 0,001, e col «fattore cento» del resto della pagina). Trovato dalla revisione indipendente.
- ⚠ Controllo 9 segnala `\(0.75\)`: **falso positivo intenzionale** — è il contrasto con la notazione anglosassone nel blocco sulla virgola («si scrive 0,75, non 0.75»), presente identico nell'originale.
- «Più a fondo (opzionale)» convertito da callout a h3 + prosa, contenuto integro, marcatura di opzionalità conservata.
- La regola «di» significa «per» spostata dentro la definizione di frazione (etichetta «Come si calcola»); era un callout separato.
- Aggiunta la riga «semplificare» alla tabella simboli (termine già definito in pagina).
- Revisione indipendente eseguita: 2 rilievi bloccanti (errore «mille volte», definizione §3 senza cover test), entrambi corretti prima del commit.

**Ancore rinominate**: `ex-1` → `esercizi` (gli esercizi erano in un callout, ora sono sezione h2 come nel modello). Nessun link esterno puntava a frammenti di questa pagina.

## F0.2 — Potenze e radici

**Definizioni scritte** (testo senza formula, per il cover test):
- Potenza — un numero: il risultato di una moltiplicazione ripetuta; per esponente intero positivo, il prodotto di b fattori tutti uguali ad a.
- Esponente zero — qualsiasi numero (tranne 0) elevato a 0 fa 1, perché una cosa divisa per sé stessa fa 1.
- Esponente negativo — significa «uno diviso»: il meno manda sotto la frazione.
- Radice quadrata — per c ≥ 0, un numero non negativo: l'unico numero ≥ 0 il cui quadrato è c.

**Esempi numerici** (aritmetica ricomputata + rifatta a mano dal revisore indipendente, tutta OK):
- 2³ = 2·2·2 = 8; 10² = 100; 5¹ = 5; 3⁴ = 81.
- Regole: 2²·2³ = cinque «2» = 2⁵ = 32; 10²·10³ = 10⁵ = 100 000 (verifica 100·1000); 10⁵/10² = 10³ = 1000.
- a⁰: a³/a³ = a⁰ = 1; 10⁻⁶ = 1/1 000 000 = 0,000001; 2⁻¹ = 0,5.
- Radici: √1=1, √4=2, √9=3, √16=4, √25=5, √100=10; √2 ≈ 1,41; (−5)² = 25.
- Soluzioni: 2⁴=16; 10³=1000; 3²·3² = 3⁴ = 81 (verifica 9·9); 7⁰=1; 10⁻³=0,001; √36=6; √81=9.

**Figure**:
- Quadrato di lato 5 con area 25 e i due versi (lato→area 5²=25; area→lato √25=5) — illustra il blocco «perché si chiama quadrata» del §4. Geometria verificata (rect 150×150, lato marcato lungo 150).

**Scelte di giudizio e incertezze**:
- Il callout «Il confine» (0⁰ indefinito, esponenti non interi) convertito in blocco Attenzione.
- I caveat della radice (c<0 non definito; √25 = 5 non −5; √0=0) estratti dalla definizione in un blocco Attenzione dedicato.
- La sezione «Prerequisiti» (h2) compressa nel riquadro prerequisito a inizio pagina, come nel modello.
- ⚠ Nota del revisore: «il risultato di una moltiplicazione ripetuta» descrive a rigore solo il caso b intero positivo; la frase successiva delimita («Quando b è un intero positivo…») e il blocco Attenzione marca il confine. Accettato così.

**Ancore rinominate**: `ex-1` → `esercizi`; `prerequisiti` (h2) rimossa (contenuto nel riquadro prerequisito). Nessun link esterno puntava a frammenti di questa pagina.

## F0.3 — Logaritmi

**Definizioni scritte** (testo senza formula, per il cover test):
- Logaritmo — un esponente: dice a quale potenza va elevata la base per raggiungere l'argomento; è l'unico numero con questa proprietà (condizioni: base positiva e diversa da 1, argomento positivo).

**Esempi numerici** (ricomputati + rifatti a mano dal revisore, tutti OK):
- log₁₀ 1000 = 3 perché 10³ = 1000; log₂ 4 = 2; log₂ 8 = 3; log₁₀ 100 = 2.
- Valori speciali: log_b 1 = 0 (b⁰ = 1); log_b b = 1.
- Regola d'oro: log₁₀(100·1000) → sinistra 100·1000 = 100 000 = 10⁵ → 5; destra 2 + 3 = 5. Uguali.
- Soluzioni: log₂ 16 = 4 (2⁴=16); log₁₀ 10 000 = 4; log₅ 1 = 0; ln = log_e con e ≈ 2,718; log(7·3) = log 7 + log 3.
- Regole gemelle verificate numericamente (log(8/2) = log 8 − log 2; log(3⁴) = 4·log 3; log((−3)²) = 2·log 3).

**Figure**: nessuna (pagina algebrica; il brief lo prevede — «una pagina di algebra può averne zero»).

**Scelte di giudizio e incertezze**:
- Il callout «N.B. — definizione rigorosa» è diventato il blocco Definizione; la parte «fuori da queste condizioni non è definito» spostata in blocco Attenzione dedicato.
- Su rilievo del revisore, la frase funzionale («dice a quale potenza va elevata la base per raggiungere l'argomento») è stata portata dentro il blocco Definizione, prima della caratterizzazione formale.
- «Più a fondo (opzionale) — la regola gemella» convertito da callout a h3 + prosa, contenuto integro (incluso il caso a<0 con n log|a|).
- Footer: la riga «prossima trance: F0.4, F0.5, F0.6» ridotta a «prossima: F0.4» (era meta-informazione dello stato bozza).

**Ancore rinominate**: `ex-1` → `esercizi`; `prerequisiti` (h2) rimossa. Nessun link esterno puntava a frammenti di questa pagina.

## F0.4 — Somme Σ e produttorie Π

**Definizioni scritte** (testo senza formula, per il cover test):
- Sommatoria — un numero: il totale che si ottiene sommando gli elementi indicati, uno per ogni valore dell'indice.
- Produttoria — un numero: il risultato della moltiplicazione di tutti gli elementi indicati, uno per ogni valore dell'indice.

**Esempi numerici** (ricomputati + rifatti a mano dal revisore, tutti OK):
- Σ con x = (2, 5, 3): 2 + 5 + 3 = 10.
- Σ i² da 1 a 3: 1 + 4 + 9 = 14.
- Π con gli stessi numeri: 2 · 5 · 3 = 30 (contro 10 della somma).
- Caso vuoto: somma vuota = 0, prodotto vuoto = 1 (verificato anche 0! = 1).
- log(Π) = Σ log verificata numericamente su (2, 5, 3).
- Soluzioni: 1+2+3+4 = 10; 1·2·3·4 = 24 (= 4!); 10+1+4 = 15.

**Figure**: nessuna (pagina di notazione).

**Scelte di giudizio e incertezze**:
- Il callout «N.B. — estremi e caso vuoto» convertito in blocco Attenzione (è un caveat sulla convenzione).
- «Traduzione in parole» e «A parole» mantenuti come blocchi note dedicati.
- Il link «↩ Torna agli esercizi» nelle Soluzioni non è replicato: il modello F0.7 non lo ha.

**Ancore rinominate**: `ex-1` → `esercizi`; `prerequisiti` (h2) rimossa. Nessun link esterno puntava a frammenti di questa pagina.

## F0.5 — Notazione di base

**Definizioni scritte** (testo senza formula, per il cover test):
- Valore assoluto — un numero mai negativo: la distanza di x da zero sulla linea dei numeri; se x è positivo o zero resta com'è, se è negativo togli il segno.
- Floor — un intero: il più grande intero non superiore a x; si scende all'intero immediatamente a sinistra sulla retta.
- min / max — numeri del gruppo stesso: il più piccolo e il più grande.
- Fattoriale — un numero: il prodotto di tutti gli interi da 1 a n; misura in quanti modi puoi mettere in fila n oggetti; 0! = 1.

**Esempi numerici** (ricomputati + rifatti a mano dal revisore, tutti OK):
- |5| = 5; |−5| = 5; |0| = 0; |3−7| = |−4| = 4; |7−3| = 4; (−3)² = 9 contro |−3| = 3.
- Floor: ⌊2,75⌋ = 2; ⌊5⌋ = 5; ⌊0,9⌋ = 0; ⌊−2,9⌋ = −3 (verso −∞); ⌊2,9⌋ = 2.
- min(3; 8; 5) = 3; max(3; 8; 5) = 8.
- 3! = 6; 4! = 24; 5! = 120; ricorsione 1! = 1·0! ⇒ 0! = 1.
- Soluzioni: |−8| = 8; |8−2| = 6; ⌊3,99⌋ = 3; min(7;2;9) = 2; max = 9; 4! = 24; min(1000; 1139) = 1000.

**Figure**:
- Retta dei numeri con −5, 0, +5: tacche equidistanti (160 px per lato) e i due segmenti «distanza 5» simmetrici — illustra l'intuizione del §1 (|−5| = |5| = 5). Geometria verificata dal revisore.

**Scelte di giudizio e incertezze**:
- «Il confine — cosa lo distingue» (|x| vs x²) e «Il confine» del fattoriale convertiti in blocchi Attenzione.
- ⚠ Frase di tipo aggiunta al def di min/max («numeri del gruppo stesso»): esplicitazione richiesta dal cover test, corretta per i gruppi finiti usati in pagina; segnalata dal revisore come unica frase senza antecedente letterale.
- Su rilievo del revisore: formula del floor spostata sotto etichetta «Come si calcola»; le due condizioni del fattoriale sotto etichetta propria «Perché è fissato così» (prima pendevano da «Il simbolo»).

**Ancore rinominate**: `ex-1` → `esercizi`; `prerequisiti` (h2) rimossa. Nessun link esterno puntava a frammenti di questa pagina.

## F0.6 — Vettori e prodotto scalare

**Definizioni scritte** (testo senza formula, per il cover test):
- Vettore — una lista ordinata di numeri, trattata come un oggetto unico; ogni numero è una componente e l'ordine conta.
- Prodotto scalare — di due vettori con lo stesso numero di componenti è un numero: misura quanto puntano nella stessa direzione, amplificato dalle loro lunghezze; si calcola «a coppie e somma».
- Norma — una funzione: prende un vettore e restituisce un numero mai negativo, la lunghezza; l'euclidea la misura in linea d'aria con Pitagora.

**Esempi numerici** (ricomputati + rifatti a mano dal revisore, tutti OK):
- (3; 4) + (1; 1) = (4; 5); 2·(3; 4) = (6; 8).
- Prodotto scalare (2; −1)·(3; 4): 2·3 = 6; −1·4 = −4; 6 + (−4) = 2.
- Perpendicolari: (1; 0)·(0; 1) = 1·0 + 0·1 = 0.
- Norma di (3; 4): √(9+16) = √25 = 5.
- Soluzioni: seconda componente 2; 1·4 + 2·3 = 10; 2·1 + (−1)·5 = −3; √(36+64) = √100 = 10.

**Figure**:
- Freccia da (0, 0) a (3, 4) con i cateti tratteggiati «3 a destra» e «4 in su» e lunghezza 5 — illustra l'esempio 3-4-5 del §3. Geometria verificata (scala 40 px/unità: cateti 120 e 160 px, ipotenusa 200 px).

**Scelte di giudizio e incertezze**:
- ⚠ Il def del prodotto scalare ora usa il significato geometrico («quanto puntano nella stessa direzione × lunghezze», già presente nell'intuizione e nella tabella simboli del vecchio); il significato-punteggio resta integrale nel blocco «il caso della wiki». Il vecchio def («punteggio complessivo…») contraddiceva il suo stesso caveat («è un caso particolare, non il significato in sé»): incoerenza interna risolta, contenuto tutto conservato. Verificato dal revisore.
- Su rilievo del revisore: «della stessa lunghezza» → «con lo stesso numero di componenti» (evita l'equivoco con «lunghezze» = norme nella stessa frase).
- «N.B. — definizione rigorosa», «collaudo delle lunghezze» e «seminorma» convertiti in h3 «Più a fondo (opzionale)» / «Il confine (opzionale)», contenuto integro.
- «Cosa non è un vettore» e «convenzione del grassetto» convertiti in blocchi Attenzione.

**Ancore rinominate**: `ex-1` → `esercizi`; `prerequisiti` (h2) rimossa. Nessun link esterno puntava a frammenti di questa pagina.

## F0.8 — L'integrale

**Definizioni scritte** (testo senza formula, per il cover test):
- Integrale — di una funzione tra due bordi è un numero: l'area racchiusa tra la curva e la linea di terra su quel tratto, la somma di infinite fettine sottilissime.

**Esempi numerici** (ricomputati + rifatti a mano dal revisore, tutti OK):
- Retta orizzontale ad altezza 3, da 0 a 4: area = 4 × 3 = 12.
- Velocità costante: 60 km/h × 2 h = 120 km (l'area sotto la curva della velocità è la distanza).
- Soluzione 2: base 3 × altezza 5 = 15.

**Figure**:
- Fettine sotto la curva: Bézier quadratica con x(t) = 60+360t e y(t) = 220−160t² (verificato: il termine t² di x si annulla), 6 rettangoli inscritti con altezza = floor dell'altezza della curva al bordo sinistro (20, 24, 37, 60, 91, 131) — somma di Riemann sinistra di funzione crescente, ogni rettangolo interamente sotto la curva. Illustra il §2 (affettare l'area). Geometria verificata da me e dal revisore con calcoli indipendenti. Etichetta «la curva» spostata in zona libera su rilievo del revisore.

**Scelte di giudizio e incertezze**:
- Il blocco «Onestà» (la wiki è quasi tutta discreta, l'integrale è un bonus) conservato integralmente: non è una scusa sul documento, è una guida di lettura onesta.
- «Il confine (opzionale)» e «Più a fondo (opzionale) — legame con la derivata» convertiti in h3, testo integro.
- «Il gemello discreto» resta blocco Attenzione come nel vecchio (caveat d'uso).

**Ancore rinominate**: `ex-1` → `esercizi`; `prerequisiti` (h2) rimossa (contenuto nel riquadro prerequisiti). Nessun link esterno puntava a frammenti di questa pagina.

## 1.1 — Filtraggio Bayesiano dello Spam (SOLO STRATO MECCANICO)

**Ristrutturazione F0.7 rimandata** per decisione di Alex (23/07/2026): la pagina è al centro
della revisione manuale in corso (voce 32 di 62 del glossario) ed è l'unica marcata VERIFICATA —
una ristrutturazione invaliderebbe la revisione e farebbe perdere l'unica verifica umana esistente.
Registrata qui perché non risulti dimenticata: andrà portata a blocchi F0.7 quando la revisione
manuale sarà conclusa.

**Cosa è stato fatto** (solo involucro):
- Head standard (title conservato), link a `style.css`, rimossi i 4 blocchi `<style>` inline.
- `nav.quicknav` → `nav.top` (stessi target; caduto solo «↑ inizio», sostituito da «↑ torna su» in fondo).
- `nav.wikibar` → `footer` a modello (status, «prossima: F4…», ↩ Mappa, 1 di 17, F4 →, Glossario, Metodo).
- Rimosso «degli appunti» dal sottotitolo (unica occorrenza di parola vietata; nessun badge bozza presente).
- Involucro `div.wrap` per la larghezza di colonna; script `wiki-tappa` conservato.
- Solo attributi, testo intatto: `class="subtitle"` → `lead`; 23 × vecchia `class="note"` (testo attenuato) → `class="lead"` (D5: evita che il vecchio uso renda come blocco Intuizione blu).

**Verifica del vincolo duro** (testo con tag rimossi, prima/dopo):
- Diff a livello di parole: 11.024 → 11.035. Uniche differenze: «↑ inizio» (−), «degli appunti» (−),
  «↑ torna su» + riga di stato del footer (+). **Nessun'altra parola cambiata.**
- Insieme degli `id`: 50 prima, 50 dopo, **identici anche nell'ordine**. Le 18 ancore puntate dal
  Glossario tutte presenti e immutate.
- Riparato in corsa: l'apertura di `div.wrap` inizialmente non inserita (file CRLF) — controllo 7
  l'ha intercettata; ora tag bilanciati.

**Verifica meccanica**: controlli 1–4, 6, 7 PASS; **controllo 5 SOSPESO** (`--no-blocks`) per accordo:
la struttura interna non è stata toccata, quindi niente blocchi `.def`/`.note`.
- ⚠ Controllo 8 segnala 41 occorrenze: tutte false positive da contenuto intatto — numeri di sezione
  del paper (1.1.1, 5.2…) e separatori delle migliaia all'italiana (10.000, 9.900, 1.000).
- ⚠ Controllo 9 segnala 31 occorrenze: tutte false positive — virgole da separatore in intervalli
  \([0,1]\) e insiemi \(\{1,2,3\}\), non decimali. Prosa e formule non toccate per vincolo.

**Nota resa visiva** ⚠: senza lo stile inline, i vecchi callout (`.callout/.intu/.deep/.ex/.formula/.leg`)
rendono come prosa piana fino alla ristrutturazione vera; le tabelle e i link prendono lo stile condiviso.
Stato interim accettato dalla decisione di rimandare la ristrutturazione.

**Addendum (fix successivo)** ⚠: la trasformazione via script aveva dimezzato le backslash della
config MathJax (`\(` invece di `\\(` nei delimitatori): resa delle formule compromessa. Bug mio,
stanato dal revisore del Glossario (stesso difetto, stessa causa); riparato con commit dedicato.
Il testo della pagina non è stato toccato dal fix (solo la riga 9 dell'head).

## F4 — Statistica e machine learning

**Definizioni scritte** (testo senza formula, per il cover test):
- Vettore — una lista ordinata di numeri; ogni posizione è una componente (ripasso, come in F0.6).
- Prodotto scalare — combina dati e pesi in un solo numero: moltiplica componente per componente, poi somma.
- Norma — la lunghezza del vettore: la distanza dall'origine; misura «quanto sono grossi i pesi».
- Regressione logistica — una famiglia di funzioni (una per ogni scelta dei pesi): prende i dati e restituisce un numero strettamente tra 0 e 1, la probabilità stimata che l'etichetta valga 1; caratterizzata dal logit affine nei dati.
- Gradiente — il vettore delle pendenze della perdita rispetto a ciascun peso; il passo è governato dal learning rate.
- EWMA — un numero tenuto in memoria e aggiornato a ogni dato: la media che dimentica.
- Intervallo di confidenza / LCB — forchetta di valori plausibili costruita dai dati; il bordo inferiore è il LCB; z ne governa la larghezza.
- DCG / NDCG — un numero: la pagella di un ordinamento, somma dei guadagni scontati per posizione; NDCG la normalizza con l'ordinamento ideale.

**Esempi numerici** (28 verifiche con python + rifatti a mano dal revisore, tutti OK):
- (1; −2)·(0,5; 0,25) = 0; norma (3; 4) = 5; σ(0) = 0,5; σ(1) ≈ 0,73.
- Log-loss: −ln 0,9 ≈ 0,105; −ln 0,1 ≈ 2,303; soluzione: −ln 0,01 ≈ 4,605 contro −ln 0,5 ≈ 0,693 («quasi 7 volte» = 6,64).
- Passo SGD completo: errore −0,5 → θ = (1,05; −1,975); prova del nove: nuovo punteggio 0,03125 > 0, r ≈ 0,51.
- EWMA: 10 → 15 → 17,5; soluzione 100 → 120 → 136; 1 − e⁻¹ ≈ 0,63.
- Wilson (z=2): pochi dati centro 0,3/1,4 ≈ 0,214 = 3/14, radice ≈ 0,138, LCB ≈ 0,017; tanti dati LCB ≈ 0,083; k=0 → LCB = 0.
- DCG = 8,5; IDCG ≈ 8,89; NDCG ≈ 0,956; soluzione DCG ≈ 7,42, NDCG ≈ 0,834.

**Figure**:
- Sigmoide come polilinea per 13 punti calcolati esattamente (x = −6…6, y = 240 − 180·σ(x), scarto max 0,05 px) con σ(0) = 0,5 e σ(1) ≈ 0,73 evidenziati — illustra §2.1 («comprime la retta reale in (0,1)»). Verificata da me e dal revisore con calcoli indipendenti.

**Scelte di giudizio e incertezze**:
- ⚠ **Riparato refuso preesistente** in sol-6: `pprox` → `\approx` (2×; la formula era illeggibile a schermo).
- Rimosso per intero il box «Stato: bozza — regole d'ingaggio» (scuse sul documento: «bozza», «non si trascrive su carta»).
- Il riferimento alla derivata ora punta a F0.7 (prima puntava al box opzionale della 1.1; F0.7 è ora la sede propria del concetto).
- Su rilievo del revisore: def EWMA completato con tipo/funzione; def gradiente con puntatore esplicito alla regola del §3.2; formula di Wilson inglobata in un blocco def in §5.3.
- Esercizi e soluzioni restano per sezione (ex-1…ex-6 / sol-1…sol-6 con i loro backlink): struttura adatta a una pagina lunga, ancore conservate.
- Caduta la nota ridondante «Simboli nuovi censiti nella tabella in fondo» (l'informazione sta nell'intestazione della tabella).
- Controllo 8: 12 segnalazioni, tutte numerazioni di sottosezione (2.4, 5.1…) o riferimenti («sezione 3.1»): false positive. Controllo 9: 7 segnalazioni, tutte intervalli \((0,1)\)/\([0,1]\): virgole da separatore, false positive.

**Ancore rinominate**: `prerequisiti` (h2) rimossa (contenuto nel riquadro prerequisiti; nessun inbound). Tutti gli altri id conservati, inclusa **`sec-6` vincolata da Sezione_3_1** (verificato dal revisore).

## 1.2 — Score reputazionali di IP e dominio

**Definizioni scritte** (testo senza formula, per il cover test):
- Reputazione — un numero in [0,1]: la probabilità, condizionata alle feature osservate e a un modello esplicito, che il prossimo evento del traffico del mittente sia abusivo (fissati orizzonte e nozione di evento abusivo).
- Modello discriminativo — la regressione logistica di F4 applicata alle feature del mittente (forma [INF]).
- Beta-Bernoulli — sotto le ipotesi (i)–(iii), la posterior è una Beta coi conteggi reali sommati ai virtuali; la media è (α₀+k)/(α₀+β₀+m).
- Miscela cold start — combinazione convessa di score personale e prior del vicinato col peso w = m/(m+m₀); il vicinato entra una sola volta.

**Esempi numerici** (13 verifiche con python + rifatti a mano dal revisore, tutti OK):
- Verdetto: 500·0,004 − 3·0,9 = 2 − 2,7 = −0,7 → σ(−0,7) ≈ 0,33.
- Quartiere cattivo: Beta(3,7) → 0,3; con m=20, k=0 → Beta(3,27) → 0,1; con k=2 → Beta(5,25) → 5/30 ≈ 0,17.
- Miscela: 0,7·0,4 + 0,3·0,8 = 0,52.
- Soluzioni: −2,35 → r ≈ 1/11,5 ≈ 0,09 (e^{2,35} ≈ 10,5); 3/2000 = 0,15% (viola < 0,1%); Beta(5,7) → 5/12 ≈ 0,42; miscela 0,4.

**Figure**: nessuna (pagina di modellazione).

**Scelte di giudizio e incertezze**:
- I tre «N.B. — definizione rigorosa» sono diventati blocchi Definizione; il «caso limite + onestà» del §3 spostato in blocco Attenzione adiacente (testo integro, dedup di una formula enunciata due volte).
- Il §4 (UCB vs LCB: quale bordo è prudente) reso come blocco Attenzione unico.
- ⚠ Preesistente, conservato per fedeltà: «Tre reclami ogni mille consegne bastano per essere fuori» — 3/1000 = 0,3% esatto è il bordo della regola «c > 0,3%», non oltre. Da decidere in revisione se precisare.
- Controllo 8: 4 segnalazioni (riferimenti «4.5», «D.2», «1.1» e il separatore migliaia «2.000») — false positive. Controllo 9: 5 segnalazioni (intervalli [0,1] e Beta(1,1)) — false positive da virgola-separatore.

**Ancore rinominate**: `prerequisiti` (h2) rimossa (nessun inbound). Tutti gli altri id conservati (ex-2/3/5, sol-2/3/5 inclusi).

## F5 — Segnali e rilevamento

**Definizioni scritte** (testo senza formula, per il cover test):
- Deviazione standard — un numero mai negativo, nella stessa unità dei dati: misura quanto, in tipico, i dati si allontanano dalla media; radice della media dei quadrati degli scarti.
- z-score — un numero puro: quante deviazioni standard un valore dista dalla media (definito solo con σ > 0).
- CUSUM — un accumulatore mai negativo: somma gli sforamenti oltre il livello atteso al netto del margine; le osservazioni sotto il livello lo svuotano, mai sotto zero; allarme oltre la soglia.
- Token bucket — un contatore di gettoni con un tetto: ogni messaggio consuma un gettone, la ricarica è a velocità costante, a secchio vuoto si rifiuta temporaneamente.

**Esempi numerici** (11 verifiche con python + rifatti a mano dal revisore, tutti OK):
- σ degli 8 numeri (2,4,4,4,5,5,7,9): μ = 40/8 = 5; quadrati degli scarti sommano 32; σ = √4 = 2.
- z(9) = 2; soluzioni: z(2) = −1,5; z(1800) = 4.
- Trace CUSUM (μ₀=10, κ=1): 1, 3, 1, 4, 7 → allarme (7 > 5); soluzione: 1, 3, 5 → allarme al terzo passo.
- Token bucket: ricarica 2·1,5 = 3; min(10, 3) = 3; soluzione: 5 passano, il 6º dopo 1 minuto.

**Figure**:
- Barre CUSUM (1, 3, 1, 4, 7) in scala 20 px/unità con soglia h=5 a y=140: solo l'ultima barra la supera — illustra l'esempio del §2. Geometria verificata da me e dal revisore; etichetta della soglia spostata a sinistra su rilievo (si sovrapponeva all'ultima barra).

**Scelte di giudizio e incertezze**:
- La «Trappola dei simboli» d'apertura (4 lettere riciclate) resa blocco Attenzione in testa, come nel vecchio.
- Su rilievo del revisore: regola di consumo/rifiuto portata dentro il def del token bucket; clausola «misura» nel def di σ; drenaggio esplicito nel def CUSUM (tutto testo già presente in pagina).
- ⚠ Preesistente, conservato: la condizione dello z-score «n ≥ 1 e dati non tutti uguali» è ridondante (con n = 1 i dati sono banalmente tutti uguali): la congiunzione resta corretta, ma la forma effettiva è n ≥ 2.

**Ancore rinominate**: `prerequisiti` (h2) rimossa (nessun inbound). Tutti gli altri id conservati.

## 1.3 — Warmup di IP e dominio

**Definizioni scritte** (testo senza formula, per il cover test):
- Piano di crescita — il volume di ogni giorno è il minimo tra il tetto e il volume iniziale moltiplicato per il fattore di crescita elevato al giorno (crescita geometrica con tetto).
- Fattore del giorno ρ_d — il moltiplicatore effettivamente applicato quel giorno: ρ_max se tutte le soglie di qualità sono rispettate, altrimenti ρ_hold (=1 mantiene, <1 arretra).
- Probabilità di accettazione — una probabilità: sigmoide di un punteggio che premia la buona reputazione (a·(1−r)) e penalizza l'anomalia di volume (−b·z_V); z_V definito con σ_V>0, convenzione z_V:=0 a storico insufficiente.

**Esempi numerici** (11 verifiche con python + rifatti a mano dal revisore, tutti OK):
- Serie 100·1,5^d: 150, 225, ≈338, ≈506, ≈759, ≈1139 → tetto 1000 al giorno 6.
- Regime/picco: σ(1,2) ≈ 0,77; σ(−1,8) ≈ 0,14 («sei su sette differite»: 1−0,14 ≈ 6/7).
- Soluzioni: 50·2³ = 400 (giorno 3); indicatrice 0 con bounce 3% > 2%; σ(0) = 0,5.

**Figure**:
- Barre della serie geometrica (scala 1 px = 5 email; altezze 20, 30, 45, 67,5, 101,3, 151,9 e barra al tetto 200 con linea a y=40) — illustra «geometrica con tetto» del §2. Coerenza numerica verificata dal revisore (arrotondamenti sub-pixel su 101,25 e 151,875).

**Scelte di giudizio e incertezze**:
- Prima stesura RESPINTA dal revisore sui cover test dei def §3 e §4; corretta: il def §3 ora definisce ρ_d e la regola di scelta a parole; il def §4 ora definisce P_accept (tipo probabilità, struttura dei segni esplicitata: a premia 1−r, b penalizza z_V) prima delle ipotesi su z_V. Riesaminata e approvata.
- ⚠ Ereditato dal vecchio, conservato: la prosa spiega 𝟙[·] e ∧ «li conosci già entrambi», ma la formula usa i cases (senza 𝟙): il paper introduce 𝟙, la pagina lo censisce in tabella. Da valutare in revisione se allineare formula e prosa.
- ⚠ Ereditato dal vecchio, conservato: la formula di z_V usa V_t mentre l'indice dei giorni altrove è d (V_d); V_t non è in tabella simboli.

**Ancore rinominate**: `prerequisiti` (h2) rimossa (nessun inbound). Tutti gli altri id conservati (ex-3, ex-4, sol-3, sol-4 inclusi).

## F3 — Teoria dell'informazione

**Definizioni scritte** (testo senza formula, per il cover test):
- Sorpresa — un numero mai negativo, misurato in bit: quantifica quanto un evento è raro; grande per gli improbabili, zero per i certi.
- Entropia di Shannon — un numero in [0, log₂ n] bit: la sorpresa media di una sorgente, cioè il valore atteso della sorpresa dei suoi esiti.
- Entropia delle sorgenti H_src — l'entropia di Shannon delle quote di volume: misura quanto il traffico è sparpagliato fra le sorgenti (non definita a traffico nullo).
- PMI — un numero reale: misura quanto la co-occorrenza osservata di due entità scarta dal puro caso (dall'indipendenza); PMI⁺ azzera i negativi.

**Esempi numerici** (13 verifiche con python + rifatti a mano dal revisore, tutti OK):
- Moneta equa H = 1 bit; truccata 0,9/0,1 → H ≈ 0,47; quattro equiprobabili H = 2; evento certo H = 0.
- Concentrato: 0,97·0,044 + 3·0,01·6,64 ≈ 0,24 bit (esatto 0,242).
- PMI: rapporto 5 → log₂ 5 ≈ 2,32; rapporto 1 → 0; rapporto 0,1 → ≈ −3,32.
- Soluzioni: log₂ 8 = 3; H(quota 1) = 0; 0,2·0,5 = 0,1 → PMI = 0.

**Figure**:
- Curva dell'entropia binaria H(p) come polilinea di 21 punti calcolati esattamente (errore max 0,05 px), con p = 0,5 → 1 bit e p = 0,9 → ≈ 0,47 evidenziati — illustra gli esempi del §2. Verificata da me e dal revisore.

**Scelte di giudizio e incertezze**:
- I tre «N.B. — definizione rigorosa» sono diventati blocchi Definizione (+ «Come si calcola»); su rilievo del revisore aggiunta la frase di tipo a H_src.
- ⚠ Fuori perimetro ma da sapere: `index.html` mostra ancora il badge «bozza» per F3 (e per tutte le pagine rifatte) — il brief vieta di toccare index.html; da riallineare in una passata futura decisa da Alex.
- Controllo 9: 2 segnalazioni (intervalli (0,1] e [0,1]) — false positive da virgola-separatore.

**Ancore rinominate**: `prerequisiti` (h2) rimossa (nessun inbound). **`sec-4` vincolata da Sezione_3_2 conservata** (verificato dal revisore).

## F6 — Similarità, hashing e codifiche

**Definizioni scritte** (testo senza formula, per il cover test):
- Funzione di hash — input qualsiasi → numero di lunghezza fissa, deterministico e «ben mescolato»; collisione = due input diversi, stesso output (probabilità 1/N per coppia fissata).
- Prefisso e k-anonimità — i primi byte dell'hash; nascondersi in un gruppo di almeno k indistinguibili.
- Similarità di Jaccard — un numero in [0,1]: la quota di elementi condivisi sul totale distinto.
- Min-hash — il minimo degli hash degli elementi; la probabilità che due insiemi condividano il minimo è la loro similarità di Jaccard.
- LSH — firma tagliata in b bande da r righe; candidati = identici in almeno una banda; la probabilità è la curva a S.
- Rice–Golomb — delta = quoziente per 2^k più resto; quoziente in unario, resto in k bit binari.

**Esempi numerici** (16 verifiche con python + rifatti a mano dal revisore, tutti OK):
- 2³² ≈ 4,3 miliardi; P = 4,3 milioni → 0,001; 2¹⁶ = 65 536.
- Jaccard: 2/5 = 0,4 (entrambi gli esempi).
- LSH (r=2, b=3): s=0,3 → ≈0,25; s=0,9 → ≈0,99; s=0,5 → ≈0,58; soglia (1/3)^½ ≈ 0,58.
- Rice (k=2): δ=11 → q=2, r=3 → «11011» (5 bit); δ=2 → «010»; δ=6 → q=1, r=2 → «1010».

**Figure**:
- Curva a S di P_cand per r=2, b=3: polilinea di 21 punti calcolati esattamente, con s=0,3 e s=0,9 evidenziati — illustra il §5. Verificata punto per punto da me e dal revisore.

**Scelte di giudizio e incertezze**:
- ⚠ Conservato il marcatore preesistente «[DA VERIFICARE la convenzione preferita dalla wiki]» sul caso degenere J(∅;∅): la pagina stessa lascia aperta la scelta (convenzione :=1 oppure esclusione a monte) — decisione per Alex.
- «Da F4: le potenze» → «Da F0.2: le potenze» (la potenza è definita lì; stesso retarget già fatto in 1.3).
- \(2^{16} = 65.536\) riscritto \(65\,536\) (spazio sottile: convenzione delle migliaia già usata in F0.2/F0.3; evita l'ambiguità col punto decimale).
- I tre blocchi «Onestà» conservati come blocchi Attenzione con la stessa etichetta.
- Su rilievo del revisore: ripristinati «mette nello stesso secchio» (meccanismo LSH) e «La probabilità…» davanti alla formula di P_cand.
- Controllo 9: 6 segnalazioni, tutte insiemi \(\{1,2,3\}\) — virgole da separatore, false positive.

**Ancore rinominate**: `prerequisiti` (h2) rimossa (nessun inbound). **`sec-6` vincolata da Sezione_4_3 conservata** (verificato dal revisore).

## 1.4 — Difese: spam distribuito ed elusivo

**Definizioni scritte** (testo senza formula, per il cover test):
- Snowshoe — N sorgenti con volume sotto la soglia per-sorgente, scelte perché il prodotto N·v raggiunga il volume obiettivo complessivo.
- Grafo della campagna — grafo non orientato: nodi (messaggi, IP, domini, URL, registrar) uniti da un arco quando condividono una relazione osservata; componente connessa = insieme massimale di nodi collegati da un cammino.
- Indice snowshoe — un numero (a meno di scala): il rapporto fra l'entropia delle sorgenti e quella del contenuto.
- DMARC — algebra booleana: si passa se almeno una delle due strade (SPF o DKIM) è autenticata e allineata col From.

**Esempi numerici** (9 verifiche con python + rifatti a mano dal revisore, tutti OK):
- Snowshoe: 200 sorgenti · 50 email = 10 000, tutte a metà della soglia 100.
- Indici: campagna 2/0,24 ≈ 8,3; legittimo 0,24/2 = 0,12 (≈ 70× di differenza; H_content = 0,24 coincide col conto di F3).
- Soluzioni: 30 000/150 = 200; 1,5/0,5 = 3 e 0,5/1,5 ≈ 0,33; DMARC (V∧F)∨(V∧V) = V → pass.

**Figure**:
- Grafo schematico della campagna: 3 messaggi, 3 IP distinti, 1 URL condiviso; 6 archi che collegano esattamente i centri dei nodi; connettività (unica componente di 7 nodi) verificata con visita del grafo da me e coordinate verificate dal revisore. Illustra il §2(b).

**Scelte di giudizio e incertezze**:
- Prima stesura RESPINTA dal revisore: (1) l'annotazione testuale nell'SVG sbordava dal viewBox (il letter/word-spacing [v2] di style.css eredita anche dentro `svg text`); (2) def dell'indice snowshoe senza glossa di H_src/H_content. Corretta: annotazione rimossa (il messaggio sta nella figcaption), def completato, V_target glossato. Riesaminata.
- ⚠ **Segnalazione di sistema per Alex**: `style.css` azzera la spaziatura [v2] per formule e codice ma non per il testo dentro gli SVG — valutare una regola `svg text{letter-spacing:normal;word-spacing:normal}` nel foglio condiviso (non applicata: il brief vieta di modificare lo standard in corsa).
- 10.000/30.000 in math riscritti 10 000/30 000 (spazio sottile, convenzione della wiki).
- Titolo `<title>` allineato all'h1 («ed elusivo»).

**Ancore rinominate**: `prerequisiti` (h2) rimossa (nessun inbound). Tutti gli altri id conservati.
- «Lettura» del §3 resa blocco «Intuizione — il termostato» (l'analogia sta nel blocco giusto).
- Riferimento «la potenza di F4» corretto in «la potenza di F0.2» (la potenza è definita lì).
- Footer con F6 nel percorso ripristinato su rilievo del revisore.

## F2 — Algebra lineare e catene di Markov

**Definizioni scritte** (testo senza formula, per il cover test):
- Matrice — una tabella di numeri (array bidimensionale); il prodotto matrice·vettore è una pila di prodotti scalari: una macchina che trasforma vettori in vettori.
- Colonna-stocastica / catena di Markov — ogni colonna somma a 1 (probabilità in uscita da uno stato); la catena è senza memoria: il prossimo passo dipende solo da dove sei.
- Distribuzione stazionaria — un vettore di probabilità che la catena non cambia (il punto fermo).
- Autovettore / autovalore — un vettore non nullo che la matrice non devia: lo riscala soltanto, del fattore autovalore.
- Velocità di convergenza — sotto le ipotesi dichiarate, l'errore dopo k passi decade come il modulo del secondo autovalore alla k.
- Inversa — l'unica matrice che annulla l'effetto di una matrice quadrata non singolare.
- Serie di Neumann — l'inversa di (I − αM) come somma dei contributi di tutti i cammini, smorzati da α^k.

**Esempi numerici** (11 verifiche con python + rifatti a mano dal revisore in aritmetica esatta, tutti OK):
- M(0,5; 0,5) = (0,55; 0,45); meteo (1; 0) → (0,9; 0,1) → (0,83; 0,17).
- Stazionaria: 0,2 = 0,3x → x = 2/3, prova del nove 0,9·⅔ + 0,2·⅓ = ⅔; sequenza 1; 0,9; 0,83; 0,781; 0,747 → ⅔.
- Autovettori: M(2; 1) = (2; 1) (λ=1); M(1; −1) = (0,7; −0,7) (λ₂=0,7); errori ×0,7 esatti (errore iniziale proporzionale a v₂).
- Serie geometrica: 1/(1−0,5) = 2; controesempio M = 2I divergente.
- Soluzioni: (0,62; 0,38); M(3; 1) = (2,9; 1,1), rapporto 2,64 ≠ 3; 1/0,9 ≈ 1,111.

**Figure**:
- Successione della probabilità di sole (punti a y = 60, 105, 136,5, 158,6, 174) con la linea dell'equilibrio ⅔ a y = 210 — illustra §3/§5; il revisore ha verificato anche che le distanze dalla linea si contraggono di fattore 0,7. Didascalia precisata: asse verticale da 0,6 a 1.

**Scelte di giudizio e incertezze**:
- Il blocco esistenza/unicità/convergenza + teorema ergodico [PROP] spostato dal N.B. a blocco Attenzione adiacente al def (testo integro, controesempio incluso).
- ⚠ Ereditato: i blocchi «definizione rigorosa» di §5 e §6b sono proposizioni/teoremi etichettati «Definizione»; in §5 la precisazione asintotica segue la formula (deroga a «formula ultima», conservata per fedeltà).
- ⚠ «Non devia: lo riscala soltanto» è impreciso per λ negativi/complessi; la formula adiacente e la parentesi sul caso complesso (ereditata) delimitano.

**Ancore rinominate**: `ex-6` → `esercizi`; `prerequisiti` (h2) rimossa. Nessun link esterno puntava a frammenti di questa pagina.

## 2.1 — PageRank: il random surfer

**Definizioni scritte** (testo senza formula, per il cover test):
- PageRank — il vettore che assegna a ogni pagina un numero in [0,1] con somma 1: la frazione di tempo di lungo periodo del navigatore casuale, cioè la distribuzione stazionaria (ben posta dopo la costruzione di G).
- Formula scalare — pioggia uniforme del teletrasporto più le fette: ogni pagina divide il suo punteggio in parti uguali fra i link uscenti.
- Matrice di Google — link, dangling e teletrasporto in un'unica matrice stocastica, irriducibile e aperiodica.

**Esempi numerici** (verifiche in frazioni esatte, mie + del revisore, tutte OK):
- Tre pagine (d = 0,5): PR(A) = 1/3, PR(B) = 1/4, PR(C) = 5/12; prova del nove 4/12+3/12+5/12 = 1.
- Convergenza: 0,85^k = 10⁻⁶ → k ≈ 85 (esatto: 85,01).
- Soluzione: due pagine, PR(A) = 1/4, PR(B) = 3/4.

**Figure**:
- Grafo diretto del web a tre pagine (A→B, A→C, B→C, C→A con frecce marker): il revisore ha verificato coordinata per coordinata che ogni freccia parte e arriva sui bordi dei nodi giusti nel verso giusto. Illustra l'esempio del §2.

**Scelte di giudizio e incertezze**:
- Il «N.B.» del §2 è diventato la Definizione del def; quello del §4 un blocco Attenzione («la buona posizione», serie di Neumann). Testo integro.
- ⚠ Ereditato: la matrice G è costruita a parole, senza formula esplicita (scriverla sarebbe stato inventare matematica: scelta conservativa conforme al brief).

**Ancore rinominate**: `ex-4` → `esercizi`; `prerequisiti` (h2) rimossa. Nessun link esterno puntava a frammenti di questa pagina.

## 2.2 — TrustRank: semi e propagazione

**Definizioni scritte** (testo senza formula, per il cover test):
- Oracolo / budget / funzione di trust — il giudizio umano certo (0 o 1), costoso: budget di L chiamate; il trust è una funzione in [0,1] calcolabile per tutti che ordina come farebbe l'oracolo.
- Semi e distribuzione d — le pagine promosse dall'oracolo fra le prime L per inverse PageRank (almeno una); d è l'uniforme sui semi, zero altrove.
- TrustRank — un vettore: il trust di ogni pagina, una distribuzione definita come il Personalized PageRank col teletrasporto sui semi.

**Esempi numerici** (8 verifiche in frazioni esatte, mie + del revisore, tutte OK):
- Anello (α = 0,5): t* = (4/7, 2/7, 1/7) ≈ (0,571; 0,286; 0,143); somma 1; rapporto 4:2:1.
- Dangling non corretto: t* = (0,5; 0,25; 0,125), somma 0,875 (l'invariante «distribuzione» cade).
- Potenze: 0,85⁵ ≈ 0,44; 0,85¹⁰ ≈ 0,20; 0,85¹⁴ ≈ 0,10; 0,85¹⁵ ≈ 0,087 < 0,1; 0,85²⁰ ≈ 0,04.

**Figure**:
- Anello Seme → A → B → Seme con i valori di trust dell'esempio: frecce verificate nodo per nodo dal revisore; illustra il trust dampening (dimezza a ogni hop).

**Scelte di giudizio e incertezze**:
- Prima stesura RESPINTA dal revisore: il def §3 apriva con la formula nuda. Corretto con la frase di tipo (vettore/distribuzione — deriva dall'intro e dall'Ipotesi già presenti) prima della ricorsione. Riesaminata.
- Il «N.B. — ipotesi» è ora il paragrafo «Ipotesi.» dentro il def §3; l'assunzione di separazione approssimata è un blocco Attenzione dedicato in §1.
- Nav.top con link Soluzioni ripristinato; footer con «poi la sezione 3».

**Ancore rinominate**: `ex-4` → `esercizi`; `prerequisiti` (h2) rimossa. Nessun link esterno puntava a frammenti di questa pagina.

## 2.3 — Spam mass e l'isolamento delle link farm

**Definizioni scritte** (testo senza formula, per il cover test):
- Link farm — un mucchio di pagine fantasma, fitte di link reciproci, costruite per pompare il PageRank di un bersaglio.
- PR⁺ / spam mass — il PageRank calcolato col teletrasporto ristretto al nucleo fidato (non rinormalizzato); la spam mass assoluta è la differenza col PageRank normale, la relativa è la sua frazione: la parte di rank che il web fidato non giustifica.

**Esempi numerici** (8 verifiche con python + rifatti a mano dal revisore, tutti OK):
- Pioggia: 0,15/10⁶ = 1,5·10⁻⁷; farm da 10 000 pagine → ≈ 0,0013 al bersaglio ≈ 1.300 volte la media (esatto 1.275).
- m della farm ≈ 0,999; m della pagina onesta = 0,1.
- Soluzioni: m = 0,25; farm da 1.000 → ≈ 1,3·10⁻⁴, ≈ 130 volte (rapporto lineare).

**Figure**: nessuna (pagina breve e numerica).

**Scelte di giudizio e incertezze**:
- Separatori delle migliaia in math riscritti con spazio sottile (1 000 000, 10 000, 1 000); in prosa resta lo stile italiano «1.300» (falso positivo noto del controllo 8).
- L'elenco a un solo punto (PR(p)) sciolto in prosa; frase del lead = sintesi senza matematica.
- ⚠ Ereditato: nel def §2 il paragrafo interpretativo segue la formula (deroga a «formula ultima», conservata per fedeltà — stessa classe di F2).
- Blocco def misto «Definizione + Come si calcola»: pattern del modello F0.7, ricorre qui come in 1.2/2.1/2.2.

**Ancore rinominate**: `ex-4` → `esercizi`; `prerequisiti` (h2) rimossa. Nessun link esterno puntava a frammenti di questa pagina.

## 3.1 — E-E-A-T e learning-to-rank

**Definizioni scritte** (testo senza formula, per il cover test):
- E-E-A-T — una sigla dalle linee guida per i valutatori di qualità [DOC]: Experience, Expertise, Authoritativeness, Trust; non è un punteggio dentro l'algoritmo.
- Pipeline — i valutatori producono etichette (query, documento, voto); le etichette addestrano un modello di learning-to-rank che massimizza NDCG e generalizza a tutte le query.

**Esempi numerici** (verificati, tutti OK):
- RankNet: σ(1,5 − 0,3) = σ(1,2) ≈ 0,77; soluzione: punteggi identici → σ(0) = 0,5.

**Figure**: nessuna (pagina discorsiva).

**Scelte di giudizio e incertezze**:
- «L'oracolo fa da metro e da maestro, il modello generalizza» spostata nel blocco Intuizione del §2 (testo identico).
- La pipeline in 4 punti dentro un def con etichetta «Come funziona».
- Il link vincolante in uscita F4#sec-6 conservato in nav e prerequisiti (verificato dal revisore).
- I blocchi «Onestà» e le trappole dei simboli conservati come Attenzione.

**Ancore rinominate**: `ex-4` → `esercizi`; `prerequisiti` (h2) rimossa. Nessun link esterno puntava a frammenti di questa pagina.

**Nota di processo**: da questa pagina in poi, dopo ogni commit la riga di registro viene appesa a `AVANZAMENTO.md` (istituito da Alex con commit 4788447) e viaggia nel commit successivo, per mantenere un commit per pagina.

## 3.2 — Knowledge Graph, co-citazioni, reputazione

**Definizioni scritte** (testo senza formula, per il cover test):
- Knowledge Graph — un grafo dove i nodi sono entità (persone, organizzazioni, opere, luoghi), non pagine.
- Peso dell'arco — la PMI⁺ della co-citazione: quanto due entità compaiono insieme oltre il caso, coi negativi azzerati.
- W e rep — matrice dei pesi normalizzata per colonna (diagonale nulla, colonne nulle trattate come i dangling); la reputazione è l'unica distribuzione soluzione della propagazione con smorzamento α.

**Esempi numerici** (7 verifiche + revisore, tutti OK):
- PMI: rapporto 10 → log₂ 10 ≈ 3,32; rapporto 1 → 0; soluzione: rapporto 5 → ≈ 2,32.
- Contributo dei vicini: 0,75·0,8 + 0,25·0,1 = 0,625; soluzione: 0,6.
- Verificata anche l'identità PMI⁺(a;a) = −log₂ P(a) citata nella costruzione di W.

**Figure**: nessuna (la macchina di propagazione è già illustrata in 2.2).

**Scelte di giudizio e incertezze**:
- Etichetta dell'esempio §3 cambiata da «la media pesata dei vicini» a «il contributo dei vicini»: la pagina stessa (fix f388186) precisa «Non è una media»; l'etichetta contraddiceva il testo.
- Prima stesura RESPINTA dal revisore: nello spostamento dell'intro §3 era caduto il marcatore epistemico [INF]. Reintegrato nell'Intuizione. Riesaminata.
- I due «N.B.» del §3 (costruzione di W; tipo e buona posizione) sono ora le due parti del def.

**Ancore rinominate**: `ex-4` → `esercizi`; `prerequisiti` (h2) rimossa. Link vincolante in uscita F3#sec-4 conservato (nav + prerequisiti).

## 4.1 — Safe Browsing: blacklist a prefissi di hash

**Definizioni scritte** (testo senza formula, per il cover test):
- Flusso di verifica — canonicalizzazione → SHA-256 → confronto locale dei primi 4 byte → su match, richiesta degli hash completi inviando solo il prefisso → verdetto locale; URL e hash completo non lasciano mai il dispositivo.

**Esempi numerici** (verificati, tutti OK):
- 4,3·10⁶/2³² ≈ 0,001 = 0,1%; soluzione: 8,6·10⁶/2³² ≈ 0,002 (lineare, P ≪ 2³²).

**Figure**: nessuna (la matematica è in F6; il flusso è procedurale).

**Scelte di giudizio e incertezze**:
- Corretto refuso preesistente «privacy: Dietro» → «privacy: dietro».
- La parte k-anonimità / «non è segretezza assoluta» del §3 in blocco Attenzione; i due marcatori [INF] conservati (verificati dal revisore).
- Il flusso in 5 passi in un def «Come funziona» (verbatim).

**Ancore rinominate**: `ex-4` → `esercizi`; `prerequisiti` (h2) rimossa. Nessun link esterno puntava a frammenti di questa pagina.

## 4.2 — Web Risk API

**Definizioni scritte** (testo senza formula, per il cover test):
- Web Risk — la versione enterprise di Safe Browsing: le stesse liste, esposte alle aziende; la differenza fra le interfacce è dove far girare la matematica di 4.1.
- Le due modalità — Update API (DB locale a prefissi: privata, prezzo la sincronizzazione) contro Lookup API (URL al server: semplice, k-anonimità sacrificata).

**Esempi numerici**: la pagina non contiene aritmetica propria (rimanda a 4.1); nessun esempio numerico possibile senza aggiungere contenuto.

**Figure**: nessuna.

**Scelte di giudizio e incertezze**:
- L'ul delle due modalità in un def dedicato; la «manopola privacy contro semplicità» in blocco Intuizione; [INF] del §3 conservato.
- Micro-aggiunta nel footer: «— l'ultima tappa.» (fattuale: 4.3 è la 17ª).

**Ancore rinominate**: `ex-3` → `esercizi`; `prerequisiti` (h2) rimossa. Nessun link esterno puntava a frammenti di questa pagina.

## 4.3 — Sincronizzazione blacklist e falsi positivi

**Definizioni scritte** (testo senza formula, per il cover test):
- Compressione delle aggiunte — la catena ordina → delta → Rice: valore base grezzo, solo i P−1 delta codificati.
- Rimozioni e sigillo — viaggiano gli indici (riferiti alla lista ordinata pre-cancellazione, applicati in ordine decrescente); dopo il diff, checksum dell'intero DB e ri-sincronizzazione da zero se non torna.

**Esempi numerici** (8 verifiche con python + rifatti a mano dal revisore, tutti OK):
- Delta medio 2³²/4,3·10⁶ ≈ 1 000; k ≈ log₂ 1 000 ≈ 10; ≈ 12 bit contro 32 («quasi un terzo», stima di massima come nell'originale).
- Soluzione Rice (k=2): delta 4 e 12 → codici «1000» e «111000»; ricostruzione 100, 104, 116.

**Figure**: nessuna.

**Scelte di giudizio e incertezze**:
- «1.000» in math riscritto 1 000 (2×, convenzione della wiki); [INF] del §4 conservato; link vincolante in uscita F6#sec-6 in nav e prerequisiti (verificato dal revisore).
- Caduta la frase di raccordo «E qui i conti spiegano perché funziona così bene:» nella fusione dei paragrafi (retorica di transizione; la sostanza è conservata).

**Ancore rinominate**: `ex-4` → `esercizi`; `prerequisiti` (h2) rimossa. Nessun link esterno puntava a frammenti di questa pagina.

---

# Pagine lasciate invariate

<!-- pagina + criterio di dubbio scattato -->

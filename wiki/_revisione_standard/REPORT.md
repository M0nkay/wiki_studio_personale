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

---

# Pagine lasciate invariate

<!-- pagina + criterio di dubbio scattato -->

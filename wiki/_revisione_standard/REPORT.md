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

---

# Pagine lasciate invariate

<!-- pagina + criterio di dubbio scattato -->

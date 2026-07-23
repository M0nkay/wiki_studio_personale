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

---

# Pagine lasciate invariate

<!-- pagina + criterio di dubbio scattato -->

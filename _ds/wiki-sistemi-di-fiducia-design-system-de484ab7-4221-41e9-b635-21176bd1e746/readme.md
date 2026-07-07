# Wiki «Sistemi di Fiducia» — Design System

Design system di studio **accessibile (ADHD + dislessia)** per una wiki personale, interamente in **italiano**, che accompagna la lettura di un paper sui sistemi di fiducia (filtri antispam bayesiani, PageRank/TrustRank, E-E-A-T, Safe Browsing). Un solo prodotto: **pagine di studio HTML semplici**, leggibili e modificabili a mano, che funzionano in locale e offline e stampano pulite.

Il principio che governa ogni scelta: **accessibilità prima dell'estetica**. Niente decorazioni, niente animazioni, niente densità visiva: ogni elemento esiste per ridurre il carico cognitivo.

## Fonti

- Codebase montato `design/` (File System Access API, sola lettura), 20 file HTML + 1 prompt:
  - `design/Bella_copia_1.1_Filtraggio_Bayesiano.html` — **la fonte di verità del design system** (colori, tipografia, componenti, MathJax); unica pagina «verificata».
  - `design/F2…F6_*.html`, `design/Sezione_1_2…4_3_*.html` — pagine di contenuto in stato «bozza» (stesso CSS + badge).
  - `design/Glossario_globale.html` — glossario dei simboli (tabella `gl` con righe-separatore di sezione).
  - `design/Come_si_studia.html` — pagina di metodo.
  - `design/Prompt_Claude_Design_Wiki_Sistemi_di_Fiducia.md` — brief del progetto wiki: vincoli non negoziabili, stati delle pagine, percorso di lettura.
- Nessun Figma, nessun repo remoto, nessun asset grafico (il prodotto non ne ha).

## Regole non negoziabili (dal brief)

1. **Verdana**, sfondo crema, interlinea generosa, blocchi corti e molto spazio bianco.
2. **Grassetto** per i termini chiave; **mai corsivo o maiuscolo per enfasi** (il corsivo compare solo per i termini stranieri, es. *sample*, *shrinkage*, e nelle `caption` delle tabelle).
3. Focus da tastiera **visibile** (`outline:2px solid var(--navy)`); `prefers-reduced-motion` rispettato (lo smooth-scroll si disattiva).
4. **MathJax 3 da CDN**, delimitatori `\( \)` e `\[ \]`, **virgole decimali italiane** (`0{,}5`): configurazione da riusare identica, non toccarla.
5. HTML semplice, senza build step; stampa pulita (`quicknav` e `toc` nascosti in stampa).
6. Componenti CSS riusati **tali e quali**: callout `intu`/`warn`/`deep`/`ex`/`nb`, `formula` e `formula key`, tabelle `gl` e `cm`, `quicknav`, `toc`, link `xref`, `badge`.

## CONTENT FUNDAMENTALS

- **Lingua**: italiano, sempre. Termini tecnici inglesi introdotti tra parentesi con traduzione: «stima a contrazione (inglese *shrinkage*, "restringimento")».
- **Voce**: docente in prima persona che parla a **te** studente. «Lo monto pezzo per pezzo, perché ognuno serve a leggere il resto», «Tieni questa catena sotto mano», «Attento al denominatore».
- **Tono**: didattico, onesto, mai pomposo. Dichiara i propri limiti in box dedicati: «Onestà — dove il rigore è sacrificato (consapevolmente)».
- **Struttura del discorso**: blocchi corti; prima l'intuizione, poi la definizione, poi l'esempio numerico svolto, poi la «**prova del nove**» (verifica su numeri facili o casi estremi — formula ricorrente della casa).
- **Etichette dei callout**: maiuscolo via CSS, testo con em-dash: «Intuizione — la fallacia del tasso di base», «Attenzione — il denominatore», «Approfondimento (opzionale) — …», «Da non confondere — …», «Trappola dei simboli — …», «Esempio numerico — …», «Esercizi — §N», «N.B. — definizione rigorosa: …».
- **Punteggiatura e glifi**: virgolette «caporali», punto mediano `·` come separatore, frecce `→` nelle catene logiche, `↩` per i ritorni, `§` per le sezioni, `↑ inizio`.
- **Numeri**: virgola decimale italiana, anche in MathJax: `\(0{,}5\)`. Migliaia col punto: «10.000».
- **Grassetto** = termine chiave alla prima occorrenza o passaggio da fissare. Niente emoji, mai.
- **Stati delle pagine**: «verificata» (solo 1.1) · «bozza» (generata e auto-collaudata, non ancora studiata insieme: si legge a schermo e non si trascrive) · «in preparazione».

## VISUAL FOUNDATIONS

- **Colori**: carta crema `#FBF7EF`, inchiostro caldo quasi-nero `#22201c`, titoli navy `#1F3A5F` / navy2 `#2c4a6e`. Superfici: `#F1E9DA` (formula/code), carta calda `#FFF8EC` (toc, pill, th), evidenziatore hover `#fff2c4`. Bordi sabbia `#e2d6bf` / `#e8ddc6`. Quattro famiglie di callout a coppia fondo-pastello + bordo-saturo: verde (intuizione), arancio (attenzione), blu (approfondimento), grigio (esempio/esercizi) + azzurrino N.B. Tutto caldo e desaturato; il colore codifica **funzione**, mai decorazione.
- **Tipografia**: Verdana (fallback Tahoma, Trebuchet MS) — font di sistema, **nessun webfont**. Base html **118%** (≈19px, 112% mobile), corpo `line-height:1.75`, `letter-spacing:.012em`, `word-spacing:.03em`. Scala compatta: h1 1.7rem, h2 1.34rem (con filetto sotto), h3 1.12rem, h4 1rem. Mono: DejaVu Sans Mono/Consolas per `code` e simboli in tabella `gl`.
- **Layout**: colonna unica centrata, misura `46rem`; molto bianco verticale (h2 `margin-top:2.2em`, `hr` come respiro tra sezioni). Nessuna griglia multipla, nessun elemento fisso tranne la `quicknav` sticky.
- **Angoli**: piccoli e sistematici — 4px code, 6px pill della catena, 8px callout/formula, 10px leg/toc, 999px pill (quicknav, badge).
- **Ombre**: **nessuna**, mai. La profondità si fa con fondo + bordo.
- **Animazioni**: nessuna, tranne `scroll-behavior:smooth` (disattivato con `prefers-reduced-motion:reduce`). Niente transizioni.
- **Hover**: cambio di fondo a evidenziatore `#fff2c4` (pill, xref); sottolineatura per i link del toc. Niente effetti di pressione, niente trasformazioni.
- **Focus**: `outline:2px solid var(--navy); outline-offset:2px` su quicknav, summary del toc, xref.
- **Immagini**: **non esistono** — niente foto, illustrazioni, icone grafiche o loghi. La matematica MathJax è l'unica «grafica».
- **Tabelle**: bordi pieni sabbia, th su carta calda; `cm` (matrice di confusione) con semantica verde/giallo/rosso tenue; `gl` (glossario) con prima colonna mono e righe-separatore su `#fff2c4`.
- **Stampa**: navigazione e toc nascosti; il documento resta un foglio pulito.

## ICONOGRAFIA

**Non esiste iconografia grafica**: nessun SVG, nessun icon font, nessuna emoji, nessun PNG. Le uniche «icone» sono **caratteri Unicode** usati con parsimonia e sempre dentro il testo:

- `→` catene logiche e «quindi» (`.arrow` arancio nella catena di montaggio); `←` assegnazione nelle formule
- `↑ inizio` (quicknav) · `↩` ritorno agli esercizi · `§` riferimento di sezione · `·` separatore · `«»` citazioni

**Logo: assente.** Le fonti non contengono alcun marchio; dove servirebbe un'identità si scrive il nome per esteso («Wiki Sistemi di Fiducia») in Verdana grassetto navy. Non crearne uno.

## Correzioni e aggiunte intenzionali

1. `--link` era referenziato da `a.xref` nel CSS originale ma **mai definito** (il bordo tratteggiato non veniva reso). Qui è definito `--link: var(--navy)`: il tratteggio sotto gli xref ora appare, com'era nell'intento.
2. I link nudi (`a` senza classe) nel CSS originale cadevano sul blu di default del browser. Qui: `a{color:var(--navy)}` + hover a evidenziatore, coerente con xref/quicknav.
3. Badge `verificata` e `preparazione`: i tre stati sono previsti dal brief ma solo `bozza` aveva CSS. Aggiunti derivandoli dalla palette esistente (verde intu / grigio ex).
4. Componente React `Nota` a parte, ogni componente JSX è la trasposizione 1:1 di una classe CSS esistente; nessuna primitiva inventata (niente Toast, Tabs, Avatar…).

## Indice del progetto

- `styles.css` — entry point (solo `@import`)
- `tokens/colors.css` · `tokens/typography.css` · `tokens/base.css` — token e stili base
- `components/wiki.css` — CSS dei componenti, verbatim dalla fonte
- `components/` — componenti React: `callout/` (Callout), `formula/` (Formula), `tables/` (DataTable, ConfusionMatrix, GlossaryTable), `navigation/` (QuickNav, Toc, Xref), `badge/` (Badge), `pipeline/` (PipelineMap), `page/` (PageHeader, Nota)
- `guidelines/` — card di specimen (Type, Colors, Spacing, Brand)
- `ui_kits/wiki/` — ricreazione interattiva della pagina di studio 1.1 + glossario
- `templates/pagina-di-studio/` — template DC per nuove pagine della wiki
- `SKILL.md` — skill per l'uso del design system

## MathJax — snippet da riusare identico

```html
<script>
window.MathJax = {
  tex: { inlineMath: [['\\(','\\)']], displayMath: [['\\[','\\]']] },
  options: { skipHtmlTags: ['script','noscript','style','textarea','pre','code'] }
};
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"></script>
```

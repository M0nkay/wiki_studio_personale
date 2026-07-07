# Prompt per Claude Design — Wiki di studio «Sistemi di Fiducia» (v2, contenuti completi)

## Come usarlo (istruzioni per te, non fanno parte del prompt)
1. Apri **claude.ai/design** e crea un nuovo progetto.
2. **Importa come design system** `Bella_copia_1.1_Filtraggio_Bayesiano.html`, poi allega **tutti** gli altri file HTML della wiki (F2–F6, sezioni 1.2–4.3, `Glossario_globale.html`, `Come_si_studia.html`).
3. Incolla tutto ciò che sta sotto la riga come primo messaggio, poi rifinisci con commenti e modifiche dirette.

---

Costruisci il **contenitore** di una wiki di studio personale, interamente in **italiano**, per uno studente con **ADHD e dislessia gravi**. I file HTML allegati sono **tutte le pagine di contenuto, già complete**: il file della 1.1 è anche il **design system** (colori, tipografia, componenti, MathJax). Il tuo lavoro è **solo l'involucro**: home, navigazione tra le pagine, ricerca. **Non scrivere né riscrivere contenuto.**

## Vincoli non negoziabili
1. **Le pagine allegate non si toccano**: testi, formule, tabelle ed esercizi restano identici. Puoi solo aggiungere l'involucro di navigazione della wiki (barra comune, link precedente/successivo, ritorno alla mappa).
2. **Niente contenuto inventato**: nessuna formula, spiegazione o testo matematico nuovo, da nessuna parte. Se una pagina ti sembra incompleta, non completarla: segnalalo.
3. Ogni pagina resta **HTML semplice, leggibile e modificabile a mano** (niente build step, niente contenuto serializzato in JavaScript): le correzioni future avverranno con modifiche dirette ai file.
4. **MathJax 3 da CDN**, delimitatori `\( \)` e `\[ \]`, virgole decimali italiane: la configurazione è nell'head dei file — riusala identica.
5. **Riusa le classi CSS esistenti** (callout `intu`/`warn`/`deep`/`ex`/`nb`, `formula`, `formula key`, tabelle `gl`/`cm`, `quicknav`, `toc`, `xref`, `badge`).
6. **Funziona in locale, offline**, e **stampa pulita** pagina per pagina (navigazione e ricerca nascoste in stampa).
7. **Accessibilità prima dell'estetica**: Verdana, sfondo crema, interlinea generosa, blocchi corti, **grassetto** per i termini chiave (mai corsivo o maiuscolo per enfasi), focus da tastiera visibile, `prefers-reduced-motion` rispettato. Ogni scelta deve ridurre il carico visivo.
8. Su architettura, layout e dettagli: **decidi tu, motivando le scelte**, dentro i vincoli sopra.

## Cosa costruire
- **Home** — la «catena di montaggio» dell'intero paper: mappa visuale di tutte le pagine con **badge di stato** e avanzamento a colpo d'occhio. Stati: **verificata** (solo 1.1) · **bozza** (tutte le altre) · **in preparazione** (nessuna, ma lo stato esiste: servirà).
- **Navigazione comune** su ogni pagina: barra fissa, precedente/successivo nel percorso, ritorno alla mappa. Percorso di lettura: 1.1 → F4 → 1.2 → F5 → 1.3 → F3 → F6 → 1.4 → F2 → 2.1 → 2.2 → 2.3 → 3.1 → 3.2 → 4.1 → 4.2 → 4.3.
- **Ricerca semplice** client-side sui titoli e sui simboli del `Glossario_globale.html` (sacrificabile se complica).
- Le pagine `Glossario_globale.html` e `Come_si_studia.html` sono allegate: **collegale in evidenza** dalla home e dalla barra.

## Cosa NON fare
- Non modificare, riassumere o «migliorare» le pagine allegate.
- Non generare contenuto matematico, testi segnaposto o esempi nuovi.
- Non introdurre framework o build step.
- Non aggiungere decorazioni, animazioni o densità visiva.

## Consegna
Esporta come **HTML** (cartella completa: involucro + pagine). Verrà riportato nella chat di studio per le verifiche e le correzioni future.

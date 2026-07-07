/* @ds-bundle: {"format":4,"namespace":"WikiSistemiDiFiduciaDesignSystem_de484a","components":[{"name":"Badge","sourcePath":"components/badge/Badge.jsx"},{"name":"Callout","sourcePath":"components/callout/Callout.jsx"},{"name":"Formula","sourcePath":"components/formula/Formula.jsx"},{"name":"QuickNav","sourcePath":"components/navigation/QuickNav.jsx"},{"name":"Toc","sourcePath":"components/navigation/Toc.jsx"},{"name":"Xref","sourcePath":"components/navigation/Xref.jsx"},{"name":"Nota","sourcePath":"components/page/Nota.jsx"},{"name":"PageHeader","sourcePath":"components/page/PageHeader.jsx"},{"name":"PipelineMap","sourcePath":"components/pipeline/PipelineMap.jsx"},{"name":"ConfusionMatrix","sourcePath":"components/tables/ConfusionMatrix.jsx"},{"name":"DataTable","sourcePath":"components/tables/DataTable.jsx"},{"name":"GlossaryTable","sourcePath":"components/tables/GlossaryTable.jsx"}],"sourceHashes":{"components/badge/Badge.jsx":"c0b42806f13e","components/callout/Callout.jsx":"498d20f83da4","components/formula/Formula.jsx":"f9a2a2544a40","components/navigation/QuickNav.jsx":"e1cb04451861","components/navigation/Toc.jsx":"f7db659de852","components/navigation/Xref.jsx":"ba137fd4e210","components/page/Nota.jsx":"1dab63769187","components/page/PageHeader.jsx":"bdd6a0ed19cb","components/pipeline/PipelineMap.jsx":"7f60d197cdc6","components/tables/ConfusionMatrix.jsx":"3a88a1d3680e","components/tables/DataTable.jsx":"cd9e0d8bf149","components/tables/GlossaryTable.jsx":"22f209c015cd","ui_kits/wiki/DraftPage.jsx":"bfa3662eb996","ui_kits/wiki/GlossaryPage.jsx":"c5e1ee3f4a57","ui_kits/wiki/StudyPage.jsx":"c6b667ebf992"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WikiSistemiDiFiduciaDesignSystem_de484a = window.WikiSistemiDiFiduciaDesignSystem_de484a || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/badge/Badge.jsx
try { (() => {
/**
 * Badge di stato delle pagine wiki: bozza · verificata · in preparazione.
 * Si usa dentro l'h1, dopo il titolo.
 */
const ETICHETTE = {
  bozza: "BOZZA",
  verificata: "VERIFICATA",
  preparazione: "IN PREPARAZIONE"
};
function Badge({
  stato = "bozza",
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "badge " + stato
  }, children || ETICHETTE[stato]);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/callout/Callout.jsx
try { (() => {
/**
 * Callout — i box colorati della wiki, riusati tali e quali.
 * Varianti: intu (Intuizione), warn (Attenzione), deep (Approfondimento),
 * ex (Esempio/Esercizi), nb (N.B.).
 */
function Callout({
  variante = "intu",
  tag,
  id,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "callout " + variante,
    id: id
  }, tag ? /*#__PURE__*/React.createElement("span", {
    className: "tag"
  }, tag) : null, children);
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/callout/Callout.jsx", error: String((e && e.message) || e) }); }

// components/formula/Formula.jsx
try { (() => {
/**
 * Formula — blocco formula della wiki (classe .formula / .formula.key).
 * Il contenuto è LaTeX MathJax con delimitatori \[ \] e virgole decimali
 * italiane 0{,}5. Richiede MathJax 3 da CDN nella pagina (v. readme).
 */
function Formula({
  chiave = false,
  children
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.MathJax && window.MathJax.typesetPromise && ref.current) {
      window.MathJax.typesetPromise([ref.current]).catch(() => {});
    }
  }, [children]);
  return /*#__PURE__*/React.createElement("div", {
    className: chiave ? "formula key" : "formula",
    ref: ref
  }, children);
}
Object.assign(__ds_scope, { Formula });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/formula/Formula.jsx", error: String((e && e.message) || e) }); }

// components/navigation/QuickNav.jsx
try { (() => {
/**
 * QuickNav — barra sticky di pill di navigazione in cima alla pagina.
 * Solo schermo (nascosta in stampa). Ultima voce tipica: «↑ inizio».
 */
function QuickNav({
  voci = [],
  ariaLabel = "Navigazione rapida"
}) {
  return /*#__PURE__*/React.createElement("nav", {
    className: "quicknav",
    "aria-label": ariaLabel
  }, voci.map((v, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: v.href
  }, v.label)));
}
Object.assign(__ds_scope, { QuickNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/QuickNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Toc.jsx
try { (() => {
/**
 * Toc — indice richiudibile (details.toc). Chiuso di default per non
 * sommergere la pagina; nascosto in stampa.
 * Voce = {href, label, figli?: Voce[]}.
 */
function Toc({
  summary = "Indice completo — tocca per aprire",
  ariaLabel = "Indice",
  voci = [],
  aperto = false
}) {
  const renderLista = lista => /*#__PURE__*/React.createElement("ul", null, lista.map((v, i) => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: v.href
  }, v.label), v.figli && v.figli.length ? renderLista(v.figli) : null)));
  return /*#__PURE__*/React.createElement("details", {
    className: "toc",
    open: aperto || undefined
  }, /*#__PURE__*/React.createElement("summary", null, summary), /*#__PURE__*/React.createElement("nav", {
    "aria-label": ariaLabel
  }, renderLista(voci)));
}
Object.assign(__ds_scope, { Toc });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Toc.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Xref.jsx
try { (() => {
/**
 * Xref — rimando interno (a.xref): sottolineatura tratteggiata navy,
 * hover a evidenziatore, mai a capo a metà.
 */
function Xref({
  href,
  children
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "xref",
    href: href
  }, children);
}
Object.assign(__ds_scope, { Xref });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Xref.jsx", error: String((e && e.message) || e) }); }

// components/page/Nota.jsx
try { (() => {
/**
 * Nota — paragrafo .note: testo di servizio più piccolo in navy2
 * (rimandi alle soluzioni, precisazioni, fonti dei numeri).
 */
function Nota({
  children
}) {
  return /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, children);
}
Object.assign(__ds_scope, { Nota });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/page/Nota.jsx", error: String((e && e.message) || e) }); }

// components/page/PageHeader.jsx
try { (() => {
/**
 * PageHeader — testata della pagina wiki: h1 con badge di stato
 * e sottotitolo (.subtitle). L'h1 porta id="top" per «↑ inizio».
 */
function PageHeader({
  titolo,
  sottotitolo,
  stato,
  id = "top"
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    id: id
  }, titolo, stato ? /*#__PURE__*/React.createElement(React.Fragment, null, " ", /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    stato: stato
  })) : null), sottotitolo ? /*#__PURE__*/React.createElement("p", {
    className: "subtitle"
  }, sottotitolo) : null);
}
Object.assign(__ds_scope, { PageHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/page/PageHeader.jsx", error: String((e && e.message) || e) }); }

// components/pipeline/PipelineMap.jsx
try { (() => {
/**
 * PipelineMap — il box «catena di montaggio» (.leg): la mappa di
 * orientamento in cima alla pagina, con la catena di pill collegate
 * da frecce arancioni e la nota di corrispondenza col paper.
 */
function PipelineMap({
  titolo,
  id = "mappa",
  intro,
  passi = [],
  nota,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "leg"
  }, titolo ? /*#__PURE__*/React.createElement("h2", {
    id: id
  }, titolo) : null, intro ? /*#__PURE__*/React.createElement("p", null, intro) : null, passi.length ? /*#__PURE__*/React.createElement("p", {
    className: "chain"
  }, passi.map((passo, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 ? /*#__PURE__*/React.createElement("span", {
    className: "arrow"
  }, "\u2192") : null, /*#__PURE__*/React.createElement("span", null, passo)))) : null, nota ? /*#__PURE__*/React.createElement("p", {
    className: "note"
  }, nota) : null, children);
}
Object.assign(__ds_scope, { PipelineMap });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/pipeline/PipelineMap.jsx", error: String((e && e.message) || e) }); }

// components/tables/ConfusionMatrix.jsx
try { (() => {
/**
 * ConfusionMatrix — tabella .cm con semantica ok / fn / fp
 * (verde = giusto, giallo = falso negativo, rosso tenue = falso positivo).
 * Righe = com'è davvero · Colonne = cosa fa il sistema.
 */
function ConfusionMatrix({
  caption,
  colonne = [],
  righe = []
}) {
  return /*#__PURE__*/React.createElement("table", {
    className: "cm"
  }, caption ? /*#__PURE__*/React.createElement("caption", null, caption) : null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null), colonne.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, righe.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("th", null, r.intestazione), r.celle.map((cella, j) => /*#__PURE__*/React.createElement("td", {
    key: j,
    className: cella.tipo || ""
  }, cella.contenuto))))));
}
Object.assign(__ds_scope, { ConfusionMatrix });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tables/ConfusionMatrix.jsx", error: String((e && e.message) || e) }); }

// components/tables/DataTable.jsx
try { (() => {
/**
 * DataTable — tabella base della wiki: bordi sabbia, th su carta calda,
 * caption in corsivo sopra. (Es. «Universale vs situazionale».)
 */
function DataTable({
  caption,
  colonne = [],
  righe = []
}) {
  return /*#__PURE__*/React.createElement("table", null, caption ? /*#__PURE__*/React.createElement("caption", null, caption) : null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, colonne.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, righe.map((r, i) => /*#__PURE__*/React.createElement("tr", {
    key: i
  }, r.map((cella, j) => /*#__PURE__*/React.createElement("td", {
    key: j
  }, cella))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tables/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/tables/GlossaryTable.jsx
try { (() => {
/**
 * GlossaryTable — tabella .gl del glossario dei simboli: prima colonna
 * in mono, righe-separatore di sezione su fondo evidenziatore.
 * Voce = {simbolo, nome, definizione, occ} · Separatore = {separatore}.
 */
function GlossaryTable({
  colonne = ["simbolo", "nome", "definizione", "prima occ."],
  voci = []
}) {
  return /*#__PURE__*/React.createElement("table", {
    className: "gl"
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, colonne.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i
  }, c)))), /*#__PURE__*/React.createElement("tbody", null, voci.map((v, i) => v.separatore ? /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", {
    colSpan: colonne.length,
    style: {
      background: "#fff2c4",
      fontWeight: 700
    }
  }, v.separatore)) : /*#__PURE__*/React.createElement("tr", {
    key: i
  }, /*#__PURE__*/React.createElement("td", null, v.simbolo), /*#__PURE__*/React.createElement("td", null, v.nome), /*#__PURE__*/React.createElement("td", null, v.definizione), /*#__PURE__*/React.createElement("td", null, v.occ)))));
}
Object.assign(__ds_scope, { GlossaryTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/tables/GlossaryTable.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wiki/DraftPage.jsx
try { (() => {
const {
  QuickNav,
  Xref,
  Callout,
  Formula,
  PageHeader,
  Nota
} = window.WikiSistemiDiFiduciaDesignSystem_de484a;
function DraftPage() {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Pagina bozza \u2014 F4"
  }, /*#__PURE__*/React.createElement(QuickNav, {
    voci: [{
      href: "#prerequisiti",
      label: "Prerequisiti"
    }, {
      href: "#sec-1",
      label: "§1 Vettori"
    }, {
      href: "#sec-2",
      label: "§2 Logistica"
    }, {
      href: "page:glossario",
      label: "Glossario"
    }, {
      href: "page:studio",
      label: "↩ 1.1"
    }, {
      href: "#top",
      label: "↑ inizio"
    }]
  }), /*#__PURE__*/React.createElement(PageHeader, {
    titolo: "F4 \u2014 Statistica e machine learning",
    stato: "bozza",
    sottotitolo: null
  }), /*#__PURE__*/React.createElement(Nota, null, "Pagina Fondamenta della wiki \xABSistemi di Fiducia\xBB \xB7 copre ci\xF2 che serve alla sezione 1.2 del paper."), /*#__PURE__*/React.createElement(Callout, {
    variante: "warn",
    tag: "Stato: bozza \u2014 regole d'ingaggio"
  }, /*#__PURE__*/React.createElement("p", null, "Questa pagina \xE8 ", /*#__PURE__*/React.createElement("strong", null, "generata e auto-collaudata"), " (numeri verificati a macchina), ma ", /*#__PURE__*/React.createElement("strong", null, "non ancora studiata insieme"), ". Si legge a schermo, si segnala tutto ci\xF2 che non regge, e ", /*#__PURE__*/React.createElement("strong", null, "non si trascrive su carta"), " finch\xE9 non diventa \xABverificata\xBB.")), /*#__PURE__*/React.createElement("h2", {
    id: "prerequisiti"
  }, "Prerequisiti"), /*#__PURE__*/React.createElement("p", null, "Tutto da ", /*#__PURE__*/React.createElement(Xref, {
    href: "page:studio"
  }, "1.1 \u2014 Filtraggio bayesiano"), " (gi\xE0 verificata): probabilit\xE0 e Bayes (\xA71\u2013\xA72), la ", /*#__PURE__*/React.createElement("strong", null, "sigmoide"), " ", "\\(\\sigma\\)", " (\xA75.2), ", /*#__PURE__*/React.createElement("strong", null, "MLE e verosimiglianza"), " (\xA73.2)."), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", {
    id: "sec-1"
  }, "1. Vettori, prodotto scalare, norma"), /*#__PURE__*/React.createElement("h3", {
    id: "sec-1-1"
  }, "1.1 Il vettore: una lista ordinata di numeri"), /*#__PURE__*/React.createElement("p", null, "Nella sezione 1.2 del paper un mittente non \xE8 descritto da ", /*#__PURE__*/React.createElement("em", null, "un"), " numero ma da ", /*#__PURE__*/React.createElement("strong", null, "tanti numeri insieme"), ": tasso di reclami, tasso di bounce, frazione di posta autenticata\u2026 Un ", /*#__PURE__*/React.createElement("strong", null, "vettore"), " \xE8 esattamente questo: una ", /*#__PURE__*/React.createElement("strong", null, "lista ordinata di numeri"), ", scritta in grassetto:"), /*#__PURE__*/React.createElement(Formula, null, "\\[ \\mathbf{x} = (x_1;\\ x_2;\\ \\dots;\\ x_n) \\]"), /*#__PURE__*/React.createElement(Callout, {
    variante: "warn",
    tag: "Trappola dei simboli \u2014 il grassetto"
  }, /*#__PURE__*/React.createElement("p", null, "La regola \xE8: ", /*#__PURE__*/React.createElement("strong", null, "grassetto = oggetto a pi\xF9 componenti"), ". Nella 1.1, ", "\\(\\mathbf{w}\\)", " era l'elenco delle parole dell'email; qui ", "\\(\\mathbf{x}\\)", " e ", "\\(\\boldsymbol{\\theta}\\)", " sono elenchi di numeri.")), /*#__PURE__*/React.createElement("h2", {
    id: "sec-2"
  }, "2. La regressione logistica"), /*#__PURE__*/React.createElement("p", null, "Il prodotto scalare ", "\\(\\boldsymbol\\theta^{\\top}\\mathbf{x}\\)", " \xE8 un ", /*#__PURE__*/React.createElement("strong", null, "punteggio"), ": pu\xF2 essere qualsiasi numero. Ma la 1.2 vuole una ", /*#__PURE__*/React.createElement("strong", null, "probabilit\xE0"), ". Il traduttore lo conosci gi\xE0: \xE8 la ", /*#__PURE__*/React.createElement("strong", null, "sigmoide"), " ", "\\(\\sigma\\)", " della 1.1 (\xA75.2)."), /*#__PURE__*/React.createElement(Formula, {
    chiave: true
  }, "\\[ r(\\mathbf{x}) \\;=\\; \\sigma\\bigl(\\boldsymbol\\theta^{\\top}\\mathbf{x}\\bigr) \\;=\\; \\frac{1}{1 + e^{-\\boldsymbol\\theta^{\\top}\\mathbf{x}}} \\]"), /*#__PURE__*/React.createElement(Callout, {
    variante: "ex",
    tag: "Esempio numerico"
  }, /*#__PURE__*/React.createElement("p", null, "Con ", "\\(\\boldsymbol\\theta = (1;\\ -2)\\)", ": per ", "\\(\\mathbf{x} = (0{,}5;\\ 0{,}25)\\)", " il punteggio \xE8 ", "\\(0\\)", " \u2192 ", "\\(r = \\sigma(0) = 0{,}5\\)", ", incertezza pura.")));
}
Object.assign(window, {
  DraftPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wiki/DraftPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wiki/GlossaryPage.jsx
try { (() => {
const {
  QuickNav,
  Xref,
  Nota,
  GlossaryTable
} = window.WikiSistemiDiFiduciaDesignSystem_de484a;
function GlossaryPage() {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Glossario globale"
  }, /*#__PURE__*/React.createElement(QuickNav, {
    voci: [{
      href: "#1-1",
      label: "1.1"
    }, {
      href: "#f4",
      label: "F4"
    }, {
      href: "page:studio",
      label: "↩ 1.1"
    }, {
      href: "page:f4",
      label: "F4 →"
    }, {
      href: "#top",
      label: "↑ inizio"
    }]
  }), /*#__PURE__*/React.createElement("h1", {
    id: "top"
  }, "Glossario globale dei simboli"), /*#__PURE__*/React.createElement(Nota, null, "La ", /*#__PURE__*/React.createElement("strong", null, "fonte di verit\xE0 unica"), " dei simboli della wiki: fusione, in ordine di percorso, della tabella della 1.1 (Appendice B) e delle righe \xABSimboli nuovi\xBB di ogni pagina. Le pagine mantengono le loro tabelle locali come ", /*#__PURE__*/React.createElement("strong", null, "indice"), "; qualunque correzione si fa ", /*#__PURE__*/React.createElement("strong", null, "qui"), " e si riporta l\xEC."), /*#__PURE__*/React.createElement(Nota, null, "Ordinamento: ", /*#__PURE__*/React.createElement("strong", null, "per apparizione"), " nel documento. \xAB(opz.)\xBB = compare solo in un box o in un'appendice opzionale."), /*#__PURE__*/React.createElement(GlossaryTable, {
    voci: [{
      separatore: "— 1.1 — Filtraggio bayesiano (Appendice B) —"
    }, {
      simbolo: "\\(P(A)\\)",
      nome: "probabilità di \\(A\\)",
      definizione: "numero in \\([0,1]\\) che misura quanto è probabile l'evento \\(A\\)",
      occ: /*#__PURE__*/React.createElement(Xref, {
        href: "page:studio"
      }, "\xA71.1")
    }, {
      simbolo: "\\(\\overline{A}\\)",
      nome: "complemento",
      definizione: "l'evento «\\(A\\) non accade»; \\(P(\\overline{A}) = 1 - P(A)\\)",
      occ: /*#__PURE__*/React.createElement(Xref, {
        href: "page:studio"
      }, "\xA71.2")
    }, {
      simbolo: "\\(P(A\\mid B)\\), \\(\\mid\\)",
      nome: "probabilità condizionata; barra «dato»",
      definizione: "probabilità di \\(A\\) sapendo che \\(B\\) è accaduto",
      occ: /*#__PURE__*/React.createElement(Xref, {
        href: "page:studio"
      }, "\xA71.3")
    }, {
      simbolo: "\\(A \\cap B\\)",
      nome: "intersezione",
      definizione: "«\\(A\\) e \\(B\\)»: accadono entrambi insieme",
      occ: /*#__PURE__*/React.createElement(Xref, {
        href: "page:studio"
      }, "\xA71.3")
    }, {
      simbolo: "\\(\\approx\\)",
      nome: "circa uguale",
      definizione: "uguaglianza approssimata, dopo un arrotondamento",
      occ: /*#__PURE__*/React.createElement(Xref, {
        href: "page:studio"
      }, "\xA72.1")
    }, {
      separatore: "— F4 — Statistica e machine learning —"
    }, {
      simbolo: "\\(\\mathbf{x}\\), \\(\\boldsymbol\\theta\\)",
      nome: "vettori (dati; pesi)",
      definizione: "liste ordinate di numeri; grassetto = più componenti",
      occ: /*#__PURE__*/React.createElement(Xref, {
        href: "page:f4"
      }, "F4 \xA71.1")
    }, {
      simbolo: "\\(\\lVert\\boldsymbol\\theta\\rVert\\)",
      nome: "norma",
      definizione: "lunghezza del vettore: \\(\\sqrt{\\sum_j \\theta_j^2}\\)",
      occ: /*#__PURE__*/React.createElement(Xref, {
        href: "page:f4"
      }, "F4 \xA71.3")
    }, {
      simbolo: "\\(\\eta\\)",
      nome: "learning rate",
      definizione: "lunghezza del passo nella discesa del gradiente",
      occ: /*#__PURE__*/React.createElement(Xref, {
        href: "page:f4"
      }, "F4 \xA73.1")
    }]
  }));
}
Object.assign(window, {
  GlossaryPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wiki/GlossaryPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/wiki/StudyPage.jsx
try { (() => {
const {
  QuickNav,
  Toc,
  Xref,
  Callout,
  Formula,
  PipelineMap,
  PageHeader,
  Nota,
  ConfusionMatrix
} = window.WikiSistemiDiFiduciaDesignSystem_de484a;
function StudyPage() {
  return /*#__PURE__*/React.createElement("div", {
    "data-screen-label": "Pagina di studio \u2014 1.1"
  }, /*#__PURE__*/React.createElement(QuickNav, {
    voci: [{
      href: "#mappa",
      label: "Mappa"
    }, {
      href: "#sec-1",
      label: "§1"
    }, {
      href: "#sec-2",
      label: "§2"
    }, {
      href: "#app-a",
      label: "Concetti"
    }, {
      href: "page:glossario",
      label: "Glossario"
    }, {
      href: "page:f4",
      label: "F4 →"
    }, {
      href: "#top",
      label: "↑ inizio"
    }]
  }), /*#__PURE__*/React.createElement(PageHeader, {
    titolo: "Filtraggio Bayesiano dello Spam",
    sottotitolo: "Sezione 1.1 \u2014 bella copia degli appunti \xB7 probabilit\xE0, Bayes, Graham, Robinson, Fisher"
  }), /*#__PURE__*/React.createElement(PipelineMap, {
    titolo: "La catena di montaggio (mappa)",
    intro: /*#__PURE__*/React.createElement(React.Fragment, null, "Tutta la sezione 1.1 costruisce un'unica cosa: trasformare le parole di un'email in un verdetto ", /*#__PURE__*/React.createElement("strong", null, "spam / non spam"), ". Ogni parola attraversa quattro stadi, poi tutti i punteggi si fondono in uno solo."),
    passi: [/*#__PURE__*/React.createElement(React.Fragment, null, "stima (Graham, ", /*#__PURE__*/React.createElement(Xref, {
      href: "#sec-1"
    }, "\xA73"), ")"), "clamp [0,01; 0,99]", /*#__PURE__*/React.createElement(React.Fragment, null, "shrink (Robinson, ", /*#__PURE__*/React.createElement(Xref, {
      href: "#sec-1"
    }, "\xA74"), ")"), /*#__PURE__*/React.createElement(React.Fragment, null, "fusione (Fisher, ", /*#__PURE__*/React.createElement(Xref, {
      href: "#sec-1"
    }, "\xA75"), ")")],
    nota: /*#__PURE__*/React.createElement(React.Fragment, null, "Tieni questa catena sotto mano: ogni paragrafo che segue \xE8 uno di questi anelli. Il glossario dei simboli \xE8 in ", /*#__PURE__*/React.createElement("strong", null, /*#__PURE__*/React.createElement(Xref, {
      href: "page:glossario"
    }, "Appendice B")), ".")
  }), /*#__PURE__*/React.createElement(Toc, {
    voci: [{
      href: "#sec-1",
      label: "1. Fondamenta di probabilità",
      figli: [{
        href: "#sec-1-1",
        label: "1.1 Cos'è una probabilità"
      }, {
        href: "#sec-1-2",
        label: "1.2 Regola del complemento"
      }, {
        href: "#sec-1-3",
        label: "1.3 Probabilità condizionata"
      }]
    }, {
      href: "#sec-2",
      label: "2. Il teorema di Bayes"
    }, {
      href: "#app-a",
      label: "Appendice A — Concetti che ricorrono nel paper"
    }]
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", {
    id: "sec-1"
  }, "1. Fondamenta di probabilit\xE0"), /*#__PURE__*/React.createElement("h3", {
    id: "sec-1-1"
  }, "1.1 Cos'\xE8 una probabilit\xE0"), /*#__PURE__*/React.createElement("p", null, "Una probabilit\xE0 \xE8 un numero che misura quanto \xE8 probabile che un evento accada. Vive sempre nell'intervallo ", /*#__PURE__*/React.createElement("strong", null, "\\([0,1]\\)"), ": il valore ", "\\(0\\)", " significa impossibile, il valore ", "\\(1\\)", " significa certo, e i valori intermedi misurano i gradi di \"forse\"."), /*#__PURE__*/React.createElement(Callout, {
    variante: "intu",
    tag: "Intuizione"
  }, /*#__PURE__*/React.createElement("p", null, "\xC8 la scala delle previsioni meteo: \"70% di pioggia\" \xE8 la probabilit\xE0 ", "\\(0{,}7\\)", ". Vicino a ", "\\(1\\)", " = quasi sicuro che accade; vicino a ", "\\(0\\)", " = quasi sicuro di no.")), /*#__PURE__*/React.createElement("h3", {
    id: "sec-1-2"
  }, "1.2 Regola del complemento"), /*#__PURE__*/React.createElement("p", null, "L'", /*#__PURE__*/React.createElement("strong", null, "opposto"), ", ovvero l'evento \xABnon accade\xBB, \xE8 detto ", /*#__PURE__*/React.createElement("strong", null, "complemento"), " e si indica con ", "\\(\\overline{A}\\)", ". Poich\xE9 \"accade\" e \"non accade\" insieme coprono ogni possibilit\xE0, le loro probabilit\xE0 sommano a ", "\\(1\\)", ":"), /*#__PURE__*/React.createElement(Formula, null, "\\[ P(\\overline{A}) = 1 - P(A) \\]"), /*#__PURE__*/React.createElement(Nota, null, "Esempio: se un'email ha ", "\\(P(\\text{spam})=0{,}9\\)", ", allora ", "\\(P(\\text{buona}) = 1 - 0{,}9 = 0{,}1\\)", ". Nel paper l'espressione ", "\\(1-p\\)", " ricorre ovunque: \xE8 sempre il \"non\"."), /*#__PURE__*/React.createElement("h3", {
    id: "sec-1-3"
  }, "1.3 Probabilit\xE0 condizionata"), /*#__PURE__*/React.createElement("p", null, "La ", /*#__PURE__*/React.createElement("strong", null, "probabilit\xE0 condizionata"), " \xE8 la probabilit\xE0 di ", "\\(A\\)", " ", /*#__PURE__*/React.createElement("em", null, "sapendo gi\xE0"), " che \xE8 accaduto ", "\\(B\\)", ". In pratica ci si ", /*#__PURE__*/React.createElement("strong", null, "restringe a un mondo pi\xF9 piccolo"), " (solo i casi in cui vale ", "\\(B\\)", ") e si ricalcola l\xEC dentro."), /*#__PURE__*/React.createElement(Formula, {
    chiave: true
  }, "\\[ P(A \\mid B) = \\frac{P(A \\cap B)}{P(B)} \\qquad\\text{(a conteggi: } \\frac{|A \\cap B|}{|B|}\\text{)} \\]"), /*#__PURE__*/React.createElement(Callout, {
    variante: "warn",
    tag: "Attenzione \u2014 il denominatore"
  }, /*#__PURE__*/React.createElement("p", null, "Il denominatore \xE8 il ", /*#__PURE__*/React.createElement("strong", null, "mondo ristretto ", "\\(B\\)"), ", non l'intero universo. Se su 300 email totali 120 sono spam e 90 di queste contengono una parola, allora ", "\\(P(\\text{parola}\\mid\\text{spam}) = 90/120\\)", ", non ", "\\(90/300\\)", ".")), /*#__PURE__*/React.createElement(Callout, {
    variante: "ex",
    id: "ex-1",
    tag: "Esercizi \u2014 \xA71"
  }, /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Un filtro assegna a un'email ", "\\(P(\\text{spam}) = 0{,}7\\)", ". Quanto vale ", "\\(P(\\text{buona})\\)", "?"), /*#__PURE__*/React.createElement("li", null, "Su 200 email totali, 80 sono spam; 60 di queste contengono \xABofferta\xBB. Calcola ", "\\(P(\\text{«offerta»} \\mid \\text{spam})\\)", ". Attento al denominatore.")), /*#__PURE__*/React.createElement(Nota, null, "Soluzioni in ", /*#__PURE__*/React.createElement(Xref, {
    href: "#app-a"
  }, "Appendice C \u2014 blocco \xA71"), ".")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", {
    id: "sec-2"
  }, "2. Il teorema di Bayes"), /*#__PURE__*/React.createElement("p", null, "Misurare ", "\\(P(B \\mid A)\\)", " \xE8 spesso facile, ma quello che serve \xE8 il verso opposto, ", "\\(P(A \\mid B)\\)", ". I due versi sono ", /*#__PURE__*/React.createElement("strong", null, "quantit\xE0 diverse"), ": non si passa dall'uno all'altro per simmetria. Bayes \xE8 la regola che li lega, e per farlo usa il ", /*#__PURE__*/React.createElement("strong", null, "prior"), " ", "\\(P(A)\\)", "."), /*#__PURE__*/React.createElement(Formula, {
    chiave: true
  }, "\\[ P(A_k \\mid B) \\;=\\; \\frac{P(B \\mid A_k)\\,P(A_k)}{\\sum_i P(B \\mid A_i)\\,P(A_i)} \\]"), /*#__PURE__*/React.createElement(Callout, {
    variante: "deep",
    tag: "Nota \u2014 caso continuo (fuori dal perimetro del paper)"
  }, /*#__PURE__*/React.createElement("p", null, "Quando si condiziona su un evento di probabilit\xE0 nulla la definizione elementare non basta. Il paper sullo spam \xE8 interamente ", /*#__PURE__*/React.createElement("strong", null, "discreto"), ", quindi questa macchina non serve per la 1.1.")), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("h2", {
    id: "app-a"
  }, "Appendice A \u2014 I due errori (matrice di confusione)"), /*#__PURE__*/React.createElement("p", null, "Trucco per non confonderli: ", /*#__PURE__*/React.createElement("strong", null, "positivo / negativo = la risposta del filtro"), ". E ", /*#__PURE__*/React.createElement("strong", null, "\"falso\" = si \xE8 sbagliato"), "."), /*#__PURE__*/React.createElement(ConfusionMatrix, {
    caption: "Righe = com'\xE8 davvero l'email \xB7 Colonne = cosa fa il filtro",
    colonne: ["il filtro BLOCCA (dice: spam!)", "il filtro LASCIA PASSARE (dice: ok)"],
    righe: [{
      intestazione: "è SPAM",
      celle: [{
        tipo: "ok",
        contenuto: /*#__PURE__*/React.createElement(React.Fragment, null, "GIUSTO", /*#__PURE__*/React.createElement("br", null), "spam preso")
      }, {
        tipo: "fn",
        contenuto: /*#__PURE__*/React.createElement(React.Fragment, null, "FALSO NEGATIVO", /*#__PURE__*/React.createElement("br", null), "spam sfugge in inbox")
      }]
    }, {
      intestazione: "è BUONA (ham)",
      celle: [{
        tipo: "fp",
        contenuto: /*#__PURE__*/React.createElement(React.Fragment, null, "FALSO POSITIVO", /*#__PURE__*/React.createElement("br", null), "posta vera nel cestino", /*#__PURE__*/React.createElement("br", null), "(errore peggiore)")
      }, {
        tipo: "ok",
        contenuto: /*#__PURE__*/React.createElement(React.Fragment, null, "GIUSTO", /*#__PURE__*/React.createElement("br", null), "posta consegnata")
      }]
    }]
  }), /*#__PURE__*/React.createElement(Nota, null, "Il ", /*#__PURE__*/React.createElement("strong", null, "falso positivo"), " (perdere posta vera) \xE8 pi\xF9 grave del falso negativo (uno spam in pi\xF9). Per questo Graham raddoppia ", "\\(g\\)", "."));
}
Object.assign(window, {
  StudyPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/wiki/StudyPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Formula = __ds_scope.Formula;

__ds_ns.QuickNav = __ds_scope.QuickNav;

__ds_ns.Toc = __ds_scope.Toc;

__ds_ns.Xref = __ds_scope.Xref;

__ds_ns.Nota = __ds_scope.Nota;

__ds_ns.PageHeader = __ds_scope.PageHeader;

__ds_ns.PipelineMap = __ds_scope.PipelineMap;

__ds_ns.ConfusionMatrix = __ds_scope.ConfusionMatrix;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.GlossaryTable = __ds_scope.GlossaryTable;

})();

export const meta = {
  name: 'applica-correzioni-BL-GR',
  description: 'Applica le riscritture BLOCCANTE+GRAVE dei report ai sorgenti .html, un file per agente',
  phases: [{ title: 'Applica', detail: 'ogni agente modifica UN solo .html con le riscritture audited BL+GR' }],
}

const ROOT = '/home/wuk/Documents/personal_projects/wiki_studio_personale'
const WIKI = ROOT + '/wiki'
const AUDIT = ROOT + '/audit'
const CHARTER = AUDIT + '/CHARTER.md'

// F0.1 esclusa (non auditata). Ogni voce: sigla, file .html, report .md
const PAGES = [
  { sigla: 'F0.2', file: 'F0_2_Potenze_e_radici.html' },
  { sigla: 'F0.3', file: 'F0_3_Logaritmi.html' },
  { sigla: 'F0.4', file: 'F0_4_Somme_e_produttorie.html' },
  { sigla: 'F0.5', file: 'F0_5_Notazione_di_base.html' },
  { sigla: 'F0.6', file: 'F0_6_Vettori_e_prodotto_scalare.html' },
  { sigla: 'F0.7', file: 'F0_7_Derivata.html' },
  { sigla: 'F0.8', file: 'F0_8_Integrale.html' },
  { sigla: '1.1', file: 'Bella_copia_1.1_Filtraggio_Bayesiano.html' },
  { sigla: 'F4', file: 'F4_Statistica_e_ML.html' },
  { sigla: '1.2', file: 'Sezione_1_2_Score_reputazionali.html' },
  { sigla: 'F5', file: 'F5_Segnali_e_rilevamento.html' },
  { sigla: '1.3', file: 'Sezione_1_3_Warmup.html' },
  { sigla: 'F3', file: 'F3_Teoria_informazione.html' },
  { sigla: 'F6', file: 'F6_Similarita_hashing_codifiche.html' },
  { sigla: '1.4', file: 'Sezione_1_4_Difese.html' },
  { sigla: 'F2', file: 'F2_Algebra_lineare_Markov.html' },
  { sigla: '2.1', file: 'Sezione_2_1_PageRank.html' },
  { sigla: '2.2', file: 'Sezione_2_2_TrustRank.html' },
  { sigla: '2.3', file: 'Sezione_2_3_Spam_mass.html' },
  { sigla: '3.1', file: 'Sezione_3_1_EEAT_ranking.html' },
  { sigla: '3.2', file: 'Sezione_3_2_Knowledge_Graph.html' },
  { sigla: '4.1', file: 'Sezione_4_1_Safe_Browsing.html' },
  { sigla: '4.2', file: 'Sezione_4_2_Web_Risk.html' },
  { sigla: '4.3', file: 'Sezione_4_3_Sincronizzazione.html' },
]

const SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    sigla: { type: 'string' },
    file: { type: 'string' },
    applied: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: { type: 'string' },
          severita: { type: 'string' },
          oggetto: { type: 'string' },
          come: { type: 'string' },
        },
        required: ['id', 'severita', 'come'],
      },
    },
    skipped: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: { id: { type: 'string' }, motivo: { type: 'string' } },
        required: ['id', 'motivo'],
      },
    },
    n_edit: { type: 'integer' },
    numeri_toccati: { type: 'array', items: { type: 'string' } },
    nota: { type: 'string' },
  },
  required: ['sigla', 'file', 'applied', 'n_edit'],
}

function prompt(p) {
  const src = WIKI + '/' + p.file
  const report = AUDIT + '/pagine/' + p.sigla + '.md'
  return [
    'COMPITO: applicare al sorgente HTML le riscritture GIA AUDITED di severita BLOCCANTE e GRAVE, per la sola pagina ' + p.sigla + '.',
    'MODIFICA ESCLUSIVAMENTE QUESTO FILE: ' + src,
    'NON toccare nessun altro file: non il Glossario, non altre pagine, non i report. Solo ' + src + '.',
    '',
    'Leggi: (1) il report con le riscritture: ' + report + '  (2) il sorgente da modificare: ' + src + '  (3) il charter per lo stile di casa e la marcatura dei box: ' + CHARTER,
    '',
    'REGOLE DI APPLICAZIONE:',
    '- Applica SOLO le schede con Severita BLOCCANTE o GRAVE (salta le MINORE in questo passaggio).',
    '- Applica ESATTAMENTE la «Riscrittura» indicata nella scheda: nessuna modifica non auditata, nessuna aggiunta di tuo.',
    '- Usa lo strumento Edit con old_string copiato VERBATIM dal sorgente (deve essere unico nel file). Se un blocco non e unico, allarga il contesto finche lo diventa.',
    '- Conserva lo stile della pagina: box con le classi esistenti (.callout warn/ex/intu/deep, e per le definizioni rigorose .callout nb con tag «N.B. — definizione rigorosa»), math in \\(...\\), virgola decimale italiana, e il separatore di argomenti «;» dove la riscrittura lo richiede (regola D).',
    '- Quando la riscrittura dice «enunciare l ipotesi PRIMA della formula», inserisci una frase/box appena prima del blocco .formula interessato.',
    '- NON cambiare alcun numero degli esempi, TRANNE dove la scheda corregge esplicitamente un valore o un claim numerico (in tal caso elencalo in numeri_toccati con vecchio→nuovo).',
    '- Se una riscrittura non e esprimibile come edit locale pulito e fedele, NON forzarla: mettila in skipped con motivo.',
    '- Per la 1.1: se una scheda chiede di declassare il badge da VERIFICATA a BOZZA, NON toccare il badge in questo passaggio (il badge e gestito a parte, in index.html); applica solo le riscritture di contenuto delle schede.',
    '',
    'Dopo gli edit, verifica con una lettura (Read) che il file resti HTML valido e coerente e che gli edit siano andati a buon fine.',
    'Restituisci il sommario strutturato (schema): cosa hai applicato (id, severita, come), cosa hai saltato e perche, n_edit totale, numeri_toccati.',
  ].join('\n')
}

phase('Applica')
log('Applico BLOCCANTE+GRAVE su ' + PAGES.length + ' pagine (un file per agente, nessun commit).')

const results = await parallel(
  PAGES.map((p) => () => agent(prompt(p), { label: 'fix:' + p.sigla, phase: 'Applica', schema: SCHEMA, agentType: 'general-purpose' })),
)

const ok = results.filter(Boolean)
const totEdit = ok.reduce((s, r) => s + (r.n_edit || 0), 0)
const totSkip = ok.reduce((s, r) => s + ((r.skipped || []).length), 0)
log('Fatto: ' + ok.length + '/' + PAGES.length + ' pagine, ' + totEdit + ' edit applicati, ' + totSkip + ' saltati.')

return {
  pagine: ok.length,
  totale_edit: totEdit,
  totale_skip: totSkip,
  per_pagina: ok.map((r) => ({ sigla: r.sigla, n_edit: r.n_edit, applied: (r.applied || []).length, skipped: (r.skipped || []).length, numeri_toccati: r.numeri_toccati || [] })),
}

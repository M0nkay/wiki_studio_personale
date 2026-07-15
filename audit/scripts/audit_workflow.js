export const meta = {
  name: 'audit-rigore-wiki',
  description: 'Audit di rigore integrale delle 25 pagine della wiki Sistemi di Fiducia',
  phases: [
    { title: 'Audit', detail: 'audit profondo per pagina (FASI 1-5, prova del nove con python3)' },
    { title: 'Report', detail: 'verifica avversariale + scrittura report A-G per pagina' },
    { title: 'Trasversale', detail: 'conformita glossario (FASE 4) e ordine/dipendenze (FASE 5)' },
  ],
}

const ROOT = '/home/wuk/Documents/personal_projects/wiki_studio_personale'
const WIKI = ROOT + '/wiki'
const AUDIT = ROOT + '/audit'
const CHARTER = AUDIT + '/CHARTER.md'
const GLOSS = WIKI + '/Glossario_globale.html'
const EXTRACT = AUDIT + '/scripts/estrai_simboli_output.txt'

const PAGES = [
  { sigla: 'F0.1', file: 'F0_1_Frazioni_e_percentuali.html', titolo: 'Frazioni e percentuali' },
  { sigla: 'F0.2', file: 'F0_2_Potenze_e_radici.html', titolo: 'Potenze e radici' },
  { sigla: 'F0.3', file: 'F0_3_Logaritmi.html', titolo: 'Logaritmi' },
  { sigla: 'F0.4', file: 'F0_4_Somme_e_produttorie.html', titolo: 'Somme e produttorie' },
  { sigla: 'F0.5', file: 'F0_5_Notazione_di_base.html', titolo: 'Notazione di base (|x|, floor, min/max, fattoriale)' },
  { sigla: 'F0.6', file: 'F0_6_Vettori_e_prodotto_scalare.html', titolo: 'Vettori e prodotto scalare' },
  { sigla: 'F0.7', file: 'F0_7_Derivata.html', titolo: 'La derivata' },
  { sigla: 'F0.8', file: 'F0_8_Integrale.html', titolo: "L'integrale" },
  { sigla: '1.1', file: 'Bella_copia_1.1_Filtraggio_Bayesiano.html', titolo: 'Filtraggio Bayesiano dello Spam (unica VERIFICATA: mettila alla prova)' },
  { sigla: 'F4', file: 'F4_Statistica_e_ML.html', titolo: 'Statistica e machine learning' },
  { sigla: '1.2', file: 'Sezione_1_2_Score_reputazionali.html', titolo: 'Score reputazionali di IP e dominio' },
  { sigla: 'F5', file: 'F5_Segnali_e_rilevamento.html', titolo: 'Segnali e rilevamento' },
  { sigla: '1.3', file: 'Sezione_1_3_Warmup.html', titolo: 'Warmup di IP e dominio' },
  { sigla: 'F3', file: 'F3_Teoria_informazione.html', titolo: "Teoria dell'informazione" },
  { sigla: 'F6', file: 'F6_Similarita_hashing_codifiche.html', titolo: 'Similarita, hashing e codifiche' },
  { sigla: '1.4', file: 'Sezione_1_4_Difese.html', titolo: 'Difese: spam distribuito ed elusivo' },
  { sigla: 'F2', file: 'F2_Algebra_lineare_Markov.html', titolo: 'Algebra lineare e catene di Markov' },
  { sigla: '2.1', file: 'Sezione_2_1_PageRank.html', titolo: 'PageRank: il random surfer' },
  { sigla: '2.2', file: 'Sezione_2_2_TrustRank.html', titolo: 'TrustRank: semi e propagazione' },
  { sigla: '2.3', file: 'Sezione_2_3_Spam_mass.html', titolo: 'Spam mass e isolamento delle link farm' },
  { sigla: '3.1', file: 'Sezione_3_1_EEAT_ranking.html', titolo: 'E-E-A-T e learning-to-rank' },
  { sigla: '3.2', file: 'Sezione_3_2_Knowledge_Graph.html', titolo: 'Knowledge Graph, co-citazioni, reputazione' },
  { sigla: '4.1', file: 'Sezione_4_1_Safe_Browsing.html', titolo: 'Safe Browsing: blacklist a prefissi di hash' },
  { sigla: '4.2', file: 'Sezione_4_2_Web_Risk.html', titolo: 'Web Risk API' },
  { sigla: '4.3', file: 'Sezione_4_3_Sincronizzazione.html', titolo: 'Sincronizzazione blacklist e falsi positivi' },
]

const STAGE_A_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    sigla: { type: 'string' },
    n_definizioni: { type: 'integer' },
    inventario: {
      type: 'object',
      additionalProperties: false,
      properties: {
        definizioni_vere: { type: 'array', items: { type: 'string' } },
        caratterizzazioni_spacciate: { type: 'array', items: { type: 'string' } },
        usati_mai_definiti: { type: 'array', items: { type: 'string' } },
      },
    },
    schede: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          id: { type: 'string' },
          sezione: { type: 'string' },
          oggetto: { type: 'string' },
          testo_attuale: { type: 'string' },
          codici: { type: 'array', items: { type: 'string' } },
          severita: { type: 'string', enum: ['BLOCCANTE', 'GRAVE', 'MINORE'] },
          perche: { type: 'string' },
          riscrittura: { type: 'string' },
          impatto_valle: { type: 'string' },
        },
        required: ['id', 'sezione', 'oggetto', 'testo_attuale', 'codici', 'severita', 'perche'],
      },
    },
    prova_del_nove: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: {
          dove: { type: 'string' },
          valore_pagina: { type: 'string' },
          valore_ricalcolato: { type: 'string' },
          esito: { type: 'string' },
          formula_py: { type: 'string' },
          atteso_py: { type: 'string' },
          tol: { type: 'string' },
        },
        required: ['dove', 'valore_pagina', 'valore_ricalcolato', 'esito'],
      },
    },
    casi_estremi: { type: 'array', items: { type: 'string' } },
    conformita_glossario: { type: 'array', items: { type: 'string' } },
    senza_rilievi: { type: 'array', items: { type: 'string' } },
    domande_autore: { type: 'array', items: { type: 'string' } },
    promuovibile: { type: 'boolean' },
    verdetto_nota: { type: 'string' },
  },
  required: ['sigla', 'schede', 'prova_del_nove', 'promuovibile'],
}

const STAGE_B_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  properties: {
    sigla: { type: 'string' },
    report_scritto: { type: 'string' },
    sidecar_scritto: { type: 'string' },
    rifiutati: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        properties: { id: { type: 'string' }, motivo: { type: 'string' } },
        required: ['id', 'motivo'],
      },
    },
    nuovi_trovati: { type: 'array', items: { type: 'string' } },
    counts: {
      type: 'object',
      additionalProperties: false,
      properties: {
        bloccante: { type: 'integer' },
        grave: { type: 'integer' },
        minore: { type: 'integer' },
      },
      required: ['bloccante', 'grave', 'minore'],
    },
    promuovibile: { type: 'boolean' },
    bloccanti: { type: 'array', items: { type: 'string' } },
    n_check_numerici: { type: 'integer' },
    check_falliti: { type: 'array', items: { type: 'string' } },
    nota: { type: 'string' },
  },
  required: ['sigla', 'report_scritto', 'counts', 'promuovibile', 'bloccanti'],
}

function stageAPrompt(p) {
  return [
    'RUOLO: revisore tecnico avversariale della wiki Sistemi di Fiducia. FASE A: audit profondo.',
    'PAGINA: ' + p.sigla + ' — ' + p.titolo + '.',
    'FILE DA AUDITARE (leggilo INTEGRALMENTE): ' + WIKI + '/' + p.file,
    '',
    'Leggi PRIMA, in questo ordine e per intero:',
    '1) Il charter delle regole vincolanti: ' + CHARTER,
    '2) Il file della pagina qui sopra.',
    '3) Il Glossario globale (fonte di verita dei simboli): ' + GLOSS,
    '4) I risultati meccanici di conformita (usa le sezioni che riguardano ' + p.sigla + '): ' + EXTRACT,
    '',
    'ESEGUI le FASI 1-5 a livello di pagina, come descritto nel charter (Inventario; audit puntuale D1-D10 e T1-T5; prova del nove avversariale; conformita FASE 4; ordine/dipendenze).',
    'OBBLIGO: usa python3 via Bash per ricalcolare OGNI esempio numerico e OGNI soluzione di esercizio, cifra per cifra, e per portare ogni formula ai casi estremi (zero, uno, insieme/somma/prodotto vuoto, denominatore nullo, prob 0 o 1, un solo elemento, nodo senza archi, primo passo, log di 0, campione vuoto). Non valutare i conti a mente.',
    'Sii avversariale: una pagina senza rilievi e un ipotesi da confutare. Cerca soprattutto IPOTESI TACITE e CASI ESTREMI, non gli errori di aritmetica. Metti alla prova anche lo stato VERIFICATA della 1.1.',
    'Ogni accusa deve poggiare su una citazione minima (max 2 righe) presa dal testo reale del file, e su una giustificazione verificabile (controesempio o conto rifatto). Non inventare riferimenti bibliografici ne teoremi; se incerto scrivi [DA VERIFICARE].',
    'Rispetta le convenzioni della casa (pavimento esteso, etichette volute, tono nei box, riciclo lettere con nota + Trappola, ecc.): segnalare una convenzione deliberata come difetto e a sua volta un errore.',
    '',
    'Per ogni riga di prova_del_nove che sia numerica, fornisci ANCHE: formula_py (una espressione python3 autosufficiente che ricalcola il valore), atteso_py (il numero stampato sulla pagina, come letterale python), tol (tolleranza assoluta come stringa, es. "1e-9" o "0.005").',
    'NON scrivere alcun file in questa fase. Restituisci solo l oggetto strutturato.',
  ].join('\n')
}

function stageBPrompt(prev, p) {
  const report = AUDIT + '/pagine/' + p.sigla + '.md'
  const sidecar = AUDIT + '/pagine/' + p.sigla + '.checks.json'
  return [
    'RUOLO: verificatore avversariale + finalizzatore del report per la pagina ' + p.sigla + ' — ' + p.titolo + '.',
    'FILE DELLA PAGINA (rileggilo): ' + WIKI + '/' + p.file,
    'CHARTER (regole e formato A-G): ' + CHARTER,
    'CONFORMITA MECCANICA (sezioni su ' + p.sigla + '): ' + EXTRACT,
    '',
    'Risultati della FASE A (JSON) da verificare:',
    JSON.stringify(prev || {}),
    '',
    'COMPITO:',
    '1) Per OGNI scheda della FASE A: verificala contro il testo reale del file. Confuta con motivo quelle deboli, non riproducibili o errate (default: se una accusa non regge a un controesempio, cade). Tieni solo quelle con giustificazione verificabile.',
    '2) Caccia cio che la FASE A ha MANCATO: ipotesi tacite non enunciate, casi estremi che rompono una formula presa alla lettera, definizioni che falliscono la prova del coprire, etichette sbagliate (euristica/proprietario spacciati per teorema), marcatori [DOC]/[INF]/[PROP] mancanti. Livello di precisione = quello di calibrazione del charter (esempio PageRank).',
    '3) Rirun con python3 qualunque conto di cui dubiti.',
    '4) Componi il REPORT FINALE in formato A-G (vedi charter) unendo le schede superstiti + i tuoi nuovi rilievi, e SCRIVILO con lo strumento Write in: ' + report,
    '5) SCRIVI il sidecar JSON in: ' + sidecar + ' — un array JSON di check numerici verificati; ogni elemento: {"dove": string, "atteso": number|null, "formula": string (espressione python3 autosufficiente che ricalcola il valore), "tol": number, "esito": "OK"|"KO"|"manuale"}. Includi SOLO check realmente numerici (atteso non-null) piu eventuali "manuale" con atteso null e nota nel campo dove. Se non ci sono conti numerici, scrivi [].',
    '',
    'Restituisci il sommario compatto (schema): counts per severita (dopo la verifica), promuovibile (la pagina puo passare BOZZA->VERIFICATA? la 1.1 resta VERIFICATA solo se non trovi bloccanti/gravi), i bloccanti in una riga ciascuno, il numero di check numerici e quelli falliti, e conferma i due path scritti.',
    'Il report DEVE contenere le sezioni A,B,C,D,E,F,G. Sii conciso ma completo; niente complimenti.',
  ].join('\n')
}

// ----------------------------------------------------------------- esecuzione
phase('Audit')
log('Audit di rigore: ' + PAGES.length + ' pagine, pipeline audit -> verifica+report.')

const results = await pipeline(
  PAGES,
  (p) => agent(stageAPrompt(p), { label: 'audit:' + p.sigla, phase: 'Audit', schema: STAGE_A_SCHEMA }),
  (prev, p) => agent(stageBPrompt(prev, p), { label: 'report:' + p.sigla, phase: 'Report', schema: STAGE_B_SCHEMA }),
)

const ok = results.filter(Boolean)
log('Report di pagina scritti: ' + ok.length + '/' + PAGES.length)

// ------------------------------------------------------- report trasversali
phase('Trasversale')
const listaPagine = PAGES.map((p) => p.sigla).join(', ')
const reportDir = AUDIT + '/pagine'

const conformitaPrompt = [
  'RUOLO: sintesi trasversale FASE 4 (conformita al Glossario) su TUTTO il corpus.',
  'Leggi: il charter ' + CHARTER + '; i risultati meccanici ' + EXTRACT + '; il Glossario ' + GLOSS + '; e la sezione E di ciascun report gia scritto in ' + reportDir + '/<sigla>.md (sigle: ' + listaPagine + ').',
  'Puoi anche consultare ' + AUDIT + '/scripts/simboli_data.json.',
  'Produci il report FASE 4 sull intero Glossario: (a) simboli usati e non censiti su tutto il corpus; (b) ogni «prima occ.» sbagliata rispetto all ordine di studio; (c) ogni collisione non marcata (nota ≠ nel Glossario + box Trappola sulla pagina del secondo uso, regola H); (d) definizioni locali divergenti dal Glossario; (e) conteggio voci rifatto (claim 177) e assenza del blocco Gradino 0. Dai una lista azionabile di correzioni, marcate per severita.',
  'SCRIVI il risultato con Write in: ' + AUDIT + '/trasversale/conformita_glossario.md. Restituisci un sommario di 5 righe.',
].join('\n')

const ordinePrompt = [
  'RUOLO: sintesi trasversale FASE 5 (ordine e dipendenze) sull intero percorso.',
  'Ordine di studio autorevole (dal charter e da index.html): F0.1 F0.2 F0.3 F0.4 F0.5 F0.6 F0.7 F0.8 1.1 F4 1.2 F5 1.3 F3 F6 1.4 F2 2.1 2.2 2.3 3.1 3.2 4.1 4.2 4.3.',
  'Leggi il charter ' + CHARTER + ' e tutti i report gia scritti in ' + reportDir + '/<sigla>.md (sigle: ' + listaPagine + '); apri le pagine in ' + WIKI + ' dove serve confermare una dipendenza.',
  'Segnala: (1) concetti usati prima della loro pagina nel percorso; (2) cicli di dipendenza; (3) toppe postume (una correzione/ipotesi che arriva DOPO la formula che correggerebbe, o su un altra pagina); (4) ipotesi che rendono valida una formula ma compaiono dopo di essa. Ordina per gravita e cita pagina+sezione.',
  'SCRIVI il risultato con Write in: ' + AUDIT + '/trasversale/ordine_dipendenze.md. Restituisci un sommario di 5 righe.',
].join('\n')

const [confSum, ordSum] = await parallel([
  () => agent(conformitaPrompt, { label: 'trasversale:conformita', phase: 'Trasversale' }),
  () => agent(ordinePrompt, { label: 'trasversale:ordine', phase: 'Trasversale' }),
])

// indice compatto per l orchestratore
const indice = ok.map((r) => ({
  sigla: r.sigla,
  promuovibile: r.promuovibile,
  counts: r.counts,
  n_bloccanti: (r.bloccanti || []).length,
}))

return {
  pagine_completate: ok.length,
  indice,
  trasversale: { conformita: !!confSum, ordine: !!ordSum },
}

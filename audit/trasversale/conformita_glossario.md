# FASE 4 — Conformità al Glossario globale (sintesi trasversale su tutto il corpus)

**Oggetto:** `wiki/Glossario_globale.html` come «fonte di verità unica» dei simboli.
**Fonti:** charter (regole A, D, E, G, H; codici G/O/S/T); `audit/scripts/estrai_simboli_output.txt` (meccanico); `audit/scripts/simboli_data.json`; sezione E dei 24 report di pagina in `audit/pagine/`.
**Verifiche indipendenti eseguite** (grep/python3 sul file HTML e sul JSON): conteggio righe, presenza `≠`, simboli assenti, voce fantasma `\mathbf 1`. Riportate sotto ai punti relativi.

Nota preliminare di copertura: **il report di pagina F0.1 NON esiste** (`audit/pagine/` contiene F0.2…F0.8 ma non F0.1). Le voci di F0.1 (frazione `a/b`, `:`/`÷`, virgola decimale — sez. C del meccanico) restano quindi prive di audit di pagina; le tratto qui solo lato Glossario.

---

## Verdetto (5 righe)
Il Glossario **non può essere dichiarato «fonte di verità unica»**: la sua stessa intestazione — «Tutto il resto è censito» — è **falsa** (8 pagine, F0.1–F0.8, hanno zero righe). Difetti trasversali: **1 sistemico [GRAVE]** (blocco Gradino 0 assente → ~24 simboli non censiti e ~12 «prima occ.» errate a cascata); **5 collisioni reali non marcate [GRAVE]** (`z, v, N, α, ∼`) più `I` [GRAVE/MINORE]; **3 collisioni con box presente ma glifo `≠` mancante [MINORE]** (`H, λ, S`); **2 voci false nel testo del Glossario [GRAVE]** (`∼` «in F4 era»; `a^b` «copre eᵗ»); definizioni locali più povere/più forti della pagina in 5 punti. Il claim **«177 voci» è aritmeticamente esatto come conteggio di righe**, ma è un conteggio di ciò che c'è, non di ciò che dovrebbe esserci.

---

## (e) Conteggio voci rifatto e assenza del blocco Gradino 0

**Conteggio (verificato con grep + python3).**
- Righe `<tr>` totali nella tabella: **195**. Meno 1 riga `<thead>` e 17 righe-intestazione di sezione (`colspan="4"`) = **177 righe-voce**.
- Claim in intestazione (riga 146): «Totale voci: **177**». `claimed_total` nel JSON: 177. **Coincide.**
- Ma le 177 righe impacchettano **230 simboli distinti** (righe multi-simbolo come `\(s\),\(r\),\(b\)`, `\(\mathbf 1\),\(\mathbf v\)`). Se «voce» = «simbolo», il numero onesto è **230**, non 177. L'intestazione non dichiara quale delle due nozioni conta → ambiguità del claim stesso.
- **Il numero è giusto, il perimetro no:** le 177 righe coprono solo 17 delle 25 pagine dell'ordine di studio.

**Blocco Gradino 0 (F0.1–F0.8): ASSENTE.** Confermato dal meccanico (sez. B: «presente un blocco F0.x? → NO») e da grep diretto: le 17 sezioni sono `1.1, F4, 1.2, F5, 1.3, F3, F6, 1.4, F2, 2.1, 2.2, 2.3, 3.1, 3.2, 4.1, 4.2, 4.3` — **nessuna F0.x**. Difetto **G** (regola G: «Il Glossario deve contenere le voci F0.1–F0.8»).

Conseguenza diretta sul claim di completezza: l'intestazione (riga 147) dichiara «Tutto il resto è censito». **Falso.** Restano fuori almeno (verificati assenti con grep, count = 0 salvo dove indicato):
- `n!` (fattoriale) — **assente ovunque** (grep `fattoriale|n!` → 0). Usato però in 1.1 §3.2 (binomiale) e introdotto in F0.5 §4.
- `derivata`, `pendenza`, `tangente` (F0.7) — **assenti** (grep → 0).
- `integrale` come concetto, `f(x)`, `dx` (F0.8) — **assenti** (`f(x)` grep → 0; «integrale» compare solo come *nome* del `\int` di 1.1, riga 175).
- `\log_b c` **generale** (F0.3) — assente: il Glossario ha solo `\ln` (1.1) e `\log_2` (F3), mai il logaritmo in base qualsiasi.
- `x_i` (componente, F0.6), `i`/pedice `x_i` (F0.4), `n` generico (F0.4), frazione `a/b` · `:`/`÷` · virgola decimale (F0.1), `a^0` e `a^{-b}` come voci proprie (F0.2).

---

## (a) Simboli usati e non censiti — su tutto il corpus

### a-1 · Gradino 0 (root: blocco F0.x assente). Codice G.
Elenco sopra in (e). Alcuni **sono** nel Glossario ma sotto la pagina sbagliata (li conto in (b), non qui): `\lfloor\cdot\rfloor` (sotto F6), `|x|` (sotto 1.1), `\sqrt{}` (sotto F4), `a^b` (sotto 1.1), `\sum`/`\prod` (sotto 1.1), `\min`/`\max` (sotto 1.1), `\%` (sotto 1.1), `e`/`\ln` (sotto 1.1), `\log_2` (sotto F3), `\int` (sotto 1.1). Sono **censiti ma con prima occ. errata** → punto (b).

### a-2 · Simboli non-F0 usati in pagina e mai censiti. Codice G.
| Simbolo | Pagina/uso | Dove risulta il buco | Report |
|---|---|---|---|
| `N` (uscite hash, `1/N`) | F6 §1 | assente dal blocco F6 **e** collide con `N`=pagine (2.1) / `N`=sorgenti (1.4) senza `≠` | F6-E |
| `P_cand(s)` | F6 §5 | funzione in formula ed esercizi, mai censita | F6-E |
| `F` (n. pagine della farm) | 2.3 §1/§3 | usato in formula/esempi, assente da «Simboli nuovi» e Glossario | 2.3-E |
| `P(a,b)` (prob. congiunta / co-occorrenza) | F3 §4, 3.2 §2 | esiste `P(A)` e `A∩B`, non la forma congiunta con argomenti | F3-E, 3.2-E |
| `α` con `0<α<1` (serie di Neumann) | F2 §6 | nessuna riga propria; vive solo dentro «serie di Neumann» | F2-E |
| `ρ_max`, `ρ_hold`, `bounce_d`, `block_d`, `V_t` | 1.3 §3–§4 | usati in formula chiave, mai in tabella né Glossario | 1.3-E |
| `θ_spam`, `auth`, `V` | 1.2 §2–§3 | pedice/feature usati nell'esempio, non censiti | 1.2-E |
| `rep`, `seed` (tipo) | 3.2 §3 | censiti come nomi ma **senza tipo** (vettore? [0,1]? insieme?) | 3.2-E |
| `bit` come cifra binaria | F6 §1 | l'unica voce `bit` (F3) è il bit di Shannon: senso diverso, nessuna distinzione | F6-E |

Pagine **senza** simboli non censiti imputabili (verificato nei report): 1.1, 2.1, 3.1, 4.1, 4.2, 4.3 (i loro simboli sono in App. B o a monte in F6/2.2).

---

## (b) «Prima occ.» sbagliate rispetto all'ordine di studio. Codice O.

Ordine autorevole: F0.1→…→F0.8→1.1→F4→1.2→F5→1.3→F3→F6→1.4→F2→2.1→2.2→2.3→3.1→3.2→4.1→4.2→4.3.

### b-1 · Latenti da Gradino 0 (root unico: blocco F0.x assente). ~12 simboli.
Il Glossario attribuisce a una pagina **successiva** simboli la cui prima occorrenza reale è una F0.x (meccanico sez. D). Correzione richiesta = prima occ. → F0.x:
- `\%` → dato 1.1 §1.1; corretto **F0.1**.
- `a^b` → dato 1.1 §3.2; corretto **F0.2 §1** (F0.2-E). `\sqrt{}` → dato F4 §1.3; corretto **F0.2 §4**.
- `e`,`\ln` → dato 1.1 §5.2; corretto **F0.3 §3** (F0.3-E). `\log_2` → dato F3 §1; corretto **F0.3 §3**.
- `\sum`,`\prod` → dati 1.1 §2.2/§5.1; corretti **F0.4 §1/§3** (F0.4-E).
- `|x|` → dato 1.1 §5.6; corretto **F0.5 §1**. `\min`,`\max` → dati 1.1 §3.4; corretti **F0.5 §3**. `\lfloor\cdot\rfloor` → dato **F6 §6**; corretto **F0.5 §2** (F0.5-E).
- `\mathbf x`,`\boldsymbol\theta`,`\top`,`\boldsymbol\theta^{\top}\mathbf x` → dati F4 §1.x; corretti **F0.6 §1/§2** (F0.6-E).
- `\int` → dato 1.1 §2.2; corretto **F0.8 §3** (verificato: F0.7 non usa `\int`).

### b-2 · Errori non riducibili a Gradino 0.
- **`\sim` — voce falsa.** Riga 239 (blocco 1.2): «secondo uso di `∼` (in **F4** era «dell'ordine di»)». **Falso su due fronti:** (i) la prima occ. reale è **1.1 §5.2** (riga 190), non F4; (ii) **F4 non usa affatto `∼`** (confermato dal report F4-E). Il testo della «fonte di verità» afferma un fatto inesistente. Codice **G/O** [GRAVE].
- **`α`** — prima occ. reale **1.1 §4.5** (Beta, riga 188); il Glossario la fa partire da 2.2 §3 (riga 338) e la nota «era conteggio virtuale nella 1.2» **salta la 1.1**. Codice O (2.2-E, S3).
- **`I`** — prima occ. reale **1.1 §5.6** (indicatore di Fisher, riga 202); il Glossario privilegia F2 §6 (identità, riga 313) e non registra l'ordine. Codice O (F2-E).
- **`\hat p, k, m, \Delta t, \tau`** attribuiti a F4 ma già presenti in **1.1** (F4-E). Per `k`/`\tau` è collisione (vedi (c)); per `\hat p, m` è prima occ. da verificare pagina per pagina.
- **`r(x)`** — la 1.3 (riga 188) lo attribuisce «alla 1.2»; Glossario e F4 §2.2 danno **F4** e significato «probabilità stimata che y=1». Attribuzione **e** polarità divergenti (1.3-E, S1). Codice O + E/G.
- **`\log_2`** — Glossario F3 §1; nell'ordine di studio il logaritmo è F0.3 e `\log_2` ne è la specializzazione, non un simbolo nuovo di F3 (F3-E, S6). Codice O.

### b-3 · Voce fantasma (verificata con grep).
`\mathbf 1` compare **solo** nel blocco 2.1 (riga 325), con prima occ. 2.1 §3 — corretta. **Ma** la tabella «Simboli nuovi» della **pagina F2** lo dichiara come nuovo di F2, mentre **F2 non usa `\mathbf 1`** (`grep` → 0 occorrenze in F2; F2-E). La discrepanza è nella tabella locale di F2, non nel blocco F2 del Glossario (che infatti non lo contiene): il report F2 lo descrive come «voce fantasma nel blocco F2» — **imprecisione da correggere nel report F2**, la sostanza (F2 dichiara un simbolo che non usa) resta.

### b-4 · Falso positivo del meccanico (da non correggere).
Sez. D del meccanico segnala «`q` dichiarato in F6 ma Glossario dà prima occ. 3.1 → O». **Non è un difetto:** sono due voci distinte (quoziente di Rice, F6 §6, riga 289; query, 3.1 §2, riga 352), collisione **coperta** con `≠` + box Trappola (3.1-E). «prima occ. 3.1» è corretta per «query».

---

## (c) Collisioni non marcate (regola A/H: `≠` nel Glossario **E** box Trappola sulla pagina del **secondo** uso)

Verifica indipendente: `grep '≠'` → **16** glifi presenti; idioma «N-esimo mestiere della lettera» → 5 occorrenze. Mappa completa (17 collisioni del meccanico sez. E), incrociata con i box Trappola accertati nei report di pagina:

| Simbolo | Voci (ordine studio) | `≠` in Gloss. | box Trappola su 2° uso | Verdetto |
|---|---|---|---|---|
| `z` | F4 quantile → **F5** z-score | **NO** | **NO** (assente su F5) | **scoperta** — G+T [GRAVE] |
| `\mathbf v` | F2 autovettore → **2.1** teletrasporto | **NO** | **NO** (assente su 2.1) | **scoperta** — G+T [GRAVE] |
| `N` | 1.4 sorgenti → **2.1** pagine | **NO** | **NO** (assente su 2.1) | **scoperta** — G+T [GRAVE] |
| `\alpha` | 1.1 Beta → **2.2** damping | **NO** | presente su 2.2 ma **impreciso** (rimanda a α₀ di 1.2, non alla Beta di 1.1) | **semi-scoperta** — G [GRAVE] |
| `\sim` | 1.1 ordine → **1.2** distribuzione | **NO** | **NO** su 1.2 + riga 239 falsa (vedi b-2) | **scoperta** — G+T [GRAVE] |
| `I` | 1.1 indic. Fisher → **F2** identità | **NO** | **NO** su F2 | **scoperta** — G+T [GRAVE→MINORE per disambig. contestuale] |
| `H` | 1.1 ham + 1.1 Fisher → **F3** entropia | **NO** | presente su F3 (e §5.6 intra-1.1) | box OK, **manca glifo `≠`** nel Gloss. — G [MINORE] |
| `\lambda` | F4 L2/EWMA → **F2** autovalore | **NO** | presente su F2 («terzo mestiere di λ») | box OK, **manca glifo `≠`** nel Gloss. — G [MINORE] |
| `S` | 1.1 classe → 1.1 Fisher | **NO** (glifo) | prosa «cambiano ruolo» riga 170 | coperta a parole, **glifo `≠` assente** — [MINORE] |
| `k` | 1.1 successi → F4 conteggi → F6 Rice | **NO** | F4: stesso ruolo (non riciclo); F6 Rice `k` **senza** `≠` verso 1.1/F4 | residuo F6 — [MINORE] |
| `D` | 1.1 dati → F6 conteggi DB | **sì** | OK | conforme |
| `\tau` | 1.1 soglia → F4 costante tempo | **sì** | box §4.2 su F4 | conforme |
| `b` | 1.1 → 1.3 → F6 | **sì** | OK | conforme |
| `d` | 1.3 giorno → 2.1 damping | **sì** | box su 2.1 | conforme |
| `q` | F6 Rice → 3.1 query | **sì** | box §2 su 3.1 | conforme |
| `r` | F5 ricarica → F6 righe | **sì** | OK | conforme |
| `s` | 1.1 forza prior → F6 similarità | **sì** | OK | conforme |
| `w` | 1.1 parola → 1.2 peso miscela | **sì** | box su 1.2 | conforme |

Sintesi: **5 collisioni realmente scoperte** (`z, v, N, ∼, I`) + **1 semi-scoperta** (`α`, box impreciso) → richiedono `≠` nel Glossario **e** box Trappola sulla pagina del secondo uso (F5, 2.1, 2.1, 1.2, F2, 2.2). **3 con box presente ma glifo `≠` mancante** (`H, λ, S`) → basta aggiungere `≠` al Glossario. Il resto è conforme.

---

## (d) Definizioni locali divergenti dal Glossario

| # | Voce | Divergenza | Chi ha ragione | Severità |
|---|---|---|---|---|
| d1 | `a^b` (riga 182, blocco 1.1) | Gloss.: «copre θᵇ, **eᵗ**, 2¹⁰» → ammette esponenti reali; F0.2 §1 (fonte) **limita** b intero ed esclude esplicitamente a^{1/2}. La voce del Gloss. **afferma un dominio che la definizione-fonte nega**; 1.1-E la marca già «falsa» (R4). | Fonte F0.2 | **[GRAVE]** — voce falsa |
| d2 | `\sim` (riga 239) | «in F4 era dell'ordine di» — F4 non usa `∼` (vedi b-2). | — | **[GRAVE]** — voce falsa |
| d3 | «norma» (riga 215) | Gloss. dà solo l'euclidea `\sqrt{\sum\theta_j^2}`; F0.6 §3 definisce la norma **generale** (firma `\lVert\cdot\rVert:V\to[0,+\infty)`, 4 assiomi). L'indice è più povero della pagina. | Fonte F0.6 | [MINORE] |
| d4 | `\int` (riga 175) | «compare **solo** nel box sul caso continuo» — glossa 1.1-centrica, contraddice l'introduzione generale di F0.8 §3. | Fonte F0.8 | [MINORE] |
| d5 | `\Longleftrightarrow` | Tabella locale F0.3 §1: «è la stessa cosa di»; Gloss. (riga 301): «se e solo se». Il Gloss. lo attribuisce inoltre a 1.4 §4, ma la prima occ. reale è F0.3 §1. | Gloss. (per la glossa); F0.3 (per l'occ.) | [MINORE] + O |
| d6 | `PR^+` (riga 345) | «PageRank che arriva propagando dal nucleo fidato»: **né** Gloss. **né** 2.3 fissano se `PR^+` è normalizzato (Σ=1). È il nodo di S1/S2 della 2.3. | irrisolto | [GRAVE] — tipo indeterminato |
| d7 | `rep`, `seed` (riga 360) | Nessun **tipo**: vettore di lunghezza n? componenti in [0,1]? `seed` insieme o distribuzione? Descritto come insieme, usato come vettore. Regresso rispetto a `\mathbf d` di 2.2 §2 che il tipo lo dà. | irrisolto | [GRAVE] — D1 |
| d8 | Update API (riga 369) | Gloss.: «DB locale a prefissi **(privato)**»; 4.2 §2 rafforza in «Privacy **piena**». Il corpo è più forte del proprio indice. | da allineare | [MINORE] |
| d9 | `z` (righe 225 vs 247) | Due voci con nomi diversi («quantile normale» F4 / «z-score» F5) e **nessuna** `≠` — è la divergenza d2 di significato che alimenta la collisione scoperta (c). | — | vedi (c) |

**Separatore argomenti (regola D).** Il Glossario stesso viola la convenzione di casa: `\text{Beta}(\alpha,\beta)` (riga 188), `J(A,B)` (riga 283) usano la **virgola** dove il decimale può finirci accanto; la regola D impone `;`. Incoerenza propagata a F3 (`PMI(a,b)`, `P(a,b)`) e 3.2. Codice **G** sistematico, [MINORE] ma diffuso.

---

## Lista azionabile di correzioni (marcata per severità)

### [GRAVE]
- **C1 — Aggiungere il blocco «Gradino 0» (F0.1–F0.8) al Glossario** con le prime occ. corrette (vedi b-1) e le voci mancanti `n!`, `\log_b` generale, `derivata/pendenza/tangente`, `integrale/f(x)/dx`, `x_i`, `i`, frazione/`÷`/virgola. Correggere l'intestazione: «Tutto il resto è censito» è falsa finché il blocco manca. *Root di ~24 non-censiti e ~12 prime occ. errate.*
- **C2 — `∼` riga 239: rimuovere «in F4 era»** (F4 non usa `∼`); la prima occ. è 1.1 §5.2. Voce falsa nella fonte di verità.
- **C3 — `a^b` riga 182: correggere il dominio** (b intero, coerente con F0.2 §1) o dichiarare esplicitamente l'estensione a e^t come voce separata. Oggi la voce è falsa (R4).
- **C4 — 5 collisioni scoperte + 1 semi-scoperta:** aggiungere `≠` nel Glossario **e** box Trappola sulla pagina del secondo uso:
  - `z` → `≠` tra F4/F5 + Trappola su **F5** (F5-01).
  - `\mathbf v` → `≠` tra F2/2.1 + Trappola su **2.1**.
  - `N` → `≠` tra 1.4/2.1 + Trappola su **2.1**.
  - `\sim` → `≠` tra 1.1/1.2 + riga in Trappola su **1.2**.
  - `I` → `≠` tra 1.1/F2 + Trappola su **F2** (o dichiarare disambiguazione contestuale come rinuncia).
  - `\alpha` → correggere il box di **2.2** (rimanda alla Beta di 1.1, non ad α₀ di 1.2) + `≠` nel Glossario.
- **C5 — Tipizzare `PR^+` (Σ=1 o no)** nel Glossario e in 2.3; **tipizzare `rep`/`seed`** in 3.2 (firma esplicita). D1 irrisolto.

### [MINORE]
- **C6 — Aggiungere il glifo `≠`** alle collisioni già coperte a parole/idioma: `H` (F3↔1.1), `\lambda` (F2↔F4), `S` (intra-1.1), `k`-Rice (F6↔1.1/F4).
- **C7 — Generalizzare le glosse 1.1-centriche:** `\int` (riga 175, togliere «solo nel box»), «norma» (riga 215, dare la firma generale di F0.6), `\Longleftrightarrow` (riga 301, prima occ. → F0.3 §1).
- **C8 — Allineare l'indice al corpo:** Update API «(privato)» → coerente con «Privacy piena» di 4.2 §2 (o attenuare il corpo).
- **C9 — Applicare la regola D** (separatore `;`) nel Glossario e a valle: `Beta(α;β)`, `J(A;B)`, `PMI(a;b)`, `P(a;b)`.
- **C10 — Censire i simboli non-F0 mancanti** (tabella a-2): `N`(hash), `P_cand(s)`, `F`(farm), `P(a,b)`, `α`(Neumann), `ρ_max/ρ_hold/bounce_d/block_d/V_t`, `θ_spam/auth`, `bit`(binario).
- **C11 — Disambiguare il claim di conteggio:** dichiarare che «177» conta **righe**, non simboli (i simboli distinti sono 230).

### Correzioni ai report d'audit (non al Glossario)
- **C12 — Report F2-E:** la «voce fantasma `\mathbf 1` nel blocco F2 del Glossario» è imprecisa — `\mathbf 1` è nel blocco **2.1** (riga 325), non in F2; il fantasma è nella **tabella locale della pagina F2**. Correggere la formulazione (sostanza invariata).
- **C13 — Colmare l'assenza del report di pagina F0.1** (frazione `a/b`, `:`/`÷`, virgola decimale non auditati a livello pagina).

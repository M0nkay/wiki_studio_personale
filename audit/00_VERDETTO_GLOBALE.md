# VERDETTO GLOBALE — audit di rigore, wiki «Sistemi di Fiducia»

**Esito secco: 0 pagine su 25 sono promuovibili a VERIFICATA.** La sola pagina oggi
marcata VERIFICATA — la **1.1** — **non regge lo stato**: due rilievi GRAVE su ipotesi
mai scritte. Va riportata a BOZZA finché non sono sanati.

Metodo: audit a due fasi per pagina (audit profondo FASI 1–5 con prova del nove eseguita in
`python3` → verifica avversariale che confuta i rilievi deboli e caccia i mancati), più due
sintesi trasversali (FASE 4 conformità, FASE 5 ordine/dipendenze). Conti ricalcolati cifra per
cifra da `scripts/verifica_conti.py`; conformità dei simboli da `scripts/estrai_simboli.py`.

> **Nota di copertura.** La pagina **F0.1** (Frazioni e percentuali) **non è stata auditata**,
> per decisione esplicita dell'autore (parte a più basso impatto). Resta BOZZA, non valutata.
> Le sue voci lato Glossario (frazione, `÷`, virgola, `%`) sono comunque coperte dai report
> trasversali. **24/25 pagine hanno un report completo A–G.**

---

## I BLOCCANTI, in testa

### Bloccanti di pagina (5) — un errore falso/mal posto/circolare che invalida ciò che ne dipende
| pagina | § | difetto | codici |
|---|---|---|---|
| **F0.3** | §3 | «la base [del logaritmo] può essere qualsiasi numero» — **falso**: serve `b>0, b≠1` (con `b=1`, `1^x=c` non ha soluzione per `c≠1`; con `b≤0` la potenza reale non è definita) | E, I |
| **F0.7** | §3+§4 | «derivata 0 ⇔ massimo/minimo» — **falso**: condizione necessaria non sufficiente (flesso a tangente orizzontale `x³`; e ai bordi la MLE `k=0/n` sta dove `L'≠0`) | E, I |
| **1.3** | §4 | `P_accept = σ(a·r(x) − b·z_V)` con `a>0`: **polarità di `r(x)` invertita** — `r` è prob. di abuso (alto = peggio), ma così il mittente più abusivo è accettato di più (controesempio: `P(r=0,2)=0,599 < P(r=0,8)=0,832`) | E, G, O |
| **F2** | §3 | «**la** distribuzione stazionaria `p*`, `Mp*=p*`»: esistenza/unicità mai poste; presa alla lettera `Mp*=p*` è soddisfatta anche dal **vettore nullo** (tipo D1 assente, ipotesi irriducibile+aperiodica in §5, due sezioni dopo) | D1, P, I, O, M |
| **3.2** | §3 | `W` «normalizzata per colonna → stocastica»: **falso per un'entità isolata** (colonna nulla → `0/0`, `W` non stocastica, il punto fisso `rep` non esiste) | P, I, D1 |

### Bloccanti strutturali cross-pagina (4) — dai report trasversali (parziale sovrapposizione con i precedenti)
- **T-01 — L'esponenziale reale `e^t` non è definito da nessuna pagina** ma regge sigmoide (1.1), logistica (F4), reputazione (1.2), EWMA; **F0.2 lo esclude esplicitamente**. Anello logico **F0.2↔F0.3** (il log ha bisogno di potenze reali che F0.2 rifiuta). La voce di Glossario `a^b` «copre `e^t`» è quindi falsa.
- **T-02 — La convenzione «insieme/somma/prodotto vuoto» e «denominatore non nullo / argomento del log positivo» non è mai fissata alla fonte** (F0.4, F0.3) e viene poi **omessa da 13+ pagine a valle** (1.1, F4, F5, 1.3, F3, F6, F2, 2.1, 2.2, 2.3, 3.2, 4.3): difetto d'ordine sistemico.
- **T-03 — Massa dangling / buona posizione della stazionaria: toppa sempre postuma**, e talvolta non ereditata: F2 §3 (→§5), 2.1 §2 (→§3, mai corretto in loco), 2.2 §3 (non eredita `G`: `Σt=0,875`), 3.2 §3 (nessuna toppa). *(Contiene F2-01, 2.1-S1, 2.2-S1, 3.2-S1.)*
- **T-04 — `r(x)` con polarità invertita in 1.3** rispetto alla definizione a monte (F4/1.2). *(= 1.3-S1.)*

### La VERIFICATA che cade
- **1.1** (unica VERIFICATA): aritmetica impeccabile (34 conti tornano), ma **2 GRAVE**:
  **R1** — le formule di Fisher `H,S,I` sono indefinite per `n=0` (χ²₀ degenere), ipotesi `n≥1` mai scritta;
  **R2** — la «parola mai vista» riceve 0,4 (Graham) sovrascritto a 0,5 (Robinson `n=0`): conflitto non risolto sotto la mappa clamp→shrink. **→ NON confermabile VERIFICATA.**

---

## Tabella pagina → promozione

| # | pagina | stato attuale | BL | GR | MI | **promuovibile a VERIFICATA?** |
|---|--------|---------------|----|----|----|-------------------------------|
| 1 | F0.1 | BOZZA | — | — | — | **non auditata** (decisione autore) |
| 2 | F0.2 | BOZZA | 0 | 2 | 3 | **NO** |
| 3 | F0.3 | BOZZA | 1 | 4 | 4 | **NO** (bloccante) |
| 4 | F0.4 | BOZZA | 0 | 2 | 3 | **NO** |
| 5 | F0.5 | BOZZA | 0 | 2 | 3 | **NO** |
| 6 | F0.6 | BOZZA | 0 | 2 | 5 | **NO** |
| 7 | F0.7 | BOZZA | 1 | 4 | 1 | **NO** (bloccante) |
| 8 | F0.8 | BOZZA | 0 | 1 | 5 | **NO** |
| 9 | 1.1 | **VERIFICATA** | 0 | 2 | 6 | **NO — va riportata a BOZZA** |
| 10 | F4 | BOZZA | 0 | 7 | 5 | **NO** |
| 11 | 1.2 | BOZZA | 0 | 4 | 1 | **NO** |
| 12 | F5 | BOZZA | 0 | 2 | 4 | **NO** |
| 13 | 1.3 | BOZZA | 1 | 3 | 4 | **NO** (bloccante) |
| 14 | F3 | BOZZA | 0 | 3 | 6 | **NO** |
| 15 | F6 | BOZZA | 0 | 3 | 5 | **NO** |
| 16 | 1.4 | BOZZA | 0 | 2 | 6 | **NO** |
| 17 | F2 | BOZZA | 1 | 5 | 2 | **NO** (bloccante) |
| 18 | 2.1 | BOZZA | 0 | 4 | 4 | **NO** |
| 19 | 2.2 | BOZZA | 0 | 2 | 2 | **NO** |
| 20 | 2.3 | BOZZA | 0 | 2 | 4 | **NO** |
| 21 | 3.1 | BOZZA | 0 | 1 | 3 | **NO** |
| 22 | 3.2 | BOZZA | 1 | 3 | 2 | **NO** (bloccante) |
| 23 | 4.1 | BOZZA | 0 | 1 | 4 | **NO** |
| 24 | 4.2 | BOZZA | 0 | 1 | 1 | **NO** |
| 25 | 4.3 | BOZZA | 0 | 2 | 3 | **NO** |

**Nessuna pagina passa.** Il badge «VERIFICATA» della 1.1 va sostituito con «BOZZA» finché R1/R2 non sono chiusi.

---

## Conteggi totali (24 pagine auditate)

| severità | totale |
|---|---|
| **BLOCCANTE** | **5** |
| **GRAVE** | **64** |
| **MINORE** | **86** |
| **totale rilievi** | **155** |

Distribuzione: nessuna pagina è pulita. Le più cariche: **F4** (0/7/5), **F2** (1/5/2),
**2.1** (0/4/4), **F0.3** e **F0.7** (bloccanti + 4 gravi ciascuna), **1.2** (0/4/1).

---

## Prova del nove — esito consolidato (`scripts/verifica_conti.py`)

- **396 check numerici** raccolti dai sidecar delle 24 pagine, ricalcolati cifra per cifra.
- **393 OK**, **0 errori di valutazione**, **3 KO** — tutti significativi, nessuno spurio:
  1. **2.2** «la somma fa 1» → ricalcolato **0,875** con un seme dangling (dimostra l'ipotesi tacita no-dangling, difetto I).
  2. **4.1** `(2³²+1)/2³² > 1` → dimostrazione voluta di un'ipotesi tacita ai bordi (esplicitamente «NON errore della pagina»).
  3. **4.3** `12/32 = 0,375` spacciato per «quasi un terzo» (0,333): scarto 0,042 (difetto N, claim lasco).
- **53 voci manuali** (check concettuali, non numerici). L'aritmetica «di superficie» della wiki è
  quasi sempre corretta: **i difetti stanno nelle ipotesi tacite e nei casi estremi**, come previsto.

---

## Conformità al Glossario — esito consolidato (`scripts/estrai_simboli.py` + `trasversale/conformita_glossario.md`)

- Claim «**177 voci**»: **aritmeticamente esatto** come conteggio di righe (195 `<tr>` − 18 intestazioni), ma le 177 righe impacchettano **230 simboli distinti** e coprono **solo 17 delle 25 pagine**.
- **Blocco Gradino 0 (F0.1–F0.8): ASSENTE** → difetto **G** sistemico. Radice di ~24 simboli non censiti e ~12 «prima occ.» errate (∑, ∏, |x|, √, floor, `%`, `e`, `ln`, `⟺`, … attribuiti a pagine successive alla loro reale introduzione).
- **2 voci false nella «fonte di verità»**: `∼` («in F4 era…» — F4 non usa `∼`); `a^b` («copre `e^t`» — F0.2 nega gli esponenti reali).
- **5 collisioni scoperte** (`z, v, N, ∼, I`) + 1 semi-scoperta (`α`) prive di nota «≠» **e** box Trappola; **3** coperte a parole ma senza il glifo `≠` (`H, λ, S`).
- Il Glossario stesso viola la **regola D** (separatore `;`): `Beta(α,β)`, `J(A,B)` con la virgola.

---

## Struttura d'errore ricorrente (dai report trasversali)

1. **Fondazioni mai posate**: `e^t` reale (T-01), convenzione insieme/somma vuoto e dominio del log (T-02), la distribuzione normale «promessa più avanti» in F4 e mai consegnata (T-05).
2. **Toppe postume**: la correzione (dangling / buona posizione / valore-base Rice / condizione «interno e liscio» per la MLE) arriva **dopo** la formula, o su un'altra pagina, o mai (T-03, T-06, T-07).
3. **Registro T2 sistematico**: «Intuizione.» in grassetto inline nel corpo con seconda persona colloquiale, fuori dai box «Intuizione» (regola F) — ricorre su quasi tutte le pagine (MINORE, ma diffuso).

---

## Raccomandazione

Nessuna promozione. Prima di toccare i badge:
1. **Posare le fondazioni prima della 1.1**: `e^t` reale (T-01) e le due convenzioni-madre in F0.4/F0.3 (T-02).
2. **Chiudere i 5 bloccanti di pagina** (F0.3, F0.7, 1.3, F2, 3.2) e i 4 strutturali.
3. **Riportare la 1.1 a BOZZA** e sanare R1/R2.
4. **Ricostruire il blocco Gradino 0 nel Glossario** con le «prima occ.» corrette e le voci false rimosse.
5. Le riscritture pronte da incollare sono nelle sezioni **C** dei singoli report `audit/pagine/<sigla>.md`; le liste azionabili in `audit/trasversale/`.

*Le correzioni al sorgente `.html` NON sono state applicate (audit, non riscrittura): è un secondo passo separato, da autorizzare esplicitamente.*

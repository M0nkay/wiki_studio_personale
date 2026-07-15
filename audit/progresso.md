# Progresso audit — wiki «Sistemi di Fiducia»

Stato: **completato** (24/25 pagine; F0.1 non auditata per decisione dell'autore).
Ordine di studio autorevole confermato su `index.html`.

Legenda severità: BL = bloccante · GR = grave · MI = minore.

## Preliminari (ordine di lettura obbligato)
- [x] `Come_si_studia.html` letto
- [x] `Glossario_globale.html` letto
- [x] `index.html` letto — ordine di studio confermato
- [x] `scripts/estrai_simboli.py` scritto ed **eseguito** (output in `scripts/estrai_simboli_output.txt`)
- [x] `scripts/verifica_conti.py` scritto ed **eseguito** (396 check; 393 OK, 3 KO significativi, 0 errori)

## Le 25 pagine (ordine di studio)

| # | sigla | file | stato | BL | GR | MI | promuovibile? |
|---|-------|------|-------|----|----|----|---------------|
| 1 | F0.1 | F0_1_Frazioni_e_percentuali | **non auditata** (decisione autore) | — | — | — | — |
| 2 | F0.2 | F0_2_Potenze_e_radici | fatto | 0 | 2 | 3 | no |
| 3 | F0.3 | F0_3_Logaritmi | fatto | 1 | 4 | 4 | no (bloccante) |
| 4 | F0.4 | F0_4_Somme_e_produttorie | fatto | 0 | 2 | 3 | no |
| 5 | F0.5 | F0_5_Notazione_di_base | fatto | 0 | 2 | 3 | no |
| 6 | F0.6 | F0_6_Vettori_e_prodotto_scalare | fatto | 0 | 2 | 5 | no |
| 7 | F0.7 | F0_7_Derivata | fatto | 1 | 4 | 1 | no (bloccante) |
| 8 | F0.8 | F0_8_Integrale | fatto | 0 | 1 | 5 | no |
| 9 | 1.1 | Bella_copia_1.1_Filtraggio_Bayesiano | fatto | 0 | 2 | 6 | no — va riportata a BOZZA |
| 10 | F4 | F4_Statistica_e_ML | fatto | 0 | 7 | 5 | no |
| 11 | 1.2 | Sezione_1_2_Score_reputazionali | fatto | 0 | 4 | 1 | no |
| 12 | F5 | F5_Segnali_e_rilevamento | fatto | 0 | 2 | 4 | no |
| 13 | 1.3 | Sezione_1_3_Warmup | fatto | 1 | 3 | 4 | no (bloccante) |
| 14 | F3 | F3_Teoria_informazione | fatto | 0 | 3 | 6 | no |
| 15 | F6 | F6_Similarita_hashing_codifiche | fatto | 0 | 3 | 5 | no |
| 16 | 1.4 | Sezione_1_4_Difese | fatto | 0 | 2 | 6 | no |
| 17 | F2 | F2_Algebra_lineare_Markov | fatto | 1 | 5 | 2 | no (bloccante) |
| 18 | 2.1 | Sezione_2_1_PageRank | fatto | 0 | 4 | 4 | no |
| 19 | 2.2 | Sezione_2_2_TrustRank | fatto | 0 | 2 | 2 | no |
| 20 | 2.3 | Sezione_2_3_Spam_mass | fatto | 0 | 2 | 4 | no |
| 21 | 3.1 | Sezione_3_1_EEAT_ranking | fatto | 0 | 1 | 3 | no |
| 22 | 3.2 | Sezione_3_2_Knowledge_Graph | fatto | 1 | 3 | 2 | no (bloccante) |
| 23 | 4.1 | Sezione_4_1_Safe_Browsing | fatto | 0 | 1 | 4 | no |
| 24 | 4.2 | Sezione_4_2_Web_Risk | fatto | 0 | 1 | 1 | no |
| 25 | 4.3 | Sezione_4_3_Sincronizzazione | fatto | 0 | 2 | 3 | no |

**Totali (24 auditate): BL 5 · GR 64 · MI 86 · 155 rilievi. Promuovibili a VERIFICATA: 0.**

## Report trasversali
- [x] `trasversale/conformita_glossario.md` (FASE 4)
- [x] `trasversale/ordine_dipendenze.md` (FASE 5)
- [x] `00_VERDETTO_GLOBALE.md`

## Note
- F0.1 lasciata BOZZA e non auditata su richiesta esplicita dell'autore (parte a più basso impatto).
- I sorgenti `.html` della wiki **non** sono stati modificati: l'audit produce report e riscritture
  pronte da incollare (sezioni C dei report); l'applicazione al sorgente è un passo separato da autorizzare.

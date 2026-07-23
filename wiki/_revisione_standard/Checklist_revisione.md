# Checklist run «standard F0.7» — 28 pagine

Aggiornata alla chiusura del run (23/07/2026).

**Due cose separate su ogni riga:**

- **L'emoji** = stato del run automatico
- **La casella `[ ]`** = la tua revisione manuale, da spuntare man mano

| Emoji | Significato |
|---|---|
| ✅ | Lavorata e committata, voce presente nel dossier |
| ➖ | Fuori perimetro per scelta del brief |

**Avanzamento: 26 ✅ · 0 in corso · 0 da fare · 2 ➖ — RUN COMPLETO**

---

## Blocco A — Gradino 0, prerequisiti

- [ ] ✅ **F0.1** — `F0_1_Frazioni_e_percentuali.html`
- [ ] ✅ **F0.2** — `F0_2_Potenze_e_radici.html`
- [ ] ✅ **F0.3** — `F0_3_Logaritmi.html`
- [ ] ✅ **F0.4** — `F0_4_Somme_e_produttorie.html`
- [ ] ✅ **F0.5** — `F0_5_Notazione_di_base.html`
- [ ] ✅ **F0.6** — `F0_6_Vettori_e_prodotto_scalare.html`
- [ ] ✅ **F0.7** — `F0_7_Derivata.html` · modello, solo link al CSS
- [ ] ✅ **F0.8** — `F0_8_Integrale.html`

---

## Blocco B — Contenuti, in ordine di navigazione

- [ ] ✅ **1.1** — `Bella_copia_1.1_Filtraggio_Bayesiano.html` · ⚠ solo strato meccanico + fix escaping MathJax
- [ ] ✅ **F4** — `F4_Statistica_e_ML.html`
- [ ] ✅ **1.2** — `Sezione_1_2_Score_reputazionali.html`
- [ ] ✅ **F5** — `F5_Segnali_e_rilevamento.html`
- [ ] ✅ **1.3** — `Sezione_1_3_Warmup.html`
- [ ] ✅ **F3** — `F3_Teoria_informazione.html`
- [ ] ✅ **F6** — `F6_Similarita_hashing_codifiche.html`
- [ ] ✅ **1.4** — `Sezione_1_4_Difese.html`
- [ ] ✅ **F2** — `F2_Algebra_lineare_Markov.html`
- [ ] ✅ **2.1** — `Sezione_2_1_PageRank.html`
- [ ] ✅ **2.2** — `Sezione_2_2_TrustRank.html`
- [ ] ✅ **2.3** — `Sezione_2_3_Spam_mass.html`
- [ ] ✅ **3.1** — `Sezione_3_1_EEAT_ranking.html`
- [ ] ✅ **3.2** — `Sezione_3_2_Knowledge_Graph.html`
- [ ] ✅ **4.1** — `Sezione_4_1_Safe_Browsing.html`
- [ ] ✅ **4.2** — `Sezione_4_2_Web_Risk.html`
- [ ] ✅ **4.3** — `Sezione_4_3_Sincronizzazione.html`

---

## Passo 4 — passata finale

- [ ] ✅ **Glossario** — `Glossario_globale.html` · solo riallineamento, niente blocchi · ⚠ 4 disallineamenti preesistenti segnalati nel dossier

---

## Fuori perimetro

- [ ] ➖ `Come_si_studia.html` · il brief vieta la riscrittura
- [ ] ➖ `index.html` · si tocca solo se cambia un link di navigazione (nessuno è cambiato; i badge «bozza» delle card restano)

---

## Non pagine

- [ ] ✅ `style.css` · foglio condiviso, modifiche `[v2]` accettate
- [ ] ➖ `_revisione_standard/` · dossier, registro e `check_pagina.py`

---

# Da fare a run finito

Non sono pagine da rivedere: sono azioni sulla wiki intera.

- [ ] **Classe `.ex` per gli esempi numerici.** Ora finiscono in `.note`, quindi
      escono blu come l'Intuizione. Due regole in `style.css` più una
      rietichettatura meccanica su tutte le pagine.
- [ ] **`svg text` e spaziatura [v2].** Il letter/word-spacing del corpo eredita
      anche nel testo dentro gli SVG: valutare `svg text{letter-spacing:normal;
      word-spacing:normal}` in `style.css` (v. dossier 1.4).
- [ ] **Badge «bozza» in `index.html`** (53 occorrenze) e `Come_si_studia.html`:
      da riallineare quando deciderai di toccare le pagine fuori perimetro.
- [ ] **Test della deriva.** Confronta le definizioni dell'ultima pagina
      committata con quelle di F0.1. Coprile fino alla formula: se le ultime
      reggono come le prime, non c'è stata deriva.
- [ ] **Conti degli esempi numerici**, dal dossier, a colpo d'occhio.
- [ ] **Voci ⚠ del dossier**, partendo dalle pagine che ne hanno di più
      (l'indice ordinato è in fondo al REPORT).
- [ ] **1.1 — le 18 ancore.** Verifica che ci siano tutte e identiche
      (il run le ha già verificate due volte: id-set immutato).
- [ ] **Blocchi misti.** Diversi `.def` contengono sia «Definizione» sia
      «Come si calcola»: è il pattern del modello F0.7 (censiti nel dossier).
- [ ] **Ristrutturazione completa di 1.1**, dopo aver chiuso la revisione
      manuale del glossario (voce 32 di 62).

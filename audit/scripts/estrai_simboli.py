#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
estrai_simboli.py — FASE 4 (conformità al Glossario), parte meccanica.

Estrae:
  (1) le tabelle «Simboli introdotti/nuovi in questa pagina» in fondo a ogni pagina;
  (2) le voci del Glossario globale (table.gl, raggruppate per sezione).
Produce meccanicamente:
  A. conteggio voci del Glossario  (verifica il claim «177»);
  B. presenza/assenza del blocco Gradino 0 (F0.1–F0.8) nel Glossario;
  C. simboli DICHIARATI su una pagina ma ASSENTI dal Glossario;
  D. «prima occ.» del Glossario INCONGRUENTE con l'ordine di studio;
  E. collisioni (stessa lettera/simbolo in più voci) e presenza della nota «≠».

Solo libreria standard (niente bs4/lxml). Scrive anche audit/scripts/simboli_data.json.
"""
import html
import json
import os
import re
import sys

WIKI = os.path.join(os.path.dirname(__file__), "..", "..", "wiki")
WIKI = os.path.abspath(WIKI)
OUT_JSON = os.path.join(os.path.dirname(__file__), "simboli_data.json")

# Ordine di studio autorevole (da index.html): (indice, sigla, filename-stem)
STUDY_ORDER = [
    ("F0.1", "F0_1_Frazioni_e_percentuali"),
    ("F0.2", "F0_2_Potenze_e_radici"),
    ("F0.3", "F0_3_Logaritmi"),
    ("F0.4", "F0_4_Somme_e_produttorie"),
    ("F0.5", "F0_5_Notazione_di_base"),
    ("F0.6", "F0_6_Vettori_e_prodotto_scalare"),
    ("F0.7", "F0_7_Derivata"),
    ("F0.8", "F0_8_Integrale"),
    ("1.1", "Bella_copia_1.1_Filtraggio_Bayesiano"),
    ("F4", "F4_Statistica_e_ML"),
    ("1.2", "Sezione_1_2_Score_reputazionali"),
    ("F5", "F5_Segnali_e_rilevamento"),
    ("1.3", "Sezione_1_3_Warmup"),
    ("F3", "F3_Teoria_informazione"),
    ("F6", "F6_Similarita_hashing_codifiche"),
    ("1.4", "Sezione_1_4_Difese"),
    ("F2", "F2_Algebra_lineare_Markov"),
    ("2.1", "Sezione_2_1_PageRank"),
    ("2.2", "Sezione_2_2_TrustRank"),
    ("2.3", "Sezione_2_3_Spam_mass"),
    ("3.1", "Sezione_3_1_EEAT_ranking"),
    ("3.2", "Sezione_3_2_Knowledge_Graph"),
    ("4.1", "Sezione_4_1_Safe_Browsing"),
    ("4.2", "Sezione_4_2_Web_Risk"),
    ("4.3", "Sezione_4_3_Sincronizzazione"),
]
ORDER_INDEX = {sigla: i for i, (sigla, _) in enumerate(STUDY_ORDER)}
STEM_TO_SIGLA = {stem: sigla for sigla, stem in STUDY_ORDER}


def strip_tags(s):
    s = re.sub(r"<[^>]+>", "", s)
    return html.unescape(s).strip()


def norm_symbol(raw):
    r"""Normalizza un simbolo per il confronto/collisione: toglie \( \), $, spazi, tag."""
    s = strip_tags(raw)
    s = s.replace(r"\(", "").replace(r"\)", "")
    s = s.replace("$", "")
    s = re.sub(r"\s+", "", s)
    return s.strip()


def split_symbols(raw):
    """Una cella può elencare più simboli separati da virgola fuori dalle graffe TeX."""
    inner = raw
    parts, depth, cur = [], 0, ""
    for ch in inner:
        if ch in "{([":
            depth += 1
        elif ch in "})]":
            depth = max(0, depth - 1)
        if ch == "," and depth == 0:
            parts.append(cur)
            cur = ""
        else:
            cur += ch
    parts.append(cur)
    return [norm_symbol(p) for p in parts if norm_symbol(p)]


def parse_rows(table_html):
    """Ritorna lista di righe; ogni riga = lista di celle (raw inner html)."""
    rows = []
    for tr in re.findall(r"<tr[^>]*>(.*?)</tr>", table_html, re.S):
        cells = re.findall(r"<t[dh]([^>]*)>(.*?)</t[dh]>", tr, re.S)
        rows.append(cells)  # cells = list of (attrs, inner)
    return rows


def get_gl_tables(page_html):
    return re.findall(r'<table class="gl">(.*?)</table>', page_html, re.S)


def parse_prima_occ(cell_inner):
    """Estrae (testo, sigla_pagina) dalla cella prima-occ."""
    testo = strip_tags(cell_inner)
    sigla = None
    # 1) via href → filename stem
    m = re.search(r'href="([^"#]+)', cell_inner)
    if m:
        stem = os.path.splitext(os.path.basename(m.group(1)))[0]
        sigla = STEM_TO_SIGLA.get(stem)
    # 2) via token iniziale (es. "F4 §1.1", "1.2 §2", "2.1 §3")
    if sigla is None:
        m2 = re.match(r"\s*(F\d|F0\.\d|\d\.\d|App\.?)", testo)
        if m2:
            tok = m2.group(1)
            if tok in ORDER_INDEX:
                sigla = tok
    # 3) forma "§1.1"/"§5.2" senza pagina → è la 1.1 (i suoi href puntano a Bella_copia)
    if sigla is None and re.match(r"\s*§", testo):
        sigla = "1.1"
    return testo, sigla


# ---------------------------------------------------------------- estrazione

def extract_pages():
    pages = {}
    for sigla, stem in STUDY_ORDER:
        path = os.path.join(WIKI, stem + ".html")
        if not os.path.exists(path):
            pages[sigla] = {"error": "file mancante", "symbols": []}
            continue
        with open(path, encoding="utf-8") as f:
            doc = f.read()
        # la tabella dei simboli della pagina: prendiamo TUTTE le table.gl del body.
        # (le pagine di contenuto ne hanno una sola, in fondo)
        syms = []
        for tbl in get_gl_tables(doc):
            for cells in parse_rows(tbl):
                if not cells:
                    continue
                # salta header
                is_header = any(tag == "" and False for tag, _ in cells)
                # header ha <th>: parse_rows include th? sì. Riconosci header se prima cella
                # contiene "simbolo" come testo o se la riga è dentro <thead>.
                first_txt = strip_tags(cells[0][1]).lower()
                if first_txt in ("simbolo", "simbolo/termine", "termine"):
                    continue
                if len(cells) < 2:
                    continue
                raw_sym = cells[0][1]
                nome = strip_tags(cells[1][1]) if len(cells) > 1 else ""
                defi = strip_tags(cells[2][1]) if len(cells) > 2 else ""
                occ_txt, occ_sigla = parse_prima_occ(cells[3][1]) if len(cells) > 3 else ("", None)
                syms.append({
                    "raw": strip_tags(raw_sym),
                    "norm_list": split_symbols(raw_sym),
                    "nome": nome,
                    "def": defi,
                    "prima_occ_txt": occ_txt,
                    "prima_occ_sigla": occ_sigla,
                })
        pages[sigla] = {"stem": stem, "symbols": syms}
    return pages


def extract_glossary():
    path = os.path.join(WIKI, "Glossario_globale.html")
    with open(path, encoding="utf-8") as f:
        doc = f.read()
    # blocco unico table.gl del glossario (ha molti tbody)
    tbl = get_gl_tables(doc)
    if not tbl:
        return {"error": "nessuna table.gl nel Glossario", "rows": [], "sections": []}
    tbl = tbl[0]
    rows = []
    sections = []
    cur_section = None
    for cells in parse_rows(tbl):
        if not cells:
            continue
        # header di sezione: una cella con colspan
        if len(cells) == 1 and "colspan" in cells[0][0]:
            cur_section = strip_tags(cells[0][1])
            sections.append(cur_section)
            continue
        first_txt = strip_tags(cells[0][1]).lower()
        if first_txt == "simbolo":
            continue
        if len(cells) < 2:
            continue
        raw_sym = cells[0][1]
        nome = strip_tags(cells[1][1]) if len(cells) > 1 else ""
        defi = strip_tags(cells[2][1]) if len(cells) > 2 else ""
        occ_txt, occ_sigla = parse_prima_occ(cells[3][1]) if len(cells) > 3 else ("", None)
        has_neq = ("≠" in defi) or ("\\neq" in defi) or ("≠" in nome)
        rows.append({
            "section": cur_section,
            "raw": strip_tags(raw_sym),
            "norm_list": split_symbols(raw_sym),
            "nome": nome,
            "def": defi,
            "prima_occ_txt": occ_txt,
            "prima_occ_sigla": occ_sigla,
            "has_neq": has_neq,
        })
    return {"rows": rows, "sections": sections, "claimed_total": claimed_total(doc)}


def claimed_total(doc):
    m = re.search(r"Totale voci:\s*<strong>(\d+)</strong>", doc)
    return int(m.group(1)) if m else None


# ---------------------------------------------------------------- analisi

def main():
    pages = extract_pages()
    gl = extract_glossary()

    # indice normalizzato dei simboli del glossario → righe
    gl_index = {}
    for r in gl["rows"]:
        for n in r["norm_list"]:
            gl_index.setdefault(n, []).append(r)

    print("=" * 72)
    print("A. CONTEGGIO VOCI DEL GLOSSARIO")
    print("=" * 72)
    print(f"  righe-voce totali estratte : {len(gl['rows'])}")
    print(f"  claim in testa al Glossario: {gl.get('claimed_total')}")
    distinct = sorted(gl_index.keys())
    print(f"  simboli distinti (normalizz.): {len(distinct)}")
    print(f"  sezioni nel Glossario       : {len(gl['sections'])}")
    for s in gl["sections"]:
        print(f"     - {s}")

    print()
    print("=" * 72)
    print("B. BLOCCO GRADINO 0 (F0.1–F0.8) NEL GLOSSARIO")
    print("=" * 72)
    has_f0 = any(re.search(r"F0\.", s) for s in gl["sections"])
    print(f"  presente un blocco F0.x nel Glossario? -> {'SÌ' if has_f0 else 'NO (difetto G, regola G)'}")

    print()
    print("=" * 72)
    print("C. SIMBOLI DICHIARATI SU PAGINA MA ASSENTI DAL GLOSSARIO")
    print("=" * 72)
    for sigla, _ in STUDY_ORDER:
        p = pages[sigla]
        if p.get("error"):
            print(f"  [{sigla}] ERRORE: {p['error']}")
            continue
        missing = []
        for s in p["symbols"]:
            for n in s["norm_list"]:
                if n not in gl_index:
                    missing.append((n, s["raw"], s["nome"]))
        if missing:
            print(f"  [{sigla}] {len(missing)} simbolo/i non nel Glossario:")
            for n, raw, nome in missing:
                print(f"       · {raw!r}  ({nome})  norm={n!r}")

    print()
    print("=" * 72)
    print("D. «PRIMA OCC.» INCONGRUENTE CON L'ORDINE DI STUDIO")
    print("=" * 72)
    # D1: righe del glossario la cui prima_occ è più TARDI della pagina che dichiara
    #     lo stesso simbolo in fondo alla propria tabella.
    declared_at = {}  # norm -> lista (order_idx, sigla)
    for sigla, _ in STUDY_ORDER:
        p = pages[sigla]
        if p.get("error"):
            continue
        for s in p["symbols"]:
            for n in s["norm_list"]:
                declared_at.setdefault(n, []).append((ORDER_INDEX[sigla], sigla))
    incong = []
    for r in gl["rows"]:
        gsig = r["prima_occ_sigla"]
        if gsig is None:
            continue
        gidx = ORDER_INDEX.get(gsig)
        if gidx is None:
            continue
        for n in r["norm_list"]:
            for (didx, dsig) in declared_at.get(n, []):
                if didx < gidx:
                    incong.append((n, r["raw"], dsig, gsig))
    if incong:
        for n, raw, dsig, gsig in sorted(set(incong), key=lambda t: ORDER_INDEX[t[2]]):
            print(f"  · {raw!r}: dichiarato in {dsig} ma Glossario dà prima occ. {gsig}  -> difetto O")
    else:
        print("  (nessuna incongruenza rilevata tra pagine con tabella-simboli e Glossario)")
    # D2: simboli del pavimento-esteso che compaiono nel Glossario attribuiti a 1.1+
    #     mentre nel percorso appaiono già in una F0.x — segnalati qui come promemoria.
    print()
    print("  Nota: le pagine F0.x NON hanno righe nel Glossario (vedi B), quindi molte")
    print("  incongruenze d'ordine sono latenti: simboli come ∑ ∏ |x| √ floor ≈, la cui")
    print("  prima occorrenza nel percorso è una F0.x, risultano attribuiti a 1.1 o oltre.")

    print()
    print("=" * 72)
    print("E. COLLISIONI (stesso simbolo in più voci) E NOTA «≠»")
    print("=" * 72)
    for n in distinct:
        rws = gl_index[n]
        if len(rws) > 1:
            any_neq = any(r["has_neq"] for r in rws)
            secs = [r["section"] for r in rws]
            print(f"  · {n!r} in {len(rws)} voci ({', '.join(s.split('—')[1].strip() if s and '—' in s else str(s) for s in secs)})"
                  f"  nota ≠ presente? {'sì' if any_neq else 'NO -> verifica box Trappola'}")

    # dump JSON
    with open(OUT_JSON, "w", encoding="utf-8") as f:
        json.dump({"pages": pages, "glossary": gl}, f, ensure_ascii=False, indent=1)
    print()
    print(f"[dati completi in {os.path.relpath(OUT_JSON)}]")


if __name__ == "__main__":
    main()

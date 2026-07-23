#!/usr/bin/env python3
"""Verifica meccanica dello standard F0.7 (brief v2, sezione <verifica_meccanica>).

Uso:
    python check_pagina.py wiki/PAGINA.html [--no-blocks]

--no-blocks : disattiva il controllo 5 (solo per pagine che per accordo non
              hanno i blocchi .def/.note: 1.1 strato meccanico, Glossario).

Exit code: 0 = controlli bloccanti 1-7 tutti PASS (8-9 possono segnalare);
           1 = almeno un controllo bloccante FAIL;
           2 = errore d'uso o file non leggibile.

I controlli garantiscono la struttura, non la correttezza matematica.
"""

import os
import re
import sys
from html.parser import HTMLParser

VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input",
        "link", "meta", "param", "source", "track", "wbr"}

# sottoalberi il cui testo NON e' prosa visibile
SKIP_TEXT = {"script", "style", "code", "pre", "textarea"}

FORBIDDEN = re.compile(r"bozza|raffazz|schermo sì|schermo si|appunti",
                       re.IGNORECASE)

MATH_SEG = re.compile(r"\\\(.*?\\\)|\\\[.*?\\\]", re.DOTALL)


class PageParser(HTMLParser):
    """Una passata: stack tag, id, href, prosa visibile, blocchi .def/.note."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack = []            # [(tag, riga)]
        self.balance_errors = []   # stringhe descrittive
        self.ids = []              # tutti gli id (anche dentro svg)
        self.hrefs = []            # (href, riga)
        self.text_parts = []       # nodi testo di prosa visibile
        self.skip_depth = 0        # dentro script/style/code/pre/textarea
        self.in_head = False
        self.head_styles = 0       # <style> aperti dentro <head>
        self.has_def = False
        self.note_depth = None     # profondita' stack all'apertura di un .note
        self.in_note_lbl = False
        self.note_lbl_texts = []   # testi delle etichette dentro blocchi .note

    @staticmethod
    def _classes(attrs):
        for k, v in attrs:
            if k == "class" and v:
                return v.split()
        return []

    def handle_starttag(self, tag, attrs):
        line = self.getpos()[0]
        if tag == "head":
            self.in_head = True
        if tag == "style" and self.in_head:
            self.head_styles += 1
        for k, v in attrs:
            if k == "id" and v:
                self.ids.append(v)
            if k == "href" and v is not None:
                self.hrefs.append((v, line))
        cls = self._classes(attrs)
        if "def" in cls:
            self.has_def = True
        if "note" in cls and self.note_depth is None:
            self.note_depth = len(self.stack)
        if self.note_depth is not None and tag == "span" and "lbl" in cls:
            self.in_note_lbl = True
            self.note_lbl_texts.append("")
        if tag in SKIP_TEXT:
            self.skip_depth += 1
        if tag not in VOID:
            self.stack.append((tag, line))

    def handle_startendtag(self, tag, attrs):
        # <tag ... /> : nessun push/pop, ma id/href/classi contano
        for k, v in attrs:
            if k == "id" and v:
                self.ids.append(v)
            if k == "href" and v is not None:
                self.hrefs.append((v, self.getpos()[0]))
        if "def" in self._classes(attrs):
            self.has_def = True

    def handle_endtag(self, tag):
        line = self.getpos()[0]
        if tag == "head":
            self.in_head = False
        if tag in VOID:
            return  # </br> ecc.: ignora
        if not self.stack:
            self.balance_errors.append(
                f"riga {line}: </{tag}> senza tag aperto")
            return
        top, top_line = self.stack[-1]
        if top == tag:
            self.stack.pop()
        else:
            self.balance_errors.append(
                f"riga {line}: </{tag}> ma l'ultimo aperto è "
                f"<{top}> (riga {top_line})")
            # tentativo di recupero: se tag e' aperto piu' in basso, scarta
            names = [t for t, _ in self.stack]
            if tag in names:
                while self.stack and self.stack[-1][0] != tag:
                    self.stack.pop()
                self.stack.pop()
        if tag in SKIP_TEXT and self.skip_depth > 0:
            self.skip_depth -= 1
        if self.note_depth is not None and len(self.stack) <= self.note_depth:
            self.note_depth = None
        if self.in_note_lbl and tag == "span":
            self.in_note_lbl = False

    def handle_data(self, data):
        if self.skip_depth == 0 and not self.in_head:
            self.text_parts.append(data)
        if self.in_note_lbl:
            self.note_lbl_texts[-1] += data

    def close(self):
        super().close()
        for tag, line in self.stack:
            self.balance_errors.append(
                f"<{tag}> aperto a riga {line} e mai chiuso")
        self.stack = []


_ids_cache = {}


def ids_of(path):
    """Tutti gli id di un file html (con cache)."""
    if path not in _ids_cache:
        p = PageParser()
        with open(path, encoding="utf-8") as f:
            p.feed(f.read())
        _ids_cache[path] = set(p.ids)
    return _ids_cache[path]


def line_of(raw, pos):
    return raw.count("\n", 0, pos) + 1


def ctx(text, start, end, span=30):
    frag = text[max(0, start - span):min(len(text), end + span)]
    return " ".join(frag.split())


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    no_blocks = "--no-blocks" in sys.argv[1:]
    if len(args) != 1:
        print(__doc__)
        return 2
    page = args[0]
    if not os.path.isfile(page):
        print(f"file non trovato: {page}")
        return 2
    wiki_dir = os.path.dirname(os.path.abspath(page))
    wiki_files = os.listdir(wiki_dir)  # confronto case-sensitive esplicito

    with open(page, encoding="utf-8") as f:
        raw = f.read()

    parser = PageParser()
    parser.feed(raw)
    parser.close()

    prose = "\n".join(parser.text_parts)
    math_segments = MATH_SEG.findall(prose)
    prose_no_math = MATH_SEG.sub(" ", prose)

    m = re.search(r"<head>(.*?)</head>", raw, re.DOTALL | re.IGNORECASE)
    head = m.group(1) if m else ""

    blocking_fail = False
    out = []

    def report(num, ok, label, details=None, level="blocca"):
        nonlocal blocking_fail
        if ok:
            out.append(f"[{num}] PASS    {label}")
        elif level == "blocca":
            blocking_fail = True
            out.append(f"[{num}] FAIL    {label}")
        else:
            out.append(f"[{num}] SEGNALA {label}")
        for d in details or []:
            out.append(f"        - {d}")

    # 1 — delimitatori math bilanciati (sulla prosa: esclude script/code)
    n_op, n_cp = prose.count("\\("), prose.count("\\)")
    n_ob, n_cb = prose.count("\\["), prose.count("\\]")
    report(1, n_op == n_cp and n_ob == n_cb,
           f"\\( {n_op} = \\) {n_cp} ; \\[ {n_ob} = \\] {n_cb}")

    # 2 — href relativi risolvibili (case-sensitive, wiki piatta)
    bad = []
    frag_links = []   # (file, frammento, riga) per il controllo 3
    self_frags = []   # (frammento, riga)
    for href, line in parser.hrefs:
        if re.match(r"^(https?:|mailto:|data:)", href):
            continue
        if href.startswith("#"):
            self_frags.append((href[1:], line))
            continue
        path, _, frag = href.partition("#")
        if "/" in path:
            bad.append(f"riga {line}: '{href}' (sottocartelle non previste)")
            continue
        if path not in wiki_files:
            bad.append(f"riga {line}: '{path}' inesistente in wiki/ "
                       f"(confronto case-sensitive)")
            continue
        if frag:
            frag_links.append((path, frag, line))
    report(2, not bad, "href relativi risolti sul filesystem", bad)

    # 3 — frammenti esistenti come id nel file target
    bad = []
    own_ids = set(parser.ids)
    for frag, line in self_frags:
        if frag and frag not in own_ids:
            bad.append(f"riga {line}: '#{frag}' non esiste in questa pagina")
    for path, frag, line in frag_links:
        if frag not in ids_of(os.path.join(wiki_dir, path)):
            bad.append(f"riga {line}: '{path}#{frag}' — id assente nel target")
    report(3, not bad, "frammenti #id esistenti nei file target", bad)

    # 4 — parole vietate (sul sorgente intero, attributi compresi)
    hits = [f"riga {line_of(raw, m.start())}: «{m.group()}» — "
            f"…{ctx(raw, m.start(), m.end())}…"
            for m in FORBIDDEN.finditer(raw)]
    report(4, not hits, "nessuna parola vietata "
           "(bozza|raffazz|schermo sì/si|appunti)", hits)

    # 5 — blocchi obbligatori
    if no_blocks:
        out.append("[5] SALTATO (--no-blocks, per accordo registrato nel dossier)")
    else:
        has_intuizione = any(t.strip().startswith("Intuizione")
                             for t in parser.note_lbl_texts)
        det = []
        if not parser.has_def:
            det.append("nessun elemento con classe .def")
        if not has_intuizione:
            det.append("nessun blocco .note con etichetta .lbl «Intuizione»")
        report(5, parser.has_def and has_intuizione,
               "almeno un .def e un .note «Intuizione»", det)

    # 6 — head standard
    det = []
    if "window.MathJax" not in head or "mathjax" not in head.lower():
        det.append("config/script MathJax assente dal head")
    if not re.search(r"<link[^>]*rel=[\"']stylesheet[\"'][^>]*"
                     r"href=[\"']style\.css[\"']|"
                     r"<link[^>]*href=[\"']style\.css[\"'][^>]*"
                     r"rel=[\"']stylesheet[\"']", head):
        det.append("<link rel=\"stylesheet\" href=\"style.css\"> assente")
    if parser.head_styles > 0:
        det.append(f"{parser.head_styles} blocco/i <style> nel head")
    report(6, not det, "MathJax + style.css linkato + nessun <style> nel head",
           det)

    # 7 — tag bilanciati
    report(7, not parser.balance_errors, "tag HTML bilanciati",
           parser.balance_errors[:20])

    # 8 — punto decimale nella prosa (segnala)
    hits = [f"…{ctx(prose_no_math, m.start(), m.end())}…"
            for m in re.finditer(r"\d\.\d", prose_no_math)]
    report(8, not hits, f"numeri in prosa col punto decimale "
           f"({len(hits)} occorrenze)", hits, level="segnala")

    # 9 — decimali dentro la matematica senza {,} (segnala)
    hits = []
    for seg in math_segments:
        for m in re.finditer(r"\d\.\d|\d,\d", seg):
            hits.append(f"«{m.group()}» in {ctx(seg, m.start(), m.end(), 20)}")
    report(9, not hits, f"decimali in math non protetti "
           f"({len(hits)} occorrenze)", hits, level="segnala")

    print(f"== {os.path.basename(page)} ==")
    print("\n".join(out))
    print("ESITO:", "FAIL (bloccante)" if blocking_fail else "PASS")
    return 1 if blocking_fail else 0


if __name__ == "__main__":
    sys.exit(main())

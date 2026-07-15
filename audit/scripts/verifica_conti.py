#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
verifica_conti.py — FASE 3, parte meccanica consolidata.

Rifa TUTTI gli esempi numerici e le soluzioni degli esercizi di ogni pagina,
cifra per cifra, e li confronta col valore scritto sulla pagina.

I check sono raccolti dai sidecar che ogni report di pagina produce:
    audit/pagine/<sigla>.checks.json
Ogni elemento del sidecar:
    {"dove": str, "atteso": number|null, "formula": str(espr. python3), "tol": number, "esito": str}
Un check e' NUMERICO se "atteso" non e' null: ricalcoliamo `formula` e confrontiamo
con `atteso` entro `tol`. I check con atteso=null sono "manuali" (solo elencati).

Uso:  python3 audit/scripts/verifica_conti.py
"""
import glob
import json
import math
import os
import statistics
import sys
import traceback

HERE = os.path.dirname(__file__)
PAGINE = os.path.abspath(os.path.join(HERE, "..", "pagine"))

STUDY_ORDER = [
    "F0.1", "F0.2", "F0.3", "F0.4", "F0.5", "F0.6", "F0.7", "F0.8",
    "1.1", "F4", "1.2", "F5", "1.3", "F3", "F6", "1.4", "F2",
    "2.1", "2.2", "2.3", "3.1", "3.2", "4.1", "4.2", "4.3",
]


_ALLOWED_MODULES = {"math", "fractions", "statistics", "decimal", "itertools",
                    "functools", "numpy"}


def _guarded_import(name, *a, **k):
    if name.split(".")[0] not in _ALLOWED_MODULES:
        raise ImportError(f"import di '{name}' non consentito nel verificatore")
    return __import__(name, *a, **k)


def safe_ns():
    """Namespace per valutare le formule: math completo + helper comuni, niente I/O.

    Consentiamo __import__ ma solo su moduli numerici in whitelist, perche' molti
    check sono scritti nella forma __import__('math').funzione(...).
    """
    ns = {k: getattr(math, k) for k in dir(math) if not k.startswith("_")}
    safe_builtins = {
        "abs": abs, "min": min, "max": max, "sum": sum, "round": round,
        "len": len, "range": range, "map": map, "list": list, "sorted": sorted,
        "pow": pow, "float": float, "int": int, "tuple": tuple, "set": set,
        "dict": dict, "str": str, "bool": bool, "zip": zip, "enumerate": enumerate,
        "all": all, "any": any, "divmod": divmod, "filter": filter,
        "reversed": reversed, "frozenset": frozenset,
        "format": format, "next": next, "iter": iter, "bin": bin, "hex": hex,
        "ord": ord, "chr": chr, "complex": complex,
        "__import__": _guarded_import,
    }
    ns.update({
        "mean": statistics.mean, "fmean": statistics.fmean,
        "pstdev": statistics.pstdev, "stdev": statistics.stdev,
        "ln": math.log, "log2": math.log2, "log10": math.log10,
        "e": math.e, "pi": math.pi, "inf": math.inf,
        "sigmoid": lambda t: 1.0 / (1.0 + math.exp(-t)),
        "logit": lambda p: math.log(p / (1.0 - p)),
        "comb": math.comb, "factorial": math.factorial,
        "__builtins__": safe_builtins,
    })
    return ns


def load_sidecars():
    data = {}
    for sigla in STUDY_ORDER:
        path = os.path.join(PAGINE, sigla + ".checks.json")
        if not os.path.exists(path):
            data[sigla] = None
            continue
        try:
            with open(path, encoding="utf-8") as f:
                data[sigla] = json.load(f)
        except Exception as exc:  # noqa: BLE001
            data[sigla] = {"__error__": str(exc)}
    return data


def run():
    data = load_sidecars()
    ns = safe_ns()

    tot = ok = ko = err = manual = 0
    missing = []
    print("=" * 78)
    print("VERIFICA CONTI — ricalcolo cifra per cifra dei check numerici delle pagine")
    print("=" * 78)

    for sigla in STUDY_ORDER:
        checks = data.get(sigla)
        if checks is None:
            missing.append(sigla)
            continue
        if isinstance(checks, dict) and "__error__" in checks:
            print(f"\n[{sigla}] SIDECAR NON LEGGIBILE: {checks['__error__']}")
            err += 1
            continue
        if not checks:
            print(f"\n[{sigla}] nessun check numerico dichiarato (pagina concettuale / senza conti).")
            continue
        print(f"\n[{sigla}] {'-'*68}")
        print(f"  {'dove':<38} {'atteso':>12} {'ricalcolato':>14}  esito")
        for c in checks:
            dove = str(c.get("dove", ""))[:38]
            atteso = c.get("atteso", None)
            formula = c.get("formula", "")
            tol = c.get("tol", 1e-9)
            if atteso is None or not formula:
                manual += 1
                print(f"  {dove:<38} {'—':>12} {'(manuale)':>14}  ·")
                continue
            tot += 1
            try:
                val = eval(formula, ns, {})  # noqa: S307 (namespace controllato, no builtins)
                try:
                    tolf = float(tol)
                except Exception:  # noqa: BLE001
                    tolf = 1e-9
                good = abs(float(val) - float(atteso)) <= tolf
                if good:
                    ok += 1
                    esito = "OK"
                else:
                    ko += 1
                    esito = "KO  <<<"
                print(f"  {dove:<38} {atteso:>12} {val:>14.6g}  {esito}")
            except Exception:  # noqa: BLE001
                err += 1
                print(f"  {dove:<38} {atteso:>12} {'ERRORE':>14}  formula: {formula}")
                traceback.print_exc(limit=1)

    print("\n" + "=" * 78)
    print("RIEPILOGO")
    print("=" * 78)
    print(f"  check numerici totali : {tot}")
    print(f"  OK                    : {ok}")
    print(f"  KO (non tornano)      : {ko}")
    print(f"  errori di valutazione : {err}")
    print(f"  voci manuali          : {manual}")
    if missing:
        print(f"  sidecar mancanti      : {len(missing)} -> {', '.join(missing)}")
    print()
    return 1 if (ko or err) else 0


if __name__ == "__main__":
    sys.exit(run())

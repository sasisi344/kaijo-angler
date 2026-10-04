#!/usr/bin/env python3
"""地域まとめ記事（east/center/west-japan）用: 施設ごとの GSC クリック・表示 / GA4 セッションを slug 単位で集計する。

使い方（プロジェクトルートで実行）:
  python .claude/skills/kaijo-matome-hub/scripts/rank_facilities.py \
      src/content/blog/fishing-facility/center-japan \
      --gsc .workspace/.task/access-data/weekly-report/2026/w40/ページ.csv \
      --ga4 .workspace/.task/access-data/weekly-report/2026/w40/w40-ga4-kaijo.csv

--gsc / --ga4 は複数回指定でき、ファイルごとに列を分けて表示する（期間の違うファイルを足し合わせない）。
GSC は「過去3か月 vs その前3か月」形式（列が当期・比較期の2本）も 7日単一列形式も自動判定し、当期のみ使う。
旧 /blog/<slug>/ と新 /fishing-facility/<slug>/ は slug で合算する。
"""
import argparse, collections, csv, pathlib, re, sys

def facility_slugs(region_dir):
    out = {}
    for p in pathlib.Path(region_dir).rglob("index.mdx"):
        if p.parent == pathlib.Path(region_dir):
            continue  # 地域ハブ自身は除く
        head = p.read_text(encoding="utf-8").split("---")[1] if p.read_text(encoding="utf-8").startswith("---") else ""
        m = re.search(r"^slug:\s*['\"]?([\w-]+)", head, re.M)
        pref = re.search(r"^prefecture:\s*['\"]?([\w-]+)", head, re.M)
        title = re.search(r"^title:\s*(.+)$", head, re.M)
        slug = m.group(1) if m else p.parent.name
        out[slug] = (pref.group(1) if pref else "?", title.group(1).strip() if title else "")
    return out

def read_gsc(path, slugs):
    agg = collections.defaultdict(lambda: [0, 0])
    with open(path, encoding="utf-8-sig") as f:
        rows = list(csv.reader(f))
    paired = "過去" in rows[0][1] and rows[0][1] == rows[0][2]  # 当期・比較期の2列
    ic, ii = (1, 3) if paired else (1, 2)
    for r in rows[1:]:
        if not r or not r[0].startswith("http"):
            continue
        s = r[0].rstrip("/").split("/")[-1]
        if s in slugs:
            agg[s][0] += int(r[ic]); agg[s][1] += int(r[ii])
    return agg

def read_ga4(path, slugs):
    agg = collections.Counter()
    with open(path, encoding="utf-8-sig") as f:
        rows = [r for r in csv.reader(f) if r and not r[0].startswith("#")]
    hdr = next(r for r in rows if r[0] == "ページ タイトル")
    ilp, iev, ise = hdr.index("ランディング ページ"), hdr.index("イベント名"), hdr.index("セッション")
    for r in rows:
        # セッション数は session_start 行のみ合算（他イベント行は二重計上になる）
        if len(r) > ise and r[iev] == "session_start":
            s = r[ilp].rstrip("/").split("/")[-1]
            if s in slugs:
                try: agg[s] += int(r[ise])
                except ValueError: pass
    return agg

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("region_dir")
    ap.add_argument("--gsc", action="append", default=[])
    ap.add_argument("--ga4", action="append", default=[])
    a = ap.parse_args()
    slugs = facility_slugs(a.region_dir)
    gsc = [read_gsc(p, slugs) for p in a.gsc]
    ga4 = [read_ga4(p, slugs) for p in a.ga4]
    key = (lambda s: -gsc[0][s][0]) if gsc else (lambda s: s)
    head = ["slug", "pref"] + [f"GSC{i+1}_click/impr" for i in range(len(gsc))] + [f"GA4_{i+1}_sess" for i in range(len(ga4))]
    print("\t".join(head))
    for s in sorted(slugs, key=key):
        cols = [s, slugs[s][0]] + [f"{g[s][0]}/{g[s][1]}" for g in gsc] + [str(g[s]) for g in ga4]
        print("\t".join(cols))
    print(f"\n施設数: {len(slugs)}（地域ハブ index.mdx は除外）", file=sys.stderr)

if __name__ == "__main__":
    main()

"""訴求の層（kaijo-writing-rule.md §4）の検収用に、記事ごとの語の密度を数える。

使い方（kaijo-angler の直下で）:
  python .workspace/scripts/writing-appeal-check.py                       # 全記事。目安を外れた記事だけ出す
  python .workspace/scripts/writing-appeal-check.py <index.mdx> [...]     # 指定した記事をすべて出す

目安（§4.3・card-rules.md §3-2）:
  確認系の語  本文1000字あたり 1.5 回まで
  メタ文      0（「この記事は釣行記ではなく」「魚種資料では」など）
  仮定の場面  0（「〜する場面を考えてください」「〜を想定します」）
  reason      「確認・確かめ・相談・照合」を含まない
  要問合せ    ランキングは施設記事に料金があれば 0
魅力の語は目安を決めていない（参考値。0.8 未満なら場面が足りないことが多い）。
"""

import glob
import os
import re
import sys

HEDGE = re.compile(r"確認|確かめ|相談|問い合わせ|問合せ|照合")
APPEAL = re.compile(
    r"楽しみ|楽しい|楽しめ|うれし|嬉し|おいし|美味|脂|引き|ごちそう|思い出|歓声|笑顔|わくわく|ワクワク|贅沢|ご褒美"
)
META = re.compile(r"釣行記ではなく|資料をもとに|知見をもとにした|魚種資料では|と整理されています")
HYPO = re.compile(r"場面を考えてください|場面を想定|を想定します|を想像してください")
REASON = re.compile(r'reason="([^"]*)"')


def check(path):
    text = open(path, encoding="utf-8").read().split("---", 2)[-1]
    chars = len(re.sub(r"\s", "", text)) or 1
    reasons = REASON.findall(text)
    return {
        "path": path.replace(os.sep, "/").replace("src/content/blog/", "").replace("/index.mdx", ""),
        "chars": chars,
        "hedge": len(HEDGE.findall(text)) / chars * 1000,
        "appeal": len(APPEAL.findall(text)) / chars * 1000,
        "meta": len(META.findall(text)),
        "hypo": len(HYPO.findall(text)),
        "reason_ng": sum(1 for r in reasons if HEDGE.search(r)),
        "reasons": len(reasons),
        "toi": text.count("要問合せ"),
    }


def flagged(r):
    return (
        r["hedge"] > 1.5
        or r["meta"]
        or r["hypo"]
        or r["reason_ng"]
        or ("column/ranking/" in r["path"] and r["toi"])
    )


def main():
    args = sys.argv[1:]
    paths = args or glob.glob("src/content/blog/**/index.mdx", recursive=True)
    rows = [check(p) for p in paths]
    if not args:
        rows = [r for r in rows if flagged(r)]
    rows.sort(key=lambda r: -r["hedge"])
    print("確認系/1000字  魅力/1000字  メタ文  仮定の場面  reason(確認系/全)  要問合せ  記事")
    for r in rows:
        print(
            f"{r['hedge']:10.2f}  {r['appeal']:10.2f}  {r['meta']:5d}  {r['hypo']:8d}  "
            f"{r['reason_ng']:7d}/{r['reasons']:<3d}  {r['toi']:6d}  {r['path']}"
        )
    print(f"{len(rows)} 本")


if __name__ == "__main__":
    main()

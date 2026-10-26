---
created: 2026-10-27
updated: 2026-10-27
tags:
  - affiliate
  - 物販
  - candidates
---

# はじめての人向けグッズ：Amazon 商品候補

> [!important]
> 「海上釣り堀はじめてガイド」（`src/content/blog/tactics/beginner/first-fishing-pond/`）と施設記事の「はじめての方へ」節で取り上げたグッズの候補。**運営者（さしし）が確認して「さししの所感」を書いたものから順に、カード（`src/content/affiliates/tackle/*.json`）にする。**
> 所感はカードの `reason`（なぜこれを選んだか）にそのまま使う。所感が空の商品はカードにしない。
> 根拠: `.data-set/first-timer-knowledge.md`（運営者の一次知見）、売り方は `kaijo-affiliate-sales` スキル

## 使い方

1. 候補を見て、採用するものの「さししの所感」に一言書く（なぜ選んだか・どんな人に向くか）。採用しないものは状態を「見送り」にする
2. 所感が入った行を Claude に渡すと、カード JSON（`common-{type}-{slug}` の命名）を作り、ガイドの該当箇所に `TackleCard`（`reason`＝所感、`placement="beginner-guide"`）を置く
3. 価格・評価は **2026-10-27 時点の Amazon 検索結果**。カード化の直前に商品ページで変わっていないか確認する

## 書式

- 商品URL: `https://www.amazon.co.jp/dp/{ASIN}?tag=sasisi344-22`（物販 README のリンク形式。追跡パラメータなし）
- 画像URL: `https://m.media-amazon.com/images/I/{画像ID}._AC_SL1500_.jpg`（取得確認済み）
- 選んだ基準: 評価4.0以上を基本に、レビュー件数が多いもの、釣具メーカー品、価格帯が分かれるように2〜3点。広告枠（スポンサー）は除外
- 「Claude のメモ」は検索結果の情報から書いたもので、**実物を使った感想ではない**

---

## 1. 手袋（最優先・ガイドで「最低限必要」と書いた物）

ガイドの置き場所: Q2「持ち物チェックリスト」の直後（新しい小見出し「手袋」）

| 状態 | 商品 | 価格 | 評価 | 商品URL | 画像URL | Claude のメモ | さししの所感 |
|---|---|---|---|---|---|---|---|
| 候補 | PRO MARINE（プロマリン） キャッチグローブ ANP150 | ¥1,799 | ★4.0（36件） | https://www.amazon.co.jp/dp/B07N61DK21?tag=sasisi344-22 | https://m.media-amazon.com/images/I/61BtORJu-CL._AC_SL1500_.jpg | 魚をつかむ用途の釣具メーカー品。「魚から手を守る」の文脈に最も合う | |
| 候補 | L.A.Y フィッシンググローブ（オールシーズン・指出し） | ¥1,780 | ★4.1（2,143件） | https://www.amazon.co.jp/dp/B0H2RY2QTL?tag=sasisi344-22 | https://m.media-amazon.com/images/I/71capkKGVzL._AC_SL1500_.jpg | レビュー件数が多い。指先が出るので仕掛けやエサを触りやすい | |
| 候補（夏） | Moxiep 夏用グローブ UVカット UPF50+ 指出し | ¥1,299 | ★4.2 | https://www.amazon.co.jp/dp/B0FF269ML3?tag=sasisi344-22 | https://m.media-amazon.com/images/I/61pa8jtlQpL._AC_SL1500_.jpg | 「肌を出さない」の夏向け。釣り専用品ではない | |
| 候補（冬） | UMIBOZU（ウミボウズ） フィッシンググローブ 防寒 裏起毛 3フィンガー | ¥2,490 | ★4.3（358件） | https://www.amazon.co.jp/dp/B0CBJGC81B?tag=sasisi344-22 | https://m.media-amazon.com/images/I/917MJ8dxOSL._AC_SL1500_.jpg | 冬の防寒（11月計画の「冬の装備」）と兼用できる | |

## 2. 魚をつかむ道具（フィッシュグリップ）

ガイドの置き場所: Q2「魚をつかむ道具」（現在は UMIBOZU を掲載中）

| 状態 | 商品 | 価格 | 評価 | 商品URL | 画像URL | Claude のメモ | さししの所感 |
|---|---|---|---|---|---|---|---|
| **登録済み** | UMIBOZU（ウミボウズ） フィッシュグリップ アルミ | ¥4,890 | ★4.6（3,061件） | https://www.amazon.co.jp/dp/B073TWXV4H?tag=sasisi344-22 | https://m.media-amazon.com/images/I/61RGYBZCN2L._AC_SL1500_.jpg | `tackle/umibozu-fishgrip`。リンクは `amzn.to` 短縮形のまま | |
| 候補（安価） | シマノ ライトフィッシュグリップ CT-981R | ¥1,308 | ★4.2（807件） | https://www.amazon.co.jp/dp/B078YG73WZ?tag=sasisi344-22 | https://m.media-amazon.com/images/I/61JgWhRBZTL._AC_SL1500_.jpg | はじめての人の「まず1本」向け。UMIBOZU の1/3以下の価格 | |

## 3. 撥水の服（「汚れてもいい服」）

ガイドの置き場所: Q2「服装は『肌を出さない』が基本」の上着・ズボンの直後

| 状態 | 商品 | 価格 | 評価 | 商品URL | 画像URL | Claude のメモ | さししの所感 |
|---|---|---|---|---|---|---|---|
| 候補 | BENQUE（ベンケ） アウトドアジャケット 防風・撥水 | ¥4,380 | ★4.1（271件） | https://www.amazon.co.jp/dp/B09VGBXZJG?tag=sasisi344-22 | https://m.media-amazon.com/images/I/51G0m-HHE7L._AC_SL1500_.jpg | 上着だけの手頃な選択肢。釣り以外でも着られる | |
| 候補 | BENQUE（ベンケ） レインウェア 上下 耐水圧20,000mm | ¥9,980 | ★4.0（254件） | https://www.amazon.co.jp/dp/B0DN21B3MG?tag=sasisi344-22 | https://m.media-amazon.com/images/I/61nrzydSZ5L._AC_SL1500_.jpg | 上下セット。急な雨と魚の汚れの両方に対応 | |
| 候補（上位） | MIZUNO（ミズノ） ストームセイバーV 上下レインスーツ | ¥19,800 | ★4.2（2,195件） | https://www.amazon.co.jp/dp/B01MZCQDNX?tag=sasisi344-22 | https://m.media-amazon.com/images/I/71313l5cKRS._AC_SL1500_.jpg | レビュー件数が多い定番。何度も通う人向け | |

## 4. 日よけの帽子（首筋まで覆う）

ガイドの置き場所: Q2「服装」の帽子の直後

| 状態 | 商品 | 価格 | 評価 | 商品URL | 画像URL | Claude のメモ | さししの所感 |
|---|---|---|---|---|---|---|---|
| 候補 | FREESE サファリハット つば広 UVカット 3way | ¥2,000 | ★4.0（1,802件） | https://www.amazon.co.jp/dp/B098PVWGSD?tag=sasisi344-22 | https://m.media-amazon.com/images/I/518pmjMWrWS._AC_SL1500_.jpg | 「釣り」用途の記載あり。首の後ろを覆えるタイプ（3way）か商品ページで要確認 | |
| 候補 | YUMISS UVカット帽子 12cm超つば広「首筋しっかり守る」 | ¥1,500 | ★4.4（1,520件） | https://www.amazon.co.jp/dp/B0CXNYSDL3?tag=sasisi344-22 | https://m.media-amazon.com/images/I/71v7Hg3FbaL._AC_SL1500_.jpg | レディース向け。女性読者向けの1枚に | |
| 候補 | White Beauty 帽子に後付けする首カバー（たれ）UPF50+ 日本製 | ¥2,200 | ★4.3（10件） | https://www.amazon.co.jp/dp/B0F9Y9NVPX?tag=sasisi344-22 | https://m.media-amazon.com/images/I/51rJyx+Uw-L._AC_SL1500_.jpg | 手持ちの帽子に付けられる。レビューが少ない | |
| 候補（麦わら） | IZUMIYA（イズミヤ） 麦わら帽子 つば広 紐付き 折りたたみ | ¥1,980 | ★3.8（291件） | https://www.amazon.co.jp/dp/B07D1R89GD?tag=sasisi344-22 | https://m.media-amazon.com/images/I/615luEKlNzL._AC_SL1500_.jpg | 運営者が挙げた「麦わら帽子」。評価は基準の4.0を下回る | |

## 5. 滑りにくい靴

ガイドの置き場所: Q2「服装」の靴の直後。**靴の具体例（デッキシューズ・マリンシューズ・長靴）は運営者の確認待ち**（`first-timer-knowledge.md` の【要検証】）

| 状態 | 商品 | 価格 | 評価 | 商品URL | 画像URL | Claude のメモ | さししの所感 |
|---|---|---|---|---|---|---|---|
| 候補（安価） | PROX（プロックス） ショートブーツ ラジアルソール 防水 | ¥3,850 | ★4.1（96件） | https://www.amazon.co.jp/dp/B0C53FVZ98?tag=sasisi344-22 | https://m.media-amazon.com/images/I/51ZxUakJ-mL._AC_SL1500_.jpg | ショート丈の長靴。最初の1足に安い価格帯 | |
| 候補 | ダイワ ネオデッキブーツ（ショート）DB-2412 | ¥8,896 | ★4.1（71件） | https://www.amazon.co.jp/dp/B0BT1B8G8J?tag=sasisi344-22 | https://m.media-amazon.com/images/I/41JcLuP1P4L._AC_SL1500_.jpg | 釣具メーカーのデッキブーツ | |
| 候補（上位） | シマノ ボートゲーム ドライデッキシューズ FS-030X | ¥13,427 | ★4.5（27件） | https://www.amazon.co.jp/dp/B0CSN41HFS?tag=sasisi344-22 | https://m.media-amazon.com/images/I/51oXxa6UMHL._AC_SL1500_.jpg | デッキシューズ型。長靴より歩きやすい | |

## 6. 肌を出さない小物（腕・首のUV対策）

ガイドの置き場所: Q2「服装」の日焼け止めの直後（帽子とは別の面にする）

| 状態 | 商品 | 価格 | 評価 | 商品URL | 画像URL | Claude のメモ | さししの所感 |
|---|---|---|---|---|---|---|---|
| 候補 | UMIBOZU（ウミボウズ） アームカバー 釣り UVカット 接触冷感 | ¥1,480 | ★4.0（221件） | https://www.amazon.co.jp/dp/B0B6HW5SH6?tag=sasisi344-22 | https://m.media-amazon.com/images/I/61Uv6ErsajL._AC_SL1500_.jpg | 釣りブランド。半袖でも腕を出さずに済む | |
| 候補 | Bassdash ネックゲーター UVカット UPF50+ | ¥998 | ★4.1（4,419件） | https://www.amazon.co.jp/dp/B08NSPJF1C?tag=sasisi344-22 | https://m.media-amazon.com/images/I/71QPgiWDWJL._AC_SL1500_.jpg | 釣り用途の記載あり。首と顔の下半分を覆える | |

## 7. 冬の防寒（ネックウォーマー）

ガイドの置き場所: Q2 の冬の行、または `column/trivia/december-cold-weather-gear-guide`（11月計画の第3週）

| 状態 | 商品 | 価格 | 評価 | 商品URL | 画像URL | Claude のメモ | さししの所感 |
|---|---|---|---|---|---|---|---|
| 候補 | Andeor ネックウォーマー 裏起毛 調節コード付き | ¥949 | ★4.6（1,448件） | https://www.amazon.co.jp/dp/B0BDD4SW12?tag=sasisi344-22 | https://m.media-amazon.com/images/I/61vDBQBWosL._AC_SL1500_.jpg | 釣り専用品ではないが、評価と件数が高く安い | |

## 8. クーラーボックス（車で行く人だけ）

ガイドの置き場所: Q2「クーラーボックスは移動手段しだい」（現在はダイワ ライトトランクα を掲載中）。**電車の人には勧めない**（運営者の方針）

| 状態 | 商品 | 価格 | 評価 | 商品URL | 画像URL | Claude のメモ | さししの所感 |
|---|---|---|---|---|---|---|---|
| **登録済み** | ダイワ クーラーボックス ライトトランクα GU2400 24L | — | — | https://www.amazon.co.jp/dp/B083WG4BL3?tag=sasisi344-22 | https://m.media-amazon.com/images/I/51DYIFOhHUL._AC_SL1134_.jpg | `tackle/daiwa-light-trunk-alpha`。座れるトランク型 | |
| 候補 | シマノ ホリデークール 20L | ¥8,222 | ★4.2（268件） | https://www.amazon.co.jp/dp/B01MT9ZXEO?tag=sasisi344-22 | https://m.media-amazon.com/images/I/81WKrHAAAbL._AC_SL1500_.jpg | 20Lで軽め。ダイワより安い選択肢 | |
| 候補 | シマノ フリーガ ライト 20L | ¥9,960 | ★4.3（109件） | https://www.amazon.co.jp/dp/B00KTPQC4E?tag=sasisi344-22 | https://m.media-amazon.com/images/I/81RDDfcX7PL._AC_SL1500_.jpg | 同じく20L帯 | |

## 9. ライフジャケット（貸し出しがない施設・何度も通う人）

ガイドの置き場所: Q2「ライフジャケット」（現在は AIRLEGATO を掲載中）

| 状態 | 商品 | 価格 | 評価 | 商品URL | 画像URL | Claude のメモ | さししの所感 |
|---|---|---|---|---|---|---|---|
| **登録済み**（2026-10-27） | BASARO 桜マーク タイプA 自動膨張式 | ¥13,980 | ★4.4（323件） | https://www.amazon.co.jp/dp/B0DJCV7VWM?tag=sasisi344-22 | https://m.media-amazon.com/images/I/614mxdmB8jL._AC_SL1500_.jpg | `tackle/airlegato-lifejacket`（id は据え置き。101記事で使用）。旧 AIRLEGATO（B0CKD8D6Y9）は商品ページが404だったため差し替え | |
| 候補（上位） | シマノ ラフトエアジャケット VF-053U（膨脹式） | ¥16,242 | ★4.5（386件） | https://www.amazon.co.jp/dp/B09F9P6GSC?tag=sasisi344-22 | https://m.media-amazon.com/images/I/41E-3YT1LKL._AC_SL1500_.jpg | 釣具メーカー品。桜マークの有無は商品ページで要確認 | |

## 10. スカリ（優先度低：施設の貸し出しが多い）

| 状態 | 商品 | 価格 | 評価 | 商品URL | 画像URL | Claude のメモ | さししの所感 |
|---|---|---|---|---|---|---|---|
| 保留 | Tsulino フロートスカリ M | ¥3,828 | ★4.4（27件） | https://www.amazon.co.jp/dp/B0C7GJWD5S?tag=sasisi344-22 | https://m.media-amazon.com/images/I/71mSj40533L._AC_SL1500_.jpg | はじめての人には不要なことが多い。経験者向け記事で使う候補 | |
| 保留 | OGK パイレンホース巻スカリ 40cm 3段 | ¥1,683 | ★3.9（225件） | https://www.amazon.co.jp/dp/B00DHL3NGW?tag=sasisi344-22 | https://m.media-amazon.com/images/I/81Za-eFQ4cS._AC_SL1500_.jpg | 同上 | |

## 扱わないもの

- **酔い止め**: 医薬品のため、効能をうたう紹介文が薬機法に触れるおそれがある。ガイドでは「持って行く」とだけ書き、カードは作らない
- **日焼け止め**: 化粧品の効能表現に同じ注意が必要。必要になったら別途検討
- **軍手・タオル・ウェットティッシュ**: 単価が低く、どこでも買える

## 気づいたこと

- ~~`tackle/airlegato-lifejacket` のリンクに `tag=` がない~~ → 2026-10-27 対応。旧商品ページが404だったため BASARO 自動膨張式（B0DJCV7VWM）に差し替え、`tag=` 付きに修正
- ~~`tackle/chonmage-soft-cooler`: カードとリンク先の商品が食い違い~~ → 2026-10-27 対応。リンク先（Chonmage 1500×600、B0CCDLQ6C5）は在庫切れ・再入荷予定なし。使っている2記事（`kaijo-tsuribori-misaki`・`cooler-box-selection`）はどちらもソフトクーラー本体を勧める文脈なので、SANLIKE 大型クーラーバッグ 100/120cm（B0F7JVGX8Z、在庫あり、★4.1・23件、¥9,899）に差し替え。id は据え置き。DRESS ブリバッグ 100cm（B0F52YJK5T）は釣具メーカー品だが一時在庫切れのため見送り

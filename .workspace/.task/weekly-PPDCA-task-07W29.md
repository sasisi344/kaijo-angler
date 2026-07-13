# 週報PPDCAタスク（2026-W29）

対象週: 2026-W29（2026/07/12〜2026/07/19）
週報ノート: [[07-W29]]（`01_diary/weekly/2026/07-W29.md`）

## タスク

- [ ] `/blog/xxx`配下の旧URLから`/fishing-facility/xxx`配下の実コンテンツへ301リダイレクトを設定する
  - ⚠️ W29サイト全体解析（[[fishstrategy-check]]）で規模が判明: 旧`/blog/`URLは<strong>週190クリック・表示3477（サイト検索流入の約85%）</strong>。対象は施設記事だけでなく`/blog/tactics/`・`/blog/column/`含む旧URL全155件。全リライト施策の前提条件なので最優先
- [ ] 【A層】高表示×低CTR施設記事5本のタイトル・meta description改善（順位は1ページ目なのでCTRだけがボトルネック）
  - nanko-fishing-park（表示261・CTR1.1%）/ kaijo-tsuribori-at-sea（176・1.1%）/ family-tsuribori-tsutteminde（158・1.3%）/ mukai-pearl-marine（133・3.0%）/ shinojima-tsuri-tengoku（104・1.9%）
- [ ] 【B層】高CTR×順位11〜15の3本への内部リンク強化（タイトルは触らない。順位押し上げのみ）
  - wakasa-takahama-sea-fishing-park（CTR20.8%・順位11.8）/ seapark-nyu（11.9%・14.4）/ wakayama-marinacity-fishing-park（10.8%・13.8）
- 🚫 ガードレール: `tactics/fish-strategy/`配下は<strong>W30の効果測定までリライト・構造変更禁止</strong>（2026-07-08〜09リライトの前後比較を汚さないため）。C層（順位10〜20のコンテンツ強化）と順位悪化組（umizuri-port-tajiri等）も301再クロール後のW30データを見てから判断

## 根拠

- 📊 GA4でError 404が全101件・合計201セッション検出（総セッション631の約31.9%）
- 上位404 LP: `/blog/himeji-city-fishing-center`(18)、`/blog/waita-sea-fishing-pier`(11)、`/blog/itoman-ikada-tsurigu-no-zousan`(10)、`/blog/shibushi-bay-daikoku-dolphin-land`(9)、`/blog/wakasa-takahama-sea-fishing-park`(8)、`/fishing-facility/west-japan/mie/tsuribori-denpachiya`(7)
- 同名コンテンツが`/fishing-facility/xxx`配下に実在するケースが多数あり、サイト移行時のリダイレクト未設定が濃厚
- A層・B層の選定根拠と数値の詳細は [[fishstrategy-check]]「W29 サイト全体解析」を参照（GSC 7/04-7/11、新旧URL正規化合算）

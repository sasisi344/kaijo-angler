# 週報PPDCAタスク（2026-W29）

対象週: 2026-W29（2026/07/12〜2026/07/19）
週報ノート: [[07-W29]]（`01_diary/weekly/2026/07-W29.md`）

## タスク

- [x] `/blog/xxx`配下の旧URLから実コンテンツへ301リダイレクトを設定する（2026-07-14実施）
  - ⚠️ W29サイト全体解析（[[fishstrategy-check]]）で規模が判明: 旧`/blog/`URLは<strong>週190クリック・表示3477（サイト検索流入の約85%）</strong>。対象は施設記事だけでなく`/blog/tactics/`・`/blog/column/`含む旧URL全155件。全リライト施策の前提条件なので最優先
  - 実装: W29の`weekly-report`配下GSC/GA4エクスポート（7/04-7/11・前4週分）から実際にクロール・クリックされていた旧`/blog/`URLを機械抽出（重複排除後287件、想定の155件より広範囲だったが実データに基づき網羅）。`src/config/blog-legacy-redirects.ts`を新規作成し、`facility-redirects.ts`と同じ形式（`Record<string, string>`）で全件を`/fishing-facility/`・`/tactics/fish-strategy/`・`/column/`配下の現行URLへマッピング。`astro.config.ts`の`redirects`に`facilityRedirects`とマージして登録
  - 旧スラッグの解決ルール: ①`tactics/`・`column/`配下で現行id完全一致→そのままprefix付け替え、②施設記事の裸slug→`/fishing-facility/<slug>/`、③魚種別攻略記事の旧フラット形式（`<魚種>-strategy`・`<魚種>/theory`等）→`/tactics/fish-strategy/<魚種>/`系、④`column/trivia`・`column/travel`配下の裸slug→対応する現行パス。`intelligence/*`は分離対象外のため`post`コレクションのまま生存しておりリダイレクト不要と判断し除外
  - 例外処理: `aji-saba-kamasu-strategy`は現行id`aji-asaba-kamasu`と綴りが異なるため手動マッピング。現行コンテンツに対応先が存在しない廃止済み施設4件（edogawa-sea-fishing-park, iwaki-sea-fishing-center, oarai-sea-fishing-center, sanriku-sea-fishing-park）は`/fishing-facility/`インデックスへフォールバック
  - `astro build`で468ページ生成・エラーなしを確認。himeji-city-fishing-center・column/ranking/kansai・tactics/fish-strategy/buri/intermediateの3系統でリダイレクト先HTML（meta refresh、既存`facility-redirects.ts`と同方式）を実機確認済み
  - W30以降のGSCデータで404流入分断が解消されたか（fish-strategy効果測定・matsunase等悪化組の再判定含む）を確認するのが次のフォローアップ
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

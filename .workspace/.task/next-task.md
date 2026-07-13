# 次に控えているタスク

## Act候補（W29 GSCデータ由来、2026-07-14追加・並列着手）

- [ ] `/blog/himeji-city-fishing-center`等の404多発上位LP（101件・201セッション）への301リダイレクト → [[weekly-PPDCA-task-07W29]]で既にタスク化済み・重複作業不要（本項目はここに一覧化するためのポインタ）
- [x] `src/content/blog/fishing-facility/west-japan/mie/matsunase-fishing-park/index.mdx`：CTR・順位悪化（6.09%→4.44%、順位12.5→16.76）の要因調査（2026-07-14実施）。title・description・本文（料金表・魚種・攻略法・アクセス・観光導線）ともに検索意図とのズレや陳腐化は見当たらず、コンテンツ側に明確な改善余地なしと判断。下落幅の大きさから404流入分断（旧`/blog/`URL未リダイレクト）による評価分散が濃厚とみて<strong>編集は保留</strong>。301リダイレクト完了後にW30以降のデータで再判定する
- [x] `src/content/blog/column/ranking/kansai/index.mdx`：内部リンク強化完了（2026-07-14）。関西施設5記事（suihou-fishing-pond, kaijo-tsuribori-at-sea, umizuri-port-tajiri, kaijo-tsuribori-misaki, awaji-janohire-fishing-park）から`/column/ranking/kansai/`への内部リンクを既存文体に合わせて追加。事前調査時点で既存リンクは0件だった
- [x] `src/content/blog/fishing-facility/west-japan/tokushima/family-tsuribori-tsutteminde/index.mdx`：クエリ「釣ってみんで釣り堀」対応でタイトル・meta descriptionリライト完了（2026-07-14）。title冒頭に「（屋内釣り堀）」を挿入しクエリとのマッチをタイトル先頭付近に集約、descriptionも「屋内型の釣り堀」を明示的に再配置
- [x] `src/content/blog/fishing-facility/west-japan/miyazaki/shibushi-bay-daikoku-dolphin-land/index.mdx`：内部リンク強化完了（2026-07-14）。鹿児島の鴨池海づり公園・桜島海づり公園への内部リンクと九州ランキング記事へのリンクを追加、鴨池側からも相互リンクを追加
  - 📌 発見: `column/ranking/kyushu-okinawa/index.mdx`は福岡・佐賀・長崎・熊本・大分のみが対象で、宮崎・鹿児島の施設（イルカランド・鴨池・桜島）が掲載対象外になっているコンテンツギャップを発見。九州ランキング記事への宮崎・鹿児島施設の追加を別タスク候補として検討する
- [x] `src/content/blog/fishing-facility/center-japan/fukui/wakasa-takahama-sea-fishing-park/index.mdx`：レビュー系ニーズ対応コンテンツ強化完了（2026-07-14）。「実際に釣れた魚と訪問レビュー」セクションを新設し、季節別釣果傾向（春サヨリ・夏アジサバ・秋アオリイカ・冬根魚）と現地レビュー（混雑度・足場注意点・設備）を追加。lastmod更新済み。非空行数約100→115行

## [ ] 観光×海上釣り堀マネタイズ：施設記事への観光導線ブロック標準装備（2026-07-14方針決定）

**中期方針の背景**: アクセスは維持・毎週向上中、競合もほぼ不在のため大きなSEO施策は不要な段階。今後の課題は「アクセスがある1記事のマネタイズ」。現状Adsense頼みだが、W29データでクリック上位施設記事（糸満=沖縄、イルカランド=宮崎、脇田=福岡、若狭高浜=福井、賢島=伊勢志摩）がほぼ全て観光地であることが判明し、読者属性が旅行者と重なる。既存のtravelモデルプラン記事への遷移を挟むより、施設記事内で観光アフィリエイトを完結させる構造を狙う。詳細は[[project-monetization-tourism]]（メモリ）・[[fishstrategy-check]]「W29 サイト全体解析」参照。

### 前提条件（先に完了させる）

- [ ] `/blog/xxx`旧URL→実コンテンツへの301リダイレクト（[[weekly-PPDCA-task-07W29]]で着手中）。旧URL経由の流入がサイト検索流入の約85%を占めるため、これが終わるまで観光導線を作っても届く読者が少ない
- [ ] TABILMO P1クリック実績計測（2026-07-23〜08-06、GA4探索レポートで`gothere_click`確認、[[next-task]]内・後述の既存P1項目参照）。宿泊系アフィリの反応を見てから拡張のgo/no-go判断

### TODO（W31あたり、上記2件が終わってから着手）

- [ ] 観光導線ブロックのテンプレート設計（レンタカー・宿泊・アクティビティ系AffiliateCard＋travelモデルプランへの内部リンクを1セクションにまとめる）。既存の`AffiliateCard`/`GoThere`コンポーネントとASP（じゃらん・楽天・TABILMO）をそのまま使う想定、新規コンポーネント開発は不要
- [ ] アクティビティ系ASP（じゃらん遊び体験・アクティビティジャパン等）で「手ぶら体験」を扱っているか確認。海上釣り堀の「手ぶらセット」訴求と直結するため相性が良いと予想
- [ ] 試験導入の対象記事5本を選定（W29クリック上位から）: itoman-ikada-tsurigu-no-zousan（糸満・沖縄）、shibushi-bay-daikoku-dolphin-land（イルカランド・宮崎）、waita-sea-fishing-pier（脇田・福岡）、wakasa-takahama-sea-fishing-park（若狭高浜・福井、CTR20.8%で特に優先）、kashikojima-fishing-park-kaiyuen（賢島・伊勢志摩）
- [ ] 姫路市立遊漁センター（himeji-city-fishing-center）は休園アーカイブ記事のためマネタイズ対象から除外
- [ ] 試験導入後、GA4`gothere_click`でクリック率を既存travel記事（jalan-net/rakuten-travel/tabilmo）と比較し、横展開のgo/no-goを判断

---

## [ ] 月次モニタリング：GSC再分析（`gsc-postreflesh-task.md` フェーズ5）

**W27（2026-06-29〜2026-07-05、7月最初週）に実行する。**

- GSCから最新のページ単位エクスポート（直近1ヶ月 or 3ヶ月）を取得し、`.workspace/.task/access-data/`配下に保存
- `node scripts/analyze-facility-ranking.mjs <新エクスポートCSV>`を実行し、フェーズ2のトリアージリスト（公式優勢/情報ギャップ/休業中の3分類）を最新データで更新
- フェーズ3で対応した高優先度10施設（fishing-park-toi, obama-city-fishing-coop-raft, suihou-fishing-pond, fishing-park-omishima, kaijo-tsuribori-misaki, ikadatsuri-tokai, amakusa-leisure-land, saikakizaki-seapark, kashikojima-fishing-park-kaiyuen, jumbo-fishing-mura）の順位・CTRが改善したか確認
- フェーズ4で対応したCTR=0%施設・料金系/ランキング系クエリ対象ページのCTRが改善したか確認
- 詳細手順・対象施設リストは`gsc-postreflesh-task.md`のフェーズ5を参照

## [x] 施設リンクのネストパス形式が全件404していた問題（2026-06-21発見・2026-06-21修正済み）

himeji/nankoのスラッシュ問題を調査中に発見。`/fishing-facility/<region>/<prefecture>/<slug>` 形式（ネストパス）の内部リンクが、`column/ranking`・`column/travel`（access含む）・`column/trivia`・地域インデックス3ページ・施設間クロスリンクなど**42ファイルに253件**存在していたが、実際のライブルートは全施設で例外なく `/fishing-facility/<slug>/`（ベアスラッグ、frontmatterの`slug:`がディレクトリ名と完全一致）だったため**全件404**していた。

- frontmatter `slug:` は全施設でディレクトリ basename と1:1一致することを検証済み（例外ゼロ）→ 機械的フラット化が安全と判断
- スクリプトで253件全て `/fishing-facility/<slug>/` に一括置換、`astro build`（1637ページ）で正常性確認済み
- 同じバグが `src/config/facility-redirects.ts`（旧WordPress URL→新URLの301リダイレクトマップ、自動生成）にも存在（108件）→ 同様に修正。加えて手動で2件のtypo起因のミスマッチ（`jougashima-js-fishing`→`jogashima-js-fishing`、`sendai-port-central-park`→`sendai-port-central-park-sea-square`）を発見・修正
- 副次的に見つかった無関係の誤字リンク（`shodoshima-furusatomura-fishing-pier`内の「直島つり公園」リンクが`aoshima-fishing-park`という誤字で404）も合わせて`naoshima-fishing-park`に修正

スクリプトは使い捨てのため削除済み（git管理外で実行・終了後rm）。

---

## [x] 施設記事が /blog/ と /fishing-facility/ で重複公開・重複インデックスされている（2026-06-21発見・2026-07-07修正済み）

**修正内容（2026-07-07）**: 調査の結果、この問題は`fishing-facility/`だけでなく`tactics/`（195記事）・`column/`（222記事）にも同型で存在し、対象は約649記事（サイトほぼ全体）に及ぶことが判明。`src/content/config.ts`の`postCollection`のglobパターンから`fishing-facility/`・`tactics/`・`column/`を除外し（`pattern: ['**/*.{md,mdx}', '!fishing-facility/**', '!tactics/**', '!column/**']`）、各専用ルート（`/fishing-facility/`・`/tactics/`・`/column/`）側を正規URLとして残す方針で解消。`astro build`で`dist/blog/fishing-facility|tactics|column/`が生成されなくなったこと、各専用ルートは地図・構造化データ等の機能を保持したまま存続することを確認済み。ナビゲーション「ブログ記事一覧」（`/blog/`）はintelligence記事23件のみの表示になる仕様変更を伴うが、ユーザー承認済み。詳細は[[weekly-task]]のW28-Act参照。

<details>
<summary>旧・発見時の記録（2026-06-21）</summary>

W26週次PDCA（[[weekly-task]]）でhimeji-city-fishing-center/nanko-fishing-parkのスラッシュ有無問題を調査した際に発見。トラフィックデータ上の「スラッシュ有無の表記揺れ」は表面的な症状で、根本原因はもっと大きい：

- `src/content/blog/fishing-facility/...` 配下の全施設記事は、`postCollection`（`[...blog]/index.astro`、base: `src/content/blog`）と `fishingFacilityCollection`（`fishing-facility/[...slug].astro`、専用generateId）の**両方のコレクションに同時にマッチし、2つの独立したURLとしてビルドされている**ことを`npx astro build`で実機確認済み（例：`dist/blog/himeji-city-fishing-center/` と `dist/fishing-facility/himeji-city-fishing-center/` が両方生成）。
- 両ページとも `<link rel="canonical">` が**自分自身を指している**（クロス正規化なし）。`sitemap-filter.ts`（`src/config/sitemap-filter.ts`）もこの重複を除外していないため、**両方がsitemapに載りインデックス対象**になっている。
- 規模：施設記事は全コレクションの大半を占めるため、おそらく約120記事すべてが同様の重複対象（今回確認したのはhimeji-city-fishing-centerとnanko-fishing-parkの2件のみ）。
- `vercel.json`のtrailingSlash設定が2026-06-04のコミット（3d25a83）で`false`→`true`に変わっており、これがGSCの「スラッシュ有無」表記揺れのもう一つの要因（リダイレクト方向が反転したため、新旧クロールが混在）。設定自体は現状で正しい（`src/config.yaml`のtrailingSlash:trueと一致）ため、こちらはGoogleの再クロール待ちで自然解消する見込み。

**対応方針は未決定（2026-06-21時点でユーザーに確認済み・別途相談予定）**。候補：
1. `/fishing-facility/`側に`robots: noindex`＋`canonical`（→`/blog/`）を追加して重複を解消（コード変更は小さいが表示URLは両方残る）
2. `/fishing-facility/<slug>`を廃止し`/blog/<slug>/`へ301リダイレクト（URL構造はシンプルになるが、`/fishing-facility/[...slug].astro`の地域・都道府県インデックスページ機能との関係を要調査）

対応するなら、まず影響範囲（重複している記事の実数）を`scripts/`配下に診断スクリプトを書いて全件洗い出すところから始めるのが安全。

</details>

---

## [x]重複とみなされているページがある
- https://kaijo-fishing.com/fishing-facility/kaijo-tsuribori-misaki/
岬はアクセスもそれなりにある。修正ポイントとしては、タックルの商品リンクを削除して、Googleの現地レビューを取り込んでオリジナル性を確保といったところか。
- https://kaijo-fishing.com/fishing-facility/yunoko-fishing-park/
湯の児フィッシングパークの情報。内容を確認したところ、記事の長さが足りないと感じた。テンプレ的な内容が重複とみなされていると予想。
- https://kaijo-fishing.com/blog/tactics/fish-strategy/fugu/
内容を確認したが類似性に繋がる箇所は認められない。長さも十分だし説明もそう。ただテンプレになりすぎて他の魚種と類似部分が多いのではないかと考える。

### Check（前週からの改善・要因仮説）
- 数値変化: ユーザー数320→440（+37.5%）、PV 376→538（+43.1%）、CTR 約4.0%→約4.5%（+13.5%）、平均滞在時間 約48.4秒→約50.3秒（+3.9%）、直帰率 約29.6%→約36.7%（+23.9%）、掲載順位 約11.3→約11.5（+1.4%、わずかに悪化）
- 推定要因（LP/ページのどれに起因？）: PV増の主因は `/blog/himeji-city-fishing-center/`（前週27→今週35）と `/blog/tactics/fish-strategy/isaki/gourmet/`（新規でPV21・直帰率50%）など新規記事/ページへの流入拡大。新規セグメントPV521・直帰率約36.3%がほぼ全体を占め、リピーターはPV17・直帰率約47.1%と少数。新規流入が急増した一方、直帰率の高いページ（isaki/gourmet 50%、yuharai-pond 46.2%）の比重が増えたことが、全体直帰率の悪化（+23.9%）に直結していると推定
- ⚠️ 前週同様、`/blog/himeji-city-fishing-center/`（GA4はスラッシュ付きでPV最多）はGSC側で `/blog/himeji-city-fishing-center`（スラッシュ無し、表示142・CTR8.45%・順位6.44）と `/blog/himeji-city-fishing-center/`（スラッシュ付き、表示23・CTR17.39%・順位2.91）の2行に分かれており、URL正規化の表記揺れが継続している（[[ga4-weekly-import]]で要対応）。統合後は表示165・クリック16・CTR約9.7%・順位約5.95
- 4-Box分析は🟠（高順位×低CTR）と⚪（未クリック高順位）に該当するページが見つからなかった。一方🟢には`/blog/sea-fishing-park-mikata/`（順位4.73・CTR6.49%）が該当し、前週リスト入りした同ページが順位を伸ばした可能性がある

### Act（次週のToDo・優先度つき）
- [x] `/blog/himeji-city-fishing-center/`（統合: 表示165・順位約5.95・CTR約9.7%）は僅差で「高順位（5位以内）」に届いていないため、内部リンク強化で順位5以内への押し上げを狙う
- [x] `/blog/tactics/fish-strategy/isaki/gourmet/`（表示44・順位8.95・CTR9.09%）はPV2位ながら直帰率50%と高いため、導入文・内部リンクの見直しで離脱を防ぐ
- [x] `/blog/cloudy-day-advantage/`（表示76・順位8.21・CTR0%）はタイトル・meta descriptionを見直しクリック率を改善する

---

アクセスデータを2週間分取得しておいて、W26（月末）あたりに比較対象する。結果待ち。

記事が足りないわけじゃないけど、ポイント記事など既存記事のリライトは考えたい。コンテンツのボリューム調整はすでにやったと思う。新規追加に注力するべきかな。

## 気になること

### CTRが4%台と低め

他のブログは6%以上はあるのに、海上アングラーは低めなのが気になる。

海上釣り堀の紹介サイトは公式がある。少なくともここは公式よりも詳細に記録しているから、コンテンツの質では勝っている。ドメインの弱さもあるだろうけど、同業で全国レベルのまとめサイトはないため、市場としては独占している感じのはず。

CTR4%は悪すぎるわけじゃないが、まだ改善の余地がある数字だと考える。

>> ランキング形式のまとめ記事を作成することで落ち着いた。

### 高級魚など魚種クエリで各地方をフォロー

ランキング形式は「海上釣り堀」のみ注力。

海釣り施設は全国でも少ないし採用している施設も少ないため、「北日本」「東日本」「西日本」で区分するのがいいだろう。料金や施設の特徴などをまとめて、コスパや釣果実績などでセグメントをわけてクエリ取得にたいするパフォーマンスを高める。

### 全国の括りでまとめを作成するなら

各地域への交通アクセス手段。「手ぶら」はもっとも自由度が高く道中の荷物も少ないが、交通機関のタイムスケジュールに振り回されることも。特に紀伊半島の南端とか伊豆半島へのアクセスは、メイン駅から到着までかかる時間がバカに出来ないし、飛行機利用だとよりシビアな帰り道などになる。この場合はAIにプランを考えてもらうのもいいけれど、時間に余裕を持たせることが重要。

自動車ならレンタカーか自家用車。自家用車は荷物をつめるし（時間と運転が許されるなら）どこへでも行ける強みがある。

## アフィリエイトの可能性

アクセスが安定してきている。旅行記事を作成してはいないが、ページタイトルとアクセス数を調査して、旅行アフィリエイト・物販のリンクをつけると効果的な記事を抽出する。

---

## TABILMO・旅行宿泊アフィリエイト（2026-07-09 着手後）

### 完了済み（参照）

- `src/content/affiliates/travel/tabilmo.json` 登録（A8・`id="travel/tabilmo"`）
- 記事 `src/content/blog/column/travel/tabilmo-villa-stay-guide/index.mdx` 新規作成
- `ensei-guide`「前泊のすすめ」に `<AffiliateCard id="travel/tabilmo" />` と双方向内部リンクを追加
- `public/llms.txt` を llms.txt 仕様準拠に修正（H1＋blockquote＋Markdownリンク形式）

### [ ] P1：クリック実績の計測（2〜4週間後・GA4管理画面）

**ensei-guide・tabilmo-villa-stay-guide 公開後、2026-07-23〜08-06 頃を目安に実施。**

- GA4 探索レポートで `gothere_click`（facility_id / link_type）の集計を確認（`kpi-improvement-tasks.md` Phase 2・`travelplan.md` §効果測定参照）
- 宿泊系 AffiliateCard のクリック比較：`travel/jalan-net` / `travel/rakuten-travel` / `travel/tabilmo`
- ページ単位エクスポートではイベントが含まれないため、**探索レポートでの手動確認が必須**
- 結果を `.task/travelplan.md` または週次PDCAに記録し、横展開の go/no-go を判断

### [ ] P2：モデルプラン記事への TABILMO 横展開（P1の結果を見てから）

**travelplan.md では「第二候補」として見送り済み。クリック実績が取れたら再開。**

- 対象10本の「宿泊先選び」セクションに、<strong>3名以上・一棟貸し向け</strong>の1段落＋条件付き `<AffiliateCard id="travel/tabilmo" />` を追加
  - `wakayama-kii-trip` / `shirahama-onsen-trip` / `ise-shima-model-plan` / `awaji-family-trip` / `kagawa-shodoshima-trip` / `shimanami-cycling-fishing` / `chiba-minamiboso-trip` / `fukui-mikata-goko` / `hamanako-unagi-trip` / `kumamoto-amakusa-trip`
  - `kanagawa-miura-trip` は日帰り前提のため「1泊にする場合のみ」注記付きで検討
- じゃらん・楽天と併記し、ホテル vs 一棟貸しの使い分けを1〜2文で明示
- 詳細ガイドは `/column/travel/tabilmo-villa-stay-guide` へ内部リンク

### [ ] P2：TABILMO エリア別ディープリンクの検証と登録

**未検証のディープリンク一括埋め込みは禁止（kaijo-ui-components SKILL §3.3）。ASP確認後のみ実施。**

- A8 管理画面で、以下のような物件・エリアURLにアフィリパラメータを付与できるか確認
  - 伊勢志摩例：`tabilmo.com/villas/tokai/mie/area-219/villa/1330`
  - 四国・広島例：`tabilmo.com/villas/chugoku/hiroshima/area-311/villa/1923`
- 検証OKなら `src/content/affiliates/travel/` にエリア別 id（例：`travel/tabilmo-mie`）を追加し、該当モデルプラン記事から参照
- 検証NGなら汎用 `travel/tabilmo` のまま維持（現状方針）

### [ ] P3：tabilmo-villa-stay-guide の cover 画像

- 他 travel 記事同様 `image: ./cover.jpg`（または cover.svg）を追加し、一覧・OG表示を整える
- 画像生成は明示指示があるまで保留（CLAUDE.md 準拠）

### [ ] P3：llms.txt デプロイ後の Page Insights 再確認

- 本番 `https://kaijo-fishing.com/llms.txt` が H1＋blockquote＋リンク形式で配信されているか確認
- Page Insights の「llms.txt 推奨事項」警告が解消されたかチェック

### [ ] 保留（travelplan.md 既存方針どおり）

- **GoThere Phase 2**（Geolocation 出発地推定・フェリー必須フラグ）— 任意
- **施設×最寄り宿データ整備** — jalan/rakuten エリアコード深いリンクのASP仕様確認まで凍結
- **access-setouchi / 九州アクセスハブ / 飛行機遠征ガイド** — travel-hub.md 凍結判断の再評価後

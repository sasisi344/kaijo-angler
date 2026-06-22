# 次に控えているタスク

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

## [ ] 施設記事が /blog/ と /fishing-facility/ で重複公開・重複インデックスされている（2026-06-21発見）

W26週次PDCA（[[weekly-task]]）でhimeji-city-fishing-center/nanko-fishing-parkのスラッシュ有無問題を調査した際に発見。トラフィックデータ上の「スラッシュ有無の表記揺れ」は表面的な症状で、根本原因はもっと大きい：

- `src/content/blog/fishing-facility/...` 配下の全施設記事は、`postCollection`（`[...blog]/index.astro`、base: `src/content/blog`）と `fishingFacilityCollection`（`fishing-facility/[...slug].astro`、専用generateId）の**両方のコレクションに同時にマッチし、2つの独立したURLとしてビルドされている**ことを`npx astro build`で実機確認済み（例：`dist/blog/himeji-city-fishing-center/` と `dist/fishing-facility/himeji-city-fishing-center/` が両方生成）。
- 両ページとも `<link rel="canonical">` が**自分自身を指している**（クロス正規化なし）。`sitemap-filter.ts`（`src/config/sitemap-filter.ts`）もこの重複を除外していないため、**両方がsitemapに載りインデックス対象**になっている。
- 規模：施設記事は全コレクションの大半を占めるため、おそらく約120記事すべてが同様の重複対象（今回確認したのはhimeji-city-fishing-centerとnanko-fishing-parkの2件のみ）。
- `vercel.json`のtrailingSlash設定が2026-06-04のコミット（3d25a83）で`false`→`true`に変わっており、これがGSCの「スラッシュ有無」表記揺れのもう一つの要因（リダイレクト方向が反転したため、新旧クロールが混在）。設定自体は現状で正しい（`src/config.yaml`のtrailingSlash:trueと一致）ため、こちらはGoogleの再クロール待ちで自然解消する見込み。

**対応方針は未決定（2026-06-21時点でユーザーに確認済み・別途相談予定）**。候補：
1. `/fishing-facility/`側に`robots: noindex`＋`canonical`（→`/blog/`）を追加して重複を解消（コード変更は小さいが表示URLは両方残る）
2. `/fishing-facility/<slug>`を廃止し`/blog/<slug>/`へ301リダイレクト（URL構造はシンプルになるが、`/fishing-facility/[...slug].astro`の地域・都道府県インデックスページ機能との関係を要調査）

対応するなら、まず影響範囲（重複している記事の実数）を`scripts/`配下に診断スクリプトを書いて全件洗い出すところから始めるのが安全。

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
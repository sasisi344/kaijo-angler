# 海上アングラー：週間タスク
日曜日にアクセスデータの収集を実行し、データをもとに先週と比較してレポートを作成。改善点を作成して実行する。

---

## 保留中：将来のGSC/GA4データが必要なタスク一覧（2026-07-14整理）

対応済みだが効果測定に未来週のデータが要るもの・データ待ちで着手を保留しているものを集約。週次データ収集時にここを確認し、該当週のデータが揃ったら[[weekly-task]]の該当週セクションで判定してチェックを消し込む。

- [ ] **301リダイレクトの効果測定（W30〜）**: 2026-07-14に`src/config/blog-legacy-redirects.ts`で旧`/blog/`URL 287件を301化（[[weekly-PPDCA-task-07W29]]）。Googleの再クロール後、W30以降のGSCで404流入分断が解消したか（旧URLと新URLの表示・クリックが正しく1本化されるか）を確認する
- [ ] **W29で悪化と判定された施設記事の再判定（W30〜）**: `umizuri-port-tajiri`（順位8.4→12.3悪化）・`matsunase-fishing-park`（順位12.5→16.8悪化）・`kariyawan-fishing-center`（順位15.7→18.2悪化）・`tsuri-ikada-fukaura`（クリック2.8→0）は301未設定による404流入分断が原因の可能性があり、リダイレクト適用後のW30データで悪化が継続するか見てから着手判断（[[fishstrategy-check]]C層）。`matsunase-fishing-park`は個別に編集保留中（[[next-task]]参照）
- [ ] **fish-strategy（魚種別攻略記事）リライト効果測定 フェーズ4（W30〜）**: 2026-07-08〜09に14魚種56ファイルの「量産感」対策リライトを実施済み。比較対象はW28以前 vs W30以降（W29は移行期のためベースラインのみ扱い）。表示回数・CTR・順位の変化を確認し、方針の有効性を判定する（[[fishstrategy-check]]フェーズ4）
- [ ] **月次モニタリング：GSC再分析フェーズ5**: 元は「W27（2026-06-29〜2026-07-05）に実行」の予定だったが未着手のまま日付超過。次回のページ単位エクスポート取得時に`node scripts/analyze-facility-ranking.mjs`でフェーズ2トリアージリストを更新し、フェーズ3対応10施設・フェーズ4対応記事の順位/CTR改善を確認する（[[next-task]]・旧`gsc-postreflesh-task.md`参照）
- [ ] **TABILMO（旅行宿泊アフィリ）P1クリック実績計測**: 2026-07-23〜08-06頃、GA4探索レポートで`gothere_click`（facility_id / link_type）を確認し、`travel/jalan-net`・`travel/rakuten-travel`・`travel/tabilmo`のクリックを比較。結果次第でP2（モデルプラン記事への横展開）のgo/no-goを判断（[[next-task]]）
- [ ] **観光×海上釣り堀マネタイズ施策のgo/no-go判断**: 上記TABILMO P1実績と301リダイレクト効果測定の両方が出そろってから、観光導線ブロックの試験導入（W31目標）に着手するかどうかを判断する（[[next-task]]・[[project-monetization-tourism]]）

---

### Do（実施施策）
- [[06-W25]]で提示したアクションプランを実施済み：`/blog/himeji-city-fishing-center/`（統合表示165・順位約5.95・CTR約9.7%）の内部リンク強化、`/blog/tactics/fish-strategy/isaki/gourmet/`の導入文・内部リンク見直し、`/blog/cloudy-day-advantage/`のタイトル・meta description見直しを実施

### Check（前週からの改善・要因仮説）
- 数値変化: UU440→499（+13.4%）、PV538→586（+8.9%）、CTR4.5%→3.8%（-16.2%）、滞在時間50.3→43.4秒（-13.7%）、直帰率36.7%→38.6%（+5.3%）、順位11.5→12.3（+7.0%、悪化）
- 推定要因（LP/ページのどれに起因？）: PV増の主因は引き続き`/blog/himeji-city-fishing-center/`（PV26）。CTR・滞在時間・順位がいずれも悪化しており、新規流入は増えたがエンゲージメントの質は前週より低下している
- ⚠️ `/blog/himeji-city-fishing-center/`のスラッシュ有無による表記揺れが継続（スラッシュ有: 表示164・CTR7.9%・順位5.08／スラッシュ無: 表示8・CTR0%・順位3.25）。前週から指摘済みの既知の制約（[[ga4-weekly-import]]）で、URL正規化が未解消

### Act（次週のToDo・優先度つき）
- [x] `/blog/himeji-city-fishing-center/`はCTR7.9%・順位5.08とほぼ高順位帯に位置するため、内部リンク強化で順位5以内への押し上げを継続 → 兵庫県内の既存5リンクをスラッシュ付きに修正＋休園・閉鎖施設4記事（sea-fishing-park-mikata, shinojima-tsuri-tengoku, yuharai-pond, shodoshima-furusatomura-fishing-pier）から新規に内部リンクを追加
- [x] `/blog/nanko-fishing-park/`（表示132・順位10.73・CTR2.3%）はタイトル・meta description見直しでCTR改善 → title/descriptionを「予約不要」「2026年最新版」を強調する内容に変更（`lastmod`更新）
- [x] スラッシュ有無のURL正規化（リダイレクト設定）を技術的に解消し、GSC計測の分断を防ぐ → `vercel.json`のtrailingSlash設定は2026-06-04のコミットで既に`true`に修正済み（Googleの再クロール待ちで自然解消見込み）。himeji宛の内部リンク5件をスラッシュ付きに修正。
  - ⚠️ 調査の過程で**より大きな問題を発見**：施設記事が`/blog/<slug>/`と`/fishing-facility/<slug>/`の2つのURLで重複公開・重複インデックスされている（〜120記事規模、クロス正規化なし）。詳細と対応方針は[[next-task]]に記録。対応は未着手・別途相談予定。

  ### W28-Check（W27施策の効果測定・データ分析）
- サイト全体（GSC）: クリック178→215（+20.8%）、表示回数3452→4663（+35.1%）、CTR5.16%→4.61%（-10.7%、悪化）、平均掲載順位11.17→11.48（-2.8%、悪化）。GA4オーガニックUUは257→231（-10.1%、減少）。表示回数は伸びたがCTR・順位は悪化しており、新規ページのインデックス増でロングテール表示が増えた一方、主要ページのクリック効率が低下している
- `/blog/himeji-city-fishing-center/`: W27の内部リンク強化が効き、順位7.15→**4.72**（5位以内到達）、表示130→163（+25%）。ただしCTRは8.46%→6.13%に低下（表示増にクリックが追いついていない＝タイトル/スニペットが弱い）。内部リンク施策は成功、次はCTR改善フェーズへ移行
- `/blog/nanko-fishing-park/`: 表示147→291（+98%）だがCTRは2.04%→2.41%とほぼ横ばい。タイトル/description変更（「予約不要」「2026年最新版」）の効果は薄く、文言の再検討が必要
- ⚠️ **重大な構造的問題（未解決・要対応）**: `src/content/blog/fishing-facility/`配下の**全116記事**が`postCollection`（`base: src/content/blog`の再帰glob）と`fishingFacilityCollection`（`base: src/content/blog/fishing-facility`）の両方に同時マッチし、`/blog/<slug>/`と`/fishing-facility/<slug>/`の2つのURLで重複ビルド・重複インデックスされていることをコード確認で再確認した（`src/content/config.ts`、`src/pages/[...blog]/index.astro`、`src/pages/fishing-facility/[...slug].astro`）。両ページとも`<link rel="canonical">`が自己参照でクロス正規化なし、`sitemap-filter.ts`も除外していないため両方がsitemap掲載・インデックス対象。実例として`nanko-fishing-park`はGSCで`/blog/`側クリック7・`/fishing-facility/`側クリック3に評価が分散しており、W27/W28で順位・CTRが伸び悩む一因と推定される（[[next-task]]で2026-06-21に発見済みだが対応未着手）

### W28-Act（次週のToDo・優先度つき）
- [x] 🔴**最優先・構造修正**: 当初案（`/fishing-facility/`→`/blog/`へ301）は調査の結果**方向が逆**と判明。`/fishing-facility/[...slug].astro`は地図・構造化データ（FacilityJsonLd）・パンくず・関連施設一覧を持つ専用実装だが、`/blog/`の汎用レイアウト（`SinglePost.astro`）にはこれらがなく、301すると機能が失われることが判明。さらに調査の過程で同型の重複バグが`tactics/`（195記事）・`column/`（222記事）にも存在し、対象は当初想定の116記事ではなく**約649記事**（サイトほぼ全体）に及ぶことが発覚。方針を「`postCollection`（`/blog/`ルート用）のglob対象からfishing-facility/tactics/columnを除外し、専用ルート側を正規URLとして残す」に転換して実装・`astro build`で検証済み（`src/content/config.ts`）。`dist/blog/fishing-facility|tactics|column/`は生成されなくなり、`dist/fishing-facility/`（117）・`dist/tactics/`・`dist/column/`は地図等の機能を保持したまま存続を確認。副次効果として`rss.xml.ts`（本来「ブログ記事のみ」の設計）・`search.json.ts`に紛れ込んでいた重複エントリも同時解消。ナビゲーション「ブログ記事一覧」はintelligence記事23件のみの表示に変更（ユーザー承認済み）
- [x] `/blog/kaijo-tsuribori-at-sea/`（表示195・CTR**0.51%**、W27の3クリックからさらに悪化）タイトルを「船に乗らず桟橋直結・酔わない海上釣り堀」訴求に変更、価格訴求から稀少性訴求へ転換（`fishing-facility/west-japan/hyogo/kaijo-tsuribori-at-sea/index.mdx`、lastmod更新済み）
- [x] `/blog/family-tsuribori-tsutteminde/`（表示133・CTR0.75%）タイトルを「入場料600円・予約不要・オマール海老」の具体訴求に変更
- [x] `/blog/wakayama-marinacity-fishing-park/`（表示57・CTR0%）タイトルを「1,000円から・黒潮市場すぐ」の価格＋立地訴求に変更
- [x] `/blog/nanko-fishing-park/`（表示291・CTR2.4%）は前週の「無料・予約不要」訴求が効果薄だったため、「青物・タチウオ爆釣」「朝5時から」という釣果・営業時間の具体訴求に転換して再実施
- [x] `/blog/sanriku-sea-fishing-park/`（表示6・CTR0%）はコンテンツファイルが存在せず**既に削除済み**と判明（GSCに残存インデックスがあるのみ、実体は404）。対応不要
- [x] `/blog/umizuri-port-tajiri/`（順位9.29・CTR3.28%・表示122）は同じ大阪府内の`nanko-fishing-park`・`koshima-sea-fishing-pond`・`kaijo-tsuribori-misaki`の3記事から新規に内部リンクを追加（「あわせて行きたい」セクション、雨天対応の切り口で自然に接続）
- [x] `/blog/kamoike-sea-fishing-park/`（直帰率33%→70%に急悪化）・`/blog/totto-park-koshima/`（直帰率75%）は、直帰率が低い`itoman-ikada-tsurigu-no-zousan`（31.8%）の冒頭の型（読者の悩みを直接問いかける2文＋共感の一言から始める構成）を参考に導入文を書き直した。ただし表示回数増加に伴う流入クエリの質低下が根本原因の可能性もあり、文章改善だけで解決するとは限らない点に留意（要経過観察）
- [x] `/blog/himeji-city-fishing-center/`（休園施設のアーカイブページ）は既に別途タイトル・description改善済みだったことを確認（「跡地情報と今も釣れる近隣3施設まとめ」への変更、近隣代替施設への誘導を追加、lastmod 2026-07-07）。上書きせず維持

### W28-Act（コンテンツ構造の課題・中期対応）
- [ ] `tactics/fish-strategy/`配下の魚種別サブ記事（fugu/chinu/madai/kawahagi等のadvanced/gourmet/intermediate/theory）は非空行128〜140行・見出し構成がほぼ同一パターンに揃っており、内容自体は魚種固有で書き分けられているものの「量産感」でGoogleの品質評価に悪影響が出るリスクがある。個別記事のリライト方針の検討・優先度トリアージ・実装手順は[[fishstrategy-check]]に切り出して管理する
- [x] 施設記事のうち非空行80〜86行程度で分量が薄かった10記事（`west-japan/kochi/kochi/tsuri-ikada-fukaura`, `raft-fishing-takahashi`, `west-japan/miyazaki/shibushi-bay-daikoku-dolphin-land`, `west-japan/tokushima/hamabe-tosen-kaijo-tsuribori`, `west-japan/kumamoto/{kaijo-tsuribori-tsuriichi, sea-fishing-land, amakusa-rakutsuri}`, `west-japan/okinawa/{motobu-fishing-ikada-umiseikatsu, itoman-ikada-tsurigu-no-zousan}`, `west-japan/tokushima/family-tsuribori-tsutteminde`）を123〜135行に拡充 → 魚種別攻略セクション（戦略・科学的根拠のペア）、料金テーブルの分割、周辺用品セクション（TackleCard追加）、よくある質問、周辺立ち寄りスポットを追加。`hyogo/sea-fishing-pond-kaikei`（既存の完成度が高い記事）を構造モデルに使用。TackleCard idは全て`src/content/affiliates/tackle/`実在確認済み、`<strong>`表記・`~/`import・GoThere維持を確認、`astro check`は既存の`astro.config.ts`型エラー1件のみ（今回の変更とは無関係）。`yunoko-fishing-park`は実際には中位の分量（139行）で対象外のまま据え置き
- [ ] `kaijo-tsuribori-misaki/index.mdx`はタックル商品リンクが**0件**（施設記事116件中で唯一のリンクなし記事、当初「190件中」は誤り）で、ユーザーが記憶していた「リンク過多」とは逆の状態だった。着手前に現物を再確認すること（今回未着手・要相談）
- [x] 施設記事のTackleCard挿入パターンをサンプル確認 → 対象は「93/190」ではなく**116記事中93記事が「4件」パターン**（5件ではない）。前半2件（魚種別戦略カード）は施設のターゲット魚種に応じて使い分けられており文脈に即した編集判断だが、後半2件は`airlegato-lifejacket`（安全装備）＋`logos-hyotenka-pack`（保冷剤）の組み合わせがサンプル7記事全てで固定的に登場しており機械的挿入の傾向を確認。緊急対応は不要、今後リライトする記事から順に周辺装備を施設特性に応じて差し替える運用へ
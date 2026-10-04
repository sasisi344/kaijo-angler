# 次に控えているタスク

📌 メモ（2026-07-14）: GSC/GA4など**未来のデータが揃わないと判定できないタスク**（301リダイレクト効果測定・fish-strategyリライト効果測定・月次GSC再分析・観光導線go/no-go判断）は[[measurement-task]]（2026-09-30に[[weekly-task]]から分離）に集約している。今後この種のタスクが増えたら都度そちらに追記する。

---

## [x] 【優先】クエリ「海上 釣り堀 ランキング 関東」に関連する記事の修正（2026-10-04・w41 PPDCA）

優先処理を指示済み（2026-10-04）。詳細な根拠は[[weekly-task]]のw41 PPDCA（Problem欄）・[[measurement-task]] M2のw41メモ参照。

- **問題**: 同クエリは3か月で375表示・順位6.2（w41は19表示・順位5.0・1クリック）だが、本命の `column/ranking/kanto-tokai/` は3か月で17表示・順位8.2のみ（`kansai` は同期間1,299表示・91クリック）
- **仮説**: 表示の大半が別URL（`fishing-facility/east-japan/` 等）に出ており、関東ランキング記事が検索結果で拾われていない
- **やること**
  1. 【手動・GSC】クエリ「海上 釣り堀 ランキング 関東」で絞り込み →「ページ」タブで表示先URLと表示・クリックを確認（GSC 7日・3か月の両方）
  2. 【先行実施済み 2026-10-04】被リンク強化: `kanto-tokai` への内部リンクが2本のみ（`kansai` は10本）だったため、ランキング掲載施設6記事（miura-kaiou／jogashima-js-fishing／kaijo-tsuribori-maruya／bakucho-mihama-fishing-park／fishing-park-toi／ikadatsuri-tokai）のアクセス節直後と、`east-japan/index`・`center-japan/index` ハブに導線を追加（計8本増、合計10本）。title・見出しは未変更
  2b. 表示先に応じて対応: 別URLなら `kanto-tokai` への内部リンク・アンカー強化／`kanto-tokai` 自体が出ていなければ title・description・見出しに「関東 ランキング」を明示（順位が良い既存クエリは壊さない。`kansai` は「関西 海上 釣り堀 ランキング」順位3.5を維持した調整が前例）
  3. 変更後に GSC の再インデックス登録（[[subtask]]項目4）
- **完了条件**: 表示先URLが特定され、`kanto-tokai` の受け皿化（リンク強化または title/見出し調整）が反映済み
- **検証（Check）**: [[measurement-task]] M2。w41〜w44 の4週合算で `kanto-tokai` の表示・クリックと、クエリの順位・CTR を確認

海上アングラーが他所に負けていた理由として「関東限定」もあるし、関東の施設すべてをフォローしきれていなかった問題があった。なので他にはあってここにはなかった3施設を追加するのが最優先。

次に、関東・東海のおすすめ施設ランキングとして作成している記事をそのまま使って、別に関東と東海のおすすめ施設として紹介するまとめ記事を用意するべきか、現在の構成で足りないようであれば追加するかを決める。

他にも関東で競合から弱く判定されているのは多いだろうので再度構造チェックをして、弱みを強みに変えていく。

---

## [x] 関東の陸上・屋内釣り堀3施設の記事化（2026-10-04・競合比較で判明した抜け）

素材: `.workspace/_inbox/new-shisetu.md`。競合（large7naturalist）が掲載しており、うちに無かった3施設。下書きは `draft: true` で作成済み（`east-japan/chiba/kujukuri-umitsuri-center`・`east-japan/kanagawa/yokohama-tsuribori-okoku`・`east-japan/chiba/hare-park-tateyama`）。

- [ ] 各記事の `{/* TODO */}` と frontmatter の TODO を解消（20枚超の追加料金の解釈／三日月店の料金／水槽の種類・魚種／トイレ等）
- [ ] `google_maps.map_url` を入れて `node scripts/update-facility-data.mjs` で補完 → `<GoThere>` コメントアウト解除
- [ ] cover.jpg 作成（画像生成は指示後）
- [ ] `draft: false` へ更新（解除忘れ防止）
- [ ] 方針決定: `column/ranking/kanto-tokai` は「海上釣り堀のみ」を謳っているため、3施設は本編に混ぜず「陸上・屋内の釣り堀」の別節として追加するか、リンクのみにするか
- [ ] 公開後: 関東エリアのハブ・ranking からの内部リンク追加、GSC 再インデックス登録

---

## [ ] GoThere 追加改善

詳細・前提条件は[[gothere-task]]参照。GoThere本体・宿泊/レンタカーの出し分け・クリック計測、フェリー必須フラグの検討、クリック実績の初回計測は完了済み（[[travel-task]]・[[gothere-task]]参照）。2026-09-20PDCAで以下2点とも`gothere_click`母数不足（過去28日8件）により**判定不能・持ち越し確定**。GA4カスタムディメンション`placement`/`facility_id`は同日登録済みのため、次回PDCA以降は設置面別データが取得可能。

1. [ ] GoThere 2箇所目の設置（本文中盤）— 設置面別のGA4実績から判断
2. [ ] Geolocation APIによる出発地の自動取得（任意）— アクセスガイドの手動選択式の実績から判断

---

## [ ] `column/travel/`クラスタ：残タスク（2026-08-31分析／[[travel-task]]で大部分完了）

GSC検証の結果、「仮説B向け専用コンテンツが存在しない」という前提は誤りと判明。着地先修正・内部リンク100%化・アクセスガイド新設（setouchi-access-guide／access-kyushu）、および「内部リンクゼロの9記事」問題（実際は被リンク不足5記事）への対応は完了済み（[[travel-task]]・2026-09-03対応、詳細は`.workspace/reports/2026-09-internal-link-audit.md`）。残るのは以下のみ。

- [ ] 301リダイレクトの新旧URL分裂解消（[[weekly-task]]参照、データ待ち）
- [ ] 地方×ハブ都市モデルの新規面展開（紀伊半島・関東・東海への横展開）は、[[weekly-task]]の9月第3週PDCA（travel-task Phase4-2効果測定）の結果を見てから着手判断
- [x] `column/travel/`クラスタの他記事にも被リンクゼロ問題がないか横展開で確認（2026-10-04実施）: 被リンクゼロの記事は**なし**。ただし被リンク1本のみが6記事（`january-minamiise-onsen-trip`／`may-toshijima-toba-trip`＝ise-shima-access-guideのみ、`march-yuasa-yura-soy-sauce-trip`＝access-kinkiのみ、`november-izu-autumn-leaves-trip`＝access-tokaiのみ、`september-silver-week-quiet-spots-guide`＝may-holiday-tsuribori-reservationのみ、`wakayama-kii-trip`＝ensei-guideのみ）。必要なら関連記事・施設記事からの追加リンクを検討

---

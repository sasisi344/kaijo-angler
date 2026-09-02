# 次に控えているタスク

📌 メモ（2026-07-14）: GSC/GA4など**未来のデータが揃わないと判定できないタスク**（301リダイレクト効果測定・fish-strategyリライト効果測定・月次GSC再分析・観光導線go/no-go判断）は[[weekly-task]]冒頭の「保留中：将来のGSC/GA4データが必要なタスク一覧」に集約している。今後この種のタスクが増えたら都度そちらに追記する。

---

## [ ] GoThere 追加改善（最優先）

詳細・前提条件は[[gothere-task]]参照。GoThere本体・宿泊/レンタカーの出し分け・クリック計測は実装済み（[[travel-task]]、アーカイブ済み）。残るのは以下4点で、**まず4（クリック実績の定点観測）を行い、データが出てから1〜3の着手要否を判断する**。

1. [ ] GoThere 2箇所目の設置（本文中盤）— GA4実績（設置面別）が出そろってから判断
2. [ ] Geolocation APIによる出発地の自動取得（任意）— 費用対効果不明、アクセスガイドの手動選択式の実績を見てから判断
3. [ ] フェリー必須フラグ（施設frontmatter拡張）— 優先度低、現状維持でよい
4. [ ] GoThere/AffiliateCardクリック実績の定点観測 — GA4で`gothere_click`・`affiliatecard_click`の初回計測を確認する。[[weekly-task]]の9月第3週PDCA（2026-09-14〜09-20）と合わせて実施

---

## [ ] `column/travel/`クラスタ：残タスク（2026-08-31分析／[[travel-task]]で大部分完了）

GSC検証の結果、「仮説B向け専用コンテンツが存在しない」という前提は誤りと判明。着地先修正・内部リンク100%化・アクセスガイド新設（setouchi-access-guide／access-kyushu）は[[travel-task]]（アーカイブ済み）で完了済み。残るのは以下のみ。

- [ ] 内部リンクゼロの9記事（季節ネタ系: march-yuasa-yura-soy-sauce-trip / november-izu-autumn-leaves-trip / october-scenic-facilities-family-trip / september-shimonoseki-fugu-trip / september-silver-week-quiet-spots-guide / august-summer-release-facilities / august-obon-family-fishing-guide / february-chiba-strawberry-picking-trip / january-minamiise-onsen-trip）は需要データが薄いためリライト優先度は下げ、`column/travel/`一覧ページからの動線のみで維持
- [ ] 301リダイレクトの新旧URL分裂解消（[[weekly-task]]参照、データ待ち）
- [ ] 地方×ハブ都市モデルの新規面展開（紀伊半島・関東・東海への横展開）は、[[weekly-task]]の9月第3週PDCA（travel-task Phase4-2効果測定）の結果を見てから着手判断

---

## [x] コンテンツギャップ：九州ランキング記事に宮崎・鹿児島の施設が未掲載（2026-09-02対応済み）

`column/ranking/kyushu-okinawa/index.mdx`は福岡・佐賀・長崎・熊本・大分のみが対象で、宮崎・鹿児島の施設（イルカランド・鴨池海づり公園・桜島海づり公園）が掲載対象外だった問題（2026-07-14発見）に対応。

- [x] 志布志湾大黒イルカランド（宮崎・放流イケス型）を「全9施設」の本編スコープに追加し、タイトル・description・県数（5→6県）・施設数（9→10）を更新。新規セクション「宮崎の海上釣り堀（1施設）」を追加
- [x] 鴨池海づり公園・桜島海づり公園（鹿児島・非放流の天然魚型）は既存の「沖縄の海釣りスポットについて」セクションを「鹿児島・沖縄の海釣りスポットについて」に改称し、既存の糸満イカダ・本部釣りイカダと並べて追加（放流管理型ではないため本編9→10施設のカウントには含めない）
- [x] 奄美シーランド（鹿児島）は船釣り体験型で他施設と性質が異なるため対象外のまま据え置き
- [x] 分析セクション（施設数比較・地理的優位性・アクセス構造・施設タイプ別・目的別まとめ）を新規施設に合わせて更新
- [x] 鴨池・桜島の記事末に本ランキングページへの内部リンクを追加（志布志湾大黒イルカランドには既存リンクあり）
- [x] `astro check`（既存の`astro.config.ts`無関係エラー1件のみ）・`astro build`（469ページ）で確認済み

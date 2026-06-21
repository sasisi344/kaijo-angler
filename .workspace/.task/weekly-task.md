# 海上アングラー：週間タスク
日曜日にアクセスデータの収集を実行し、データをもとに先週と比較してレポートを作成。改善点を作成して実行する。

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
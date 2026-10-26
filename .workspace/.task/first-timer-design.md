---
created: 2026-10-27
updated: 2026-10-27
tags:
  - task
  - content
  - schema
---

# 「はじめてでも安心」設計：パラメータで証明し、本文で案内する

> [!important]
> 目的は2つ。①施設ごとに「はじめての人が安心して釣りできる環境か」を**出所つきのデータで示し**、おすすめ施設を選び出せるようにする。②本文を、はじめての人の不安（道具・持ち物・釣れるか・使い方・釣った魚）に答えて、共通ガイドと予約へ導く形に直す。経験者が施設情報だけ読める構成は崩さない。
> 親タスク: [[november-monetization-plan]]／データ収集: `.workspace/facility-data-update/`／スキル: `kaijo-content-schema`（`config.ts` の変更手順）

---

## 1. 全体の組み立て

```
公式サイト・電話で確認（運営者）
   │  [!forAI] に記入
   ▼
frontmatter  facility_details.first_timer   ← 事実だけ。出所URLと確認日つき
   │
   ├─ src/utils/first-timer.ts      安心度を「計算」する（手入力しない）
   │
   ├─ 記事冒頭の案内（自動）          「はじめての方へ：レンタル○・スタッフ○ → 詳しく」
   ├─ <FirstTimerGuide />（本文）     Q1〜Q5 の表。不明な項目は「予約時に聞くこと」に自動で回る
   ├─ 施設一覧のフィルタ・バッジ        「はじめてでも安心」で絞り込み
   ├─ api/facilities.json            診断ハブ（/find/）で使う
   └─ ピックアップ用スクリプト          まとめ・ランキング・月別記事の候補リストを出す
```

ポイント:
- **安心度は frontmatter に書かない**。事実（借りられる物・スタッフのサポートなど）だけを書き、判定はコードで計算する。書き手の主観で「初心者OK」が付くのを防ぎ、事実が変われば判定も自動で変わる
- **「不明」と「ない」を区別する**。項目を書かない＝未確認、`none` や空配列＝確認した上でない。未確認が多い施設は「確認中」と表示し、経験者向けと誤って判定しない

---

## 2. パラメータ（`config.ts` への追加案・要承認）

`facility_details` の下に `first_timer` を任意項目で追加する。既存記事は壊れない。

```yaml
facility_details:
  first_timer:
    rental_items: [rod, reel, rig, bait]   # 借りられる物（Q1）
    rental_price: 1000                     # 円。入場料に含むなら 0。不明は書かない
    rental_note: 竿・仕掛けセット（エサ別売）  # 公式の表記をそのまま要約
    lending: [life_jacket, tamo]           # 貸出品（無料・有料問わず）（Q2）
    staff_support: [instruction, landing, unhook]  # スタッフが手伝うこと（Q4）
    catch_assurance: souvenir              # guarantee / souvenir / none（Q3）
    catch_note: 釣果ゼロの場合はお土産魚1匹    # 条件を公式どおりに
    processing: paid                       # free / paid / none（締め・捌き）（Q5）
    beginner_plan: 初心者コース（2時間・竿エサ込み）  # 初心者向けのコースがあれば
    source_url: https://example.com/price   # 根拠にした公式ページ
    verified_at: 2026-11-08                 # 確認した日
```

| キー | 型 | 値 | 答える質問 |
|---|---|---|---|
| `rental_items` | enum 配列 | `rod`竿／`reel`リール／`rig`仕掛け／`bait`エサ／`tamo`タモ／`bucket`バケツ・水汲み／`cooler`クーラー | Q1 道具がなくてもできる？ |
| `rental_price` | 数値 | 円。込みなら0 | Q1 |
| `rental_note` | 文字列 | 公式表記の要約 | Q1 |
| `lending` | enum 配列 | `life_jacket`／`cooler`／`tamo`／`gloves`／`rain_gear` | Q2 何を用意すればいい？（貸出品以外が持ち物） |
| `staff_support` | enum 配列 | `instruction`使い方を教える／`bait`エサ付け／`landing`タモ入れ／`unhook`針外し | Q4 使い方が分からない |
| `catch_assurance` | enum | `guarantee`釣果保証／`souvenir`お土産魚／`none`なし | Q3 本当に釣れる？ |
| `catch_note` | 文字列 | 条件 | Q3 |
| `processing` | enum | `free`／`paid`／`none` | Q5 釣れた魚はどうする？ |
| `beginner_plan` | 文字列 | 初心者・体験コースの名前と中身 | Q1・Q3 |
| `source_url` / `verified_at` | 文字列 | 出所と確認日 | 「証明」の根拠 |

既存項目との関係（消さない・二重に書かない）:
- `amenities.rental_tackle`・`toilet`・`parking`、`stocked_fish`、`facilityType` は**そのまま使う**（トイレ・放流の有無は判定に流用）
- `beginner_friendly`・`hands_free`・`includes_gear`（2026-10-06 追加・現在ほぼ未記入）は手入力をやめ、`first_timer` から計算した値で上書きして読む。スキーマからは消さない
- `amenities.processing`（自由記述）は残し、新しい記事では `first_timer.processing` を使う

---

## 3. 安心度の判定（`src/utils/first-timer.ts`）

5つの質問ごとに「満たす／満たさない／未確認」を判定する。

| # | 満たす条件 | 未確認になる条件 |
|---|---|---|
| Q1 道具 | `rental_items` に `rod`・`rig`・`bait` がそろう。エサは `amenities.bait_sale` が true なら貸出でなくてよい（`beginner_plan` があれば満たす） | `rental_items` が書かれていない |
| Q2 準備 | `lending` に `life_jacket` がある、かつ `amenities.toilet` がある | `lending` が書かれていない |
| Q3 釣れる | `catch_assurance` が `guarantee`／`souvenir`、または放流あり（`stocked_fish` がある） | `catch_assurance` と `stocked_fish` が両方ない |
| Q4 教わる | `staff_support` に `instruction` または `landing` がある | `staff_support` が書かれていない |
| Q5 魚 | `processing` が `free`／`paid` | `processing` が書かれていない |

| 判定 | 条件 | 表示 | 使い道 |
|---|---|---|---|
| **はじめてでも安心** | 5つ全て満たす | バッジ・一覧フィルタ・おすすめ候補 | まとめ・ランキング・診断の「はじめて向け」枠 |
| **準備すれば安心** | 4つ満たす（Q1 と Q4 は必須） | バッジ（「持ち物を確認」） | 候補の2番手 |
| **経験者向け** | Q1 または Q4 を満たさない（確認済み） | バッジなし。本文で「はじめてなら○○施設も」と近くの安心施設へ案内 | 経験者向けの紹介 |
| **確認中** | 未確認が2つ以上 | 表示なし | `facility-data-update` の確認待ちリストに出す |

- 判定の条件は試作（ひるが・南港）で値を入れてから見直す
- `verified_at` が12か月より古い施設は、おすすめ候補から外す（料金・レンタルは変わるため）

---

## 4. 表示（消費側）

| 場所 | 変更 | 経験者への影響 |
|---|---|---|
| 施設記事の冒頭（`[...slug].astro` で `<Content />` の前に自動表示） | 1行の案内：判定＋「レンタル：竿・仕掛け・エサ／スタッフが使い方を教えてくれる → はじめての方へ」。本文に `<FirstTimerGuide` があれば節へ、なければ共通ガイドへリンク | 1行だけ。**「はじめてでも安心」「準備すれば安心」の施設だけに出す**（経験者向け・確認中は本文の節で説明） |
| 本文 `<FirstTimerGuide facilityId="…" />`（料金の節の直後に置く） | Q1〜Q5 の表、**自分で用意するもの**（共通の持ち物から貸出品を引いたもの）、**予約時に聞くこと**（未確認の項目から自動生成）、共通ガイドへのリンク | 独立した節。目次から読み飛ばせる |
| 施設一覧（`[...slug].astro` の一覧・フィルタ） | フィルタ「はじめてでも安心」と、カードのバッジ | 既存のフィルタに1つ足すだけ |
| `api/facilities.json.ts` | `firstTimer: { level, ... }` を追加 | なし（診断ハブ用） |
| `scripts/list-first-timer-pickup.mjs`（新規） | 判定・地域・GSC 表示回数でおすすめ候補を一覧にする | なし（まとめ・ランキングの選定用） |

`GoThere` と同じく、コンポーネントは `facilityId` から `getEntry` で frontmatter を読む。記事に同じ値を二重に書かない。

---

## 5. 本文の直し方（`<FirstTimerGuide />` の前後に書くこと）

データの表だけでは「安心」は伝わらないので、運営者の言葉で2〜4文の案内を添える。

### 5.1 節の型

```mdx
## はじめての方へ：道具なし・未経験でも大丈夫？

（リード 2〜3文）この施設がはじめての人に向いているかを、結論から書く。
例：「竿・仕掛け・エサはすべて借りられるので、<strong>手ぶらで来て大丈夫</strong>です。
魚が掛かったらスタッフがタモで取り込んでくれるため、釣りがはじめての方でも大物を逃しにくい環境です。」

<FirstTimerGuide facilityId="center-japan/fukui/hiruga-sea-fishing-pond" />

（補足 1〜2文）施設ならではの注意点。例：受付時間・足場・冬の寒さ・船酔い。
→ 道具の使い方や1日の流れは [海上釣り堀はじめてガイド](/tactics/beginner/first-fishing-pond/) へ
```

### 5.2 判定ごとの書き分け

| 判定 | リードの結論 | 誘導 |
|---|---|---|
| はじめてでも安心 | 「手ぶら・未経験で大丈夫」と言い切る | 予約へ／はじめてガイドへ |
| 準備すれば安心 | 大丈夫＋「○○だけは持って行く」 | 持ち物（物販カードの置き場。11月後半） |
| 経験者向け | 「道具を持っている人向け」と正直に書く | 同じ地域の「はじめてでも安心」施設へ内部リンク |
| 確認中 | 断定しない。「予約時にレンタルの中身を確認」 | 予約時に聞くこと |

### 5.3 FAQ に足す2問

- 「釣具を持っていなくても利用できますか？」→ Q1 の答え
- 「釣りがはじめてでも釣れますか？」→ Q3・Q4 の答え（釣果保証・スタッフのサポート）

### 5.4 書くときのルール

- 事実は `first_timer` と公式サイトの範囲だけ。「誰でも必ず釣れる」のような言い切りはしない（釣果保証がある場合はその条件どおりに書く）
- 魚種・釣れやすさは `kaijo-fish-knowledge` を通す
- 強調は `<strong>`、import は `~/`
- 「メイン魚種の攻略」など経験者向けの節は残す

---

## 6. データ収集の流れ

`facility-data-update` の既存の流れ（運営者が確認 → 記事末に `> [!forAI]` → Claude が反映）に「はじめて項目」を足す。

```md
> [!forAI] はじめて項目（確認日 2026-11-08 / 出所 https://...）
> - レンタル：竿・リール・仕掛け 1,000円、エサは別売（エサは受付で購入）
> - 貸出：ライフジャケット無料、タモは各イカダに常備
> - スタッフ：巡回して使い方を教える・タモ入れ・針外し
> - 釣果保証：なし（お土産魚もなし）
> - 締め・捌き：有料（1匹200円）
> - 初心者コース：なし
> - 不明：（確認できなかった項目）
```

- 公式で分からない項目は「不明」と書く（推測で埋めない）→ 記事では「予約時に聞くこと」に回る
- 電話で確認した場合は `source_url` に「電話確認」と書く
- 上位20施設から始める（[[november-monetization-plan]] 第2週）

---

## 7. 作業手順とファイル

| 順 | 作業 | ファイル | 担当 |
|---|---|---|---|
| 1 | **スキーマ追加の承認** | — | 運営者 |
| 2 | `first_timer` を任意項目で追加、`pnpm astro sync`・`check-facility-frontmatter.mjs` で既存記事に影響がないか確認 | `src/content/config.ts` | Claude |
| 3 | 判定ロジック | `src/utils/first-timer.ts`（新規） | Claude |
| 4 | 本文の表 | `src/components/widgets/FirstTimerGuide.astro`（新規） | Claude |
| 5 | 冒頭の案内・一覧フィルタとバッジ | `src/pages/fishing-facility/[...slug].astro` | Claude |
| 6 | API とピックアップ用スクリプト | `src/pages/api/facilities.json.ts`、`scripts/list-first-timer-pickup.mjs`（新規） | Claude |
| 7 | 試作2本（ひるが＝海上釣り堀型、南港＝海釣り公園型）の確認 | `[!forAI]` | 運営者 |
| 8 | 試作2本に値と本文を反映し、判定条件を見直す | 2記事 | Claude |
| 9 | ドキュメント更新 | `.agents/skills/frontmatter.md`、`kaijo-content-schema` の3節の表、`kaijo-ui-components` の一覧、`facility-data-update/CLAUDE.md` の確認項目 | Claude |
| 10 | 上位20施設へ展開 | 各記事 | 運営者（確認）→ Claude（反映） |

手順2〜6は、試作の値がなくてもビルドが通る状態で先に作れる（`first_timer` がない記事では何も表示しない）。

## 8. 実装状況（2026-10-27）

- 手順2〜6・9は実装済み（`config.ts`、`src/utils/first-timer.ts`、`FirstTimerGuide.astro`、`FirstTimerSummary.astro`、`[...slug].astro` の冒頭・一覧フィルタ・バッジ、`api/facilities.json.ts`、`scripts/list-first-timer-pickup.mjs`、frontmatter 雛形・スキル・`facility-data-update/CLAUDE.md`）
- ひるが海上釣堀に**仮の値**を入れて開発サーバーで表示を確認し、元に戻した（実データはまだどの記事にも入っていない）
- 計測: 冒頭の案内と節の「はじめてガイドへ」ボタンのクリックは GA4 イベント `firsttimer_click`（`facility_id`・`placement`＝`facility-lead`／`facility-firsttimer`）。GA4 の探索に列を足すときに一緒に追加する
- 残り: 手順7（運営者による試作2本の確認）→ 手順8 → 手順10

## 9. 決めたこと（2026-10-27）

1. `config.ts` に `facility_details.first_timer` を追加する（§2）→ **承認済み**
2. 判定の名前と条件（§3）→ **このまま**。試作2本のあとで見直す
3. 冒頭の案内 → **全施設記事に自動で出す**

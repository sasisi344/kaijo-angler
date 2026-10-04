---
name: kaijo-matome-hub
description: >-
  kaijo-angler の地域まとめ（ハブ）記事 `src/content/blog/fishing-facility/{east,center,west}-japan/index.mdx` を
  新規作成・リライトするときに使う。アクセスデータ（GSC・GA4）から「読者に人気の施設TOP3」を選ぶ手順、
  施設ごとの説明＋選んだ理由の書き方、記事構成テンプレート、まとめ記事専用の計測ID（placement=matome-◯◯）、
  専用カバー画像（cover-matome.jpg）の作り方を定める。「中日本のまとめ記事をリライト」「西日本ハブを直す」
  「東日本と同じ構成にして」「まとめ記事のTOP3を選び直す」と言われたら先に参照する。2026-10-04 に東日本で確立した型。
---

# 地域まとめ（ハブ）記事の作り方

東日本（`east-japan/index.mdx`）で確立した型。中日本・西日本のリライトは**この型に揃える**。
施設記事そのものの書き方は別（`kaijo-content-schema` / `kaijo-fish-knowledge`）。このスキルはハブ記事専用。

## 0. 前提ルール（毎回守る）

- 強調は `<strong>`。Markdown の `**` は使わない（kaijo-angler の CLAUDE.md）。表のセル内も同様
- 施設へのリンクは `/fishing-facility/<slug>/`（地域フォルダ名は URL に入らない）。slug は各施設記事の `slug:`
- import は `~/` エイリアス。`@/` は不可
- **料金・営業時間・予約・魚種は、各施設記事の frontmatter と本文にある値だけ**を使う。記憶・外部検索で補わない。根拠のない形容（「関東最大級」「聖地」など）は、施設記事に書かれていない限り足さない
- `src/content/config.ts` は触らない
- 画像生成は明示指示があるときだけ（§6）

## 1. 作業の流れ

1. **データ期間の確認**: `.workspace/.task/access-data/INDEX.md` を先に読む。GSC の期間（3か月 / 7日）が違うファイル同士の絶対値は比べない
2. **施設の洗い出し**: 地域フォルダ配下の `index.mdx`（ハブ自身を除く）を数え、対象・対象外を決める（§2）
3. **アクセス集計**: §3 のスクリプトで施設ごとのクリック・表示・セッションを出す
4. **TOP3 選定**: §3 の基準で決める。3施設しかなければ3施設だけでよい
5. **各施設の事実確認**: 施設記事の frontmatter（`average_price` / `target_fish` / `reservation` / `business_hours`）と本文の料金・営業期間を読む（タイプの取り違え防止。§5 の失敗例）
6. **本文執筆**: §4 の構成
7. **計測ID・画像**: §5・§6
8. **報告**: 対象・対象外にした判断、TOP3 の根拠データ、ビルド未確認ならその旨

## 2. 対象範囲の決め方

- 地域ハブは**そのフォルダの施設で完結**させる。他地域は冒頭の NOTE で該当ハブへ誘導する
- 東日本で決めた範囲: 本州の東北・関東。**北海道は対象外**（本州東日本という指示）、**甲信越は海なしのため対象外**。新潟は施設記事が `center-japan/niigata/` にあり（region: center-japan）、アクセスも少ないので中日本側に任せた
- 記事の所属（フォルダ・`region:`）を動かす作業は、ユーザーに確認してから行う
- 施設タイプが混在してよい（海上釣り堀・海釣り公園・陸上/屋内釣り堀）。**表の「タイプ」列で区別**し、タイトルの総称は「海上釣り堀・海釣り施設」とする。海上釣り堀だけの比較は `/column/ranking/<地域>/` の役割

## 3. TOP3 の選び方（アクセスデータ）

```powershell
python .claude/skills/kaijo-matome-hub/scripts/rank_facilities.py src/content/blog/fishing-facility/<region>-japan `
  --gsc .workspace/.task/access-data/weekly-report/2026/<wNN>/ページ.csv `
  --ga4 .workspace/.task/access-data/weekly-report/2026/<wNN>/<ga4ファイル>.csv
```

- 旧 `/blog/<slug>/` と新 `/fishing-facility/<slug>/` は **slug で合算**（スクリプトが処理）
- 主指標は **GSC の3か月データ（長期ベースライン。東日本は w40）のクリック数**。GA4 のランディング数（`session_start` 行のみ合算）は裏取りに使う。7日データは補助で、単週は異常検知レベル（INDEX.md の閾値ルールに従う）
- 3か月データが古くなったら、7日データを**直近4週分合算**してから順位を見る
- **休止中・閉鎖の施設は、アクセスが多くても TOP3 から外す**（東日本では勇払の記事が該当）
- 母数は小さい（東日本 TOP3 でも3か月で26〜46クリック）。本文では「優劣のランキングではなく、アクセス結果から読者に人気だったと判断した施設」と書き、**順位の数字（クリック数など）は本文に出さない**
- TOP3 に関東など別エリアの施設が入らない結果になっても、そのまま採用する（東日本はすべて東北だった）。偏りは「共通点」として本文で説明する

## 4. 記事構成テンプレート（東日本の実装）

frontmatter は既存の項目（`title` / `description` / `publishDate` / `facility_details` / `lastmod`）に、`image: ./cover-matome.jpg` を追加する。`facility_details` は地域全体の代表値（料金帯・主要魚種）に合わせて直す。`lastmod` は更新日。

| 順 | 見出し | 内容 |
|---|---|---|
| 1 | H1 | `【2026最新】<地域>の海上釣り堀・海釣り施設ガイド｜<エリア名>`。「ランキング」は避ける |
| 2 | 導入（2段落） | 地域の性格の違い、全◯施設を整理するハブである旨、「概要と選んだ理由を添えている」旨 |
| 3 | `> [!NOTE]` | 対象外の地域はどのハブへ（例: 新潟・北陸・東海は中日本ページ） |
| 4 | 全◯施設の一覧 | 表: エリア / 施設 / タイプ / 料金の目安 / 予約。料金は `<strong>` |
| 5 | 読者に人気の施設 TOP3 | 下記「TOP3 の節」 |
| 6 | 各エリアの節（東北・関東など） | 下記「エリア節」 |
| 7 | 目的別の選び方 | 表: 安く / 手ぶら / 大物 / 悪天候 / 持ち帰り・食べる / 観光とセット → 該当施設 |
| 8 | おすすめアイテム | `AffiliateCard` 2枚（§5） |
| 9 | 目的の施設を詳細レポートから探す | 既存の締めと `> [!TIP]`（手ぶらで行ける施設） |

**TOP3 の節**（H3 を「第1位：施設名｜県・市」）:
- 概要（2〜3文。場所・アクセス・料金・主な魚）
- `<strong>選んだ理由</strong>` の箇条書き3点: ①アクセス数（「検索クリック数が地域で最も多く」など順位を言葉で） ②その施設の強み（希少性・手軽さ） ③観光や季節の魚との相性
- `<strong>行く前に</strong>`: 営業期間・定休日・持ち物など注意点
- 末尾に `→ [施設名の詳細記事](/fishing-facility/<slug>/)`
- 冬季休業など共通の注意は TOP3 の後に `> [!NOTE]` で1回だけ

**エリア節**（TOP3 に入った施設は再説明せず、一覧表を参照させる）:
- 導入1〜2文＋「何で選び分けられるか」
- 施設ごとに H3「施設名｜県・市（タイプ）」＋概要＋箇条書き3点（`選んだ理由` / `向いている人` / `注意点`）＋詳細記事リンク
- TOP3 以外の施設の「選んだ理由」は**人気ではなく役割**（唯一性・低価格・手ぶら・雨に強い・観光性）で書く。アクセスが少ないことは卑下も誇張もしない

**ボリュームの目安**: 東日本（10施設）で約210行。**施設数が多い西日本（約79施設）は全施設を H3 で書かない**。TOP3 は詳細、そのほかは「県・エリア別の表」＋各エリアに特色2〜3行、というメリハリにする

## 5. 計測ID（placement）とアフィリエイトカード

- まとめ記事の物販カードには `placement="matome-<地域>"` を付ける。既存の値（`ranking-kanto-tokai`・`access-guide`）と同じ**ハイフン区切り**に揃え、`matome` を共通の接頭辞にして GA4 で前方一致の絞り込みをしやすくする
  - 東日本 `matome-eastjapan` ／ 中日本 `matome-centraljapan` ／ 西日本 `matome-westjapan`
- `TackleCard` は `placement` を渡せない。まとめ記事では `AffiliateCard` に置き換える（見た目は同じ）:

```mdx
import AffiliateCard from "~/components/common/AffiliateCard.astro";

<AffiliateCard id="tackle/gamakatsu-cut-madai" placement="matome-eastjapan" />
<AffiliateCard id="tackle/daiwa-kaijo-uki" placement="matome-eastjapan" />
```

- id は `src/content/affiliates/` の実在するものだけ。直書きしない（`kaijo-ui-components`）
- GA4 側は `placement` カスタムディメンション（2026-09-20 登録済み）で集計できる。それ以前のデータはない
- 本文の説明は、その地域の釣り方に合わせる（東日本は「関東の海上釣り堀向けのパワー仕掛け」）。地域に合わない文言をコピーしない

## 6. 専用カバー画像

地域フォルダの `cover.jpg` は**カテゴリページ用**。ハブ記事の frontmatter には `image:` が無かったため、ハブ専用画像を別名で置く。

```powershell
node scripts/image-tools/generate-image.js "<PROMPT>" "src/content/blog/fishing-facility/<region>-japan/cover-matome.jpg"
```

- ファイル名は `cover-matome.jpg`（`cover.jpg` とは別）。frontmatter は `image: ./cover-matome.jpg`
- プロンプトは英語、風景系・テキストなし（`no text`）・16:9。その地域の海の特徴を1つ入れる。東日本の例: `Wide-angle photograph of a calm sheltered bay on the Tohoku coast of Japan at early morning, a wooden fishing pier with safety railings extending into the sea, a floating square sea fishing pond with wooden pontoons and black floats nearby, ... photorealistic landscape photography, 16:9, no text`
- 生成後は**必ず画像を開いて確認**（文字の混入・不自然な構造）。やり直しは1回ずつ、勝手に繰り返さない
- 同じ地域の既存画像で足りる場合は再利用してコストを抑える（ただしハブ専用を指示された場合は新規生成）
- `.env` の `GEMINI_API_KEY` が必要

## 7. 東日本で起きた失敗（再発防止）

- 太海フラワー磯釣りセンターを「磯釣り施設」と誤記 → 実際は**キャッチ＆リリース専用の海上釣り堀**。施設名から種類を推測せず、記事本文で確認する
- 九十九里（屋外の陸上釣り堀）を「天候に強い」施設に入れた → 屋内の横浜釣り堀王国・屋根付きの晴れパークたてやまだけが該当
- 九十九里の予約欄を「施設ページ参照」とした → 実際は「10名未満は予約不可」。**予約欄は frontmatter の `reservation` をそのまま写す**
- 範囲の指示（本州・甲信越）に矛盾があった → 勝手に解釈せず、施設の有無で判断して報告する
- 旧記事の「渡船ですぐ」「聖地」など、施設記事にない言い回しを引き継いだ → 施設記事の記述に合わせて削る

## 8. 地域別メモ（リライト時の注意）

| 地域 | 現状 | 注意 |
|---|---|---|
| 中日本 | `center-japan/index.mdx`。「ランキングTOP3｜全25施設」。新潟・北陸・東海・静岡・愛知を扱う。末尾の TIP に「三重は西日本ページに掲載」の注記あり | 新潟2施設（直江津港・新潟東港）は `center-japan/niigata/` が正本。東日本ハブからは外した。タイトルの「全25施設」は施設数を数え直す |
| 西日本 | `west-japan/index.mdx`。「関西・西日本の海上釣り堀ランキングTOP3｜全79施設比較」。近畿・中国・四国・九州・沖縄 | 施設が多いので §4 の「ボリュームの目安」に従う。九州・沖縄の扱いと、タイトルの「関西」が必要かを先に決める（東日本では「関東」をタイトルから外した） |

タイトル・description を変えるときは、GSC の既存クエリ（ページ CSV の該当 URL）を確認してから決める。

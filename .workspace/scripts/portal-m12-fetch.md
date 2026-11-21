# KA-PORTAL M12 取得手順

作成: 2026-11-21。正本: `.workspace/.task/schedule-task.md` M12、`hq/tools/analytics-fetch/README.md`。
実行場所は `C:/Users/sasis/344blog/kaijo-angler`（PowerShell）。ここでは API を呼ばず、全コマンドに `--dry-run` を付けている。

## 期間と保存

起点は2026-11-20 deploy。前28日=2026-10-24〜11-20、後28日=2026-11-21〜12-18（両端を含め各28日）。
保存slug例は `2026-12-19-portal-m12`。`--slug` だけでは実行日の接頭辞が付くため、各コマンドの `--out` でこのフォルダに固定し、期間・ソース・次元別に分ける。CSVとmeta.jsonを上書き混在させない。

M12の初回確認予定は12/19以降。ただしGSCは直近2〜3日が未確定なので、12/18までの `dataState: final` がそろう12/21以降（余裕を見るなら12/22）に取得する。未確定なら期間を短縮せず待つ。GA4も同じ固定期間にする。

| 日数 | 後期間 | 前期間（同日数） | M12確認予定 | GSC取得目安 |
|---|---|---|---|---|
| 28日 | 2026-11-21〜12-18 | 2026-10-24〜11-20 | 2026-12-19〜 | 2026-12-21以降 |
| 56日 | 2026-11-21〜2027-01-15 | 2026-09-26〜11-20 | 2027-01-15 | 2027-01-18以降 |
| 84日 | 2026-11-21〜2027-02-12 | 2026-08-29〜11-20 | 2027-02-12 | 2027-02-15以降 |

56日・84日は表の前後期間に全コマンドを置き換え、保存先も `2027-01-18-portal-m12-56d` / `2027-02-15-portal-m12-84d` など新規フォルダにする。28日と累積期間を合算しない。表示・クリック・イベント数の比較は日平均も併記する。

## 取得前後の確認

- GSCはWeb・final、国・端末・ページの絞り込みなし、queryの部分一致「海上釣り堀」を前後とも指定。完全一致「海上釣り堀」は取得後にquery列の完全一致で抽出する。地域語（例「海上釣り堀 関西」）も同じ取得から完全一致で抽出し、表記違いを混ぜない。部分一致に入らない「海上 釣り堀」等はこの取得には含まれない。
- query表はクエリ全体、query,page表は表示先URLの内訳。完全一致の `/`・`/fishing-facility/` の有無を見る。ページ別数の合計や順位の単純平均をquery全体と一致させない。取得行なしを需要ゼロ・圏外と断定しない。
- GA4はイベントスコープで `date_mode`・`show_closed`・`excluded_closed`・`area` が登録済みかCCが管理画面で確認する。Data API次元名は `customEvent:<パラメーター名>`。今回のdry-runはリクエスト構築のみで、登録状態・互換性・過去データを検証しない。未登録なら内訳は未確認として残し、登録前の値を復元できると考えない。
- `facility_search` は4次元、`facility_ranking_search` はarea別。`facility_search_click` はpagePath別（クリック元一覧ページ。クリック先施設の内訳とは異なる）、`facility_near_me` はイベント合計。送信されない次元を他イベントに付けて `(not set)` にしない。4イベントは人数・予約数とは呼ばずeventCountで扱う。前期間は計測追加前を含むので単純な施策効果と断定しない。
- 検索→記事クリックの傾向は `facility_search_click`、地域ランキング→検索は `facility_ranking_search` で見る。イベント数だけでは同一人物の遷移順・予約成立は判定できない。M12の「公式への遷移」はこの4イベントだけでは直接取れないため別途CCが既存イベントとパラメーターを確認する（今回の取得範囲外）。
- 実取得するときだけCCが `--dry-run` を外す。本タスクでは外さない。取得後は各meta.jsonの期間・次元・フィルタ・取得日時と、CSV件数・ `(not set)` を記録する。GSCが上限100万行、GA4が10万行に達したら不完全な比較をしない。

## コマンド（全12本、APIを呼ばない）

### after-gsc-query

```powershell
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs gsc --site KA --start 2026-11-21 --end 2026-12-18 --query 海上釣り堀 --dims query --limit 1000000 --slug portal-m12-after-query --out .workspace/access-data/api/2026-12-19-portal-m12/after/gsc-query --dry-run
```

### after-gsc-query-page

```powershell
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs gsc --site KA --start 2026-11-21 --end 2026-12-18 --query 海上釣り堀 --dims query,page --limit 1000000 --slug portal-m12-after-query-page --out .workspace/access-data/api/2026-12-19-portal-m12/after/gsc-query-page --dry-run
```

### after-ga4-facility_search

```powershell
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-11-21 --end 2026-12-18 --event facility_search --dims customEvent:date_mode,customEvent:show_closed,customEvent:excluded_closed,customEvent:area --metrics eventCount --limit 100000 --slug portal-m12-after-facility_search --out .workspace/access-data/api/2026-12-19-portal-m12/after/ga4-facility_search --dry-run
```

### after-ga4-facility_search_click

```powershell
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-11-21 --end 2026-12-18 --event facility_search_click --dims pagePath --metrics eventCount --limit 100000 --slug portal-m12-after-facility_search_click --out .workspace/access-data/api/2026-12-19-portal-m12/after/ga4-facility_search_click --dry-run
```

### after-ga4-facility_near_me

```powershell
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-11-21 --end 2026-12-18 --event facility_near_me --dims eventName --metrics eventCount --limit 100000 --slug portal-m12-after-facility_near_me --out .workspace/access-data/api/2026-12-19-portal-m12/after/ga4-facility_near_me --dry-run
```

### after-ga4-facility_ranking_search

```powershell
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-11-21 --end 2026-12-18 --event facility_ranking_search --dims customEvent:area --metrics eventCount --limit 100000 --slug portal-m12-after-facility_ranking_search --out .workspace/access-data/api/2026-12-19-portal-m12/after/ga4-facility_ranking_search --dry-run
```

### before-gsc-query

```powershell
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs gsc --site KA --start 2026-10-24 --end 2026-11-20 --query 海上釣り堀 --dims query --limit 1000000 --slug portal-m12-before-query --out .workspace/access-data/api/2026-12-19-portal-m12/before/gsc-query --dry-run
```

### before-gsc-query-page

```powershell
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs gsc --site KA --start 2026-10-24 --end 2026-11-20 --query 海上釣り堀 --dims query,page --limit 1000000 --slug portal-m12-before-query-page --out .workspace/access-data/api/2026-12-19-portal-m12/before/gsc-query-page --dry-run
```

### before-ga4-facility_search

```powershell
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-10-24 --end 2026-11-20 --event facility_search --dims customEvent:date_mode,customEvent:show_closed,customEvent:excluded_closed,customEvent:area --metrics eventCount --limit 100000 --slug portal-m12-before-facility_search --out .workspace/access-data/api/2026-12-19-portal-m12/before/ga4-facility_search --dry-run
```

### before-ga4-facility_search_click

```powershell
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-10-24 --end 2026-11-20 --event facility_search_click --dims pagePath --metrics eventCount --limit 100000 --slug portal-m12-before-facility_search_click --out .workspace/access-data/api/2026-12-19-portal-m12/before/ga4-facility_search_click --dry-run
```

### before-ga4-facility_near_me

```powershell
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-10-24 --end 2026-11-20 --event facility_near_me --dims eventName --metrics eventCount --limit 100000 --slug portal-m12-before-facility_near_me --out .workspace/access-data/api/2026-12-19-portal-m12/before/ga4-facility_near_me --dry-run
```

### before-ga4-facility_ranking_search

```powershell
node C:/Users/sasis/344blog/hq/tools/analytics-fetch/fetch.mjs ga4 --site KA --start 2026-10-24 --end 2026-11-20 --event facility_ranking_search --dims customEvent:area --metrics eventCount --limit 100000 --slug portal-m12-before-facility_ranking_search --out .workspace/access-data/api/2026-12-19-portal-m12/before/ga4-facility_ranking_search --dry-run
```

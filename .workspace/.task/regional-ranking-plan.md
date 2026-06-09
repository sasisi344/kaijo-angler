# 地域別ランキング記事 作成プラン

背景・ライティングルール・frontmatter テンプレートは `.agents/skills/ranking-article-rule.md` に移管済み。
このファイルは「どのエリアの記事を、どの施設で作るか」の作業計画のみを管理する。

---

## 共通ルール（要約）

- 配置先: `src/content/blog/column/ranking/{slug}/index.mdx`
- 対象施設: frontmatter `tags` に `海上釣り堀` を持つ施設のみ（`海釣り施設`・`海釣り公園`・`筏釣り`・`陸上釣り堀` は除外）
- 旧WP リダイレクト: 記事作成と同時に `src/config/facility-redirects.ts` に追記（対応表は `ranking-matome-todo.md` 参照）
- 詳細規則: `.agents/skills/ranking-article-rule.md`

---

## 進捗

| 記事 | スラッグ | 状態 | 旧WPリダイレクト |
|------|---------|------|----------------|
| 関西（大阪・兵庫） | `kansai` | ✅ 完了 | ✅ 追加済 |
| 三重・和歌山 | `mie-wakayama` | ✅ 完了 | ✅ 追加済 |
| 九州・沖縄 | `kyushu-okinawa` | ✅ 完了 | ✅ 追加済 |
| 中国・四国 | `chugoku-shikoku` | ✅ 完了 | ✅ 追加済 |
| 日本海側・北陸 | `nihonkai-hokuriku` | ✅ 完了 | ✅ 追加済 |
| 関東・静岡・愛知 | `kanto-tokai` | ✅ 完了 | ✅ 追加済 |
| 北日本・東北 | `tohoku-hokkaido` | ✅ 完了 | — (旧WP記事なし) |

---

## 各エリアの施設リスト

### ✅ 関西（大阪・兵庫） `kansai`

海上釣り堀タグあり：大阪5・兵庫3（＋海恵 休止中）= **稼働8施設**

| 都道府県 | 施設スラッグ |
|---------|------------|
| 大阪 | umizuri-port-tajiri / osaka-sea-fishing-southern / kaijo-tsuribori-misaki / kaijo-tsuribori-opa / koshima-sea-fishing-pond |
| 兵庫 | suihou-fishing-pond / awaji-janohire-fishing-park / kaijo-tsuribori-at-sea |
| 兵庫（休止中） | sea-fishing-pond-kaikei |

---

### ✅ 三重・和歌山 `mie-wakayama`

海上釣り堀タグあり：三重13・和歌山6 = **19施設**

除外（タグ `筏釣り`・`陸上釣り堀`）：光栄丸・マルスイ海産・松名瀬フィッシングパーク・内瀬釣りセンター・鵜方浜釣センター

| 都道府県 | 施設スラッグ |
|---------|------------|
| 三重 | anatani-aitai-fishing / fishing-park-sasukeya / fishing-park-triton / hasamaura-fishing-center / kaijo-tsuribori-benya / kaijo-tsuribori-fukujumaru / kaijo-tsuribori-monkey / kaijo-tsuribori-wako / kashikojima-fishing-park-kaiyuen / ousatsu-sea-fishing-center / tsuribori-denpachiya / tsuribori-maruyo / tsuribori-shotokumaru |
| 和歌山 | kaijo-tsuribori-yuasa / kakata-fishing-pond / saikakizaki-seapark / tsuribori-kishu / wakayama-marinacity-fishing-park / yura-sea-fishing-park |

---

### 九州・沖縄 `kyushu-okinawa`

旧WP: `kyusyu-matome` + `okinawa-matome` を統合

施設タグ確認要。プラン上の施設数22本から海上釣り堀タグあり分を抽出して作成。

| 都道府県 | 施設スラッグ（要タグ確認） |
|---------|------------|
| 福岡 | fukuoka-city-sea-fishing-park / hiake-kaikyo-fishing-park / umingu-oshima / waita-sea-fishing-pier |
| 佐賀 | kariyawan-fishing-center |
| 長崎 | jumbo-fishing-mura / mukai-pearl-marine / shinkamigoto-sea-fishing-pond / takashima-tobishima-isotsuri-park / tsuribori-hamakatsu |
| 熊本 | amakusa-leisure-land / amakusa-rakutsuri / kaijo-tsuribori-tsuriichi / sea-fishing-land / yunoko-fishing-park |
| 大分 | kamae-sea-fishing-tsunchaoh |
| 宮崎 | shibushi-bay-daikoku-dolphin-land |
| 鹿児島 | amami-sealand / kamoike-sea-fishing-park / sakurajima-sea-fishing-park |
| 沖縄 | itoman-ikada-tsurigu-no-zousan / motobu-fishing-ikada-umiseikatsu |

---

### 中国・四国 `chugoku-shikoku`

旧WP: `chugoku-matome` + `shikoku-matome` を統合。施設タグ確認要。

| 都道府県 | 施設スラッグ（要タグ確認） |
|---------|------------|
| 広島 | kaijo-tsuribori-kaiyu / kaijo-tsuribori-tairyomaru / shimanami-kaido-fishing-park |
| 山口 | fishing-park-hikari / shimonoseki-fishing-park / susawan-fishing-park |
| 愛媛 | searoad-yawatahama |
| 高知 | kaijo-tsuribori-yukimaru / raft-fishing-takahashi / tsuri-ikada-fukaura |
| 香川 | naoshima-fishing-park / saltlake-hiketa-adoike |
| 徳島 | family-tsuribori-tsutteminde / hamabe-tosen-kaijo-tsuribori |

---

### 日本海側・北陸 `nihonkai-hokuriku`

旧WP: `chubu-hoku-matome`。施設タグ確認要。

| 都道府県 | 施設スラッグ（要タグ確認） |
|---------|------------|
| 新潟 | naoetsu-port-3rd-east-breakwater / niigata-east-port-2nd-east-breakwater |
| 富山 | ishida-fisherina |
| 石川 | fishing-bridge-akasaki / notojima-sea-fishing-center |
| 福井 | akaguri-sea-fishing-park / blue-park-ano / fishing-land-hyuga / fishing-rainbow / hiruga-sea-fishing-pond / marine-garden-leisure / obama-city-fishing-coop-raft / seapark-nyu / tsuruga-city-sea-fishing-park / wakasa-takahama-sea-fishing-park |
| 京都（日本海側） | maizuru-shinkai-park / miyazu-city-marine-fishing-park |

---

### 関東・静岡・愛知 `kanto-tokai`

旧WP: `kantou-matome` + `chubutokai-matome` を統合。施設タグ確認要。

| 都道府県 | 施設スラッグ（要タグ確認） |
|---------|------------|
| 千葉 | original-maker-sea-fishing-park / futomi-flower-isotsuri-center |
| 神奈川 | jogashima-js-fishing / miura-kaiou |
| 静岡 | araibenten-sea-fishing-park / atami-port-sea-fishing-facility / fishing-park-toi / ikadatsuri-tokai / kaijo-tsuribori-maruya / kaijo-tsuribori-taikoubou |
| 愛知 | bakucho-mihama-fishing-park / shinmaiko-marine-park-fishing |

---

### 北日本・東北 `tohoku-hokkaido`

旧WP対応なし。施設数4本のため「まとめ」スタイルで作成。

| 都道府県 | 施設スラッグ |
|---------|------------|
| 北海道 | tomakomai-port-sea-fishing-facility |
| 青森 | asamushi-sea-fishing-park |
| 宮城 | sendai-port-central-park-sea-square |
| 山形 | yura-marine-fishing-pond |

/**
 * キーワード解析プロトタイプ (Weekly用)
 * 投稿テキストから魚種名キーワードの出現頻度をカウントし、エリア活性度をシミュレートする
 */
const targetFish = [
  "マダイ", "真鯛", "タイ", "鯛",
  "ワラサ", "メジロ", "ハマチ", "ブリ", "青物",
  "カンパチ", "シオ",
  "シマアジ", "縞鯵",
  "ヒラメ", "平目",
  "サクラマス", "サーモン", "鮭",
  "クエ", "マハタ", "石鯛"
];

const mockPosts = [
  { text: "今日は三重の釣り堀でマダイ爆釣！放流直後がすごかった。", location: "mie" },
  { text: "和歌山で青物祭り。ワラサ3本とシマアジ1本ゲット。", location: "wakayama" },
  { text: "真鯛は渋かったけど、最後に大きなカンパチが釣れた。", location: "mie" },
  { text: "三重県鳥羽市。サクラマスの放流、いつまでかな？", location: "mie" },
  { text: "マダイのアタリが遠い。団子エサより海老が良かった。", location: "shizuoka" }
];

function analyzeActivity(posts) {
  const areaStats = {};

  posts.forEach(post => {
    const area = post.location;
    if (!areaStats[area]) {
      areaStats[area] = { count: 0, keywords: {}, score: 0 };
    }

    areaStats[area].count += 1;

    targetFish.forEach(fish => {
      if (post.text.includes(fish)) {
        areaStats[area].keywords[fish] = (areaStats[area].keywords[fish] || 0) + 1;
        areaStats[area].score += 10; // キーワードヒットごとにスコア加算
      }
    });
  });

  return areaStats;
}

const results = analyzeActivity(mockPosts);
console.log("--- Activity Analysis Result ---");
console.log(JSON.stringify(results, null, 2));

// Step 3 のロードマップに従い、実際のスクレイピング時には 
// 投稿の「位置情報（GeoTag）」や「ハッシュタグ（#三重）」を元に area を特定する。

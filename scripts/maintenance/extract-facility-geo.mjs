import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * 施設記事から座標データを抽出し、JSONファイルを生成する
 */
async function extractGeoData() {
  const CONTENT_DIR = 'src/content/blog/fishing-facility';
  const OUTPUT_FILE = 'src/data/facilities-geo.json';

  // src/data ディレクトリが存在しない場合は作成
  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  // ファイルを手動で再帰的に検索
  const getFiles = (dir) => {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        results = results.concat(getFiles(file));
      } else {
        if (file.endsWith('index.mdx')) {
          results.push(file);
        }
      }
    });
    return results;
  };

  const files = getFiles(CONTENT_DIR);
  console.log(`Found ${files.length} facility files.`);

  const geoData = files.map(file => {
    const source = fs.readFileSync(file, 'utf-8');
    const { data } = matter(source);

    // 抽出するメタデータ (google_maps オブジェクト内)
    const lat = data.google_maps?.latitude || data.latitude;
    const lng = data.google_maps?.longitude || data.longitude;

    return {
      title: data.title || '',
      slug: data.slug || path.basename(path.dirname(file)),
      prefecture: data.prefecture || '',
      latitude: lat || null,
      longitude: lng || null,
      area: data.area || ''
    };
  }).filter(item => item.latitude && item.longitude); // 座標があるもののみ

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(geoData, null, 2));
  console.log(`Successfully extracted ${geoData.length} facilities to ${OUTPUT_FILE}`);
}

extractGeoData().catch(console.error);

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.MAPS_API_KEY;
const CONTENT_DIR = 'src/content/blog/fishing-facility';

const PREFECTURES = [
    '北海道', '青森県', '岩手県', '宮城県', '秋田県', '山形県', '福島県',
    '茨城県', '栃木県', '群馬県', '埼玉県', '千葉県', '東京都', '神奈川県',
    '新潟県', '富山県', '石川県', '福井県', '山梨県', '長野県', '岐阜県', '静岡県', '愛知県',
    '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
    '鳥取県', '島根県', '岡山県', '広島県', '山口県',
    '徳島県', '香川県', '愛媛県', '高知県',
    '福岡県', '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県', '鹿児島県', '沖縄県'
];

const REGIONS = ['東日本', '中日本', '西日本', '北海道・東北', '関東', '中部', '近畿', '中国', '四国', '九州', '北陸', '信越'];

async function updateFacilityData() {
  if (!API_KEY) {
    console.error('Error: MAPS_API_KEY is not defined in .env');
    return;
  }

  // 西日本ターゲット: west-japan フォルダ (mie を除く)
  const allFiles = getAllFiles(CONTENT_DIR).filter(file => {
    return file.endsWith('.md') && file.includes('west-japan') && !file.includes('mie');
  });

  console.log(`Updating ${allFiles.length} files for West Japan...`);

  for (const filePath of allFiles) {
    const depth = filePath.split(path.sep).length;
    if (depth < 6) continue;

    const content = fs.readFileSync(filePath, 'utf8');
    const { data, content: body } = matter(content);

    if (!data.title || data.title.includes('エリアの海上釣り堀')) continue;

    console.log(`Processing: "${data.title}"`);

    const extracted = extractFromContent(body);

    if (!data.image && data.featureimage) data.image = data.featureimage;
    if (!data.publishDate) data.publishDate = data.created || data.date || data.publishDate || new Date().toISOString().split('T')[0];

    let cleanTitle = data.title.replace(/【.*?】/g, '').split(/[｜|｜]/)[0].trim();
    const prefSlug = data.prefecture || data.facility_details?.prefecture || '';
    const searchQuery = `${cleanTitle} ${prefSlug}`.trim();

    try {
      const searchRes = await axios.get(`https://maps.googleapis.com/maps/api/place/findplacefromtext/json`, {
        params: { input: searchQuery, inputtype: 'textquery', fields: 'place_id,name,formatted_address,geometry,rating', key: API_KEY, language: 'ja' }
      });
      const place = searchRes.data.candidates?.[0];
      let details = {};
      if (place) {
        const detailsRes = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
          params: { place_id: place.place_id, fields: 'formatted_phone_number,opening_hours,website,plus_code', key: API_KEY, language: 'ja' }
        });
        details = detailsRes.data.result || {};
      }

      const website = details.website || extracted.website_url || (data.google_maps?.website_url !== 'none' ? data.google_maps?.website_url : null) || 'none';
      
      data.image = data.image || data.featureimage || "/images/blog/noimage.jpg";
      delete data.featureimage;
      
      data.category = "ポイント紹介";
      data.region = "west-japan";
      data.author = data.author || "さしし";
      data.draft = data.draft ?? false;
      data.lastmod = new Date().toISOString().split('T')[0];

      data.google_maps = {
        map_url: data.google_maps?.map_url || (place ? `https://www.google.com/maps/search/?api=1&query=google&query_place_id=${place.place_id}` : 'none'),
        place_id: place?.place_id || 'none',
        plus_code: details.plus_code?.global_code || 'none',
        latitude: place?.geometry.location.lat || 0,
        longitude: place?.geometry.location.lng || 0,
        address: place?.formatted_address || extracted.address || "住所情報なし",
        phone: details.formatted_phone_number || 'none',
        business_hours: details.opening_hours?.weekday_text?.join(' / ') || '営業時間不明',
        website_url: website,
        rating: place?.rating || 0.0
      };

      data.facility_details = {
        average_price: extracted.price || "調査中",
        target_fish: extracted.fish.length > 0 ? extracted.fish : (data.facility_details?.target_fish || []),
        reservation: website !== 'none' ? '要確認（公式サイト参照）' : (extracted.reservation || '要確認'),
        amenities: {
          rental_tackle: extracted.amenities.rental,
          bait_sale: extracted.amenities.bait,
          toilet: extracted.amenities.toilet || "あり（公衆・施設内）",
          parking: extracted.amenities.parking || "無料・有料あり",
          processing: extracted.amenities.processing,
          bbq_area: extracted.amenities.bbq
        }
      };

      if (data.tags && Array.isArray(data.tags)) {
          const prefDisplay = PREFECTURES.find(p => p.includes(data.prefecture)) || data.prefecture;
          data.tags = data.tags.filter(tag => {
              if (PREFECTURES.includes(tag)) return false;
              if (REGIONS.includes(tag)) return false;
              if (tag === prefDisplay) return false;
              if (data.google_maps.address.includes(tag) && tag.length > 2 && !extracted.fish.includes(tag)) return false;
              return true;
          });
          data.tags = [...new Set(data.tags)];
      }

      fs.writeFileSync(filePath, matter.stringify(body, data));
      console.log(`  - Updated: ${data.title}`);

    } catch (err) {
      console.error(`  - Failed: ${data.title} (${err.message})`);
    }
  }
}

function extractFromContent(body) {
    const info = { address: '', website_url: '', price: '', fish: [], reservation: '', amenities: { rental: false, bait: false, toilet: '', parking: '', processing: false, bbq: false } };
    const lines = body.split('\n').map(l => l.trim());
    lines.forEach(line => {
        let key = '', val = '';
        if (line.includes('|')) {
            const cols = line.split('|').map(s => s.trim()).filter(Boolean);
            if (cols.length >= 2) { key = cols[0]; val = cols[1]; }
        } else if (line.match(/^[-*+]\s/)) {
            const match = line.match(/^[-*+]\s*(.*?)[:：]\s*(.*)$/);
            if (match) { key = match[1]; val = match[2]; }
        }
        if (!key) return;
        key = key.replace(/\*/g, '').trim();
        if (key.includes('住所') || key.includes('場所')) info.address = val.trim();
        if (key.includes('平均予算') || key.includes('予算')) info.price = val.trim();
        else if (key.includes('料金') && !info.price) info.price = val.trim();
        if (key.includes('釣れる魚') || key.includes('魚種')) {
            info.fish = [...new Set([...info.fish, ...val.replace(/など$/, '').split(/[、,・／/｜|]/).map(s => s.trim()).filter(s => s.length > 1)])];
        }
        if (key.includes('公式サイト') || key.includes('ウェブサイト')) {
            const urlMatch = val.match(/\((https?:\/\/.*?)\)/);
            info.website_url = urlMatch ? urlMatch[1] : val.trim().replace(/[\[\]]/g, '');
        }
        if (key.includes('レンタル') || key.includes('貸竿')) info.amenities.rental = !!(val.includes('あり') || val.includes('可能') || val.match(/\d/));
        if (key.includes('エサ')) info.amenities.bait = !!(val.includes('あり') || val.includes('販売'));
        if (key.includes('トイレ')) info.amenities.toilet = val.trim();
        if (key.includes('駐車場')) info.amenities.parking = val.trim();
        if (key.includes('捌き') || key.includes('処理')) info.amenities.processing = !!(val.includes('あり') || val.includes('サービス'));
        if (key.includes('BBQ') || key.includes('バーベキュー')) info.amenities.bbq = !!(val.includes('あり') || val.includes('可能'));
    });

    let currentHeader = '';
    lines.forEach(line => {
        if (line.startsWith('#')) {
            currentHeader = line.replace(/#/g, '').trim();
        }
        if (currentHeader.includes('釣れる') && (line.match(/^[-*+]\s/) || line.match(/^\*\*.*\*\*/))) {
            const fishMatch = line.replace(/^[-*+]\s*/, '').replace(/\*\*.*?\*\*[:：]?\s*/, '').split(/[、,・／/｜|]/).map(s => s.trim()).filter(s => s.length > 1);
            info.fish = [...new Set([...info.fish, ...fishMatch])];
        }
    });

    return info;
}

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return [];
  const files = fs.readdirSync(dirPath);
  files.forEach(f => {
    const p = path.join(dirPath, f);
    if (fs.statSync(p).isDirectory()) arrayOfFiles = getAllFiles(p, arrayOfFiles);
    else arrayOfFiles.push(p);
  });
  return arrayOfFiles;
}

updateFacilityData();

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BASE_DIR = 'src/content/blog/fishing-facility';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.mdx') || file.endsWith('.md')) {
        arrayOfFiles.push(path.join(dirPath, "/", file));
      }
    }
  });
  return arrayOfFiles;
}

const files = getAllFiles(BASE_DIR);
let fixCount = 0;

files.forEach(file => {
  const fileContent = fs.readFileSync(file, 'utf8');
  let { data, content } = matter(fileContent);
  let changed = false;

  // 1. pubDate -> publishDate
  if (data.pubDate && !data.publishDate) {
    data.publishDate = data.pubDate;
    delete data.pubDate;
    changed = true;
  }

  // 2. cover -> image
  if (data.cover && !data.image) {
    data.image = data.cover;
    delete data.cover;
    changed = true;
  }

  // 3. Category
  if (data.category === 'ポイント紹介') {
    data.category = '施設紹介';
    changed = true;
  }

  // 4. facility_details
  if (data.facility_details) {
    if (Array.isArray(data.facility_details)) {
      // Convert Array to Object (Simplified)
      const oldArray = data.facility_details;
      const newObj = {
        average_price: '',
        target_fish: [],
        reservation: '不要',
        amenities: {
          rental_tackle: false,
          bait_sale: false,
          toilet: 'あり',
          parking: 'あり',
          processing: false,
          bbq_area: false
        }
      };
      
      oldArray.forEach(item => {
        if (item.key === '料金システム' || item.key === '入場料') newObj.average_price = item.value;
        if (item.key === 'ターゲット') newObj.target_fish = item.value.split(/[、,]/).map(s => s.trim());
        if (item.key === '予約') newObj.reservation = item.value;
      });
      
      data.facility_details = newObj;
      changed = true;
    } else {
      // Clean up Object
      if (data.facility_details.region) {
        delete data.facility_details.region;
        changed = true;
      }
      if (data.facility_details.prefecture) {
        delete data.facility_details.prefecture;
        changed = true;
      }
      
      if (data.facility_details.amenities) {
        if (typeof data.facility_details.amenities.toilet === 'boolean') {
          data.facility_details.amenities.toilet = data.facility_details.amenities.toilet ? 'あり' : 'なし';
          changed = true;
        }
        if (typeof data.facility_details.amenities.parking === 'boolean') {
          data.facility_details.amenities.parking = data.facility_details.amenities.parking ? 'あり' : 'なし';
          changed = true;
        }
      }
    }
  }

  if (changed) {
    const newContent = matter.stringify(content, data);
    fs.writeFileSync(file, newContent);
    fixCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFinished! Total files fixed: ${fixCount}`);

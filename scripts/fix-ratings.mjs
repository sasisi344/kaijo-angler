import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';

async function fixRatings() {
  const files = await glob('src/content/blog/fishing-facility/**/*.{md,mdx}');
  console.log(`Checking ${files.length} files...`);

  for (const file of files) {
    const fullPath = path.resolve(file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const { data, content: body } = matter(content);
    let changed = false;

    if (data.google_maps) {
      for (const key of ['rating', 'latitude', 'longitude']) {
        if (data.google_maps[key] && typeof data.google_maps[key] === 'string') {
          const val = parseFloat(data.google_maps[key]);
          if (!isNaN(val)) {
            console.log(`Fixing ${key} in ${file}: ${data.google_maps[key]} -> ${val}`);
            data.google_maps[key] = val;
            changed = true;
          }
        }
      }
    }

    if (changed) {
      const newContent = matter.stringify(body, data);
      fs.writeFileSync(fullPath, newContent, 'utf8');
    }
  }
}

fixRatings();

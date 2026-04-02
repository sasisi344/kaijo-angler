import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { glob } from 'glob';

async function fixImagePaths() {
  const files = await glob('src/content/blog/**/*.{md,mdx}');
  console.log(`Checking ${files.length} files...`);

  for (const file of files) {
    const fullPath = path.resolve(file);
    const content = fs.readFileSync(fullPath, 'utf8');
    const { data, content: body } = matter(content);
    let changed = false;

    for (const key of ['image', 'featureimage', 'cover']) {
      if (data[key] && typeof data[key] === 'string') {
        const val = data[key];
        // If it looks like a local file name and doesn't start with ./ or ~/ or http
        if (!val.startsWith('./') && !val.startsWith('~/') && !val.startsWith('http') && !val.startsWith('/')) {
          const dir = path.dirname(fullPath);
          const imgPath = path.join(dir, val);
          if (fs.existsSync(imgPath)) {
            console.log(`Fixing path in ${file}: ${val} -> ./${val}`);
            data[key] = `./${val}`;
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

fixImagePaths();

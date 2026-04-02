import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Collections to check
const COLLECTIONS = [
  'src/content/blog/fishing-facility',
  'src/content/blog/column',
  'src/content/blog/tactics'
];

let removedCount = 0;

COLLECTIONS.forEach(baseDir => {
  function processDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const fullPath = path.join(dir, file);
      if (fs.statSync(fullPath).isDirectory()) {
        processDir(fullPath);
      } else if (file.endsWith('.mdx') || file.endsWith('.md')) {
        const fileContent = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContent);
        let changed = false;

        const checkImage = (key) => {
          if (data[key] && typeof data[key] === 'string' && data[key].startsWith('./')) {
            const imgPath = path.join(dir, data[key]);
            if (!fs.existsSync(imgPath)) {
              console.log(`Missing image for ${fullPath}: ${data[key]} (Removing field)`);
              delete data[key];
              changed = true;
            }
          }
        };

        checkImage('image');
        checkImage('featureimage');
        checkImage('cover'); // Just in case some are left

        if (changed) {
          const newContent = matter.stringify(content, data);
          fs.writeFileSync(fullPath, newContent);
          removedCount++;
        }
      }
    });
  }
  processDir(baseDir);
});

console.log(`\nFinished! Total files sanitized: ${removedCount}`);

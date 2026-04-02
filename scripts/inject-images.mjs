import fs from 'fs';
import { glob } from 'glob';

async function run() {
  const files = await glob('src/content/blog/**/*.mdx');
  let count = 0;
  for (const f of files) {
    if (f.endsWith('index.mdx') && !f.includes('tactics') && f.includes('fishing-facility') && f.split(/[\\\/]/).length > 6) {
      if (fs.existsSync(f.replace('index.mdx', 'cover.jpg'))) {
        let content = fs.readFileSync(f, 'utf8');
        if (!content.includes('image: ')) {
          const lines = content.split('\n');
          let endFrontmatterIndex = -1;
          for (let i = 1; i < lines.length; i++) {
            if (lines[i].trim() === '---') {
              endFrontmatterIndex = i;
              break;
            }
          }
          if (endFrontmatterIndex !== -1) {
            lines.splice(endFrontmatterIndex, 0, 'image: ./cover.jpg');
            fs.writeFileSync(f, lines.join('\n'));
            console.log('Added to ' + f);
            count++;
          }
        }
      }
    }
  }
  console.log(`Updated ${count} files.`);
}

run().catch(console.error);

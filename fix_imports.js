import fs from 'fs';
import path from 'path';

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else {
      if (file.endsWith('.mdx')) results.push(file);
    }
  });
  return results;
}

const files = walkDir('src/content/blog');

files.forEach(fp => {
  let c = fs.readFileSync(fp, 'utf8');
  if (c.includes('<TackleCard') && !c.includes('import TackleCard')) {
    let parts = c.split('---');
    if (parts.length >= 3) {
      parts[2] = '\n\nimport TackleCard from "~/components/common/TackleCard.astro";\n' + parts[2];
      c = parts.join('---');
      fs.writeFileSync(fp, c);
      console.log('Fixed', fp);
    }
  }
});

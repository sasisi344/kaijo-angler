import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function fixImports() {
  const files = await glob('src/content/blog/**/*.{md,mdx}');
  console.log(`Checking ${files.length} files...`);

  const replacements = [
    {
      regex: /import\s+TackleCard\s+from\s+['"].*?TackleCard\.astro['"];?/g,
      newImport: 'import TackleCard from "~/components/common/TackleCard.astro";'
    },
    {
      regex: /import\s+AffiliateCard\s+from\s+['"].*?AffiliateCard\.astro['"];?/g,
      newImport: 'import AffiliateCard from "~/components/common/AffiliateCard.astro";'
    }
  ];

  for (const file of files) {
    const fullPath = path.resolve(file);
    let content = fs.readFileSync(fullPath, 'utf8');
    let changed = false;

    for (const r of replacements) {
      if (r.regex.test(content)) {
        const newContent = content.replace(r.regex, r.newImport);
        if (newContent !== content) {
          content = newContent;
          changed = true;
          console.log(`Fixed import in ${file}`);
        }
      }
    }

    if (changed) {
      fs.writeFileSync(fullPath, content, 'utf8');
    }
  }
}

fixImports();

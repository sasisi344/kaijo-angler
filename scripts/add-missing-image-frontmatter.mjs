import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function addMissingImages() {
  const allFiles = await glob('src/content/blog/**/*.{md,mdx}');
  let updatedCount = 0;

  for (const file of allFiles) {
    // Skip area index pages like east-japan/index.mdx
    if (file.match(/src[\\\/]content[\\\/]blog[\\\/]fishing-facility[\\\/][^\/]+[\\\/]index\.mdx$/)) {
        continue;
    }
    // Skip other index pages
    if (file.endsWith('index.md') && file.includes('tactics')) { continue; }
    
    // Ensure file lives in a directory we expect to have an image
    const dir = path.dirname(file);
    const hasCover = fs.existsSync(path.join(dir, 'cover.jpg'));
    
    if (!hasCover) continue;

    try {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      let inFrontmatter = false;
      let hasImage = false;
      let insertIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        if (line === '---') {
          if (!inFrontmatter) {
            inFrontmatter = true; // start of frontmatter
          } else {
            // end of frontmatter
            insertIndex = i;
            break;
          }
        } else if (inFrontmatter) {
          if (line.startsWith('image:') || line.startsWith('featureimage:')) {
            hasImage = true;
          }
        }
      }
      
      if (!hasImage && insertIndex !== -1) {
        // Insert right before the closing ---
        lines.splice(insertIndex, 0, 'image: ./cover.jpg');
        fs.writeFileSync(file, lines.join('\n'), 'utf8');
        console.log(`✅ Added image: ./cover.jpg to ${file}`);
        updatedCount++;
      }
    } catch (e) {
      console.error(`❌ Error parsing ${file}: ${e.message}`);
    }
  }

  console.log(`\n🎉 Done! Updated ${updatedCount} files.`);
}

addMissingImages();

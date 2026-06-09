import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_BASE = path.resolve(__dirname, '../../src/content/blog/column/ranking');
const SCRIPT = path.join(__dirname, 'generate-image.js');

const articles = [
  {
    slug: 'kansai',
    prompt: 'Aerial view of multiple floating sea fishing pens on calm turquoise Seto Inland Sea water, connected by wooden walkways, small fishing boat approaching, scattered small green islands in background, warm golden afternoon light, cinematic drone photography, no text, no people',
  },
  {
    slug: 'mie-wakayama',
    prompt: 'Ria coastline inlet with calm sheltered ocean water, floating fishing pen visible in a deep cove surrounded by pine-covered rocky peninsulas, turquoise clear water reflecting the sky, Shima Peninsula atmosphere, soft morning mist, photorealistic landscape photography, no text',
  },
  {
    slug: 'kyushu-okinawa',
    prompt: 'Aerial view of a floating sea fishing pond surrounded by multiple lush green islands, calm sheltered sea channel between islands, traditional Japanese fishing facility structure, Amakusa or Nagasaki island chain style landscape, warm afternoon light with slight haze, cinematic, no text',
  },
  {
    slug: 'chugoku-shikoku',
    prompt: 'Floating rectangular sea fishing pen on bright turquoise Seto Inland Sea, distant island silhouettes scattered across the calm water, clear blue sky with sparse white clouds, wide angle aerial perspective from slightly above water level, no text, no people, photorealistic',
  },
  {
    slug: 'nihonkai-hokuriku',
    prompt: 'Floating fishing pond on calm Japan Sea water nestled inside a deep mountain-fringed bay, steep forested hills on both sides of the inlet, soft overcast sky casting even diffused light, Wakasa Bay Fukui atmosphere, still reflective water surface, no text, documentary landscape photography',
  },
  {
    slug: 'kanto-tokai',
    prompt: 'Sea fishing pen floating on calm Suruga Bay with Mount Fuji clearly visible across the water in the background, early morning golden light on the mountain, clear sky, iconic combination of volcanic peak and ocean fishing facility, wide angle panoramic photography, no text, no people',
  },
  {
    slug: 'tohoku-hokkaido',
    prompt: 'Small floating fishing pond on calm Japan Sea inlet with dramatic overcast sky, rugged rocky coastline with pine trees clinging to cliffs, grey-blue moody water surface with gentle ripples, Tohoku Japan Sea coastal atmosphere, isolated fishing facility, cinematic atmospheric photography, no text',
  },
];

async function run() {
  for (let i = 0; i < articles.length; i++) {
    const { slug, prompt } = articles[i];
    const outputPath = path.join(CONTENT_BASE, slug, 'cover.jpg');
    console.log(`\n[${i + 1}/${articles.length}] ${slug}`);
    try {
      execSync(`node "${SCRIPT}" "${prompt}" "${outputPath}"`, {
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../..'),
      });
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    }
  }
  console.log('\n✅ 全ランキング記事カバー画像生成完了');
}

run();

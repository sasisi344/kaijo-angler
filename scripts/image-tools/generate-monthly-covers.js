import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_BASE = path.resolve(__dirname, '../../src/content/blog/column/_covers');
const SCRIPT = path.join(__dirname, 'generate-image.js');

const covers = [
  {
    slug: 'april-cover',
    prompt: 'Bright spring scene at a Japanese sea fishing pond, cherry blossom petals drifting near a wooden fishing pier, calm turquoise ocean water, soft warm sunlight, fishing rods resting on the railing, cheerful springtime atmosphere, no text, no people',
  },
  {
    slug: 'may-cover',
    prompt: 'Fresh early-summer scene at a sea fishing pond, vivid green coastal hills under a bright blue sky with fluffy white clouds, calm sparkling ocean water with floating fishing pens, sense of new-season energy, no text, no people',
  },
  {
    slug: 'june-cover',
    prompt: 'Rainy season scene at a sea fishing pond, fresh green hydrangea flowers near a wooden pier, soft grey-blue overcast sky, calm ocean water with gentle ripples from light rain, tranquil and clean atmosphere, no text, no people',
  },
  {
    slug: 'july-cover',
    prompt: 'Vivid midsummer scene at a sea fishing pond, brilliant blue sky with dramatic white cumulus clouds, sparkling deep blue ocean water under strong sunlight, wooden fishing pier and floating pens, vibrant high-contrast summer atmosphere, no text, no people',
  },
];

async function run() {
  for (let i = 0; i < covers.length; i++) {
    const { slug, prompt } = covers[i];
    const outputPath = path.join(CONTENT_BASE, `${slug}.jpg`);
    console.log(`\n[${i + 1}/${covers.length}] ${slug}`);
    try {
      execSync(`node "${SCRIPT}" "${prompt}" "${outputPath}"`, {
        stdio: 'inherit',
        cwd: path.resolve(__dirname, '../..'),
      });
    } catch (err) {
      console.error(`  ✗ Failed: ${err.message}`);
    }
  }
  console.log('\n✅ 全画像生成完了');
}

run();

import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const CONTENT_BASE = path.resolve(__dirname, '../../src/content/blog/column/trivia');
const SCRIPT = path.join(__dirname, 'generate-image.js');

const articles = [
  {
    slug: 'morning-magic-science',
    prompt: 'Dawn breaking over calm ocean water, golden sunrise light reflecting on gentle waves, silhouette of a fishing rod held by an angler in the early morning mist, warm orange and pink sky gradient, no text, cinematic photography style',
  },
  {
    slug: 'rainy-day-fishing-truth',
    prompt: 'Heavy rain falling on dark ocean surface creating countless concentric ripples, stormy sky with dramatic clouds, close-up of water surface during rain, moody atmospheric photography, no text, no people',
  },
  {
    slug: 'fish-pressure-mechanism',
    prompt: 'Large red sea bream underwater looking cautiously at a fishing hook and line, blurred school of fish swimming away in background, deep blue-green water with light rays filtering down, no text, underwater photography',
  },
  {
    slug: 'cost-calculation-guide',
    prompt: 'Flat lay top-down view of fishing equipment on a wooden surface: fishing rod, reel, tackle box, small accessories, natural light, clean organized composition, no text, no money or currency',
  },
  {
    slug: 'sashimi-value-comparison',
    prompt: 'Beautifully arranged fresh sashimi platter with sea bream, yellowtail and amberjack slices on a wooden board, garnished with shiso leaves and daikon, restaurant quality food photography, no text',
  },
  {
    slug: 'seat-selection-strategy',
    prompt: 'Aerial top-down view of a square floating fishing pen on turquoise ocean, wooden walkways around the perimeter, clear water visible through the structure, geometric clean composition, no text, no people',
  },
  {
    slug: 'cloudy-day-advantage',
    prompt: 'Overcast grey sky over calm ocean surface, soft diffused even lighting, fishing pier or dock extending into water, peaceful tranquil atmosphere, subtle reflections on water, no text, no people',
  },
  {
    slug: 'sound-vibration-fishing',
    prompt: 'Underwater cross-section illustration style showing concentric sound wave ripples emanating through blue-green water, silhouettes of fish detecting vibrations with their lateral lines visible, no text, scientific yet artistic',
  },
  {
    slug: 'acclimatization-science',
    prompt: 'School of fish being released into ocean from a net, underwater perspective view, bubbles rising to surface, fish swimming in multiple directions, clear turquoise ocean water, motion blur on fish, no text',
  },
  {
    slug: 'rental-tackle-honest-review',
    prompt: 'Row of fishing rods standing upright in a rental rack at a fishing facility, various lengths and types, clean organized display, warm indoor lighting, no text, no people',
  },
  {
    slug: 'tide-inside-pond',
    prompt: 'Underwater view looking through green fishing net mesh, water particles and small bubbles flowing through the net gaps, sunlight filtering from above, ocean water texture, no text, abstract natural pattern',
  },
  {
    slug: 'line-material-science',
    prompt: 'Extreme macro close-up of transparent fluorocarbon fishing line with water droplets clinging to it, very shallow depth of field with soft bokeh background, clear glassy texture, no text, product macro photography',
  },
  {
    slug: 'hook-size-science',
    prompt: 'Various sizes of fishing hooks arranged in a gradient from smallest to largest on a dark slate background, metallic silver shine, sharp focus, clean product photography, no text, no fishing line',
  },
  {
    slug: 'ikeus-management-secret',
    prompt: 'Aerial drone view of large ocean fish farm facility with multiple floating rectangular pens on blue ocean, workers visible on walkways, clear organized structure, no text, documentary photography style',
  },
  {
    slug: 'wild-vs-farmed-taste',
    prompt: 'Two fresh whole sea bream fish placed side by side on crushed ice, one slightly plumper with richer color, natural diffused lighting, seafood market style presentation, no text, no labels',
  },
  {
    slug: 'aging-fish-science',
    prompt: 'Fresh fish fillet slices on clean crushed ice in a stainless steel tray, glistening moisture, perfect preservation condition, professional food photography lighting, no text, no garnish',
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
  console.log('\n✅ 全画像生成完了');
}

run();

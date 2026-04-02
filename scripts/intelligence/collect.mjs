import fs from 'fs';
import path from 'path';

/**
 * PHASE 1: Data Collection (High-Fidelity Simulation)
 * In production, this would crawl X (Twitter), Instagram, and RSS feeds.
 */

const MASTER_PATH = path.resolve('scripts/facilities_master.json');
const CONFIG_PATH = path.resolve('.workspace/config/intelligence-keywords.json');

async function collectData(mode = 'weekly') {
    const facilities = JSON.parse(fs.readFileSync(MASTER_PATH, 'utf8'));
    const config = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
    
    const targetKeywords = config[mode].keywords;
    const targetFacilities = config[mode].target_facilities;

    console.log(`Collecting data for: ${mode}...`);

    // Simulate research results
    const results = facilities.map(f => {
        // Boost score based on popularity in config or specific facility matches
        let score = Math.floor(Math.random() * 40) + 10;
        
        const name = f.title;
        if (targetFacilities.some(tf => name.includes(tf))) score += 40;
        if (name.includes("水宝") || name.includes("海恵")) score += 20;

        // Generate dummy "buzz" text
        const buzzPoints = [
            `${targetKeywords[Math.floor(Math.random() * targetKeywords.length)]}が好調との声。`,
            "朝イチの活性が高かった様子。",
            "タナ5m付近でのヒットが多い。",
            "エサよりもルアーに反応あり。",
            "水温上昇により活性化している。"
        ];

        return {
            slug: f.slug,
            name: f.title.split('】')[1]?.split('｜')[0] || f.title,
            score: Math.min(100, score),
            region: f.region,
            prefecture: f.prefecture,
            lat: f.lat,
            lng: f.lng,
            recent_buzz: buzzPoints.slice(0, 2).join(' ')
        };
    });

    // Sort by score and take top 10 for detailed analysis
    const ranking = results.sort((a, b) => b.score - a.score).slice(0, 10);

    const data = {
        timestamp: new Date().toISOString(),
        mode: mode,
        keywords_detected: targetKeywords.map(k => ({ word: k, count: Math.floor(Math.random() * 50) + 10 })),
        facility_rankings: ranking
    };

    const year = new Date().getFullYear();
    const month = String(new Date().getMonth() + 1).padStart(2, '0');
    let weekPart = "";

    if (mode === 'weekly') {
        const d = new Date();
        const firstDayOfMonth = new Date(d.getFullYear(), d.getMonth(), 1);
        const diff = d.getDate() + firstDayOfMonth.getDay();
        weekPart = `w${Math.ceil(diff / 7)}`;
    } else {
        weekPart = "summary";
    }

    const dir = path.resolve(`.data-set/magazine-data/${year}/${month}/${weekPart}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const outputPath = path.join(dir, 'raw-intelligence.json');
    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
    
    console.log(`Raw data saved to: ${outputPath}`);
    return outputPath;
}

const mode = process.argv[2] === 'monthly' ? 'monthly' : 'weekly';
collectData(mode);

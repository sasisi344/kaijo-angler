import { execSync } from 'child_process';

/**
 * 🌊 Kaijo Angler Intelligence Pipeline Runner
 * Orchestrar for: Collect -> Analyze -> Generate
 */

const mode = process.argv[2] === 'monthly' ? 'monthly' : 'weekly';

async function run() {
    console.log(`\n🌊 [START] ${mode.toUpperCase()} PIPELINE 🌊\n`);

    try {
        // Step 1: Collect
        console.log("--- Step 1: Collecting Data ---");
        const rawJsonPath = execSync(`node scripts/intelligence/collect.mjs ${mode}`, { encoding: 'utf8' })
                            .match(/Raw data saved to: (.*)/)?.[1]?.trim();
        
        if (!rawJsonPath) throw new Error("Collection failed: No output path found.");

        // Step 2: Analyze (Gemini API)
        console.log("\n--- Step 2: AI Analysis (Gemini) ---");
        const analyzedJsonPath = execSync(`node scripts/intelligence/analyze.mjs ${rawJsonPath}`, { encoding: 'utf8' })
                                  .match(/AI analysis completed: (.*)/)?.[1]?.trim();

        if (!analyzedJsonPath) throw new Error("Analysis failed: No output path found.");

        // Step 3: Generate MDX
        console.log("\n--- Step 3: Generating MDX Article ---");
        execSync(`node scripts/intelligence/generate.mjs ${analyzedJsonPath}`, { stdio: 'inherit' });

        console.log(`\n✅ [COMPLETE] ${mode.toUpperCase()} Intelligence Created Successfully!\n`);

    } catch (error) {
        console.error("\n❌ [ERROR] Pipeline failed:", error.message);
        process.exit(1);
    }
}

run();

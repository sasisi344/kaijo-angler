import fs from 'fs';
import path from 'path';

const CONTENT_DIR = 'src/content/blog/fishing-facility';
const OUTPUT_FILE = '.workspace/tackle-aggregation.md';

function getArticles(dir) {
    const files = [];
    function traverse(currentPath) {
        if (!fs.existsSync(currentPath)) return;
        const items = fs.readdirSync(currentPath);
        if (items.includes('index.md')) {
            files.push(path.join(currentPath, 'index.md'));
        }
        items.forEach(item => {
            const fullPath = path.join(currentPath, item);
            if (fs.statSync(fullPath).isDirectory()) {
                traverse(fullPath);
            }
        });
    }
    traverse(dir);
    return files;
}

const articles = getArticles(CONTENT_DIR);
const tackleEntries = [];

// Keywords to identify tackle lines
const KEYWORDS = ['竿', 'リール', '道糸', 'ハリス', '針', 'ウキ', 'エサ'];

articles.forEach(file => {
    const content = fs.readFileSync(file, 'utf-8');
    const lines = content.split('\n');
    
    let currentBlock = null;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Check for start of a tackle list (usually starts with '竿')
        if (line.startsWith('-') && (line.includes('竿：') || line.includes('竿 :'))) {
            // Found a start of a tackle block
            currentBlock = {
                file: path.relative(CONTENT_DIR, file),
                context: lines[i-1] ? lines[i-1].replace(/\*\*/g, '').trim() : 'Unknown',
                specs: {}
            };
            
            // Extract this and subsequent list items
            let j = i;
            while (j < lines.length && lines[j].trim().startsWith('-')) {
                const parts = lines[j].trim().replace(/^- /, '').split(/[：:]/);
                if (parts.length >= 2) {
                    const key = parts[0].trim();
                    const value = parts.slice(1).join('：').trim();
                    
                    KEYWORDS.forEach(k => {
                        if (key.includes(k)) {
                            currentBlock.specs[k] = value;
                        }
                    });
                }
                j++;
            }
            if (Object.keys(currentBlock.specs).length > 0) {
                tackleEntries.push(currentBlock);
            }
            i = j - 1; // skip processed lines
        }
    }
});

// Aggregate
const stats = {};
KEYWORDS.forEach(k => stats[k] = {});

tackleEntries.forEach(entry => {
    Object.entries(entry.specs).forEach(([k, v]) => {
        // Clean values for grouping (e.g. remove "など" or small comments)
        let cleanVal = v.replace(/など$/, '').replace(/前後$/, '').trim();
        stats[k][cleanVal] = (stats[k][cleanVal] || 0) + 1;
    });
});

let md = `# Tackle Aggregation Report (v2)\n\n`;
md += `Analyzed ${articles.length} articles, found ${tackleEntries.length} tackle definitions.\n\n`;

md += `## Standard Tackle Configuration Analysis\n\n`;

KEYWORDS.forEach(k => {
    md += `### ${k} frequency\n`;
    const sorted = Object.entries(stats[k]).sort((a,b) => b[1] - a[1]);
    sorted.slice(0, 10).forEach(([val, count]) => {
        md += `- ${val} (${count} occurrences)\n`;
    });
    md += `\n`;
});

md += `## Detailed List of Extracted Tackle Units\n\n`;
md += `| File | Context | Specs |\n`;
md += `| :--- | :--- | :--- |\n`;
tackleEntries.forEach(e => {
    const specStr = Object.entries(e.specs).map(([k,v]) => `${k}:${v}`).join('<br>');
    md += `| ${e.file} | ${e.context} | ${specStr} |\n`;
});

fs.writeFileSync(OUTPUT_FILE, md);
console.log(`Updated Aggregation report generated: ${OUTPUT_FILE}`);
console.log(`Found entries: ${tackleEntries.length}`);

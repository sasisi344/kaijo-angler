const fs = require('fs');

const csvPath = 'c:/Users/sasis/344dev/kaijo-angler/.workspace/.task/query-check/GSC-query-data-20260407 - kaijoangler-0407-after28days.csv';
const content = fs.readFileSync(csvPath, 'utf8');
const lines = content.split('\n').filter(l => l.trim() !== '');

const header = lines[0].split(',');
const data = lines.slice(1).map(line => {
    // Simple CSV parser for this specific format
    const parts = line.split(',');
    if (parts.length < 6) return null;
    
    // Handle queries with commas if any (though usually they are quoted)
    // The view_file output showed plain commas.
    // Let's assume standard "Query,Page,Clicks,Impressions,CTR,Position"
    
    const query = parts[0];
    const page = parts[1];
    const clicks = parseInt(parts[2]);
    const impressions = parseInt(parts[3]);
    const ctrStr = parts[4].replace('%', '');
    const ctr = parseFloat(ctrStr);
    const position = parseFloat(parts[5]);
    
    return { query, page, clicks, impressions, ctr, position, ctrRaw: parts[4] };
}).filter(v => v !== null);

const report = {
    lowCtr: [], // CTR < 15%
    highImpLowRank: [], // Position > 10, Imp > 30 (Adjusted threshold for "high")
    activePages: new Set(), // Clicks > 0
    underperformingHighRank: [] // Position <= 15, CTR < 10%
};

data.forEach(item => {
    if (item.ctr < 15) {
        report.lowCtr.push(item);
    }
    
    if (item.position > 10 && item.impressions >= 20) {
        report.highImpLowRank.push(item);
    }
    
    if (item.clicks > 0) {
        report.activePages.add(item.page);
    }
    
    if (item.position <= 15 && item.ctr < 10) {
        report.underperformingHighRank.push(item);
    }
});

// Sort lowCtr by impressions desc
report.lowCtr.sort((a,b) => b.impressions - a.impressions);
// Sort highImpLowRank by impressions desc
report.highImpLowRank.sort((a,b) => b.impressions - a.impressions);
// Sort underperformingHighRank by impressions desc
report.underperformingHighRank.sort((a,b) => b.impressions - a.impressions);

console.log('--- LOW CTR (<15%) ---');
report.lowCtr.slice(0, 50).forEach(i => console.log(`${i.query} | ${i.page} | ${i.clicks} clicks | ${i.impressions} imps | ${i.ctrRaw} | Pos: ${i.position}`));

console.log('\n--- HIGH IMP (>20) LOW RANK (>10) ---');
report.highImpLowRank.forEach(i => console.log(`${i.query} | ${i.page} | ${i.impressions} imps | Pos: ${i.position}`));

console.log('\n--- UNDERPERFORMING HIGH RANK (Pos<=15, CTR<10%) ---');
report.underperformingHighRank.slice(0, 50).forEach(i => console.log(`${i.query} | ${i.page} | ${i.clicks} clicks | ${i.impressions} imps | ${i.ctrRaw} | Pos: ${i.position}`));

console.log('\n--- ACTIVE PAGES ---');
Array.from(report.activePages).forEach(p => console.log(p));

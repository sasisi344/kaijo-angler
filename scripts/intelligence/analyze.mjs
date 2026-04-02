import fs from 'fs';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from 'dotenv';

dotenv.config();

/**
 * PHASE 2: AI Analysis & Structuring
 * Gemini 2.5 Pro API call
 */

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.5-pro-v1" }); // Assuming user has access or v1.5-pro

async function analyzeData(inputPath) {
    const rawData = fs.readFileSync(inputPath, 'utf8');
    
    console.log(`Analyzing data from: ${inputPath}...`);

    const prompt = `
あなたは「海上アングラー」の専属アナリストです。
提供された低レベルな「釣果バズデータ（JSON）」を元に、釣り人に向けた高品質な「インテリジェンス・マガジン」を生成するための構造化 JSON を出力してください。

【入力データ】
${rawData}

【出力要件】
1. 言語：日本語（専門的かつ読みやすいトーン）
2. **重要：強調したい箇所は Markdown の **太字** ではなく、必ず <strong>HTMLタグ</strong> を使用してください。**
3. JSON 形式は以下のスキーマを厳守してください：
   - "title": 記事のタイトル（例：2026年3月第x週 海上釣り堀インテリジェンス）
   - "summary": 150〜200文字程度の概要文
   - "target_species": [ { "name": "魚種名", "description": "狙い方のコツや状況" } ]
   - "trending_keywords": [ { "keyword": "単語", "score": 1.0 } ] ※scoreは0.0〜1.0（相対値）
   - "facility_links": [ { "slug": "施設ID", "comment": "なぜ今おすすめなのか" } ]
   - "strategy_advice": "攻略の核心（strongタグを含むプロ級のアドバイス）"

【出力JSON】
`;

    try {
        const result = await model.generateContent(prompt);
        const text = result.response.text();
        
        // Clean markdown code blocks
        const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const analyzed = JSON.parse(jsonStr);

        const outputPath = inputPath.replace('raw-intelligence.json', 'analyzed-intelligence.json');
        fs.writeFileSync(outputPath, JSON.stringify(analyzed, null, 2));
        
        console.log(`AI analysis completed: ${outputPath}`);
        return outputPath;
    } catch (error) {
        console.error("AI Analysis failed:", error);
        
        // Fallback or exit
        throw error;
    }
}

const inputPath = process.argv[2];
if (inputPath) analyzeData(inputPath);

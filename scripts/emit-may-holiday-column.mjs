/**
 * Builds column MDX from .workspace/_inbox/gw-taisaku.md (UTF-8).
 * Run: node scripts/emit-may-holiday-column.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const inboxPath = path.join(root, ".workspace", "_inbox", "gw-taisaku.md");
const outPath = path.join(
  root,
  "src",
  "content",
  "blog",
  "column",
  "travel",
  "may-holiday-tsuribori-reservation",
  "index.mdx",
);

const raw = fs.readFileSync(inboxPath, "utf8");
const lines = raw.replace(/\r\n/g, "\n").split("\n");

/** @type {string[]} */
const out = [];
let i = 0;

function flushParagraph(buf) {
  const t = buf.join("\n").trim();
  if (t) out.push(t, "");
}

let paraBuf = [];

for (; i < lines.length; i++) {
  const line = lines[i];

  if (line.startsWith("1. ")) {
    flushParagraph(paraBuf);
    paraBuf = [];
    out.push("## 1. \u6df7\u96d1\u5177\u5408\u3068\u4e88\u7d04\u72b6\u6cc1", "");
    continue;
  }
  if (line.startsWith("2. ")) {
    flushParagraph(paraBuf);
    paraBuf = [];
    out.push("---", "", "## 2. \u4e88\u7d04\u306f\u3044\u3064\u307e\u3067\u304c\u59a5\u5f53\u304b\uff1f\uff084\u6708\u672b\u306f\u9593\u306b\u5408\u3046\uff1f\uff09", "");
    continue;
  }
  if (line.startsWith("3. ")) {
    flushParagraph(paraBuf);
    paraBuf = [];
    out.push("---", "", "## 3. \u7a7a\u3044\u3066\u3044\u308b\u304b\u3082\u3057\u308c\u306a\u3044\u300c\u7a74\u5834\u300d\u306e\u898b\u3064\u3051\u65b9", "");
    continue;
  }
  if (line === "GW\u91e3\u884c\u306e\u30a2\u30c9\u30d0\u30a4\u30b9" || line.startsWith("GW\u91e3\u884c")) {
    flushParagraph(paraBuf);
    paraBuf = [];
    out.push("---", "", "## 4. \u5f53\u65e5\u306e\u7acb\u3061\u56de\u308a\uff085\u6708\u9023\u4f11\u306e\u91e3\u884c\u30e1\u30e2\uff09", "");
    if (line !== "GW\u91e3\u884c\u306e\u30a2\u30c9\u30d0\u30a4\u30b9") {
      paraBuf.push(line);
    }
    continue;
  }

  if (
    line.startsWith("\u300cWeb\u4e88\u7d04\u306a\u3057\u300d") ||
    line.startsWith("\u300c\u6e21\u8239\u300d") ||
    line.startsWith("\u65b0\u898f\u30aa\u30fc\u30d7\u30f3") ||
    line.startsWith("\u798f\u4e95\u3084\u4e09\u91cd")
  ) {
    flushParagraph(paraBuf);
    paraBuf = [];
    out.push("### " + line, "");
    continue;
  }

  if (line.startsWith("\u65e9\u3081\u306e\u73fe\u7740") || line.startsWith("\u30a8\u30b5\u306e\u78ba\u4fdd")) {
    flushParagraph(paraBuf);
    paraBuf = [];
    out.push("### " + line.split(":")[0], "");
    const rest = line.includes(":") ? line.slice(line.indexOf(":") + 1).trim() : "";
    if (rest) paraBuf.push(rest);
    continue;
  }

  if (line.startsWith("\u4eca\u304b\u3089\u3067\u3082\u3001\u96fb\u8a71")) {
    flushParagraph(paraBuf);
    paraBuf = [];
    out.push("### \u96fb\u8a71\u3067\u30ad\u30e3\u30f3\u30bb\u30eb\u67a0\u3092\u72d9\u3046", "");
    paraBuf.push(line);
    continue;
  }

  if (line.startsWith("\u30b7\u30f3\u30d7\u30eb\u306a\u4e88\u7d04")) {
    flushParagraph(paraBuf);
    paraBuf = [];
    out.push("### \u691c\u7d22\u3068\u5019\u88dc\u306e\u9078\u3073\u65b9", "");
    paraBuf.push(line);
    continue;
  }

  paraBuf.push(line);
}

flushParagraph(paraBuf);

const body = out.join("\n").replace(/\n{3,}/g, "\n\n").trim();

const frontmatter = `---
title: "\u30105\u6708\u9023\u4f11\u3011\u6d77\u4e0a\u91e3\u308a\u5800\u306e\u4e88\u7d04\u306f\u3044\u3064\u307e\u3067\uff1f\u6df7\u96d1\u3068\u7a74\u5834\u306e\u63a2\u3057\u65b9\u3092\u89e3\u8aac"
publishDate: 2026-04-18
created: 2026-04-18T12:00:00+09:00
draft: false
category: "\u91e3\u308a\u65c5\u30ac\u30a4\u30c9"
slug: "may-holiday-tsuribori-reservation"
image: ./cover.jpg
tags:
  - "\u30b3\u30e9\u30e0"
  - "\u65c5\u884c"
  - "\u6d77\u4e0a\u91e3\u308a\u5800"
  - "\u4e88\u7d04"
  - "\u30b4\u30fc\u30eb\u30c7\u30f3\u30a6\u30a3\u30fc\u30af"
description: "5\u6708\u9023\u4f11\uff08\u61b2\u6cd5\u8a18\u5ff5\u65e5\u30fb\u307f\u3069\u308a\u306e\u65e5\u30fb\u3053\u3069\u3082\u306e\u65e5\u306a\u3069\uff09\u306e\u6d77\u4e0a\u91e3\u308a\u5800\u306f\u3001\u6e80\u5e2d\u304c\u524d\u63d0\u306e\u6fc0\u6226\u671f\u3002\u4e88\u7d04\u306e\u59a5\u5f53\u306a\u30bf\u30a4\u30df\u30f3\u30b0\u30014\u6708\u672b\u306b\u52d5\u3044\u305f\u3068\u304d\u306e\u73fe\u5b9f\u7684\u306a\u6253\u3061\u624b\u3001\u6df7\u96d1\u6642\u306e\u91e3\u308a\u5ea7\u306e\u6ce8\u610f\u70b9\u3001\u7a74\u5834\u306e\u63a2\u3057\u65b9\u3001\u5f53\u65e5\u306e\u7acb\u3061\u56de\u308a\u307e\u3067\u3092\u6574\u7406\u3057\u307e\u3057\u305f\u3002"
lastmod: "2026-04-18"
---

`;

const intro = `## \u306f\u3058\u3081\u306b

\u6d77\u4e0a\u91e3\u308a\u5800\u306f\u3001\u5929\u5019\u3084\u6f6e\u6c50\u306b\u5de6\u53f3\u3055\u308c\u306b\u304f\u304f\u3001\u300c\u91e3\u308a\u305f\u3044\u65e5\u306b\u884c\u3051\u308b\u300d\u5229\u70b9\u304c\u3042\u308a\u307e\u3059\u3002\u4e00\u65b9\u3067\u3001**5\u6708\u306e\u9023\u4f11\u30b7\u30fc\u30ba\u30f3**\uff08\u3068\u304f\u306b\u61b2\u6cd5\u8a18\u5ff5\u65e5\u30fb\u307f\u3069\u308a\u306e\u65e5\u30fb\u3053\u3069\u3082\u306e\u65e5\u306b\u307e\u305f\u304c\u308b\u4f11\u65e5\uff09\u306f\u3001\u30d5\u30a1\u30df\u30ea\u30fc\u5c64\u3084\u521d\u5fc3\u8005\u306e\u6765\u5834\u3082\u91cd\u306a\u308a\u3001\u4e88\u7d04\u3068\u73fe\u5730\u306e\u6df7\u96d1\u304c\u4e00\u6c17\u306b\u53b3\u3057\u304f\u306a\u308a\u307e\u3059\u3002

\u3053\u306e\u8a18\u4e8b\u3067\u306f\u3001**\u4e88\u7d04\u3092\u3044\u3064\u53d6\u308b\u306e\u304c\u73fe\u5b9f\u7684\u304b**\u3001**\u6df7\u96d1\u6642\u306b\u4f55\u304c\u8d77\u304d\u3084\u3059\u3044\u304b**\u3001**\u67a0\u304c\u6b8b\u308a\u306b\u304f\u3044\u6642\u671f\u306b\u3069\u3046\u52d5\u304f\u304b**\u3092\u3001\u91e3\u884c\u8a08\u753b\u306e\u6750\u6599\u3068\u3057\u3066\u307e\u3068\u3081\u307e\u3059\u3002

---

`;

const summary = `---

## \u307e\u3068\u3081

- **5\u6708\u9023\u4f11\u306e\u6d77\u4e0a\u91e3\u308a\u5800**\u306f\u3001\u4eba\u6c17\u65e5\u306f**\u6e80\u54e1\u304c\u57fa\u672c**\u3068\u8003\u3048\u3001**\u3060\u3044\u305f\u30442\u304b\u6708\u524d**\uff082\u6708\u4e0b\u65ec\u301c3\u6708\u4e0a\u65ec\u524d\u5f8c\uff09\u304b\u3089\u52d5\u3051\u308b\u3068\u9078\u629e\u80a2\u3092\u5e83\u3052\u3084\u3059\u3044\u3002
- **4\u6708\u672b**\u306b\u571f\u65e5\u795d\u306e\u30e1\u30a4\u30f3\u67a0\u3092\u671f\u5f85\u3059\u308b\u306e\u306f\u96e3\u3057\u304f\u3001**\u5e73\u65e5\u5bc4\u308a\u30fb\u5348\u5f8c\u4fbf\u30fb\u77ed\u6642\u9593**\u3001**\u96fb\u8a71\u306e\u307f\u30fb\u6e21\u8239\u30fb\u65b0\u898f\u30fb\u30a8\u30ea\u30a2\u5916\u3057**\u306a\u3069\u3067\u5019\u88dc\u3092\u5e83\u3052\u308b\u3002
- \u73fe\u5730\u306f**\u65e9\u7740**\u3068**\u30a8\u30b5\u306e\u4e8b\u524d\u78ba\u4fdd**\u3001\u4e57\u308a\u5408\u3044\u3067\u306f**\u30aa\u30de\u30c4\u30ea\u5bfe\u7b56**\u3092\u539a\u3081\u306b\u3002

\u9023\u4f11\u306e\u91e3\u884c\u306f\u3001\u91e3\u679c\u3060\u3051\u3067\u306a\u304f\u300c\u4e88\u7d04\u3068\u6e0b\u6ede\u306e\u52dd\u8ca0\u300d\u306b\u306a\u308a\u3084\u3059\u3044\u671f\u9593\u3067\u3059\u3002\u7121\u7406\u306e\u306a\u3044\u65e5\u7a0b\u3068\u65bd\u8a2d\u306e\u7d44\u307f\u5408\u308f\u305b\u3092\u9078\u3073\u3001\u6d77\u4e0a\u91e3\u308a\u5800\u306a\u3089\u3067\u306f\u306e\u4e00\u65e5\u3092\u697d\u3057\u3093\u3067\u304f\u3060\u3055\u3044\u3002
`;

let mdx = `${frontmatter}${intro}${body}\n\n${summary}`;
// Markdown ? **bold** ? <strong> ???????? $1 ?????????????????????
mdx = mdx.replace(/\*\*([^*]+)\*\*/g, (_, x) => `<strong>${x}</strong>`);

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, mdx, "utf8");
console.log("Wrote", outPath);

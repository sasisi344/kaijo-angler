import path from "path";
import { fileURLToPath } from "url";

import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import icon from "astro-icon";
import compress from "astro-compress";
import type { AstroIntegration } from "astro";

import astrowind from "./vendor/integration";
import {
  readingTimeRemarkPlugin,
  responsiveTablesRehypePlugin,
  lazyImagesRehypePlugin,
  customSlugifyRehypePlugin,
  trailingSlashLinksRehypePlugin,
} from "./src/utils/frontmatter";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { blogLegacyRedirects } from "./src/config/blog-legacy-redirects";
import { sitemapPageFilter } from "./src/config/sitemap-filter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (
  items: (() => AstroIntegration) | (() => AstroIntegration)[] = [],
) =>
  hasExternalScripts
    ? Array.isArray(items)
      ? items.map((item) => item())
      : [items()]
    : [];

export default defineConfig({
  output: "static",
  site: "https://kaijo-fishing.com",
  // Astrowind 統合も yaml から trailingSlash をセットするが、
  // `updateConfig` 経由だと image.endpoint.route の末尾スラッシュ補正が走らず
  // dev の `/_image` が 404 になる。ここでも明示してスキーマ変換を通す。
  trailingSlash: "always",
  // 旧WordPress の日付型URL（/2025/07/... 等133件）は 2026-07-29 に削除。
  // W29 GSC実績でクリック0・表示39回、GA4セッション0のため保持コストに見合わないと判断。
  redirects: { ...blogLegacyRedirects },

  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      filter: sitemapPageFilter,
    }),
    mdx(),
    icon({
      include: {
        tabler: ["*"],
        "flat-color-icons": [
          "template",
          "gallery",
          "approval",
          "document",
          "advertising",
          "currency-exchange",
          "voice-presentation",
          "business-contact",
          "database",
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ["dataLayer.push"] },
      }),
    ),

    compress({
      CSS: true,
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: "./src/config.yaml",
    }),
  ],

  image: {
    domains: ["cdn.pixabay.com"],
    // trailingSlash: always 向け。未指定だと `/_image` が生成され `/_image/` ルートと不一致になる
    endpoint: {
      route: "/_image/",
    },
  },

  markdown: {
    remarkPlugins: [readingTimeRemarkPlugin],
    rehypePlugins: [
      customSlugifyRehypePlugin,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          content: {
            type: "element",
            tagName: "span",
            properties: { className: ["anchor-link"], ariaHidden: "true" },
            children: [{ type: "text", value: "#" }],
          },
        },
      ],
      responsiveTablesRehypePlugin,
      lazyImagesRehypePlugin,
      trailingSlashLinksRehypePlugin,
    ],
  },

  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src"),
      },
    },
  },
});

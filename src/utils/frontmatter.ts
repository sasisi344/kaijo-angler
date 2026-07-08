import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';
import type { RehypePlugin, RemarkPlugin } from '@astrojs/markdown-remark';
import GithubSlugger from 'github-slugger';

const slugger = new GithubSlugger();

export const readingTimeRemarkPlugin: RemarkPlugin = () => {
  return function (tree, file) {
    const textOnPage = toString(tree);
    const readingTime = Math.ceil(getReadingTime(textOnPage).minutes);

    if (typeof file?.data?.astro?.frontmatter !== 'undefined') {
      file.data.astro.frontmatter.readingTime = readingTime;
    }
  };
};

export const responsiveTablesRehypePlugin: RehypePlugin = () => {
  return function (tree) {
    if (!tree.children) return;

    for (let i = 0; i < tree.children.length; i++) {
      const child = tree.children[i];

      if (child.type === 'element' && child.tagName === 'table') {
        tree.children[i] = {
          type: 'element',
          tagName: 'div',
          properties: {
            style: 'overflow:auto',
          },
          children: [child],
        };

        i++;
      }
    }
  };
};

export const lazyImagesRehypePlugin: RehypePlugin = () => {
  return function (tree) {
    if (!tree.children) return;

    visit(tree, 'element', function (node) {
      if (node.tagName === 'img') {
        node.properties.loading = 'lazy';
      }
    });
  };
};

export const customSlugifyRehypePlugin: RehypePlugin = () => {
  return function (tree) {
    slugger.reset();
    visit(tree, 'element', (node) => {
      if (node.tagName.match(/^h[1-6]$/)) {
        const text = toString(node);
        node.properties.id = slugger.slug(text);
      }
    });
  };
};

/** trailingSlash: always 向け。MD/MDX 内の相対・サイト内リンクに末尾 `/` を付ける */
export const trailingSlashLinksRehypePlugin: RehypePlugin = () => {
  const hasExtension = /\.[a-zA-Z0-9]{1,8}$/;

  return function (tree) {
    visit(tree, 'element', (node) => {
      if (node.tagName !== 'a' || typeof node.properties?.href !== 'string') return;

      const href = node.properties.href as string;
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        href.startsWith('http://') ||
        href.startsWith('https://') ||
        href.startsWith('//')
      ) {
        return;
      }

      const hashIndex = href.indexOf('#');
      const queryIndex = href.indexOf('?');
      let splitAt = href.length;
      if (hashIndex >= 0) splitAt = Math.min(splitAt, hashIndex);
      if (queryIndex >= 0) splitAt = Math.min(splitAt, queryIndex);

      const path = href.slice(0, splitAt);
      const suffix = href.slice(splitAt);
      if (!path || path.endsWith('/')) return;
      if (hasExtension.test(path)) return;

      node.properties.href = `${path}/${suffix}`;
    });
  };
};

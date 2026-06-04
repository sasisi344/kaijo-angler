# 次に控えているタスク

## GSC：URLのリダイレクト問題解決

AstroはデフォルトでURLに末尾スラッシュを付ける挙動になっているので、それが原因ですね。

**Astroの設定で統一する方法**

`astro.config.mjs` に `trailingSlash` オプションがあります。

```js
// astro.config.mjs
export default defineConfig({
  trailingSlash: 'always', // 末尾スラッシュありに統一（現状の動作に合わせる）
});
```

オプションは3つあります：

| 値 | 挙動 |
|---|---|
| `'always'` | スラッシュなしでアクセスされたらスラッシュありにリダイレクト |
| `'never'` | スラッシュありでアクセスされたらスラッシュなしにリダイレクト |
| `'ignore'` | リダイレクトしない（どちらも許容） |

**推奨対応**

現状すでにスラッシュありで動いているなら `'always'` を明示的に設定して、あわせて：

1. `sitemap.xml` のURLを末尾スラッシュありに統一
2. canonical タグもスラッシュありに統一
3. GSCでサイトマップを再送信

これでGSCが正規URLとリダイレクト先を同じと認識し、警告が消えるはずです。

ちなみにAstroのSitemapインテグレーション（`@astrojs/sitemap`）を使っていれば、`trailingSlash: 'always'` に合わせて自動でスラッシュありのURLを生成してくれます。
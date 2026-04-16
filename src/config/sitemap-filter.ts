/**
 * @astrojs/sitemap ? filter ? noindex ??????????
 * ?? URL ?????????????robots ? noindex ????????????????
 */
export function sitemapPageFilter(page: string): boolean {
  try {
    const pathname = new URL(page).pathname.replace(/\/$/, '') || '/';
    if (pathname.startsWith('/homes/')) return false;
    if (pathname.startsWith('/landing/')) return false;
    if (pathname === '/pricing' || pathname === '/services') return false;
    return true;
  } catch {
    return true;
  }
}

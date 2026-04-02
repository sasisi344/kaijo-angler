import { getCollection } from 'astro:content';

export const prerender = true;

export async function GET() {
  const posts = await getCollection('post');
  const tactics = await getCollection('tactics');
  const facilities = await getCollection('fishing-facility');
  const columns = await getCollection('column');

  const searchIndex = [
    ...posts.filter(p => !p.data.draft).map(p => ({
      title: p.data.title,
      excerpt: p.data.excerpt || '',
      href: `/blog/${p.id}`,
      type: '記事'
    })),
    ...tactics.filter(p => !p.data.draft && !p.id.endsWith('index')).map(p => ({
      title: p.data.title,
      excerpt: p.data.excerpt || '',
      href: `/tactics/${p.id}`,
      type: '攻略法'
    })),
    ...facilities.filter(p => !p.data.draft && !p.id.endsWith('index')).map(p => ({
      title: p.data.title,
      excerpt: p.data.prefecture || '',
      href: `/fishing-facility/${p.id}`,
      type: '釣り場'
    })),
    ...columns.filter(p => !p.data.draft && !p.id.endsWith('index')).map(p => ({
      title: p.data.title,
      excerpt: '',
      href: `/column/${p.id}`,
      type: 'コラム'
    }))
  ];

  return new Response(JSON.stringify(searchIndex), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}

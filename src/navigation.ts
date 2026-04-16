import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'ホーム',
      href: getPermalink('/'),
    },
    {
      text: '釣り場を探す',
      links: [
        { text: '主要な釣り場一覧', href: getPermalink('/fishing-facility') },
        { text: '東日本エリア', href: getPermalink('/fishing-facility/east-japan') },
        { text: '中日本エリア', href: getPermalink('/fishing-facility/center-japan') },
        { text: '西日本エリア', href: getPermalink('/fishing-facility/west-japan') },
      ],
    },
    {
      text: '攻略法',
      links: [
        { text: '攻略法トップ', href: getPermalink('/tactics') },
        { text: '初心者ガイド', href: getPermalink('/tactics/beginner') },
        { text: '魚種別攻略', href: getPermalink('/tactics/fish-strategy') },
        { text: '仕掛け・道具', href: getPermalink('/tactics/gear') },
      ],
    },
    {
      text: 'ブログ',
      href: getBlogPermalink(),
    },
  ],
  actions: [],
};

export const footerData = {
  links: [
    {
      title: '釣り場を探す',
      links: [
        { text: '東日本エリア', href: getPermalink('/fishing-facility/east-japan') },
        { text: '中部エリア', href: getPermalink('/fishing-facility/center-japan') },
        { text: '西日本エリア', href: getPermalink('/fishing-facility/west-japan') },
      ],
    },
    {
      title: 'コンテンツ',
      links: [
        { text: '必釣タクティクス', href: getPermalink('/tactics') },
        { text: 'ブログ記事一覧', href: getBlogPermalink() },
        { text: '初心者ガイド', href: getPermalink('/tactics/beginner') },
      ],
    },
    {
      title: 'サイト情報',
      links: [
        { text: '運営者について', href: getPermalink('/about') },
        { text: 'お問い合わせ', href: 'https://docs.google.com/forms/d/e/1FAIpQLSegPHwMqUtKjHl0y1OTPrNr0aaW7Hmt7jluuZ9FUQYdv362Dg/viewform?usp=sf_link' },
        { text: 'プライバシーポリシー', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: '利用ガイド（サイトマップ）', href: getPermalink('/terms') },
    { text: 'プライバシーポリシー', href: getPermalink('/privacy') },
    { text: '釣り場更新RSS', href: getAsset('/facilities-rss.xml') },
  ],
  socialLinks: [
    { ariaLabel: 'ブログRSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    © 2026 海上アングラー · All rights reserved.
  `,
};

/**
 * はじめての人向けの「安心度」判定。
 * frontmatter の facility_details.first_timer（事実）から計算し、判定そのものは記事に書かない。
 * 設計: .workspace/.task/first-timer-design.md
 */
import type { CollectionEntry } from 'astro:content';
import { normalizeAmenityValue } from '~/utils/facility-helpers';

type FacilityDetails = NonNullable<CollectionEntry<'fishing-facility'>['data']['facility_details']>;
export type FirstTimerData = NonNullable<FacilityDetails['first_timer']>;

/** true=満たす / false=確認した上で満たさない / null=未確認 */
export type CheckResult = boolean | null;

export type FirstTimerLevel = 'safe' | 'prepare' | 'experienced' | 'unknown';

export interface FirstTimerCheck {
  key: 'gear' | 'prepare' | 'catch' | 'support' | 'processing';
  question: string;
  result: CheckResult;
}

export interface FirstTimerResult {
  level: FirstTimerLevel;
  checks: FirstTimerCheck[];
  /** 自分で用意するもの（共通の持ち物から貸出品を引いたもの） */
  bring: string[];
  /** 未確認の項目から作る「予約時に聞くこと」 */
  askOnReservation: string[];
  /** 確認日が12か月以内か（おすすめ候補の条件） */
  isFresh: boolean;
}

export const LEVEL_LABEL: Record<FirstTimerLevel, string> = {
  safe: 'はじめてでも安心',
  prepare: '準備すれば安心',
  experienced: '経験者向け',
  unknown: '確認中',
};

export const RENTAL_LABEL: Record<string, string> = {
  rod: '竿',
  reel: 'リール',
  rig: '仕掛け',
  bait: 'エサ',
  tamo: 'タモ',
  bucket: 'バケツ',
  cooler: 'クーラー',
};

export const LENDING_LABEL: Record<string, string> = {
  life_jacket: 'ライフジャケット',
  cooler: 'クーラーボックス',
  tamo: 'タモ',
  gloves: '手袋',
  rain_gear: '雨具',
};

export const SUPPORT_LABEL: Record<string, string> = {
  instruction: '使い方を教えてくれる',
  bait: 'エサ付けを手伝ってくれる',
  landing: 'タモで取り込んでくれる',
  unhook: '針を外してくれる',
};

export const CATCH_LABEL: Record<string, string> = {
  guarantee: '釣果保証あり',
  souvenir: 'お土産魚あり',
  none: '釣果保証・お土産なし',
};

export const PROCESSING_LABEL: Record<string, string> = {
  free: '締め・捌きあり（無料）',
  paid: '締め・捌きあり（有料）',
  none: '締め・捌きサービスなし',
};

/** 貸出がなければ自分で用意するもの。key は lending / rental_items の値 */
const BRING_IF_NOT_LENT: { key: string; label: string }[] = [
  { key: 'cooler', label: 'クーラーボックス（釣った魚の持ち帰り用）' },
  { key: 'life_jacket', label: 'ライフジャケット' },
  { key: 'gloves', label: '手袋（魚のトゲ・ヒレ対策）' },
  { key: 'rain_gear', label: '雨具（カッパ）' },
];

/** 施設に関係なく持っていくもの */
const BRING_ALWAYS = ['タオル', '飲み物・軽食', '帽子・日焼け止め（夏）／防寒着（冬）'];

function hasAll(list: readonly string[] | undefined, required: string[]): CheckResult {
  if (!list) return null;
  return required.every((r) => list.includes(r));
}

function hasAny(list: readonly string[] | undefined, candidates: string[]): CheckResult {
  if (!list) return null;
  return candidates.some((c) => list.includes(c));
}

function isWithinMonths(date: string | undefined, months: number): boolean {
  if (!date) return false;
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return false;
  const limit = new Date();
  limit.setMonth(limit.getMonth() - months);
  return d >= limit;
}

export function evaluateFirstTimer(details: FacilityDetails | undefined): FirstTimerResult | null {
  const ft = details?.first_timer;
  if (!ft) return null;

  // エサは貸し出しでなく受付で売っている施設が多いので、bait_sale も「手ぶらで揃う」に数える
  const baitSold = normalizeAmenityValue(details?.amenities?.bait_sale);
  const gear: CheckResult = ft.beginner_plan
    ? true
    : hasAll(ft.rental_items, baitSold ? ['rod', 'rig'] : ['rod', 'rig', 'bait']);

  const toiletRaw = details?.amenities?.toilet;
  const lifeJacket = hasAny(ft.lending, ['life_jacket']);
  const toilet: CheckResult = toiletRaw === undefined ? null : normalizeAmenityValue(toiletRaw);
  const prepare: CheckResult =
    lifeJacket === false || toilet === false ? false : lifeJacket === null || toilet === null ? null : true;

  const stocked = (details?.stocked_fish?.length ?? 0) > 0;
  const catchOk: CheckResult =
    ft.catch_assurance === 'guarantee' || ft.catch_assurance === 'souvenir' || stocked
      ? true
      : ft.catch_assurance === 'none'
        ? false
        : null;

  const support = hasAny(ft.staff_support, ['instruction', 'landing']);

  const processing: CheckResult =
    ft.processing === undefined ? null : ft.processing !== 'none';

  const checks: FirstTimerCheck[] = [
    { key: 'gear', question: '道具がなくても釣りできる？', result: gear },
    { key: 'prepare', question: '自分で用意するものは？', result: prepare },
    { key: 'catch', question: '本当に釣れる？', result: catchOk },
    { key: 'support', question: '使い方が分からなくても大丈夫？', result: support },
    { key: 'processing', question: '釣れた魚はどうする？', result: processing },
  ];

  const unknownCount = checks.filter((c) => c.result === null).length;
  const okCount = checks.filter((c) => c.result === true).length;

  let level: FirstTimerLevel;
  if (gear === false || support === false) level = 'experienced';
  else if (unknownCount >= 2) level = 'unknown';
  else if (okCount === 5) level = 'safe';
  else if (okCount === 4 && gear === true && support === true) level = 'prepare';
  else if (unknownCount > 0) level = 'unknown';
  else level = 'experienced';

  const provided = new Set<string>([...(ft.lending ?? []), ...(ft.rental_items ?? [])]);
  const bring = [
    ...BRING_IF_NOT_LENT.filter((b) => !provided.has(b.key)).map((b) => b.label),
    ...BRING_ALWAYS,
  ];

  const askOnReservation: string[] = [];
  if (!ft.rental_items) askOnReservation.push('レンタルで借りられる道具（竿・仕掛け・エサ）と料金');
  if (!ft.lending) askOnReservation.push('ライフジャケット・クーラーボックスの貸し出しがあるか');
  if (!ft.staff_support) askOnReservation.push('スタッフが使い方を教えたり、取り込みを手伝ってくれるか');
  if (!ft.catch_assurance && !stocked) askOnReservation.push('釣果保証やお土産魚の制度があるか');
  if (!ft.processing) askOnReservation.push('釣った魚を締めたり捌いたりしてもらえるか');

  return {
    level,
    checks,
    bring,
    askOnReservation,
    isFresh: isWithinMonths(ft.verified_at, 12),
  };
}

/** まとめ・ランキング・診断で「はじめてにおすすめ」に出してよいか */
export function isFirstTimerPick(result: FirstTimerResult | null): boolean {
  return !!result && result.isFresh && (result.level === 'safe' || result.level === 'prepare');
}

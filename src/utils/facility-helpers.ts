/**
 * amenity フィールドの真値を正規化する。
 * スキーマが `boolean | string` の混在を許容しているため、
 * 'false' / 'なし' を明示的に false として扱う。
 */
export function normalizeAmenityValue(val: unknown): boolean {
  if (val === undefined || val === null || val === false) return false;
  if (val === "false" || val === "なし") return false;
  return Boolean(val);
}

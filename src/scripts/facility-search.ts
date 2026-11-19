/**
 * /fishing-facility/ の条件検索（KA-PORTAL-04）。
 * 必須: 地域・種類・行く日（休業期間に入る施設を外す）。希望: 合う数の多い順に並べる。
 * 書かれていない項目は「未確認」で、合わない扱いにしない。同じ数のときは初期 HTML の並び（北から・名前順）。
 * 「現在地から近い順」: 要件 .workspace/_inbox/2026-11-19-KA-PORTAL-04-near-me-plan.md。
 * 位置はブラウザーの中で距離の計算にだけ使い、どこにも送らない・残さない。
 */

type State = "yes" | "no" | "unknown";
interface Closure { from: string; to: string | null; reopen: string | null }

const PAGE = 24;

const PREFS: { name: string; label: Record<State, string>; read: (el: HTMLElement, fish: string) => State }[] = [
  {
    name: "rental",
    label: { yes: "✓ 竿を借りられる", no: "× 貸し竿なし", unknown: "？ 貸し竿は未確認" },
    read: (el) => el.dataset.rental as State,
  },
  {
    name: "firstTimer",
    label: { yes: "✓ はじめてでも安心（確認済み）", no: "× 道具を持っている人向け", unknown: "？ はじめて向けかは未確認" },
    read: (el) => el.dataset.firsttimer as State,
  },
  {
    name: "fish",
    label: { yes: "✓ 狙いたい魚がいる", no: "× 狙いたい魚は対象外", unknown: "？ 対象魚は未確認" },
    read: (el, fish) => {
      const list = (el.dataset.fish || "").split("|").filter(Boolean);
      if (!list.length) return "unknown";
      return list.some((f) => f.includes(fish)) ? "yes" : "no";
    },
  },
];

const todayJst = () => new Date(Date.now() + 9 * 60 * 60 * 1000).toISOString().slice(0, 10);
const fmtMd = (ymd: string) => `${Number(ymd.slice(5, 7))}/${Number(ymd.slice(8, 10))}`;

/** 初日・最終日はどちらも休業。to がなければ再開日未定 */
export function closureOn(closures: Closure[], date: string): Closure | null {
  return closures.find((c) => c.from <= date && (!c.to || date <= c.to)) ?? null;
}

/** 2点間の直線距離（km）。ハバーサイン式 */
export function distanceKm(a: { lat: number; lng: number }, b: { lat: number; lng: number }): number {
  const rad = (d: number) => (d * Math.PI) / 180;
  const dLat = rad(b.lat - a.lat);
  const dLng = rad(b.lng - a.lng);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(rad(a.lat)) * Math.cos(rad(b.lat)) * Math.sin(dLng / 2) ** 2;
  return 2 * 6371 * Math.asin(Math.min(1, Math.sqrt(h)));
}

const fmtKm = (km: number) => (km < 10 ? km.toFixed(1) : String(Math.round(km)));

function track(name: string, params: Record<string, string | number>) {
  const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof g === "function") g("event", name, params);
}

function init() {
  const form = document.getElementById("fs-form") as HTMLFormElement | null;
  const list = document.getElementById("fs-results");
  if (!form || !list || form.dataset.ready) return;
  form.dataset.ready = "1";

  const cards = Array.from(list.querySelectorAll<HTMLElement>(".fs-card"));
  const original = cards.slice();
  const summary = document.getElementById("fs-summary")!;
  const empty = document.getElementById("fs-empty")!;
  const more = document.getElementById("fs-more")!;
  const dateInput = form.elements.namedItem("date") as HTMLInputElement;
  dateInput.value = todayJst();

  let shown = PAGE;
  let trackTimer: number | undefined;
  let origin: { lat: number; lng: number } | null = null;
  const nearBtn = document.getElementById("fs-near") as HTMLButtonElement | null;
  const nearMsg = document.getElementById("fs-near-msg");
  const NEAR_LABEL = "📍 現在地から近い順";

  const value = (n: string) => {
    const el = form.elements.namedItem(n) as HTMLInputElement | HTMLSelectElement | RadioNodeList;
    return el instanceof HTMLInputElement && el.type === "checkbox" ? (el.checked ? "1" : "") : el.value;
  };

  const apply = (resetPage = true) => {
    if (resetPage) shown = PAGE;
    const area = value("area");
    const type = value("type");
    const date = /^\d{4}-\d{2}-\d{2}$/.test(value("date")) ? value("date") : todayJst();
    const showClosed = !!value("showClosed");
    const fish = value("fish");
    const active = PREFS.filter((p) => (p.name === "fish" ? !!fish : form.elements.namedItem(p.name) ? !!value(p.name) : false));

    const hits: { el: HTMLElement; score: number; idx: number; km: number }[] = [];
    original.forEach((el, idx) => {
      const closures: Closure[] = JSON.parse(el.dataset.closures || "[]");
      const closed = closureOn(closures, date);
      const badge = el.querySelector<HTMLElement>(".fs-closed")!;
      badge.classList.toggle("hidden", !closed);
      if (closed) {
        badge.textContent = `この日は休業（${closed.reopen ? fmtMd(closed.reopen) + "再開予定" : closed.to ? "〜" + fmtMd(closed.to) : "再開日未定"}）`;
      }

      const ok = (!area || el.dataset.area === area) && (!type || el.dataset.type === type) && (showClosed || !closed);

      const reasons = el.querySelector<HTMLElement>(".fs-reasons")!;
      reasons.replaceChildren();
      let score = 0;
      active.forEach((p) => {
        const st = p.read(el, fish);
        if (st === "yes") score += 1;
        const li = document.createElement("li");
        li.textContent = p.label[st];
        li.className =
          "px-2 py-0.5 rounded-full " +
          (st === "yes"
            ? "bg-k-mint-soft text-default"
            : st === "no"
              ? "bg-gray-100 dark:bg-slate-800 text-muted line-through"
              : "bg-k-sky-soft text-default");
        reasons.appendChild(li);
      });

      // 近い順のときだけ距離を出す。座標がなければ「距離不明」で末尾へ
      let km = Infinity;
      const dist = el.querySelector<HTMLElement>(".fs-distance");
      if (origin) {
        const lat = Number(el.dataset.lat);
        const lng = Number(el.dataset.lng);
        if (el.dataset.lat && el.dataset.lng && Number.isFinite(lat) && Number.isFinite(lng)) {
          km = distanceKm(origin, { lat, lng });
        }
        if (dist) {
          dist.textContent =
            km === Infinity ? "距離不明" : `直線で約${fmtKm(km)}km${el.dataset.ferry ? "（渡船あり）" : ""}`;
          dist.classList.remove("hidden");
        }
      } else if (dist) {
        dist.textContent = "";
        dist.classList.add("hidden");
      }

      el.style.display = "none";
      if (ok) hits.push({ el, score, idx, km });
    });

    hits.sort((a, b) => (origin ? a.km - b.km || a.idx - b.idx : b.score - a.score || a.idx - b.idx));
    hits.forEach((h, i) => {
      list.appendChild(h.el);
      h.el.style.display = i >= shown ? "none" : "";
    });

    more.classList.toggle("hidden", hits.length <= shown);
    empty.classList.toggle("hidden", hits.length > 0);
    const dateLabel = date === todayJst() ? "今日" : fmtMd(date);
    summary.textContent = hits.length
      ? `${hits.length}施設が見つかりました（${dateLabel}に休業の施設は${showClosed ? "含めています" : "外しています"}）`
      : "0施設";

    window.clearTimeout(trackTimer);
    trackTimer = window.setTimeout(
      () => track("facility_search", { area: area || "all", type: type || "all", results: hits.length, prefs: active.map((p) => p.name).join(",") || "none" }),
      800,
    );
  };

  const setNear = (on: boolean) => {
    if (!nearBtn) return;
    nearBtn.setAttribute("aria-pressed", on ? "true" : "false");
    nearBtn.textContent = on ? "📍 近い順で表示中（解除）" : NEAR_LABEL;
    if (nearMsg) nearMsg.textContent = on ? "距離は直線です。車や船の所要時間とは違います。" : "";
  };
  const clearNear = () => {
    origin = null;
    setNear(false);
  };

  nearBtn?.addEventListener("click", () => {
    if (origin) {
      clearNear();
      apply();
      return;
    }
    const fail = (result: string) => {
      nearBtn.disabled = false;
      nearBtn.textContent = NEAR_LABEL;
      if (nearMsg) nearMsg.textContent = "位置情報を使えませんでした。地域から選んでください。";
      (form.elements.namedItem("area") as HTMLSelectElement).focus();
      track("facility_near_me", { result, results: 0 });
    };
    if (!("geolocation" in navigator)) return fail("unsupported");
    nearBtn.disabled = true;
    nearBtn.textContent = "現在地を確認しています…";
    if (nearMsg) nearMsg.textContent = "";
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        nearBtn.disabled = false;
        origin = { lat: pos.coords.latitude, lng: pos.coords.longitude };
        (form.elements.namedItem("area") as HTMLSelectElement).value = "";
        setNear(true);
        apply();
        const n = original.filter((el) => el.style.display !== "none").length;
        track("facility_near_me", { result: "granted", results: n });
      },
      (err) => fail(err.code === err.PERMISSION_DENIED ? "denied" : err.code === err.TIMEOUT ? "timeout" : "error"),
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 600000 },
    );
  });

  form.addEventListener("change", (e) => {
    // 地域と近い順は同時に使わない。地域を選んだら近い順を解除する
    const t = e.target as HTMLElement | null;
    if (origin && t?.getAttribute("name") === "area" && value("area")) clearNear();
    apply();
  });
  more.addEventListener("click", () => {
    shown += PAGE;
    apply(false);
  });
  document.getElementById("fs-reset")?.addEventListener("click", () => {
    form.reset();
    dateInput.value = todayJst();
    clearNear();
    apply();
  });
  document.querySelectorAll<HTMLButtonElement>(".fs-relax").forEach((btn) =>
    btn.addEventListener("click", () => {
      const r = btn.dataset.relax;
      if (r === "area") (form.elements.namedItem("area") as HTMLSelectElement).value = "";
      if (r === "type") {
        const all = form.querySelector<HTMLInputElement>('input[name="type"][value=""]');
        if (all) all.checked = true;
      }
      if (r === "closed") (form.elements.namedItem("showClosed") as HTMLInputElement).checked = true;
      apply();
    }),
  );
  list.addEventListener("click", (e) => {
    const a = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[data-placement]");
    if (a) track("facility_search_click", { placement: a.dataset.placement || "" });
  });

  apply();
}

document.addEventListener("astro:page-load", init);
init();

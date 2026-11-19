/**
 * /fishing-facility/ の条件検索（KA-PORTAL-04）。
 * 必須: 地域・種類・行く日（休業期間に入る施設を外す）。希望: 合う数の多い順に並べる。
 * 書かれていない項目は「未確認」で、合わない扱いにしない。同じ数のときは初期 HTML の並び（北から・名前順）。
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

    const hits: { el: HTMLElement; score: number; idx: number }[] = [];
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

      el.style.display = "none";
      if (ok) hits.push({ el, score, idx });
    });

    hits.sort((a, b) => b.score - a.score || a.idx - b.idx);
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

  form.addEventListener("change", () => apply());
  more.addEventListener("click", () => {
    shown += PAGE;
    apply(false);
  });
  document.getElementById("fs-reset")?.addEventListener("click", () => {
    form.reset();
    dateInput.value = todayJst();
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

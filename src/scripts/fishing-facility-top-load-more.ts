/** Fishing-facility index: regional load-more (delegated clicks, View Transitions). */
let initialized = false;

function initFishingFacilityTopLoadMore(): void {
  document.addEventListener("click", (e) => {
    const btn = (e.target as HTMLElement).closest<HTMLButtonElement>(
      "[data-load-more]",
    );
    if (!btn) return;

    const region = btn.getAttribute("data-load-more");
    if (!region) return;

    const hiddenItems = Array.from(
      document.querySelectorAll<HTMLElement>(
        `[data-region="${region}"].hidden`,
      ),
    );

    const itemsToReveal = hiddenItems.slice(0, 6);
    itemsToReveal.forEach((item) => {
      item.classList.remove("hidden");
      setTimeout(() => item.classList.remove("opacity-0"), 10);
    });

    if (hiddenItems.length <= 6) {
      const wrap = btn.parentElement;
      if (wrap) wrap.style.display = "none";
    }
  });
}

function run(): void {
  if (initialized) return;
  initialized = true;
  initFishingFacilityTopLoadMore();
}

document.addEventListener("astro:page-load", run);
document.addEventListener("DOMContentLoaded", run);

export {};

/** Parent facility page: child grid load-more + filters (View Transitions). */
let initialized = false;

function initFacilityParentGrid(): void {
  const grid = document.getElementById("facility-grid");
  if (!grid) return;

  const btn = document.getElementById("load-more-btn");
  const container = document.getElementById("load-more-container");
  const gridItems = Array.from(
    document.querySelectorAll<HTMLElement>("[data-facility-item]"),
  );
  const hiddenByDefaultItems = document.querySelectorAll<HTMLElement>(
    ".facility-hidden-default",
  );

  if (btn && container) {
    btn.addEventListener("click", () => {
      const hiddenItems = Array.from(hiddenByDefaultItems).filter(
        (item) =>
          !item.classList.contains("filtered-out") &&
          item.classList.contains("facility-hidden-default"),
      );

      const itemsToReveal = hiddenItems.slice(0, 6);
      itemsToReveal.forEach((item) => {
        item.classList.remove("hidden", "facility-hidden-default");
        item.style.transition = "opacity 0.5s ease-in-out";
        setTimeout(() => {
          item.classList.remove("opacity-0");
          item.style.opacity = "";
        }, 10);
      });

      if (hiddenItems.length <= 6) {
        container.style.display = "none";
      }
    });
  }

  const form = document.getElementById("facility-filter-form");
  if (!form) return;

  const filterFish = document.getElementById(
    "filter-fish",
  ) as HTMLSelectElement | null;
  const filterRental = document.getElementById(
    "filter-rental",
  ) as HTMLSelectElement | null;
  const filterToilet = document.getElementById(
    "filter-toilet",
  ) as HTMLSelectElement | null;
  const filterReset = document.getElementById("filter-reset");
  if (!filterFish || !filterRental || !filterToilet || !filterReset) return;

  const updateFilter = () => {
    const fishVal = filterFish.value;
    const rentalVal = filterRental.value;
    const toiletVal = filterToilet.value;

    gridItems.forEach((item) => {
      const itemFish = item.getAttribute("data-fish") || "";
      const itemRental = item.getAttribute("data-rental");
      const itemToilet = item.getAttribute("data-toilet");

      let match = true;
      if (fishVal && !itemFish.split(",").includes(fishVal)) match = false;
      if (rentalVal && itemRental !== rentalVal) match = false;
      if (toiletVal && itemToilet !== toiletVal) match = false;

      if (match) {
        item.classList.remove("hidden", "opacity-0", "filtered-out");
        item.style.opacity = "";
        item.style.transition = "";
      } else {
        item.classList.add("hidden", "opacity-0", "filtered-out");
        item.style.opacity = "";
        item.style.transition = "";
      }
    });

    if (container) {
      if (fishVal || rentalVal || toiletVal) {
        container.style.display = "none";
      } else {
        container.style.display = "block";
        gridItems.forEach((item, idx) => {
          if (idx >= 6) {
            item.classList.add(
              "hidden",
              "opacity-0",
              "facility-hidden-default",
            );
            item.style.opacity = "";
            item.style.transition = "";
          } else {
            item.classList.remove(
              "hidden",
              "opacity-0",
              "facility-hidden-default",
            );
            item.style.opacity = "";
            item.style.transition = "";
          }
        });
      }
    }
  };

  filterFish.addEventListener("change", updateFilter);
  filterRental.addEventListener("change", updateFilter);
  filterToilet.addEventListener("change", updateFilter);

  filterReset.addEventListener("click", () => {
    filterFish.value = "";
    filterRental.value = "";
    filterToilet.value = "";
    updateFilter();
  });
}

function run(): void {
  if (initialized) return;
  initialized = true;
  initFacilityParentGrid();
}

document.addEventListener("astro:page-load", run);
document.addEventListener("DOMContentLoaded", run);

export {};

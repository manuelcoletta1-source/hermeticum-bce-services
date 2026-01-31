/**
 * HERMETICUM B.C.E. — UI include loader
 * Purpose: inject canonical header/footer partials across static GitHub Pages.
 * Policy: no custody, no tracking, no external calls beyond same-origin fetch.
 */

(async () => {
  const BASE = "/hermeticum-bce-platform"; // repo name for GitHub Pages pathing

  async function inject(selector, url) {
    const el = document.querySelector(selector);
    if (!el) return;

    try {
      const res = await fetch(url, { cache: "no-store" });
      if (!res.ok) {
        el.innerHTML = "";
        return;
      }
      el.innerHTML = await res.text();
    } catch {
      // Fail-closed: if includes fail, do not render partials.
      el.innerHTML = "";
    }
  }

  window.addEventListener("DOMContentLoaded", async () => {
    await inject("[data-include='header']", `${BASE}/partials/header.html`);
    await inject("[data-include='footer']", `${BASE}/partials/footer.html`);
  });
})();

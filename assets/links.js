/* Canonical links — single source of truth (Hermeticum B.C.E.) */
(function () {
  const LINKS = {
    corporate: "https://manuelcoletta1-source.github.io/hermeticum-bce/",
    platform: "https://manuelcoletta1-source.github.io/hermeticum-bce-platform/",
    b2b: "https://manuelcoletta1-source.github.io/hermeticum-bce-b2b/",
    b2g: "https://manuelcoletta1-source.github.io/hermeticum-bce-b2g/",
    technology: "https://manuelcoletta1-source.github.io/Hermeticum-B.C.E.-Technology/",
    ipr: "https://manuelcoletta1-source.github.io/hermeticum-bce-ipr/",
    unebdo: "https://manuelcoletta1-source.github.io/unebdo/",
    opc: "https://manuelcoletta1-source.github.io/opc/",
    registry: "https://manuelcoletta1-source.github.io/ue-ipr-registry/",
    gitjoker: "https://manuelcoletta1-source.github.io/gitjoker-c2/"
  };

  function applyLinks(root) {
    (root || document).querySelectorAll("[data-link]").forEach((el) => {
      const key = el.getAttribute("data-link");
      const url = LINKS[key];
      if (!url) return;
      if (el.tagName === "A") el.setAttribute("href", url);
      else el.textContent = url;
    });
  }

  window.HBCE_LINKS = LINKS;
  window.applyHBCELinks = applyLinks;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => applyLinks(document));
  } else {
    applyLinks(document);
  }
})();

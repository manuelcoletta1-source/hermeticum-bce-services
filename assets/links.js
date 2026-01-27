/* Canonical links — single source of truth (UE-first) */
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
    gitjoker: "https://manuelcoletta1-source.github.io/gitjoker-c2/",
    ipr_core: "https://manuelcoletta1-source.github.io/ipr-core/",
    ipr_gate: "https://manuelcoletta1-source.github.io/ipr-gate/",
    ipr_comply: "https://manuelcoletta1-source.github.io/ipr-comply/",
    ipr_exchange: "https://manuelcoletta1-source.github.io/ipr-exchange/"
  };

  // Update any element with data-link="key"
  function applyLinks(root) {
    const nodes = (root || document).querySelectorAll("[data-link]");
    nodes.forEach((el) => {
      const key = el.getAttribute("data-link");
      const url = LINKS[key];
      if (!url) return;
      // For anchors set href. For others set textContent (optional use-case).
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

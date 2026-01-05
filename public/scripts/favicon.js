(() => {
  const version = Date.now();
  let isUpdating = false;

  function update() {
    if (isUpdating) return;
    isUpdating = true;

    try {
      const lights = document.querySelectorAll('[id="favicon-light"]');
      const darks = document.querySelectorAll('[id="favicon-dark"]');

      if (lights.length === 0 && darks.length === 0) return;

      const path = document.hidden ? "" : "Icon.svg";
      const lightHref = `/${path || "LightIcon.svg"}?v=${version}`;
      const darkHref = `/${path || "DarkIcon.svg"}?v=${version}`;

      lights.forEach((l, i) => {
        if (l.getAttribute("href") !== lightHref) {
          l.setAttribute("href", lightHref);
        }
        if (i > 0) l.remove();
      });

      darks.forEach((d, i) => {
        if (d.getAttribute("href") !== darkHref) {
          d.setAttribute("href", darkHref);
        }
        if (i > 0) d.remove();
      });
    } finally {
      isUpdating = false;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", update);
  } else {
    update();
  }

  document.addEventListener("visibilitychange", update);

  const observer = new MutationObserver((mutations) => {
    if (isUpdating) return;

    for (const mutation of mutations) {
      if (mutation.type === "childList" || mutation.type === "attributes") {
        update();
        break;
      }
    }
  });

  observer.observe(document.head, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["href", "id"],
  });
})();

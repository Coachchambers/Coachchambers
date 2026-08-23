// Reveal sections as they enter the viewport.
(function () {
  var targets = document.querySelectorAll(".reveal");
  if (!targets.length) return;

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "0px 0px -10% 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();

// Highlight the price card the visitor picks before heading to Instagram.
(function () {
  var cards = document.querySelectorAll(".price-card");
  if (!cards.length) return;

  cards.forEach(function (card) {
    card.addEventListener("click", function () {
      cards.forEach(function (c) { c.classList.remove("selected"); });
      card.classList.add("selected");
    });
  });
})();

// Count which outbound action a visitor takes, so we can see whether the page
// does its job. GoatCounter events only, no cookies and no personal data.
(function () {
  function track(name, title) {
    if (!window.goatcounter || !window.goatcounter.count) return;
    window.goatcounter.count({ path: name, title: title, event: true });
  }

  function label(el) {
    var href = el.getAttribute("href") || "";
    if (href.indexOf("nutrilize") > -1) return ["erstgespraech-buchen", "Klick auf Erstgespräch buchen"];
    if (href.indexOf("720928") > -1) return ["guide-pullup", "Klick auf Pull-Up Guide"];
    if (href.indexOf("723624") > -1) return ["guide-ernaehrung", "Klick auf Ernährungs-Guide"];
    if (href.indexOf("instagram") > -1) {
      var card = el.closest(".price-card");
      if (card) {
        var h3 = card.querySelector("h3");
        var name = (h3 ? h3.innerText : "Paket").trim().toLowerCase()
          .replace(/ä/g, "ae").replace(/ö/g, "oe").replace(/ü/g, "ue").replace(/ß/g, "ss")
          .replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
        return ["paket-" + name, "Klick auf Paket " + (h3 ? h3.innerText.trim() : "")];
      }
      return ["instagram", "Klick auf Instagram"];
    }
    return null;
  }

  document.addEventListener("click", function (e) {
    var link = e.target.closest("a[href]");
    if (!link) return;
    var l = label(link);
    if (l) track(l[0], l[1]);
  });
})();

// Aufklappbares Menü für schmale Displays. Ohne Skript bleibt das Menü
// im Quelltext vorhanden, nur eingeklappt.
(function () {
  var toggle = document.querySelector(".navtoggle");
  var menu = document.getElementById("hauptmenue");
  if (!toggle || !menu) return;

  function setOpen(open) {
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Nach dem Sprung zum Abschnitt wieder zuklappen.
  menu.addEventListener("click", function (e) {
    if (e.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") setOpen(false);
  });
})();

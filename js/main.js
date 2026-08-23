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

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

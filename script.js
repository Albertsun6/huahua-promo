(function () {
  var header = document.querySelector(".site-header");
  var video = document.querySelector(".hero-video");

  function onScroll() {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (!video) return;

  var tryPlay = video.play();
  if (tryPlay && typeof tryPlay.catch === "function") {
    tryPlay.catch(function () {
      video.controls = true;
    });
  }
})();

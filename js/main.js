// JS para navegação móvel e efeitos de scroll
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.getElementById("navigation-mobile-toggle");
  const mobileClose = document.getElementById("navigation-mobile-close");
  const mobileOverlay = document.getElementById("navigation-mobile-overlay");
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link");

  let scrollY = 0;

  function openMenu() {
    scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    mobileOverlay.classList.add("is-open");
  }

  function closeMenu() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.width = "";

    window.scrollTo(0, scrollY);

    mobileOverlay.classList.remove("is-open");
  }

  mobileToggle.addEventListener("click", openMenu);
  mobileClose.addEventListener("click", closeMenu);

  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-open")) {
      closeMenu();
    }
  });

  let lastScroll = 0;
  const navWrapper = document.querySelector(".navigation-wrapper");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      navWrapper.style.boxShadow = "none";
      navWrapper.style.background = "var(--color-surface)";
      return;
    }

    if (currentScroll > 50) {
      navWrapper.style.boxShadow = "0 10px 30px -10px rgba(0, 0, 0, 0.3)";
      navWrapper.style.background =
        "color-mix(in oklab, var(--color-surface) 95%, transparent)";
      navWrapper.style.backdropFilter = "blur(10px)";
    } else {
      navWrapper.style.boxShadow = "none";
      navWrapper.style.backdropFilter = "none";
    }

    lastScroll = currentScroll;
  });
});

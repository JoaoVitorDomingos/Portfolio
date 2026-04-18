// JavaScript para animações e interações na seção "Sobre"
document.addEventListener("DOMContentLoaded", () => {
  const aboutMeObserverOptions = {
    threshold: 0.2,
    rootMargin: "0px",
  };

  const aboutMeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        aboutMeObserver.unobserve(entry.target);
      }
    });
  }, aboutMeObserverOptions);

  const animateElements = document.querySelectorAll(
    ".about-me-content-wrapper, .about-me-media-wrapper",
  );

  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
    aboutMeObserver.observe(el);
  });

  const cards = document.querySelectorAll(".about-me-highlight-card");
  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 150}ms`;
  });
});

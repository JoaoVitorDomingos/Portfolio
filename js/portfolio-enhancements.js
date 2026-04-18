document.addEventListener("DOMContentLoaded", function () {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  // Apply initial hidden state to cards
  document
    .querySelectorAll(".project-card, .case-item, .tech-item, .outcome-card")
    .forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "all 0.6s ease-out";
      observer.observe(el);
    });

  // Testimonial Rail auto-scroll (subtle)
  const rail = document.querySelector(".testimonial-rail");
  if (rail) {
    let isDown = false;
    let startX;
    let scrollLeft;

    rail.addEventListener("mousedown", (e) => {
      isDown = true;
      startX = e.pageX - rail.offsetLeft;
      scrollLeft = rail.scrollLeft;
    });
    rail.addEventListener("mouseleave", () => {
      isDown = false;
    });
    rail.addEventListener("mouseup", () => {
      isDown = false;
    });
    rail.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - rail.offsetLeft;
      const walk = (x - startX) * 2;
      rail.scrollLeft = scrollLeft - walk;
    });
  }
});

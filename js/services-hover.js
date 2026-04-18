document.addEventListener("DOMContentLoaded", function () {
  const servicesCards = document.querySelectorAll(".services-card");

  servicesCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const glow = card.querySelector(".services-card-glow");
      if (glow) {
        glow.style.background = `radial-gradient(circle at ${x}px ${y}px, color-mix(in srgb, var(--color-primary) 20%, transparent) 0%, transparent 70%)`;
      }
    });
  });
});

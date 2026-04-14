document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".projects-card");

  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const projectsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        projectsObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  projectCards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.1}s`;
    projectsObserver.observe(card);
  });
});

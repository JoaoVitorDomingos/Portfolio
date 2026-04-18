document.addEventListener("DOMContentLoaded", function () {
  // Minimal interaction for social links hover effect enhancement
  const socialButtons = document.querySelectorAll(".footer-social-btn");

  socialButtons.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      btn.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    });
  });

  // Scroll to top functionality could be added here if needed,
  // but keeping it simple as per implementation guidance.
});

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const statusMessage = document.getElementById("formStatus");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      // We let the native action happen, but we can provide UI feedback
      // In a real environment, this might be handled by an AJAX request,
      // but per instructions we maintain native submission capability.

      const submitBtn = contactForm.querySelector(".contact-submit-btn");
      const btnText = submitBtn.querySelector("span");

      // Visual feedback for submission start
      btnText.textContent = "Sending...";
      submitBtn.style.pointerEvents = "none";
      submitBtn.style.opacity = "0.7";

      // Note: In a production environment with a real backend,
      // the page would redirect or refresh.
      // This script demonstrates visual handling of the native validation.
    });

    // Real-time validation feedback
    const inputs = contactForm.querySelectorAll("input, textarea");
    inputs.forEach((input) => {
      input.addEventListener("blur", () => {
        if (!input.checkValidity()) {
          input.style.borderColor = "#e74c3c";
        } else {
          input.style.borderColor = "";
        }
      });

      input.addEventListener("input", () => {
        if (input.checkValidity()) {
          input.style.borderColor = "";
        }
      });
    });
  }
});

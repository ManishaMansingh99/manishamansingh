document.addEventListener("DOMContentLoaded", function() {
  const fadeInElements = document.querySelectorAll(".fade-in");

  function checkFadeIn() {
    fadeInElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight) {
        element.classList.add("fade-in-active");
      }
    });
  }

  window.addEventListener("scroll", checkFadeIn);
  window.addEventListener("load", checkFadeIn);
  window.addEventListener("resize", checkFadeIn);

  // Initial check when the page loads
  checkFadeIn();
});

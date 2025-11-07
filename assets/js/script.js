document.addEventListener("DOMContentLoaded", () => {
  // Typing effect
  const text = "Nguyễn Minh Dương";
  const span = document.querySelector("#hero h2 span");
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      span.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();

  // Section show/hide
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach((sec) => {
    if (sec.id !== "hero") sec.style.display = "none";
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").replace("#", "");

      sections.forEach((sec) => {
        if (sec.id === targetId) {
          sec.style.display = "block";
          sec.classList.add("visible");
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (sec.id !== "hero") {
          sec.style.display = "none";
          sec.classList.remove("visible");
        }
      });
    });
  });

  // Back to top
  const backToTopBtn = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTopBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });
  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Parallax background
  window.addEventListener("scroll", () => {
    const hero = document.getElementById("hero");
    hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
  });
});

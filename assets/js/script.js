// === Hiệu ứng gõ chữ (typing effect) ===
document.addEventListener("DOMContentLoaded", function () {
  const text = "Nguyễn Minh Dương";
  const span = document.querySelector("#hero h2 span");
  span.textContent = "";
  let i = 0;
  function typeEffect() {
    if (i < text.length) {
      span.textContent += text.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();
});

// === Chỉ hiển thị 1 section mỗi lần ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

// Ẩn tất cả section trừ hero
sections.forEach((sec, idx) => {
  if (sec.id !== "hero") sec.style.display = "none";
});

navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").replace("#", "");

    sections.forEach(sec => {
      if (sec.id === targetId || (targetId === "hero" && sec.id === "hero")) {
        sec.style.display = "block";
        sec.classList.add("visible");
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        sec.style.display = "none";
        sec.classList.remove("visible");
      }
    });
  });
});

// === Hiệu ứng xuất hiện (fade + slide) ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

// === Back to Top ===
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// === Parallax Background Hero ===
window.addEventListener("scroll", () => {
  const hero = document.getElementById("hero");
  hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;
});

// === Mobile Menu Toggle ===
const menuToggle = document.getElementById("menu-toggle");
const navBar = document.getElementById("navbar");

if (menuToggle && navBar) {
  menuToggle.addEventListener("click", () => {
    navBar.classList.toggle("active");
  });
}

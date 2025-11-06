// === Hiệu ứng gõ chữ (typing effect) ===
document.addEventListener("DOMContentLoaded", function() {
  const text = "Xin chào, tôi là Nguyễn Minh Dương";
  const span = document.querySelector("#hero h2 span");
  const originalName = span.textContent;
  span.textContent = ""; // reset

  let i = 0;
  function typeEffect() {
    if (i < originalName.length) {
      span.textContent += originalName.charAt(i);
      i++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();
});

// === Animation khi cuộn (fade-in) ===
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// === Smooth scroll highlight active link ===
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

// === Nút Back To Top ===
const backToTopBtn = document.createElement("button");
backToTopBtn.textContent = "↑";
backToTopBtn.id = "backToTopBtn";
document.body.appendChild(backToTopBtn);

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

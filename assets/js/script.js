document.addEventListener("DOMContentLoaded", function () {
  // === Hiệu ứng gõ chữ tên chính ===
  const nameText = "Nguyễn Minh Dương";
  const nameSpan = document.querySelector("#hero h2 span");
  nameSpan.textContent = "";
  let nameIndex = 0;

  function typeName() {
    if (nameIndex < nameText.length) {
      nameSpan.textContent += nameText.charAt(nameIndex);
      nameIndex++;
      setTimeout(typeName, 100);
    }
  }
  typeName();

  // === Hiệu ứng typing phụ mô tả nghề nghiệp ===
  const typingText = document.getElementById("typing-text");
  const messages = [
    "Sinh viên Công nghệ Thông tin 💻",
    "Đam mê An ninh mạng 🔒",
    "Yêu thích Trí tuệ nhân tạo 🤖",
  ];
  let msgIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeSubtitle() {
    const current = messages[msgIndex];
    typingText.textContent = current.substring(0, charIndex);
    const speed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex < current.length) {
      charIndex++;
    } else if (isDeleting && charIndex > 0) {
      charIndex--;
    } else if (!isDeleting && charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeSubtitle, 1200);
      return;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      msgIndex = (msgIndex + 1) % messages.length;
    }

    setTimeout(typeSubtitle, speed);
  }

  setTimeout(typeSubtitle, 2000); // delay nhẹ sau khi gõ tên
});

// === Animation khi cuộn (fade-in) ===
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2, rootMargin: "0px 0px -50px 0px" };

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));

// === Smooth scroll + highlight link đang active ===
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

// === 🌈 Hiệu ứng Parallax cho nền hero ===
window.addEventListener("scroll", () => {
  const hero = document.getElementById("hero");
  const scrollPosition = window.scrollY;
  hero.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
});

// === Menu di động (Hamburger Toggle) ===
const menuToggle = document.getElementById("menu-toggle");
const navBar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

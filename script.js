// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

if (mobileMenu) {
  mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
  });
}

// Close mobile menu when clicking a link
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu) {
      mobileMenu.classList.remove("active");
      navMenu.classList.remove("active");
    }
  });
});

// Sticky Navbar Background & Scroll Effect
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.boxShadow = "none";
  }
});

// Scroll Reveal Animation
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target); // Only animate once
    }
  });
}, observerOptions);

// Select elements to animate
const sections = document.querySelectorAll("section");
const cards = document.querySelectorAll(
  ".package-card, .feature-item, .info-item, .contact-form"
);
const headings = document.querySelectorAll(".section-title, .section-desc");

// Add fade-in class and observe
[...sections, ...cards, ...headings].forEach((el) => {
  el.classList.add("fade-in");
  observer.observe(el);
});

// Smooth Scrolling for Anchor Links (adjusting for fixed navbar)
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      // Offset for fixed navbar
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Form Submission (Demo)
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you for your enquiry! We will contact you shortly.");
    bookingForm.reset();
  });
}

// Set Current Year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

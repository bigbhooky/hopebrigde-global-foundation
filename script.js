// Hopebrigde Global Foundation — navigation, motion and enquiry interactions
// Add a verified organisation email address before publishing.
const FOUNDATION_EMAIL = ""; // Example: "hello@yourverifieddomain.org"

const header = document.querySelector(".site-header");
const backTop = document.querySelector(".back-top");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");

function updateScrollUI() {
  const scrolled = window.scrollY > 30;
  header?.classList.toggle("scrolled", scrolled);
  backTop?.classList.toggle("visible", window.scrollY > 500);
}
window.addEventListener("scroll", updateScrollUI, { passive: true });
updateScrollUI();

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
});
nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

// Reveal content as it enters the viewport.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -35px 0px" });
  revealItems.forEach(item => revealObserver.observe(item));
} else {
  revealItems.forEach(item => item.classList.add("in-view"));
}

// Update the active navigation link based on the visible section.
const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      nav?.querySelectorAll("a").forEach(a => {
        a.classList.toggle("active", a.getAttribute("href") === `#${id}`);
      });
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach(section => sectionObserver.observe(section));
}

document.getElementById("year").textContent = new Date().getFullYear();

// This starter form prepares an email; it does not transmit or store submissions.
// Connect a trusted form backend before relying on it for real enquiries.
const contactForm = document.getElementById("contactForm");
contactForm?.addEventListener("submit", event => {
  event.preventDefault();
  const status = contactForm.querySelector(".form-status");
  const data = new FormData(contactForm);
  const name = String(data.get("name") || "").trim();
  const email = String(data.get("email") || "").trim();
  const subject = String(data.get("subject") || "").trim();
  const message = String(data.get("message") || "").trim();

  if (!name || !email || !subject || !message) {
    status.textContent = "Please complete all fields before continuing.";
    return;
  }

  if (!FOUNDATION_EMAIL) {
    status.textContent = "The enquiry form is ready, but the foundation's verified email address has not yet been configured. Add it in script.js before publishing.";
    return;
  }

  const body = `Name: ${name}\nEmail: ${email}\nEnquiry: ${subject}\n\n${message}`;
  const mailto = `mailto:${encodeURIComponent(FOUNDATION_EMAIL)}?subject=${encodeURIComponent("Website enquiry: " + subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailto;
  status.textContent = "Your email application should open with the enquiry prepared.";
});

// Subtle hero image parallax on pointer devices only; disabled for reduced motion.
const heroImage = document.querySelector(".hero-image");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (heroImage && !reduceMotion && window.matchMedia("(pointer:fine)").matches) {
  window.addEventListener("pointermove", event => {
    const x = (event.clientX / window.innerWidth - .5) * 7;
    const y = (event.clientY / window.innerHeight - .5) * 5;
    heroImage.style.backgroundPosition = `calc(50% + ${x}px) calc(43% + ${y}px)`;
  }, { passive: true });
}

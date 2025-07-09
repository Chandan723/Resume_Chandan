// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

// Smooth scrolling for anchor links
document.querySelectorAll('.nav-link').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth',
      });
      navMenu.classList.remove('open');
    }
  });
});

// Intersection Observer to reveal sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((ent) => {
      if (ent.isIntersecting) {
        ent.target.classList.add('visible');
        observer.unobserve(ent.target);
      }
    });
  },
  { threshold: 0.2 }
);
document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

// Highlight active nav link on scroll
const sections = document.querySelectorAll('main section, .hero');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 80;
  sections.forEach((sec) => {
    if (
      scrollPos >= sec.offsetTop &&
      scrollPos < sec.offsetTop + sec.offsetHeight
    ) {
      document
        .querySelectorAll('.nav-link')
        .forEach((a) => a.classList.remove('active'));
      const id = sec.getAttribute('id');
      const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

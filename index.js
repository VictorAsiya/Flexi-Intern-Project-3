// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Highlight nav link when section is in view 
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Alert when clicking "Book Now" button
const bookButton = document.querySelector("#contact button");
bookButton.addEventListener("click", (e) => {
  alert("Redirecting you to the booking page...");
});

// Fix mail link in footer
const emailLink = document.querySelector('footer a[href^="vicasasiya"]');
if (emailLink) {
  emailLink.setAttribute("href", "mailto:vicasasiya@gmail.com");
}

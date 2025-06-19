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

// Toggle dark mode
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Toggle About Me paragraph
const bioPara = document.querySelector(".bio p");
const toggleBioBtn = document.getElementById("toggle-bio");

toggleBioBtn.addEventListener("click", () => {
  if (bioPara.style.display === "none") {
    bioPara.style.display = "block";
    toggleBioBtn.textContent = "Hide Bio";
  } else {
    bioPara.style.display = "none";
    toggleBioBtn.textContent = "Show Bio";
  }
});

// Add new hobby
const addHobbyBtn = document.getElementById("add-hobby");
const hobbyInput = document.getElementById("new-hobby");
const hobbyList = document.querySelector("#hobbies ul");

addHobbyBtn.addEventListener("click", () => {
  const hobbyText = hobbyInput.value.trim();
  if (hobbyText) {
    const newLi = document.createElement("li");
    newLi.textContent = hobbyText;
    hobbyList.appendChild(newLi);
    hobbyInput.value = "";
  } else {
    alert("Please enter a hobby!");
  }
});

// Character counter for message box
const messageBox = document.getElementById("message");
const charCount = document.getElementById("char-count");

messageBox.addEventListener("input", () => {
  charCount.textContent = `Characters: ${messageBox.value.length}`;
});

// Mouseover profile image effect
const profileImg = document.querySelector(".bio img");

profileImg.addEventListener("mouseenter", () => {
  profileImg.style.border = "3px solid teal";
});
profileImg.addEventListener("mouseleave", () => {
  profileImg.style.border = "none";
});

const themeToggleButton = document.getElementById('theme-toggle');
const menuToggleButton = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

// Light/Dark Mode Toggle
themeToggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = themeToggleButton.querySelector('i');
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');
});

// Mobile Menu Toggle
menuToggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('mobile');
});




// On page load, check for saved theme preference
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }
});

// Dynamic Text Animation
const roles = [
  "💻 Full-Stack Developer",
  "☁️ Cloud Engineer",
  "🤖 AI/ML Engineer",
  "🎨 Creative Coder",
];
let roleIndex = 0; // To track the current role
let charIndex = 0; // To track the current character
const dynamicText = document.getElementById("dynamic-text");
const typingSpeed = 70; // Speed of typing in milliseconds
const pauseBetweenRoles = 1000; // Pause before typing the next role

function typeWriterEffect() {
  if (charIndex < roles[roleIndex].length) {
    dynamicText.textContent += roles[roleIndex].charAt(charIndex); // Add character
    charIndex++;
    setTimeout(typeWriterEffect, typingSpeed); // Type the next character
  } else {
    // Pause before deleting the text
    setTimeout(() => deleteText(), pauseBetweenRoles);
  }
}

function deleteText() {
  if (charIndex > 0) {
    dynamicText.textContent = roles[roleIndex].substring(0, charIndex - 1); // Remove character
    charIndex--;
    setTimeout(deleteText, typingSpeed / 2); // Delete the next character faster
  } else {
    // Move to the next role
    roleIndex = (roleIndex + 1) % roles.length; // Loop back to the first role
    setTimeout(typeWriterEffect, typingSpeed);
  }
}

// Start the typewriter effect
typeWriterEffect();

// Floating Elements Click Animation
const floatingElements = document.querySelectorAll(".floating-element");

// Add click event to each floating element
floatingElements.forEach((element) => {
  element.addEventListener("click", () => {
    // Temporarily add 'clicked' class
    element.classList.add("clicked");

    // Remove 'clicked' class after pulse animation ends and ensure floating resumes
    setTimeout(() => {
      element.classList.remove("clicked");
    }, 500); // Match the duration of the pulse animation
  });
});

// Function to check visibility of elements
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Trigger animations when in viewport
function triggerAnimations() {
  const animatedElements = document.querySelectorAll(".animated");
  animatedElements.forEach((el) => {
    if (isInViewport(el)) {
      el.classList.add("show");
    }
  });
}

// Listen for scroll and load events
window.addEventListener("scroll", triggerAnimations);
window.addEventListener("load", triggerAnimations);

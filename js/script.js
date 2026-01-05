// Greeting and Date
const greeting = document.getElementById("greeting");
const dateEl = document.getElementById("date");

const today = new Date();
dateEl.textContent = today.toDateString();

const hour = today.getHours();
greeting.textContent =
  hour < 12 ? "Good Morning 👋 Dear Reader" :
  hour < 18 ? "Good Afternoon 👋 Dear Reader" :
  "Good Evening 👋 Dear Reader";

// Cart Functionality
let cartCount = 0;
const cartDisplay = document.getElementById("cartCount");

document.querySelectorAll(".addToCart").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
  });
});

// Dark Mode Toggle
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  e.target.reset();
});
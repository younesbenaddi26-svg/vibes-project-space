// DARK MODE TOGGLE
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// MISSION INFO TOGGLE
const infoButtons = document.querySelectorAll(".info-btn");

infoButtons.forEach(button => {
  button.addEventListener("click", () => {
    // The extra info paragraph follows the button in the HTML
    const extraInfo = button.nextElementSibling;
    
    // Toggle the display class
    extraInfo.classList.toggle("show-info");
    
    // Update button text
    if (extraInfo.classList.contains("show-info")) {
      button.textContent = "Show Less";
    } else {
      button.textContent = "Learn More";
    }
  });
});

// SIMPLE FORM HANDLER
document.getElementById("contactForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Message sent successfully! 🚀");
  this.reset(); // Clears form after alert
});

// SCROLL ANIMATION
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if(rect.top < window.innerHeight - 50){
      card.style.opacity = 1;
      card.style.transform = "translateY(0)";
    }
  });
});

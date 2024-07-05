// script.js

// This script will run once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to The Mysteries of the Universe!");
});

// Console log for publish date and time
console.log(
  `Published on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`
);

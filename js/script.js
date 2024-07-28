// This script will run once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Start of the DOMContentLoaded event listener
  console.log("Welcome to The Mysteries of the Universe!"); // Log a welcome message

  // Fetch the version info from version.txt and log it
  fetch("../version.txt")
    .then((response) => response.text())
    .then((versionInfo) => {
      console.log(versionInfo); // Log the version info
    })
    .catch((error) => console.error("Error fetching version info:", error)); // Log any errors

  // Block image selection, copying, and dragging
  document.querySelectorAll("img").forEach((img) => {
    // Prevent right-click on images
    img.addEventListener("contextmenu", (event) => event.preventDefault());

    // Prevent dragging images
    img.addEventListener("dragstart", (event) => event.preventDefault());

    // Prevent selecting images
    img.addEventListener("selectstart", (event) => event.preventDefault());
  });

  // Update the copyright year dynamically
  const currentYearSpan = document.getElementById("current-year");
  const currentYear = new Date().getFullYear();
  currentYearSpan.textContent = currentYear; // Set the current year
}); // End of the DOMContentLoaded event listener

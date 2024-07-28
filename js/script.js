// script.js

// This script will run once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  console.log("Welcome to The Mysteries of the Universe!");
});

// Fetch the version info from version.txt and log it
fetch("../version.txt")
  .then((response) => response.text())
  .then((versionInfo) => {
    console.log(versionInfo);
  })
  .catch((error) => console.error("Error fetching version info:", error));

// Block image selection, copying, and dragging
document.querySelectorAll("img").forEach((img) => {
  // Prevent right-click on images
  img.addEventListener("contextmenu", (event) => event.preventDefault());

  // Prevent dragging images
  img.addEventListener("dragstart", (event) => event.preventDefault());

  // Prevent selecting images
  img.addEventListener("selectstart", (event) => event.preventDefault());
});

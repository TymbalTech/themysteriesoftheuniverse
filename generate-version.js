const { execSync } = require("child_process");
const fs = require("fs");

// Get the last commit date and time
const lastCommitDate = execSync("git log -1 --format=%cd").toString().trim();

// Write the date and time to a version file
fs.writeFileSync("version.txt", `Published on ${lastCommitDate}`);
console.log("Version file created with the last commit date and time.");

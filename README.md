# The Mysteries of the Universe

## Description

A playground to expand tech skills, test ideas, and learn new tech.

## Technologies

- **HTML5**
  - Goal 1: adhere to W3C standards, using semantic HTML and ARIA roles/attributes. Code will need to reviewed, validated, and updated routinely.
- **CSS3 Bootstrap SASS**
  - Goal 1: Use CSS Grid Layout for responsive design. This is in development que.
  - Goal 2: Implement Bootstrap. This is in development que.
  - Goal 3: Implement SASS. This is in development que.
- **JavaScript**
  - Goal 1: Currently tracking the published version with a console log that uses GitHub Actions to establish both client and server side JS functionality.
- **Vue**
  - Goal 1: Will be used for implementing a carousel. This is in development que.
- **Node.js**
  - Goal 1: Currently used for running the published version script that logs the last date and time.
- **npm**
  - Currently managing these dependencies:
    - The script set up to run the versioning script (generate-version.js) as part of the CI/CD pipeline.
    - Future dependcies list here.
- **GitHub Actions**
  - Automates the CI/CD pipeline for building, testing, and deploying the project.

## Structure

### Directories

- **.github/workflows/**: Contains GitHub Actions workflows.

  - `ci.yml`: Workflow file for CI/CD pipeline.

- **css/**:

  - `styles.css`:

- **src/**:

  - `scripts/`: Directory for JavaScript files.
    - `script.js`: The main JavaScript file.

- **root/**: Contains the publicly accessible files.
  - `.gitignore`: Specifies files and directories to be ignored by Git.
  - `android-chrome-192x192.png`: High-resolution icon for Android devices.
  - `android-chrome-512x512.png`: High-resolution icon for Android devices.
  - `apple-touch-icon.png`: Icon for iOS devices.
  - `CNAME`:
  - `favicon-16x16.png`: Standard favicon size.
  - `favicon-32x32.png`: Standard favicon size.
  - `favicon.ico`: The favicon file.
  - `generate-version.js`: Node.js script to generate `version.txt` with the last commit date and time.
  - `index.html`: The main HTML file for the project.
  - `package-lock.json`:
  - `package.json`: Configuration file for npm, including scripts and dependencies.
  - `README.md`: Documentation for the project, with details about the what is developed and what will be developed.
  - `version.txt`: File that stores the last commit date and time.

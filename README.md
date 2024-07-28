# The Mysteries of the Universe

## Description

A playground to expand tech skills, test ideas, and learn new tech.

## Technologies

- **HTML5**
  - Goal 1: adhere to W3C standards, using semantic HTML and ARIA roles/attributes. Code will need to be reviewed, validated, and updated routinely.
  - Goal 2: Include manifest file for PWA support. This will need to be updated as design is developed.
- **CSS3 Bootstrap SASS**
  - Goal 1: Use CSS Grid Layout for responsive design. This is in development queue.
  - Goal 2: Implement Bootstrap. This is in development queue.
  - Goal 3: Implement SASS. This is in development queue.
- **JavaScript**
  - Goal 1: Currently tracking the published version with a console log that uses GitHub Actions to establish both client and server side JS functionality.
- **Vue**
  - Goal 1: Will be used for implementing a carousel. This is in development queue.
- **Node.js**
  - Goal 1: Currently used for running the published version script that logs the last date and time.
- **npm**
  - Currently managing these dependencies:
    - The script set up to run the versioning script (generate-version.js) as part of the CI/CD pipeline.
    - Future dependencies list here.
- **GitHub Actions**
  - Automates the CI/CD pipeline for building, testing, and deploying the project.

## Structure

### Directories

- **.github/**: Contains GitHub-specific configurations and templates.

  - **ISSUE_TEMPLATE/**: Directory for issue templates used by GitHub to guide users in reporting bugs and issues.
    - `bug_report.md`: Template for reporting bugs and issues.
  - **workflows/**: Contains GitHub Actions workflows.
    - `ci.yml`: Workflow file for Continuous Integration/Continuous Deployment (CI/CD) pipeline.

- **css/**: Directory for CSS files.

  - `normalize.css`: CSS reset file to standardize browser styling across different browsers.
  - `styles.css`: Main stylesheet for the project.
  - **components/**: Directory for modular CSS components.
    - `header.css`: Styles for the header component.
    - `footer.css`: Styles for the footer component.

- **images/**: Directory for image assets.

  - `Mysterious-Universe.jpg`: Background image of a portion of the universe.
  - `MYSTR-site-title.png`: Hero site title image.

- **js/**: Directory for JavaScript files.

  - `script.js`: The main JavaScript file.

- **root/**: Contains the publicly accessible files.
  - `.gitignore`: Specifies files and directories to be ignored by Git.
  - `android-chrome-192x192.png`: High-resolution icon for Android devices.
  - `android-chrome-512x512.png`: High-resolution icon for Android devices.
  - `apple-touch-icon.png`: Icon for iOS devices.
  - `CNAME`: Specifies the custom domain for GitHub Pages.
  - `CODE_OF_CONDUCT.md`: Document outlining the expected behavior and guidelines for contributors.
  - `CONTRIBUTING.md`: Guidelines for contributing to the project.
  - `favicon-16x16.png`: Standard favicon size.
  - `favicon-32x32.png`: Standard favicon size.
  - `favicon.ico`: The favicon file.
  - `generate-version.js`: Node.js script to generate `version.txt` with the last commit date and time.
  - `index.html`: The main HTML file for the project.
  - `LICENSE.md`: Document specifying the license under which the project is distributed.
  - `package-lock.json`: Auto-generated file for npm dependencies.
  - `package.json`: Configuration file for npm, including scripts and dependencies.
  - `README.md`: Documentation for the project, with details about what is developed and what will be developed.
  - `SECURITY.md`: Security policy document outlining how to report vulnerabilities.
  - `site.manifest`: File created for Progressive Web App (PWA) support.
  - `version.txt`: File that stores the last commit date and time.

## Recent Updates

### Date: 2024-07-28

- Added JavaScript to block users from selecting, copying, or dragging images.
- Added a CC BY-NC-SA 4.0 license,
- Added the Code of Conduct, Contributing, Security, and Bug Report documents to follow GitHub Community Guideline recommendations.
- Added and styled a basic footer.
- Deleted an unused image and an empty file "Icon".

### Date: 2024-07-15

- Added twinkling star.

### Date: 2024-07-14

- Added google fonts for headlines and paragraphs.
- Added site title image.
- Replaced background image.

### Date: 2024-07-13

- Restructured project directories for better organization.
  - Created `components/` directory within `css/` for modular CSS files.
  - Moved `script.js` to a new `js/` directory.
  - Added `normalize.css` to the `css/` directory for resetting default browser styles.
  - Updated `index.html` to reference new file paths.
  - Deleted the now-empty `src` directory.

## Future Considerations

### CSS Work

- Use CSS Grid Layout for complex and responsive designs.
- Create parallax star field.
- Create twinkle animation for stars.
- Integrate Bootstrap for responsive design and ready-made components.
- Integrate SASS for better organization and maintainability of CSS.

### Javascript Work

- Astrological Sign Calendar
- Moon Phase Calendar

/ TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](${renderLicenseLink(license)})`
 }
else if (license === 'Apache 2.0') {
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](${renderLicenseLink(license)})`
 }
else if (license === 'GPL 3.0') {
  return `([![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](${renderLicenseLink(license)})`
}
else if (license === 'None'){
 return``
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `(https://opensource.org/licenses/MIT)`
  }
  else if (license === 'Apache 2.0'){
    return `(https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === 'GPL 3.0'){
    return `(https://www.gnu.org/licenses/gpl-3.0)`
    }
    
    else if (license === 'none'){
      return ``;
    }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT' || license === 'Apache 2.0' || license === 'GPL 3.0') {
  return `## License ${renderLicenseBadge(license)};
  This project is licensed under the ${license} license.`;
  }
  else if (license === 'None') {
    return ``
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return`
  # ${data.title}


## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}


## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).
You can find more of my work at [${data.github}](https://github.com/${data.github})
  `;
}


// Prompt user for input and generate README
module.exports = generateMarkdown;



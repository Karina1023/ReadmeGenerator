// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      answer = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)] (https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      answer = '[![License](https://img.shields.io.badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'AGPL 3.0':
      answer = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
      break;
    case 'BSD 3':
      answer = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'None':
      answer = '';
  }
  return answer;

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      answer = '[MIT](https://opensource.org/licenses/MIT)';
      break;
    case 'Apache 2.0':
      answer = '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'AGPL 3.0':
      answer = '[AGPL 3.0](https://opensource.org/licenses/AGPL-3.0)';
      break;
    case 'BSD 3':
      answer = '[BSD 3](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'None':
      answer = '';
  }
  return answer;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None'){
    return '';
  }else{
    return `${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projecttitle}

  ## Description
    ${data.description}

  ## Table of Contents
  
  * [Installation](#installation)
  *[Usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  *[Tests](#tests)
  *[Questions](#questions)

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
  Please submit questions to my email: ${data.email}

  ## GitHub

  [GitHub](https://github.com/${data.username})
`;
}

module.exports = generateMarkdown;

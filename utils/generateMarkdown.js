// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if(license === 'MIT') {
return '[![license: MPL 2.0](https://img.shields.io/badge/license-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'  
}
else if(license === 'GPL') {
return '[![license: GPL v3](https://img.shields.io/badge/license-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'  
}
else if(license === 'Apache') {
return '[![license](https://img.shields.io/badge/license-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'  
}
else {
  return 'N/A'}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if(license === 'N/A') {
return ' '  
} else {
return '*[license](#license)'  
}  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'N/A') {
    return ' '  
    } else {
    return `## license\n[${license}](#license)`;
    }   
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  # Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Usage](#usage)
  ${renderLicenseLink(data.license)}
  *[Contributing](#contributing)
  *[Tests](#tests)

  
  ##title

  ${data.title}

  ##description

  ${data.description}
 
  ##installation

  ${data.installation}
 
  ##usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ##contributing

  ${data.contributing}

  ##testing
  
  ${data.testing}
`;
}

module.exports = generateMarkdown;

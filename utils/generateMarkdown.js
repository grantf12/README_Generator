// function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  
  ## Description:
    ${response.description}

  ## Table of Contents:

  * [Installation](#Installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation:
    ${response.installation}

  ## Usage:
    ${response.usage}

  ## License:
    ${response.license}

  ## Contributing:
    ${response.contributing}

  ## Tests:
    ${response.tests}

  ## Questions:
    ${response.tests}

`;
}

module.exports = generateMarkdown;

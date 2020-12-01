// function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  ![badge](https://img.shields.io/badge/license-${response.license}-green)
  
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
    This project is protected under ${response.license} licensing.

  ## Contributing:
    ${response.contributing}

  ## Tests:
    ${response.tests}

  ## Questions:
  If you have any questions please feel free to contact me through [GitHub](https://github.com/${response.gitHub}) or [Email](${response.email})


`;
}

module.exports = generateMarkdown;

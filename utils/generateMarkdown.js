// function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}
  
  ## Description:
    ${response.description}

  ## Table of Contents:
    * [Installation](#insallation)
  
  ## Installation
`;
}

module.exports = generateMarkdown;

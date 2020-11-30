const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("../README_Generator/utils/generateMarkdown");
// const choices = require("inquirer/lib/objects/choices");


// array of questions for user
const questions = [
  {
    type: "input",
    message: "Enter the Project Name: ",
    name: "title",
  },
  {
    type: "input",
    message: "Enter a description of the project: ",
    name: "description",
  },
  {
    type: "input",
    message: "Enter the installation instructions: ",
    name: "installation",
  },
  {
    type: "input",
    message: "Enter the usage information: ",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter contribution guidelines: ",
    name: "contributing",
  },
  {
    type: "input",
    message: "Enter test instructions: ",
    name: "tests",
  },
  {
      type: "list",
      message: 'What license(s) would you like to use?',
      name: 'license',
      choices: ['MIT', 'Apache_2.0', 'General_Public_License_v3.0', 'ISC']
  },
  {
      type: 'input',
      message: 'Please input your GitHub Account.',
      name: 'gitHub'
  },
  {
      type: 'input',
      message: 'Please input your email for contact.',
      name: 'email'
  }
];

// function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) =>
  {
        // Send the Response through the generateMarkdown function to create formatting for README
    let markdown = generateMarkdown(response);
        // Send the formatted response to the README file that will be created
    writeToFile("README.md", markdown);
  });
}

// function call to initialize program
init();

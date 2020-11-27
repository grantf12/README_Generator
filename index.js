const inquirer = require("inquirer");
const fs = require('fs')

// array of questions for user
const questions = [
{
    type: 'input',
    message: 'Enter the Project Name: ',
    name: 'Project Title: '
},
{
    type: 'input',
    message: 'Enter a description of the project: ',
    name: 'Project Description'
},
{
    type: 'input',
    message: 'Enter the installation instructions: ',
    name: 'Installation'
},
{
    type: 'input',
    message: 'Enter the usage information: ',
    name: 'Usage Info'
},
{
    type: 'input',
    message: 'Enter contribution guidelines: ',
    name: 'Contribution Guidelines'
},
{
    type: 'input',
    message: 'Enter test instructions: ',
    name: 'Test Instructions'
}];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), err =>
    err ? console.log(err) : console.log('Success!')
    )
}

// function to initialize program
function init() {
inquirer
    .prompt (
        questions
    )
    .then((response) => {
        writeToFile("README.md", response)
    })
}

// function call to initialize program
init();

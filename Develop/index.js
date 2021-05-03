// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter GitHub username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter your project title',
        name: 'projecttitle',
    },
    {
        type: 'input',
        message: 'Enter a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage instructions',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Choose license information (use arrow keys)',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'AGPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        message: 'Enter all contributors',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Provide any information on testing',
        name: 'tests',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        }else {
            console.log("read me generated")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();

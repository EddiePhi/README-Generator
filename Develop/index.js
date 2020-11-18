// import inquirer from 'inquirer'
const inquirer = require('inquirer')

// import fs from 'fs'
const fs = require('fs')

// import generateMarkdown from './utils/generateMarkdown.js'
const generateMarkdown = require('./utils/generateMarkdown.js')


// array of questions for user
const questions = [
    {
        type: "input", 
        message: "Application Name: ",
        name: "title"
     },
    {
       type: "input", 
       message: "Description: ",
       name: "description"
    },
    {
        type: "input",
        message: "Installation: ",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage: ",
        name: "usage"
    },
    {
        type: "list",
        message: "License: ",
        name: "license",
        choices: ['MIT', 'GPLv3', 'AGPL']
    },
    {
        type: "input",
        message: "Contributing: ",
        name: "contributing"
    },
    {
        type: "input",
        message: "Tests: ",
        name: "tests"
    },
    {
        type: "input",
        message: "GitHub Username: ",
        name: "questions1"
    },
    {
        type: "input",
        message: "Email: ",
        name: "questions2"
    }
];

// function to write README file (Originally had second data argument)
function writeToFile(fileName) {
    inquirer.prompt(questions).then((data) => {
        //https://gist.github.com/tterb/982ae14a9307b80117dbf49f624ce0e8
        const readME1 = `[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs) ${generateMarkdown(data)} \n\n`;
        const readME2 = `[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/) \n\n ${generateMarkdown(data)}`;
        const readME3 = `[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)  \n\n ${generateMarkdown(data)}`;
        if (data.license === 'MIT') {
            fs.writeFile(fileName, readME1, {}, (e) => {
                e ? console.log(e) : console.log('Success!');
            })
        } else if (data.license === 'GPLv3') {
            fs.writeFile(fileName, readME2, {}, (e) => {
                e ? console.log(e) : console.log('Success!');
            })
        } else if (data.license === 'AGPL'){
            fs.writeFile(fileName, readME3, {}, (e) => {
                e ? console.log(e) : console.log('Success!');
            })
        } else {
            console.log('Badge append failed')
        };
    })
}

// function to initialize program
function init() {
    writeToFile('GoodREADME.md');
}

// function call to initialize program
init();

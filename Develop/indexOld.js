import inquirer from 'inquirer'

import fs from 'fs'

inquirer
 .prompt(
     [
        {
            type: "input", 
            message: "Application Name: ",
            name: "applicationName"
         },
        {
           type: "input", 
           message: "Description: ",
           name: "description"
        },
        {
            type: "input",
            message: "Table of Contents: ",
            name: "tableOfContents"
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
    ]
 ).then((response) => {
    // const jsonObj = JSON.stringify(Object.keys(response)[0])
    // https://medium.com/better-programming/accessing-an-objects-keys-values-and-entries-in-javascript-e7bb5d33d11c
    const badge1 = "[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs) \n\n";
    const badge2 = "[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/) \n\n";
    const badge3 = "[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0) \n\n"
    const readME = 
`# Application Name: ${response.applicationName}

## Description: ${response.description}

## Table of Contents: ${response.tableOfContents}

## Installation: ${response.installation} 

## Usage: ${response.usage}

## License: ${response.license}

## Contributing: ${response.contributing}

## Tests: ${response.tests}

## Questions: Please reach out to me at https://github.com/${response.questions1} or send me an email at ${response.questions2}.`

    //Badges reference: https://gist.github.com/tterb/982ae14a9307b80117dbf49f624ce0e8
            //[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
            //[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
            //[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)  
        
    if (response.license === 'MIT') {
        fs.writeFile("GoodREADME.md", badge1, {}, (e) => {
            e ? console.log(e) : console.log('Success!');
        })
    } else if (response.license === 'GPLv3') {
        fs.writeFile("GoodREADME.md", badge2, {}, (e) => {
            e ? console.log(e) : console.log('Success!');
        })
    } else if (response.license === 'AGPL'){
        fs.writeFile("GoodREADME.md", badge3, {}, (e) => {
            e ? console.log(e) : console.log('Success!');
        })
    } else {
        console.log('Badge append failed')
    };

    fs.appendFile("GoodREADME.md", readME, {}, (e) => {
        e ? console.log(e) : console.log('Success!');
    })

    })
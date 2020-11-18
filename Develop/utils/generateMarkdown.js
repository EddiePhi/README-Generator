// function to generate markdown for README
//https://community.atlassian.com/t5/Bitbucket-questions/How-to-write-a-table-of-contents-in-a-Readme-md/qaq-p/673363
function generateMarkdown(data) {
  return `

  <a name="title"></a>
  # ${data.title}

  <a name="description"></a>
  ## Description: 
  ${data.description}
  
  <a name="toc"></a>
  ## Table of Contents:
  ##### 1. [Application name](#title)
  ##### 2. [Description](#description)
  ##### 3. [Table Of Contents](#toc)
  ##### 4. [Installation](#installation)
  ##### 5. [Usage](#usage)
  ##### 6. [License](#license)
  ##### 7. [Contributing](#contributing)
  ##### 8. [Tests](#tests)
  ##### 9. [Questions](#questions)

  <a name="installation"></a>
  ## Installation: 
  ${data.installation}
  
  <a name="usage"></a>
  ## Usage: 
  ${data.usage}
  
  <a name="license"></a>
  ## License: ${data.license}
  
  <a name="contributing"></a>
  ## Contributing: 
  ${data.contributing}
  
  <a name="tests"></a>
  ## Tests: 
  ${data.tests}
  
  <a name="questions"></a>
  ## Questions:
  Please reach out to me at https://github.com/${data.questions1} or send me an email at ${data.questions2}.`;
}

module.exports = generateMarkdown;

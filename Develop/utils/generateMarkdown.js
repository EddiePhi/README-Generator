// function to generate markdown for README
//https://community.atlassian.com/t5/Bitbucket-questions/How-to-write-a-table-of-contents-in-a-Readme-md/qaq-p/673363
function generateMarkdown(data) {
  return `

  <a name="title"></a>
  # Application Name: ${data.title}

  <a name="description"></a>
  ## Description: ${data.description}
  
  <a name="toc"></a>
  ## Table of Contents: ${data.toc}
  [Application name](#title) 
  [Description](#description) 
  [Table Of Contents](#toc)
  [Installation](#installation) 
  [Usage](#usage)
  [License](#license) 
  [Contributing](#contributing) 
  [Tests](#tests) 
  [Questions](#questions) 

  <a name="installation"></a>
  ## Installation: ${data.installation} 
  
  <a name="usage"></a>
  ## Usage: ${data.usage}
  
  <a name="license"></a>
  ## License: ${data.license}
  
  <a name="contributing"></a>
  ## Contributing: ${data.contributing}
  
  <a name="tests"></a>
  ## Tests: ${data.tests}
  
  <a name="questions"></a>
  ## Questions: Please reach out to me at https://github.com/${data.questions1} or send me an email at ${data.questions2}.`;
}

module.exports = generateMarkdown;

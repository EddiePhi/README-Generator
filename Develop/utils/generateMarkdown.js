// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # Application Name: ${data.title}

  ## Description: ${data.description}
  
  ## Table of Contents: ${data.tableOfContents}
  
  ## Installation: ${data.installation} 
  
  ## Usage: ${data.usage}
  
  ## License: ${data.license}
  
  ## Contributing: ${data.contributing}
  
  ## Tests: ${data.tests}
  
  ## Questions: Please reach out to me at https://github.com/${data.questions1} or send me an email at ${data.questions2}.`;
}

module.exports = generateMarkdown;

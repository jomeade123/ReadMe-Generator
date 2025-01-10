// TODO: Include packages needed for this application
const inquirer = import('inquirer');
const fs = import('fs');
const generateMarkdown = import('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Write a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license:',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
  },
];


// TODO: Create a function to write README file


function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing to the file:', err);
    } else {
      console.log(`File '${fileName}' has been written successfully!`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {

  // Prompt user for input and generate README
//   
inquirer 
.prompt(questions)
.then((data.answers) => {
  const fileName = 'README.md';
  const readMe = generateMarkdown(data);
  writeToFile(fileName, readMe);
})
.catch((error) => {
  console.error('Error during prompting:', error);
});
}

// Start the application
init();

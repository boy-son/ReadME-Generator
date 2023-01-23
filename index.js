// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ([ 
{
type: "input",
message: "What is the title of your project?",
name: "title",
validate: (value) => { if(value){return true} else {return 'You must enter a value to continue.'}}, 
},

{
type: "input",
message: "Enter your table of contents here:",
name: "table of contents",
validate: (value) => { if(value){return true} else {return 'You must enter a value to continue'}}
},

{
type: 'input',
message: "Please provide a description of your project.",
name: "Description",
validate: (value) => { if(value){return true} else {return 'You must enter a value to continue.'}}    
},

{
type: 'input',
message: "Enter your installation instructions:",
name: "installation",
validate: (value) => { if(value){return true} else {return 'You must enter a value to continue.'}}    
},   

{
type: 'input',
message: 'what is the function or purpose of this project?',
name: 'usage',
validate: (value) => { if(value){return true} else {return 'You must enter a value to continue..'}}
},

{
type: 'list',
message: 'Which license did you use for this project?',
name: 'License',
choices: ['MIT', 'GPL', 'Apache'],
validate: (value) => { if(value){return true} else {return 'You must enter a value to continue.'}}
},

{
type: 'input',
message: 'What were the steps for contributing to this project?',
name: 'Contributing',
validate: (value) => { if(value){return true} else {return 'You must enter a value to continue'}}
},

{
type: 'input',
message: 'What are the steps for testing this project?',
name: 'testing',
validate: (value) => { if(value){return true} else {return 'You must enter a value to continue'}}
}
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) =>
err ? console.log(err) : console.log('Success!')
)     
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
.then((data) => {
let content = generateMarkdown(data)
writeToFile('readme.MD', content)
}).catch(function(err) {
console.log(err)
})
}

// Function call to initialize app
init();

const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const generateHTML = require('./src/generateHTML.js');

console.log('Starting the application...');

const teamMembers = [];

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the team manager's ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'officeNumber'
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        teamMembers.push(manager);
    });
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the engineer's ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What is the engineer's GitHub username?",
            name: 'github'
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        teamMembers.push(engineer);
    });
};

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'name'
        },
        {
            type: 'input',
            message: "What is the intern's ID?",
            name: 'id'
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: 'email'
        },
        {
            type: 'input',
            message: "What school is the intern from?",
            name: 'school'
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamMembers.push(intern);
    });
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'choice',
            choices: ['Add Engineer', 'Add Intern', 'Finish']
        }
    ]).then(answers => {
        switch (answers.choice) {
            case 'Add Engineer':
                return promptEngineer().then(() => promptMenu());
            case 'Add Intern':
                return promptIntern().then(() => promptMenu());
            case 'Finish':
                return generateHTML(teamMembers);
        }
    });
};

promptManager().then(() => {
    promptMenu();
});
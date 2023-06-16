const generateCSS = require('./generateCSS');
const fs = require('fs');
const path = require('path');

const generateEmployeeCard = (employee) => {
    let roleSpecificInfo = '';

    switch (employee.getRole()) {
        case 'Engineer':
            roleSpecificInfo = `<p>GitHub: <a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></p>`;
            break;
        case 'Intern':
            roleSpecificInfo = `<p>School: ${employee.getSchool()}</p>`;
            break;
        case 'Manager':
            roleSpecificInfo = `<p>Office Number: ${employee.getOffice()}</p>`;
            break;
        default:
            break;
    }

    return `
    <div class="employee-card">
        <div class="card-header">
            <h2>${employee.getName()}</h2>
            <h3>${employee.getRole()}</h3>
        </div>
        <div class="card-body">
            <p>ID: ${employee.getId()}</p>
            <p>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></p>
            ${roleSpecificInfo}
        </div>
    </div>
    `;
};

const generateHTML = (teamArray) => {
    const cards = teamArray.map(generateEmployeeCard).join('\n');

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <style>
            ${generateCSS()}
        </style>
    </head>
    <body>
        <header>
            <h1>Team Profile</h1>
        </header>
        <main>
            <div class="employee-cards">
                ${cards}
            </div>
        </main>
    </body>
    </html>
    `;

    const outputPath = path.join(__dirname, 'output');
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath, { recursive: true });
    }

    fs.writeFileSync(path.join(outputPath, 'team-profile.html'), htmlContent);
};

module.exports = generateHTML;
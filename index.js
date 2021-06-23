const inquirer = require("inquirer");
const fs = require("fs");

//Toster Template
const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <title>My Team</title>
</head>

<nav class="navbar navbar-light bg-light position-relative" style="background-color: brown;">
      <h1 class="position-absolute top-50 start-50 translate-middle mt-1 bi bi-caret-down-fill" style="text-align: center; color:brown;">My Team</h1>
</nav>

<body>
<div class="row">
<div class="col s6 m3">
    <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header" style="font-size: large;">Employee</div>
            <div class="card-body">
                    <ul>
                        <li>Name: ${answers.empName}</li>
                        <li>Employee ID: ${answers.empId}</li>
                        <li><a href="mailto:"><i class="material-icons" style="color: brown;">mail</i></a>${answers.empEmail}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col s6 m3">
          <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header" style="font-size: large;">Team Manager</div>
                    <div class="card-body">
                    <ul>
                        <li>Name: ${answers.manName}</li>
                        <li>Employee ID: ${answers.manId}</li>
                        <li><a href="mailto:"><i class="material-icons" style="color:brown">mail</i></a>${answers.manEmail}</li>
                        <li>Office Number: ${answers.manNumber}</li>
                    </ul>
                </div>
            </div>
        </div>

        <div class="col s6 m3">
            <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
                <div class="card-header" style="font-size: large;">Engineer</div>
                    <div class="card-body">
                      <ul>
                          <li>Name: ${answers.engName}</li>
                          <li>Employee ID: ${answers.engId}</li>
                          <li><a href="mailto:"><i class="material-icons" style="color:brown">mail</i></a>${answers.engEmail}</li>
                          <li><a href="https://github.com/"><i class="fa fa-github" aria-hidden="true" style="color:brown"></i>GitHub</a>${answers.engGitHub}</li>
                      </ul>
                    </div>
                </div>
            </div>

        <div class="col s6 m3">
        <div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
            <div class="card-header" style="font-size: large;">Intern</div>
                <div class="card-body">
                      <ul>
                          <li>Name: ${answers.intName}</li>
                          <li>Employee ID: ${answers.intId}</li>
                            <li><a href="mailto:"><i class="material-icons" style="color:brown">mail</i></a>${answers.intEmail}</li>
                          <li>School name: ${answers.intSchool}</li>
                      </ul>
                    </div>
                </div>
            </div>
        </div>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script src="https://kit.fontawesome.com/0bddabc40e.js" crossorigin="anonymous"></script>    
</body>
</html>`

//questions
inquirer
    .prompt([
    {
        name: "empName",
        message: "What is the employee name?"
    },
    {
        name: "empId",
        message: "What is the employee ID?"
    },

    {
        name: "empEmail",
        message: "What is the employee email address?"
    },
    {
        name: "manName",
        message: "What is the manager's name?"
    },
    {
        name: "manId",
        message: "What is the manager's ID?"
    },

    {
        name: "manEmail",
        message: "What is the manager's email address?"
    },
    {
        name: "manNumber",
        message: "What is the manager's office number?"
    },
    {
        name: "engName",
        message: "What is the engineers name?"
    },
    {
        name: "engId",
        message: "What is the engineers ID?"
    },

    {
        name: "engEmail",
        message: "What is the engineers email address?"
    },
    {
        name: "engGitHub",
        message: "What is the engineers GitHub username?"
    },
    {
        name: "intName",
        message: "What is the intern's name?"
    },
    {
        name: "intId",
        message: "What is the intern's employee ID?"
    },

    {
        name: "intEmail",
        message: "What is the intern's email address?"
    },
    {
        name: "intSchool",
        message: "What is the intern's school name?"
    }
    ])

.then(answers => {
        const HTMLcontent = generateHTML(answers);
    
        fs.writeFile('index.html', HTMLcontent, (err) =>
        err ? console.log(err) : console.log ('Successfully created Team Roster!'));[];
    });
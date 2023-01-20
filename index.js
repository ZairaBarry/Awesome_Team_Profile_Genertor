const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generateHTML = require("./src/generateHTML.js");

const fs = require("fs");

const team = [];

function createTeam(){

    inquirer.prompt([
        {
            type: "input",
            message: "Enter the Employee's Name: ",
            name: "name"
        },
    
        {
            type: "input",
            message: "Enter the Employee's Email: ",
            name: "email"
        },
    
        {
            type: "input",
            message: "Enter the Employee's ID: ",
            name: "id"
        },
    
        {
            type: "list",
            message: "Select the Employee's role: ",
            name: "role",
            choices: ["Engineer", "Intern"]
        }
    ])
    .then(response => {
        if(response.role === "Engineer")
            enterEngineer(response.name, response.email, response.id);
        else if(response.role === "Intern")
            enterIntern(response.name, response.email, response.id);
    });
    
}

function enterManager(){
    
    inquirer.prompt([
        {
            type: "input",
            message: "Enter the Manager's Name: ",
            name: "name"
        },
        {
            type: "input",
            message: "Enter the Manager's Email: ",
            name: "email"
        },
    
       {
            type: "input",
            message: "Enter the Manager's ID: ",
            name: "id"
        },

        

        {
            type: "input",
            name: "office",
            message: "Enter the Manager's office number"
        }
    ])
    .then(response => {
        const newManager = new Manager(response.name,  response.id,response.email, response.office);
        team.push(newManager);
        enterEmployee();
    })
}

function enterEngineer(name, email, id){
    inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Enter the engineer's Github username"
        }
    ])
    .then(response => {
        const newEngineer = new Engineer(name, email, id, response.github);
        team.push(newEngineer);
        enterEmployee();
    })
}

function enterIntern(name, email, id){
    inquirer.prompt([
        {
            type: "input",
            name: "school",
            message: "Enter the intern's school"
        }
    ])
    .then(response => {
        const newIntern = new Intern(name, email, id, response.school);
        team.push(newIntern);
        enterEmployee();
    })
}

function enterEmployee(){
    inquirer.prompt([
        {
            type:"confirm",
            name: "enterEmployee",
            message:"Add another Employee to the team?"
        }
    ])
    .then(response =>{
        if(response.enterEmployee === true){
            createTeam();
        }else{
            writeToFile("./dist/index.html",team);
        }
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateHTML(data), 
        (err) => err ? console.error(err) : console.log("\nYour HTML has been created.")
    );
}

enterManager();
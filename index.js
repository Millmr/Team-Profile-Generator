const fs = require('fs');
const inquirer = require("inquirer");
let renderFile = require("./createhtml")
const genEngineer = renderFile.makeEngineer
const genManager = renderFile.makeManager 
const genIntern = renderFile.makeIntern
const html = renderFile.renderMain

function questions() {

    inquirer
        .prompt([ {
            type: "input",
            message: "What is your name?",
            name: "name",
        },
        {
            type: "number",
            message: "What is your ID?",
            name: "id",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "email",
        },
        {
            type: "list",
            choices: ["Engineer", "Intern", "Manager"],
            message: "What is your role?",
            name: "role",
        }
    ])
    .then( function({name, id, email, role}) {
        switch (role) {
            case "Engineer":
                inquirer
                    .prompt({
                        type: "input",
                        message: "What is your GitHub username?",
                        name: "github"
                    }).then( function ({ github }) {
                        genEngineer(name, id, email, github)
                        genMoreMembers()
                    })
                    break
            case "Intern":
                inquirer
                    .prompt({
                        type: "input",
                        message: "What school do you attend?",
                        name: "school"
                    }).then( function ({ school }) {
                        genIntern(name, id, email, school)
                        genMoreMembers()
                    })
                    break
            case "Manager":
                inquirer
                    .prompt({
                        type: "input",
                        message: "What is your Office Number?",
                        name: "office"
                    }).then( function ({ office }) {
                        genManager(name, id, email, office)
                        genMoreMembers()
                    })
                    break
            }
        })
}

function genMoreMembers() {
    inquirer
        .prompt({
            type: "confirm",
            message: "Add other Team Members?",
            name: "genMoreMembers"
        }).then( function({ genMoreMembers }) {
            console.log("Team Members Added!", genMoreMembers)
            if (genMoreMembers) {
                questions()
            } else {
                html()
            }
        }).catch (err => {
            console.log("Error occured trying to add team members", err)
            throw err
        })
}
questions()

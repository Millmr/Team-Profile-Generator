const path = require("path");
const fs = require("fs");
const htmlDir = "./html/"
const employeeGen = require("./employee/employee")
const Engineer = require("./employee/engineer")
const Intern = require("./employee/intern")
const Manager = require("./employee/manager")
let teamMembers = ""


const createManager = manager => {
    let template = fs.readFileSync(path.resolve(htmlDir, "manager.html"), "utf8");
    var managerHtml = ""
    managerHtml = managerHtml + template.replace(/{{ name }}/g, manager.getName())
        .replace(/{{ role }}/g, manager.getRole())
        .replace(/{{ email }}/g, manager.getEmail())
        .replace(/{{ id }}/g, manager.getId())
        .replace(/{{ officeNumber }}/g, manager.getOfficeNumber())
    teamMembers = teamMembers + managerHtml;
    console.log(managerHtml)
};

const createEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(htmlDir, "engineer.html"), "utf8");
    var engineerHtml = ""
    engineerHtml = engineerHtml + template.replace(/{{ name }}/g, engineer.getName())
        .replace(/{{ role }}/g, engineer.getRole())
        .replace(/{{ email }}/g, engineer.getEmail())
        .replace(/{{ id }}/g, engineer.getId())
        .replace(/{{ github }}/g, engineer.getGithub())
    teamMembers = teamMembers + engineerHtml;
    console.log(engineerHtml)
};

const createIntern = intern => {
    let template = fs.readFileSync(path.resolve(htmlDir, "intern.html"), "utf8");
    var internHtml = ""
    internHtml = internHtml + template.replace(/{{ name }}/g, intern.getName())
        .replace(/{{ role }}/g, intern.getRole())
        .replace(/{{ email }}/g, intern.getEmail())
        .replace(/{{ id }}/g, intern.getId())
        .replace(/{{ school }}/g, intern.getSchool())
    teamMembers = teamMembers + internHtml;
    console.log(internHtml)
};

function makeManager(name, id, email, officenumber) {
    const manager = new Manager(name, id, email, officenumber)
    createManager(manager)
}

function makeEngineer(name, id, email, github) {
    const engineer = new Engineer(name, id, email, github)
    createEngineer(engineer)
}

function makeIntern(name, id, email, school) {
    const intern = new Intern(name, id, email, school)
    createIntern(intern)
}

function renderMain() {
    let mainTemplate = fs.readFileSync(path.resolve(htmlDir, "main.html"), "utf8")
    var mainHtml = ""
    mainHtml = mainHtml + mainTemplate.replace(/{{ team }}/g, teamMembers)
    let file = path.join(__dirname, 'output', "./index.html");
    console.log(file);
    fs.writeFile(file, mainHtml, function (err) {
        if (err) {
            throw new Error(err)
        }
        console.log('done writing file')
    })
}

module.exports = {
    makeEngineer: makeEngineer,
    makeManager: makeManager,
    makeIntern: makeIntern,
    renderMain: renderMain
}
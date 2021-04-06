const Engineer = require("./engineer")

describe("Getting the github username", () => {
    it("should retrive the github username value of each instance of an employee", () => {
        const gitHub = "gitHub";
        const newEngineer = new Engineer(1, name, "email@email.com", gitHub, "Engineer");

        expect(newEngineer.github).toBe(gitHub);
    })
})
describe("getRole() should return Engineer", () => {
    it("should retrive the role value of each instance of an employee", () => {
        const engRole = "Engineer";
        const newEngineer = new Engineer(1, name, "email@email.com", "gitHub", "Engineer");

        expect(newEngineer.getRole()).toBe(engRole);
    })
})
describe("getGitHub function", () => {
    it("should retrive the gihub value of each instance of an employee", () => {
        const userName = "gitHub";
        const newEngineer = new Engineer(1, name, "email@email.com", userName, "Engineer");

        expect(newEngineer.getGithub()).toBe(userName);
    })
});
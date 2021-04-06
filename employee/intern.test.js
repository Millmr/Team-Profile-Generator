const Intern = require("./intern")

describe("Getting the school name", () => {
    it("should retrive the school value of each instance of an employee", () => {
        const schoolName = "UoI";
        const newIntern = new Intern(1, name, "email@email.com", schoolName, "Intern");

        expect(newIntern.school).toBe(schoolName);
    })
})
describe("getRole() should return Intern", () => {
    it("should retrive the role value of each instance of an employee", () => {
        const intRole = "Engineer";
        const newIntern = new Intern(1, name, "email@email.com", "UofI", "Engineer");

        expect(newIntern.getRole()).toBe(intRole);
    })
})
describe("getSchool function", () => {
    it("should retrive the school of each instance of an employee", () => {
        const schoName = "UoI";
        const newIntern = new Intern(1, name, "email@email.com", schoName, "Engineer");

        expect(newIntern.getSchool()).toBe(schoName);
    })
});
const Manager = require("./manager")
const Employee = require("./employee")

describe("Set off number", () => {
    it("should retrive the office numbers and set them", () => {
        const offNum = 100;
        const newManager = new Manager(1, name, "email@email.com", offNum, "Manager");

        expect(newManager.officeNumber).toBe(offNum);
    })
})
describe("getRole() should return Manager", () => {
    it("should retrive the role value of each instance of an employee", () => {
        const manRole = "Manager";
        const newManager = new Manager(1, name, "email@email.com", 100, "Manager");

        expect(newManager.getRole()).toBe(manRole);
    })
})
describe("getOfficeNumber function", () => {
    it("should retrive the office number", () => {
        const value = 100;
        const newManager = new Manager(1, name, "email@email.com", value, "Manager");

        expect(newManager.getOfficeNumber()).toBe(value);
    })
});
const Employee = require("./employee");

describe("Employee constructor" , () => {
    describe("Initialization" , () => {
        it("can be an instance of the Employee Class", () => {
            expect(typeof new Employee()).toBe("object");
        })
        it("should have a name property", () => {
            const name = "Matt";
            const newEmployee = new Employee(name, 1, "email@email.com");

            expect(newEmployee.name).toBe(name);
        })
        it("should have a id property", () => {
            const testValue = 100;
            const newEmployee = new Employee("name", testValue);

            expect(newEmployee.id).toBe(testValue);
        })
        it("should have an email property", () => {
            const email = "test@me.com";
            const newEmployee = new Employee(1, name, email);

            expect(newEmployee.email).toBe(email);
        })
    })

    describe("geName function", () => {
        it("should retrive the name property's  value of each instance of an employee", () => {
            const name = "Matt";
            const newEmployee = new Employee(name, 1, "email@email.com");

            expect(newEmployee.getName()).toBe(name);
        })
    })
    describe("getID function", () => {
        it("should retrive the id property value of each instance of an employee", () => {
            const id = 1;
            const newEmployee = new Employee("name",id);

            expect(newEmployee.getId()).toBe(id);
        })
    })
    describe("getEmail function", () => {
        it("should retrive the email property's value of each instance of an employee", () => {
            const email = "test@me.com";
            const newEmployee = new Employee(1, name, email);

            expect(newEmployee.getEmail()).toBe(email);
        })
    })
    describe("getRole function", () => {
        it("should retrive the Role value of each instance of an employee", () => {
            const role = "Employee";
            const newEmployee = new Employee(1, name, "email@email.com", "Employee");

            expect(newEmployee.getRole()).toBe(role);
        })
    })
    describe("new Employee", () => {
        it("It should generate new employee", () => {
            const employee = new Employee();
            
            expect(typeof (employee)).toBe("object");
        })
    })
})
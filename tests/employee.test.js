const Employee = require("../lib/employee.js");

describe("Employee", () => {
    it("should create an Employee object with a name, id, and email", () => {
        const employee = new Employee("Alice", 1, "alice@example.com");
        expect(employee.name).toBe("Alice");
        expect(employee.id).toBe(1);
        expect(employee.email).toBe("alice@example.com");
    });

    it("should return the employee's name via getName()", () => {
        const employee = new Employee("Alice", 1, "alice@example.com");
        expect(employee.getName()).toBe("Alice");
    });

    it("should return the employee's id via getId()", () => {
        const employee = new Employee("Alice", 1, "alice@example.com");
        expect(employee.getId()).toBe(1);
    });

    it("should return the employee's email via getEmail()", () => {
        const employee = new Employee("Alice", 1, "alice@example.com");
        expect(employee.getEmail()).toBe("alice@example.com");
    });

    it("should return 'Employee' via getRole()", () => {
        const employee = new Employee("Alice", 1, "alice@example.com");
        expect(employee.getRole()).toBe("Employee");
    });
});

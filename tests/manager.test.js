const Manager = require("../lib/manager.js");

describe("Manager", () => {
    it("should create a Manager object with a name, id, email, and office number", () => {
        const manager = new Manager("Bob", 2, "bob@example.com", 101);
        expect(manager.name).toBe("Bob");
        expect(manager.id).toBe(2);
        expect(manager.email).toBe("bob@example.com");
        expect(manager.officeNumber).toBe(101);
    });

    it("should return 'Manager' via getRole()", () => {
        const manager = new Manager("Bob", 2, "bob@example.com", 101);
        expect(manager.getRole()).toBe("Manager");
    });
});
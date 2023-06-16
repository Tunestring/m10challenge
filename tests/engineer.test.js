const Engineer = require("../lib/engineer.js");

describe("Engineer", () => {
    it("should create an Engineer object with a name, id, email, and GitHub username", () => {
        const engineer = new Engineer("Charlie", 3, "charlie@example.com", "charliegithub");
        expect(engineer.name).toBe("Charlie");
        expect(engineer.id).toBe(3);
        expect(engineer.email).toBe("charlie@example.com");
        expect(engineer.github).toBe("charliegithub");
    });

    it("should return GitHub username via getGithub()", () => {
        const engineer = new Engineer("Charlie", 3, "charlie@example.com", "charliegithub");
        expect(engineer.getGithub()).toBe("charliegithub");
    });

    it("should return 'Engineer' via getRole()", () => {
        const engineer = new Engineer("Charlie", 3, "charlie@example.com", "charliegithub");
        expect(engineer.getRole()).toBe("Engineer");
    });
});

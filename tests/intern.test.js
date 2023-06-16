const Intern = require("../lib/intern.js");

describe("Intern", () => {
    it("should create an Intern object with a name, id, email, and school", () => {
        const intern = new Intern("Diana", 4, "diana@example.com", "Harvard");
        expect(intern.name).toBe("Diana");
        expect(intern.id).toBe(4);
        expect(intern.email).toBe("diana@example.com");
        expect(intern.school).toBe("Harvard");
    });

    it("should return school via getSchool()", () => {
        const intern = new Intern("Diana", 4, "diana@example.com", "Harvard");
        expect(intern.getSchool()).toBe("Harvard");
    });

    it("should return 'Intern' via getRole()", () => {
        const intern = new Intern("Diana", 4, "diana@example.com", "Harvard");
        expect(intern.getRole()).toBe("Intern");
    });
});

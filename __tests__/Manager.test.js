const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Creating new Intern", () => {
    const manager = new Manager("Gary", "79", "far@side.com", "814");

    it("Should return given name", () => {
      expect(manager.getName()).toBe("Gary");
    });

    it("Should return given ID", () => {
      expect(manager.getID()).toBe("79");
    });

    it("Should return given email", () => {
      expect(manager.getEmail()).toBe("far@side.com");
    });

    it("Should return 'Manager'", () => {
      expect(manager.getRole()).toBe("Manager");
    });

    it("Should return given office number", () => {
      expect(manager.getOfficeNumber()).toBe("814");
    });
  });
});

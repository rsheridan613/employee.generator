const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Creating new Intern", () => {
    const intern = new Intern(
      "Charlie Brown",
      "50",
      "cbrown@snoopy.com",
      "Peanut University"
    );

    it("Should return given name", () => {
      expect(intern.getName()).toBe("Charlie Brown");
    });

    it("Should return given ID", () => {
      expect(intern.getID()).toBe("50");
    });

    it("Should return given email", () => {
      expect(intern.getEmail()).toBe("cbrown@snoopy.com");
    });

    it("Should return 'Intern'", () => {
      expect(intern.getRole()).toBe("Intern");
    });

    it("Should return given School name", () => {
      expect(intern.getSchool()).toBe("Peanut University");
    });
  });
});

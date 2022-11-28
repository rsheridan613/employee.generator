const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Creating new Engineer", () => {
    const engineer = new Engineer(
      "Calvin",
      "85",
      "calvin@hobbes.gov",
      "chobbs"
    );

    it("Should return given name", () => {
      expect(engineer.getName()).toBe("Calvin");
    });

    it("Should return given ID", () => {
      expect(engineer.getID()).toBe("85");
    });

    it("Should return given email", () => {
      expect(engineer.getEmail()).toBe("calvin@hobbes.gov");
    });

    it("Should return 'Engineer'", () => {
      expect(engineer.getRole()).toBe("Engineer");
    });

    it("Should return given Github name", () => {
      expect(engineer.getGithub()).toBe("chobbs");
    });
  });
});

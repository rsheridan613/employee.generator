const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Creating new Employee", () => {
    const employee = new Employee("Garfield", "76", "lasagna@garf.net");

    it("Should return given name", () => {
      expect(employee.getName()).toBe("Garfield");
    });

    it("Should return given ID", () => {
      expect(employee.getID()).toBe("76");
    });

    it("Should return given email", () => {
      expect(employee.getEmail()).toBe("lasagna@garf.net");
    });

    it("Should return 'Employee'", () => {
      expect(employee.getRole()).toBe("Employee");
    });
  });
});

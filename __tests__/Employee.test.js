const Employee = require("../dist/Employee");

describe("Employee", () => {
  const employee = new Employee("Garfield", "13", "lasagna@garf.net");
  describe("getName", () =>
    it("Should return given name", () =>
      expect(employee.getName()).isEqual("Garfield")));
});

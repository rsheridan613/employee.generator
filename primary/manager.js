const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.officeNum = officeNum;
  }
  getRole() {
    return `Manager`;
  }
}

module.exports = Manager;

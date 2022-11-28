const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum, teamName) {
    super(name, id, email);
    this.officeNum = officeNum;
    this.teamName = teamName;
  }
  getOfficeNumber() {
    return this.officeNum;
  }
  getRole() {
    return `Manager`;
  }
  getTeamName() {
    return this.teamName;
  }
}

module.exports = Manager;

const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email) {
    super(name, id, email);
    this.github = this.github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return `Engineer`;
  }
}

module.export = Engineer;

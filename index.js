const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

const Employee = require("./primary/Employee");
const Manager = require("./primary/Manager");
const Engineer = require("./primary/Engineer");
const Intern = require("./primary/Intern");

const dir = path.resolve(__dirname, "src");
const dpath = path.join(dir, "custom.html");

const createHtml = require("./src/page.js");

const team = [];

// Questions
// Questions asked when initiating file
const managerQuestions = [
  {
    name: "teamName",
    type: "input",
    message: "What is the name of your team?",
  },
  {
    name: "name",
    type: "input",
    message: "What is your name?",
  },
  { name: "id", type: "input", message: "What is your ID?" },
  { name: "email", type: "input", message: "What is your email?" },
  { name: "officeNum", type: "input", message: "What is your office number?" },
];

// Questions asked when engineer option is chosen
const engineerQuestions = [
  { name: "name", type: "input", message: "What is this person's name?" },
  { name: "id", type: "input", message: "What is this person's ID?" },
  { name: "email", type: "input", message: "What is this person's email?" },
  {
    name: "github",
    type: "input",
    message: "What is this person's Github username?",
  },
];

//Questions asked when intern option is chosen
const internQuestions = [
  { name: "name", type: "input", message: "What is this person's name?" },
  { name: "id", type: "input", message: "What is this person's ID?" },
  { name: "email", type: "input", message: "What is this person's email?" },
  {
    name: "school",
    type: "input",
    message: "What school does this person go to?",
  },
];

function init() {
  // Create a Manager
  function createManager() {
    inquirer.prompt(managerQuestions).then((responses) => {
      const manager = new Manager(
        responses.name,
        responses.id,
        responses.email,
        responses.officeNum,
        responses.teamName
      );
      team.push(manager);
      createTeam();
    });
  }

  // Create an Engineer
  function createEngineer() {
    inquirer.prompt(engineerQuestions).then((responses) => {
      const engineer = new Engineer(
        responses.name,
        responses.id,
        responses.email,
        responses.github
      );
      team.push(engineer);
      createTeam();
    });
  }

  // Create an Intern
  function createIntern() {
    inquirer.prompt(internQuestions).then((responses) => {
      const intern = new Intern(
        responses.name,
        responses.id,
        responses.email,
        responses.school
      );
      team.push(intern);
      createTeam();
    });
  }

  // Create the team
  function createTeam() {
    inquirer
      .prompt([
        {
          name: "nextRole",
          type: "list",
          message: "Which role would you like to add next?",
          choices: ["Engineer", "Intern", "Done"],
        },
      ])
      .then((responce) => {
        switch (responce.nextRole) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;
          default:
            buildHTML();
        }
        function buildHTML() {
          console.log(team);
          fs.writeFileSync(dpath, createHtml(team), "utf-8");
        }
      });
  }
  createManager();
}

init();

const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./utils/generateHTML");

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
  { name: "id", type: "input", message: "What is this your ID?" },
  { name: "email", type: "input", message: "What is your email?" },
  { name: "officeNum", type: "input", message: "What is your office number?" },
];

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

const roleQuestion = {
  name: "role",
  type: "list",
  message: "Which role would you like to add next?",
  choices: ["Engineer", "Intern", "Finish"],
};

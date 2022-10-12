const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require("fs");
const {
  renderManager,
  renderIntern,
  renderEngineer,
  renderEnd,
} = require("./src/render");

let content = "";
let engineerCards = "";
let internCards = "";

const managerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please ENTER Team manager's name",
      },
      {
        type: "input",
        name: "id",
        message: "Please ENTER Manager's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please ENTER Manager's email: ",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Please ENTER Manager's officeNumber: ",
      },
    ])
    .then((answer) => {
      const manager = new Manager(
        answer.name,
        answer.id,
        answer.email,
        answer.officeNumber
      );
      content += renderManager(manager);
      menu();
    });
};

const engineerPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please ENTER Engineer's name: ",
      },
      {
        type: "input",
        name: "id",
        message: "Please ENTER Engineer's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please ENTER Engineer's email: ",
      },
      {
        type: "input",
        name: "github",
        message: "Please ENTER Engineer's Github Username: ",
      },
    ])
    .then((answer) => {
      const engineer = new Engineer(
        answer.name,
        answer.id,
        answer.email,
        answer.github
      );
      engineerCards += renderEngineer(engineer);
      menu();
    });
};

const internPrompt = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Please ENTER Intern's name",
      },
      {
        type: "input",
        name: "id",
        message: "Please ENTER Intern's ID: ",
      },
      {
        type: "input",
        name: "email",
        message: "Please ENTER Intern's email: ",
      },
      {
        type: "input",
        name: "school",
        message: "Please ENTER Intern's school: ",
      },
    ])
    .then((answer) => {
      const intern = new Intern(
        answer.name,
        answer.id,
        answer.email,
        answer.school
      );
      internCards += renderIntern(intern);
      menu();
    });
};

const menu = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "Menu",
        choices: ["Add Engineer", "Add Intern", "Exit"],
      },
    ])
    .then((answer) => {
      switch (answer.choice) {
        case "Add Engineer":
          engineerPrompt();
          break;
        case "Add Intern":
          internPrompt();
          break;
        case "Exit":
          content += engineerCards;
          content += internCards;
          content += renderEnd();

          fs.writeFile("./dist/test.html", content, (err) => {
            err
              ? console.error(err)
              : console.log("Team Profile Successfully created");
          });
          break;
      }
    });
};

managerPrompt();

const createTeam = (team) => {
  // Build manager html formatting
  const createManager = (manager) => {
    return `
    <title>${manager.getTeamName()}</title>
    </head>
    <body>
      <div class="page-header bg-success text-center p-4 text-white mb-5">
        <h1>${manager.getTeamName()}</h1>
      </div>
      <div class="team-boxed">
        <div class="container">
          <div class="row justify-content-center">
        <div class="col-6 col-lg-4 border border-dark rounded bg-success">
          <div class="box">
            <h3 class="name text-white">${manager.getName()}</h3>
            <h4 class="title text-white">${manager.getRole()}</h4>
            <h5 class="bg-white rounded my-1 p-2">ID: ${manager.getID()}</h5>
            <h5 class="bg-white rounded my-1 p-2">
              Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
            </h5>
            <h5 class="bg-white rounded my-1 p-2">Office: ${manager.getOfficeNumber()}</h5>
          </div>
        </div>
        `;
  };

  // Build engineer html formatting
  const createEngineer = (engineer) => {
    return `
    <div class="col-6 col-lg-4 border border-dark rounded bg-success">
      <div class="box">
        <h3 class="name text-white">${engineer.getName()}</h3>
        <h4 class="title text-white">${engineer.getRole()}</h4>
        <h5 class="bg-white rounded my-1 p-2">ID: ${engineer.getID()}</h5>
        <h5 class="bg-white rounded my-1 p-2">
          Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
        </h5>
        <h5 class="bg-white rounded my-1 p-2">
          GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a>
        </h5>
      </div>
    </div>
    `;
  };

  //Build intern html formatting
  const createIntern = (intern) => {
    return `
    <div class="col-6 col-lg-4 border border-dark rounded bg-success">
      <div class="box">
        <h3 class="name text-white">${intern.getName()}</h3>
        <h4 class="title text-white">${intern.getRole()}</h4>
        <h5 class="bg-white rounded my-1 p-2">ID: ${intern.getID()}</h5>
        <h5 class="bg-white rounded my-1 p-2">
          Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
        </h5>
        <h5 class="bg-white rounded my-1 p-2">School: ${intern.getSchool()}</h5>
      </div>
    </div>
  `;
  };

  const results = [];

  results.push(
    team
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
  );
  results.push(
    team
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
  );
  results.push(
    team
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
  );

  return results.join("");
};

module.exports = (team) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <!-- CSS only -->
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
  ${createTeam(team)}
          </div>
        </div>
      </div>
    </body>
  </html>
    `;
};

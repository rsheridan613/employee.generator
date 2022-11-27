const createTeam = (team) => {
  const createManager = (manager) => {
    return `
        <div class="col-md-6 col-lg-4 border border-dark rounded bg-success">
          <div class="box">
            <h3 class="name text-white">${this.getName()}</h3>
            <h3 class="title text-white">${this.getRole()}</h3>
            <h5 class="bg-white rounded my-1 p-2">${this.getID()}</h5>
            <h5 class="bg-white rounded my-1 p-2">${this.getEmail()}</h5>
            <h5 class="bg-white rounded my-1 p-2">${this.getOfficeNumber()}</h5>
          </div>
        </div>
        `;
  };

  const results = [];

  results.push(
    team.filter((e) => e.getRole() === "Manager").map((m) => createManager(m))
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
      <title>TITLE HERE</title>
    </head>
    <body>
      <div class="page-header bg-success text-center p-4 text-white mb-5">
        <h1>TEAM NAME HERE</h1>
      </div>
      <div class="team-boxed">
        <div class="container">
          <div class="row">
            ${createTeam}
          </div>
        </div>
      </div>
    </body>
  </html>
    `;
};

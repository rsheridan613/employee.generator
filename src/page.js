const createTeam = (team) => {
  const createManager = (manager) => {
    return `
        <div>
            <h1> ${manager.getName()} </h1>
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
    </head>
    <body>
      <div class="page-header bg-success text-center p-4 text-white">
        <h1>${team.teamName}</h1>
      </div>
    </body>
  </html>
    `;
};
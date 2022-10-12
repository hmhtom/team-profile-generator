const renderManager = (manager) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <!--Bootstrap V5.2.1-->
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
          crossorigin="anonymous" />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
          crossorigin="anonymous"></script>
      </head>
      <body>
        <header class="bg-dark container-fluid h1 text-light text-center">
          Team Profile
        </header>
        <main class="row g-5 text-center m-1">
          <div class="col-md-12 col-lg-6 col-xl-4">
            <div class="card shadow">
              <div class="card-header bg-primary text-light">
                <h3>${manager.name}</h3>
                <h3>${manager.getRole()}</h3>
              </div>
              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">ID: ${manager.id}</li>
                  <li class="list-group-item">Office Number: ${
                    manager.officeNumber
                  }</li>
                  <li class="list-group-item">
                    <a href="mailto:${manager.email}">Contact through email</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>`;
};
const renderEngineer = (engineer) => {
  return `<div class="col-md-12 col-lg-6 col-xl-4">
  <div class="card shadow">
    <div class="card-header bg-info text-dark">
      <h3>${engineer.name}</h3>
      <h3>${engineer.getRole()}</h3>
    </div>
    <div class="card-body">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item"><a href="https://github.com/${engineer.getGithub()}" target="_blank">Github Page</a></li>
        <li class="list-group-item">
          <a href="mailto:${engineer.email}">Contact through email</a>
        </li>
      </ul>
    </div>
  </div>
</div>`;
};
const renderIntern = (intern) => {
  return `<div class="col-md-12 col-lg-6 col-xl-4">
    <div class="card shadow">
      <div class="card-header bg-light text-dark">
        <h3>${intern.name}</h3>
        <h3>${intern.getRole()}</h3>
      </div>
      <div class="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">School: ${intern.getSchool()}</li>
          <li class="list-group-item">
            <a href="mailto:${intern.email}">Contact through email</a>
          </li>
        </ul>
      </div>
    </div>
  </div>`;
};
const renderEnd = () => {
  return `</main>
    </body>
  </html>`;
};

module.exports = {
  renderEnd,
  renderEngineer,
  renderIntern,
  renderManager,
};

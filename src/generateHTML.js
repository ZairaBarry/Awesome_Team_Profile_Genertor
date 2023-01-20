function generateHTML(team) {

    var html =
        `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=, initial-scale=1.0" />
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" />
     

    <title>Awesome Team Profile </title>
  </head>

  <body class = "bg-primary">
    <header class="text-center bg-light text-primary">
      <h1>Team</h1>
    </header>
    
  <main class="container-fluid">
 
    <div class = "row justify-content-center">
       <div class = "col-md-9 card-columns">

      ${generateMembers(team)}
       </div>
    </div>
    </main>
    </body>
    </html>`

    return html;
}
function generateMembers(team) {
    var members = [];
    for (var i = 0; i < team.length; i++) {
        members.push(`<div class="card  mb-3" style="max-width: 18rem;">
        <div class="card-header font-weight-bold text-uppercase bg-primary  border-dark">${team[i].getName()}</div>
        <div class="card-body text-dark ">
        
        <h5 class="card-title ">${team[i].getRole()}
         </h5>
         
          <table >
            <tbody>
             <tr>
             <th scope="row">ID</th>
                <td>${team[i].getId()}</td>
                
                </tr>
                <tr>
                <th scope="row">Email</th>
                <td><a href="mailto:${team[i].getEmail()}">${team[i].getEmail()}</a></td>
                
                
                </tr>
                ${getInfo(team[i])}
            </tbody>
            </table>
        </div>
        </div>
        `);
    }
    return members.join("");
}

function getInfo(teamMember) {
    switch (teamMember.getRole()) {
        case "Manager":
            return `<tr>
            <th scope="row">Office Number</th>
            <td>${teamMember.getOfficeNumber()}</td>
            </tr>`
        case "Engineer":
            return `<tr>
            <th scope="row">Github</th>
            <td><a href="https://github.com/${teamMember.getGithub()}" target="_blank">${teamMember.getGithub()}</a></td>
            </tr>`
        case "Intern":
            return `<tr>
            <th scope="row">School</th>
            <td>${teamMember.getSchool()}</td>
            </tr>`

    }
}

module.exports = generateHTML;

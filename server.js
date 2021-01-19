const http = require("http");
const port = 3000;

const server = http
  .createServer(function (request, response) {
    if (request.url === "/OK") {
      console.log(" 'OK' request being processed...");
      response.writeHead(200);
      //{ "Content-Type": "text/html" }
      // response.write('<h1>OK PAGE</h1>')
      response.end();
    } else if (request.url === "/Created") {
      response.writeHead(201);
      response.end();
    } else if (request.url === "/Forbidden") {
      response.writeHead(404);
      response.end();
    } else if (request.url === "/Found") {
      response.writeHead(302);
      response.end();
    } else if (request.url === "/Gateway-Timeout") {
      response.writeHead(504);
      response.end();
    } else if (request.url === "/Internal-Server-Error") {
      response.writeHead(500);
      response.end();
    } else if (request.url === "/Moved-Permanently") {
      response.writeHead(301);
      response.end();
    } else if (request.url === "/Unauthorized") {
      response.writeHead(401);
      response.end();
    } else if (request.url === "/Bad-Request") {
      response.writeHead(400);
      response.end();
    } else {
      response.writeHead(404);
      response.end();
    }
  })
  .listen(port, function () {
    console.log(`This ${port} port works!!! `);
  });
//Phase2a

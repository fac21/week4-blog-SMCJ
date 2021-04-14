const express = require("express");

const server = express();

const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <title>Document</title>
</head>
<body>
  <header>
  </header>
  <main>
    <h1>TEST</h1>
  </main>
  <footer>
  </footer>
</body>
</html>
`;

server.get("/", (request, response) => {
    response.send(html);
  });


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)});
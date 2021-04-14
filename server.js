const express = require("express");
const blogs = require("./blogs.js");

const server = express();

server.get("/", (request, response) => {
    let messages = "";
    for (let blog of Object.values(blogs)) {
      messages += `<li>${blog.message}</li>`;
    }
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
    <h1>Twaddle</h1>
  <ul>${messages}</ul>
  </main>
  <footer>
  </footer>
</body>
</html>
`;
    response.send(html);
  });


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)});
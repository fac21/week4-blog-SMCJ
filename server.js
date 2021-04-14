const express = require("express");
const blogs = require("./blogs.js");
const staticHandler = express.static("public");

const server = express();
server.use(staticHandler);

let blogCount = 1;

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
  <link rel="stylesheet" type="text/css" href="style.css">
  <title>Document</title>
</head>
<body>
  <header>
  <h1><img src='twaddle2.png'></h1>
  </header>
  <main>
  <ul>${messages}</ul>
  <a href="/add-blog">Write post +</a>
  </main>
</body>
</html>
`;
    response.send(html);
  });

  server.get("/add-blog", (request, response) => {
    const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Twadd away!</title>
      </head>
      <body>
        <h1>Create a blog post</h1>
        <form method="POST">
          // <label id="name">Blogger name</label>
          // <input id="name" name="name">
          <label id="message">Message</label>
          <input id="message" name="message">
          <button>Submit</button>
        </form>
      </body>
    </html>
    `;
    response.send(html);
  });

  const bodyParser = express.urlencoded({ extended: false });

server.post("/add-blog", bodyParser, (request, response) => {
  blogCount++;
  const newBlog = request.body;
  const name = newBlog.name;
  blogs[`message${blogCount}`] = newBlog;
  response.redirect("/");
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)});
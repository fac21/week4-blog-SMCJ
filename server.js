const express = require("express");
const blogs = require("./blogs.js");
const staticHandler = express.static("public");

const server = express();
server.use(staticHandler);

let blogCount = 1;

server.get("/", (request, response) => {
    let messages = "";
    let blogIds = Object.keys(blogs);
    for (let i = 0; i < blogIds.length; i++) {
      messages += `<li>
      <span>${blogs[blogIds[i]].author} –</span>
      <span>${blogs[blogIds[i]].message}</span>
      <form action="/delete-blog" method="POST" style="display: inline;">
        <button name="name" value="${blogIds[i]}" aria-label="Delete ${blogs[blogIds[i]].message}">
          &times;
        </button>
      </form>
    </li>`;
    }
  
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="">
      <link rel="stylesheet" type="text/css" href="style.css">
      <title>Twaddle</title>
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
          <label for="author">Blogger name</label>
          <input id="author" name="author">
          <label for="message">Message</label>
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
  const author = newBlog.author;
  blogs[`message${blogCount}`] = newBlog;
  response.redirect("/");
});

server.post("/delete-blog", bodyParser, (request, response) => {
  const postToDelete = request.body.name;
  console.log(request.body);
  delete blogs[postToDelete];
  response.redirect("/");
});


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)});
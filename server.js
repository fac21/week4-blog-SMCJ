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
    messages += `<article class='stack-sm'>
    <p>${blogs[blogIds[i]].author}</p>
    <span>${blogs[blogIds[i]].date}</span>
    <div><p>${blogs[blogIds[i]].message}</p></div>
    <form action="/delete-blog" method="POST" style="display: inline;">
      <button name="name" value="${blogIds[i]}" aria-label="Delete ${blogs[blogIds[i]].message}">
        <i class="far fa-trash-alt"></i>
      </button>
    </form>
  </article>`;
  }
  
  const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <title>Twaddle</title>
  </head>
  <body>
    <header>
    <h1><img src='twaddle2.png' alt='logo'></h1>
    </header>
    <main>
    <section>${messages}</section>
    <a href="/add-blog">Write a new post +</a>
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
      <form id='blog-entry' method="POST">
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

  const d = new Date();
  const time = d.toTimeString().slice(0,5); // e.g. 12.42
  const date = d.toDateString(); // e.g. Thu 15 April 2021
  const wholeDate = "- " + date + " " + time;

  newBlog["date"] = wholeDate;
  blogs[`message${blogCount}`] = newBlog;
  response.redirect("/");
});

server.post("/delete-blog", bodyParser, (request, response) => {
  const postToDelete = request.body.name; 
  delete blogs[postToDelete];
  response.redirect("/");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`)
});
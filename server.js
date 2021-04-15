const express = require("express");
const blogs = require("./blogs.js");
const templates = require("./templates");

const server = express();
const staticHandler = express.static("public");
server.use(staticHandler);

let blogCount = 1;

server.get("/", (request, response) => {
  let messages = "";
  let blogIds = Object.keys(blogs);
  for (let i = 0; i < blogIds.length; i++) {
    messages += `<article class='stack-sm'>
    <div class="blog-info">
      <p class="inline">${blogs[blogIds[i]].author}</p>
      <span class="sm-white">${blogs[blogIds[i]].date}</span>
    </div>
    <div class="message"><p>${blogs[blogIds[i]].message}</p></div>
    <form action="/delete-blog" method="POST" style="display: inline;">
      <button name="name" value="${blogIds[i]}" aria-label="Delete ${blogs[blogIds[i]].message}">
        <i class="far fa-trash-alt"></i>
      </button>
    </form>
  </article>`;
  }
  
  const html = templates.mainPage(messages);

  response.send(html);
  });

server.get("/add-blog", (request, response) => {
  const html = templates.addBlog();
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
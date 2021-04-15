  function mainPage(messages) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <link rel="icon" type="image/png" href="penguin.png"/>
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
        <a class="btn" href="/add-blog">Write a new post +</a>
        </main>
    </body>
    </html>
    `;
  }

function addBlog() {
    return  `
    <!doctype html>
    <html>
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="icon" type="image/png" href="penguin.png"/>
        <head>
        <meta charset="utf-8">
        <title>Twadd away!</title>
        </head>
        <body class="add-blog-page">
        <h1 class="center"><img src='twaddle2.png' alt='logo'></h1>
        <footer>
            <h2 class="inline"> *twaddle </h2>
            <span>/ˈtwɒd(ə)l/</span>
            <p class="inline">Trivial or foolish speech or writing; Nonsense.
            "He dismissed the novel as self-indulgent twaddle"</p>
        </footer>
        <form class="flex-column stack-xs add-form" id='blog-entry' method="POST">
            <label class="form-label" for="author">Blogger name:</label>
            <input id="author" name="author" required>
            <label class="form-label" for="message">Write your twaddle* here:</label>
            <textarea id="message" name="message" rows="6" required></textarea>
            <button class="btn">Submit</button>
        </form>
        </body>
    </html>
    `;
}

module.exports = { addBlog, mainPage };
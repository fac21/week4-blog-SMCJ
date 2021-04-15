1. Create package.json file: `npm init -y` 
2. Install express: `npm install express` 
3. Make the server in server.js file: 
    Import express module: `const express = require("express")`
    Run express: `const server = express()`
    Create port: `const PORT = 3000`
    Listen on port: `server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)})`
 
 4. Install nodemon (so you don't need to restart server after every save): `npm install nodemon`
 5. Add script in package.json file: `"dev": "nodemon server.js"
 6. Install cypress as a dev dependency (only required during development but nt production): npm install -D cypress
 7. Add script in package.json file: "test": "cypress open"
 8. To run cypress: `npm run test`
 9. Naviage to cypress/integration directory and delete example and create file: tests.js

USING HEROKU

Getting started:
:bulb: https://devcenter.heroku.com/articles/getting-started-with-nodejs

![](https://i.imgur.com/E7n7Nio.png)

![](https://i.imgur.com/bLG2TZY.png)

---

When you create an application on Heroku, it associates a new Git remote, typically named `heroku`, with the local Git repository for your application.

As a result, deploying code is just the familiar `git push`, but to the heroku remote instead:

![](https://i.imgur.com/epJvcBa.png)


![](https://i.imgur.com/WaCDvhZ.png)


![](https://i.imgur.com/D5pddSp.png)


![](https://i.imgur.com/ELYsDL0.png)



`https://lit-fjord-23988.herokuapp.com/`

or

![](https://i.imgur.com/1SjgPB7.png)


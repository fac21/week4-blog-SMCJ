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

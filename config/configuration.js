const express = require("express");
const cors = require("cors");


const bodyParser = require('body-parser');
const config = require('config');
const consign = require('consign');


// const app = express();
var corsOptions = {
  origin: "http://localhost:3004"
};
// app.use(cors(corsOptions));
// // parse requests of content-type - application/json
// app.use(express.json());
// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));
// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
// require("./app/routes/tutorial.routes.js")(app);
// app.listen();
// // set port, listen for requests
// const PORT = process.env.PORT || 3003;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
// });

module.exports = () => {

    const app = express();
  
    app.use(cors(corsOptions));
    // parse requests of content-type - application/json
    app.use(express.json());
    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(express.urlencoded({ extended: true }));

    app.set('port', process.env.PORT || 3003);
  
    app.use(bodyParser.json());
  
    consign({ cwd: 'app' })
      .then('routes')
      .then('models')
      .then('controllers')
      .into(app);
  
    return app;
  
  };
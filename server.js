// import statements for server.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// constiable declaration
const PORT = process.env.PORT || 4000;

const db = require("./models");


// lines 14 and 15 will be used later in deployment
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "/client/build")));


// route that servers our production build out
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "/client/build/index.html"));
  });


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
      console.log("App listening on PORT " + PORT);
    });
  });
  
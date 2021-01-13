// import statements for server.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

// constiable declaration
const PORT = process.env.PORT || 4000;

// Requiring our models for syncing
// const db = require("./models");


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Syncing our sequelize models and then starting our Express app
// db.sequelize.sync({}).then(function () {
//   app.listen(PORT, function () {
//     console.log("App listening on PORT " + PORT);
//   });
// });

app.listen(PORT, console.log(`server listening on port ${PORT}`));
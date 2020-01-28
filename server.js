// Express
var express = require("express");
var path = require("path");

// Set Port
var PORT = process.env.PORT || 3000;

// Initialise Express
var app = express();

// Require models
var db = require("./models");

//Static directory
app.use(express.static(path.join(__dirname, "/public")));

//Parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Express handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Require routes
require("./controllers/api-routes")(app);
require("./controllers/html-routes")(app);

//Start server
app.listen(PORT, function() {
  console.log("Server listening on http://localhost:" + PORT);
});

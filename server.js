var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var routes = require("./controllers/burgers_controller.js");
var db = require("./models");
var port = process.env.port || 8080;
var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({ 
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use("/", routes);

db.sequelize.sync({ force: false }).then(function() {
  app.listen(port, function() {
    console.log("App listening on port " + port);
  });
});

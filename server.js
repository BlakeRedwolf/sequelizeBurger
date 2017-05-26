var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// Require routes
var routes = require("./controllers/burger_controller.js");

var port = 3000;

var app = express();
// Static content will come from /public
app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
// Override 
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
// Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));

var routes = require("./controller/burger_controller.js");

app.use("/", routes);

app.listen(port);

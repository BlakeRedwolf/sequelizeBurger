var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function(req, res) {
  db.burger.findAll({}).then(function(results) {
    var handlebarsObject = {
      burgers: results
    };
    res.render("index", handlebarsObject);
  });
});

router.post("/", function(req, res) {
  db.burger.create({
    burger_name: req.body.burgerInput,
  }).then(function(data) {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  db.burger.update({
    devoured: req.body.devoured
  }, {
    where: {
      id: req.params.id
    }
  }).then(function(data) {
    res.redirect("/");
  });
});

module.exports = router;
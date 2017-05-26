var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

// When user inputs a value, post to db
router.post("/", function(req, res) {
	burger.create([
		"name", "sleepy"
	], [
		req.body.name, req.body.sleepy
	], function() {
		res.redirect("/");
	});
});

// When user inputs update devoured in db (id)
router.put("/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition", condition);

	burger.update({
		sleepy: req.body.devoured
	}, condition, function() {
		res.redirect("/");
	});
});

// Export routes for access
module.exports = router;
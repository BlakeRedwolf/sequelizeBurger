var orm = require("../config/orm.js");

var burger = {
	// Select all from sql db
	selectAll: function(callBack) {
		orm.selectAll("burgers", function(res) {
			callBack(res);
		});
	},
	// Insert
	insertTab: function(value, callBack) {
		orm.insertTab("burgers", vaule, function(res) {
			callBack(res);
		});
	},
	// Update
	updateTab: function(column, condition, callBack) {
		orm.updateTab("burgers", column, condition, function(res) {
			callBack(res);
		});
	}
};

// Export for controller
module.exports = burger;
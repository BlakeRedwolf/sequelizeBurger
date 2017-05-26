var connection = require("../config/connection.js");

function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push("?");
	}

	return arr.toString();
}

function objToSql(ob) {
	var arr = [];

	for (var key in ob) {
		if (Object.hasOwnProperty.call(ob, key)) {
			arr.push(key + "=" + ob[key]);
		}
	}

	return arr.toString();
}

var orm = {
	selectAll: function(tableInput, callback) {
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callBack(result);
		});
	},

	insertTab: function(tableInput, value, callBack) {
		var qureryString = "INSERT INTO" + tableInput;

		queryString += ' (burger_name, devoured) VALUES ("';
		queryString += value;
		queryString += '", false); ';

		connnection.query(queryString, function(err, result) {
			if (err) {
				throw err;
			}
			callBack(result);
		});	
	},

	updateTab: function(tableInput, column, condition, callBack) {
		var queryString = "UPDATE " + tableInput;

		queryString += " SET ";
		queryString += objToSql(column);
		queryString += " WHERE ";
		queryString += condition;

		connnection.query(queryString, fucntion(err, result) {
			if (err) {
				throw err;
			}
			callBack(result);
		});
	}
}

module.exports = orm;



var mysql      = require('mysql');
var db = null;

module.exports = function () {

	if(!db) {
		var db = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : 'Smojoe84',
		  database : 'servicemembertraining_db'
		});

		db.connect(function(err) {
		  // connected! (unless `err` is set)
		});


		return db;
	}

}
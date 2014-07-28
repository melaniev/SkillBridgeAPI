// MYSQL
var mysql      = require('mysql');

exports.getTrainings = function(db){

	db.query('SELECT * FROM wp_pods_trainings ', function(err, rows, fields) {
		if (err) throw err;
		console.log('The solution is: ', rows);
	});


	return;
}


// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');


var api = require("mysql_GET_trainings");
var db = require('dbConnection')();
var training     = require('./app/models/training');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser());

var port = process.env.PORT || 8081; 		// set our port



// ROUTES FOR OUR API
// =============================================================================
var router = express.Router(); 				// get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next(); // make sure we go to the next routes and don't stop here
});

// on routes that end in /trainings
// ----------------------------------------------------
router.route('/trainings')

	// create a training opp (accessed at POST http://localhost:8080/v01/api/trainings)
	.post(function(req, res) {
		res.json({ message: 'POST /trainings' });
		
	})

	// get all the trainings (accessed at GET http://localhost:8080/v01/api/trainings)
	.get(function(req, res) {

		api.getTrainings(db);
		res.json({ message: 'GET /trainings' });
	});

// on routes that end in /trainings/:training_id
// ----------------------------------------------------
router.route('/trainings/:training_id')

	// get the trainings with that id (accessed at GET http://localhost:8080/v01/api/trainings/:training_id)
	.get(function(req, res) {

		res.json({ message: 'GET /trainings/:training_id' });

	})

	// update the training opp with this training (accessed at PUT http://localhost:8080/v01/api/trainings/:training_id)
	.put(function(req, res) {
		res.json({ message: 'PUT /trainings/:training_id' });
	})

	// delete the training with this id (accessed at DELETE http://localhost:8080/v01/api/trainings/:training_id)
	.delete(function(req, res) {
		res.json({ message: 'DELETE /trainings/:training_id' });

	});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /v01api
app.use('/v01api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);




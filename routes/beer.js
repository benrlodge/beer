var express = require('express');
var router = express.Router();
var _ = require('underscore');

// var apiKeys = require('../config/apiKeys');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb(process.env.BREWERYDB);

router.get('/', function(req, res) {
	res.send('hello')
});


// brewdb.search.beers({ q: "dogfish" }, callback);
// brewdb.search.breweries({ q: "dogfish" }, callback);

router.get('/beers', function( req, res ) {	
	console.log('Search query: ', req.query.query)
	brewdb.search.beers( { q: req.query.query }, function(err, results){
		console.log('results: ', results);
		res.send(results);
	});	
});

// router.get('/category', function( req, res ) {	
// 	brewdb.style.getById(1, function(e, results){
// 		console.log(e, results);
// 		res.send(results);
// 	})

// });



module.exports = router;
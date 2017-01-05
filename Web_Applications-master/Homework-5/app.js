var express = require('express');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'})
//===============================================
app.set('port', process.env.PORT || 3000);
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
//----------------------------------
require( './db' );
var mongoose = require('mongoose');
var movie = mongoose.model('movie');
//----------------------------------
//render the homepage for testing
app.get('/', function(req, res) { 
            res.render('home');
});
//----------------------------------
app.get('/movies', function(req, res){
	//console logging
	console.log('--------')
	console.log(req.query.d_name);
	console.log('--------')
	var query_director = req.query.d_name;
	if(query_director != undefined){
		movie.find({ director: query_director}, function(err, movies, count){
			res.render('movies', {movies: movies});
		});
	}else
		movie.find({}, function(err, movies, count) {
	    	res.render('movies', {movies: movies});
	  	});
});
//------------------------------------------------
app.use(function(req, res, next){ res.status(404);
            res.render('404');
});
app.listen(app.get('port'), function(){
console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});
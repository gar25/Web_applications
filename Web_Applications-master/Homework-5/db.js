var mongoose = require('mongoose');
//----------------------------------
var movie = new mongoose.Schema({
	title: String,
	year: Number,
	director: String
});
//----------------------------------
mongoose.model('movie', movie);
var db = mongoose.connect('mongodb://localhost:1234/hw05');
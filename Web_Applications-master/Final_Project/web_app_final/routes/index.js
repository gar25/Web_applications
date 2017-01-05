var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var level1_schema = mongoose.model('level1_schema');
var level2_schema = mongoose.model('level2_schema');
var level3_schema = mongoose.model('level3_schema');
var level4_schema = mongoose.model('level4_schema');
var level5_schema = mongoose.model('level5_schema');

//simple global to hold name for app
var name_holder = '';
var score_holder = 0;
var obj_answers = [];
var score = 0;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', function(req, res) {
	console.log('Within post');
	name_holder = req.body.name;
	//suffle the name and add salt to make key for database finding
	//basic attempt
	var cells = 10;
	var cell_array = [0,1,2,3,4,5,6,7,8,9];
	for(var i = cells - 1; i >= 0; i--){
			var current_index = Math.floor(Math.random() * cells);
			var temp_value = cell_array[current_index];
			cell_array[current_index] = cell_array[i];
			cell_array[i] = temp_value;
	}
	//changed due to unit testing
	var number = parseInt(cell_array.join(""));
	name_holder += number;
	console.log('Before saved');
	//call save to actually store within the database
	res.redirect('/level1');
});
/*Get results page */
router.get('/results', function(req, res, next){
	var score_string = score_holder + ' out of 5';
	level1_schema.findOne({name: name_holder}, function(err, list, count){
		console.log('Level-1 from database: ' + list);
	});
	level2_schema.findOne({name: name_holder}, function(err, list, count){
		console.log('Level-2 from database: ' + list);
	});
	level3_schema.findOne({name: name_holder}, function(err, list, count){
		console.log('Level-3 from database: ' + list);
	});
	level4_schema.findOne({name: name_holder}, function(err, list, count){
		console.log('Level-4 from database: ' + list);
	});
	level5_schema.findOne({name: name_holder}, function(err, list, count){
		console.log('Level-5 from database: ' + list);
	});
	res.render('results', {score: score_string});
});
/*Get Level5 page */
router.get('/level5', function(req, res, next){
	res.render('level5');
});
router.post('/level5', function(req, res) {
	console.log('Within post');
	var level5_answers = new level5_schema({
		name: name_holder,
		number: req.body.number
	});
	if(true){
		if(req.body.number === '1232545123'){
			score_holder += 1;
		}
	}
	console.log(level5_answers);
	console.log('Before saved');
	//call save to actually store within the database
	level5_answers.save(function(err, list, count){
		console.log('Saving the list');
		res.redirect('/results');
	});
});
/*Get Level4 page */
router.get('/level4', function(req, res, next){
	res.render('level4');
});
router.post('/level4', function(req, res) {
	console.log('Within post');
	var level4_answers = new level4_schema({
		name: name_holder,
		structure1: req.body.structure1,
		structure2: req.body.structure2,
		structure3: req.body.structure3,
		structure4: req.body.structure4,
		structure5: req.body.structure5
	});
	if(true){
		if(req.body.structure1 === 'House'){
			if(req.body.structure2 === 'Apartment'){
				if(req.body.structure3 === 'Building'){
					if(req.body.structure4 === 'Shack'){
						if(req.body.structure5 === 'Mansion'){
							score_holder += 1;
						}
					}
				}
			}
		}
	}
	console.log(level4_answers);
	console.log('Before saved');
	//call save to actually store within the database
	level4_answers.save(function(err, list, count){
		console.log('Saving the list');
		res.redirect('/level5');
	});
});
/*Get Level3 page */
router.get('/level3', function(req, res, next){
	res.render('level3');
});
router.post('/level3', function(req, res) {
	console.log('Within post');
	var level3_answers = new level3_schema({
		name: name_holder,
		animal1: req.body.animal1,
		animal2: req.body.animal2,
		animal3: req.body.animal3,
		animal4: req.body.animal4,
		animal5: req.body.animal5
	});
	if(true){
		if(req.body.animal1 === 'Cat'){
			if(req.body.animal2 === 'Dog'){
				if(req.body.animal3 === 'Horse'){
					if(req.body.animal4 === 'Dog'){
						if(req.body.animal5 === 'Cat'){
							score_holder += 1;
						}
					}
				}
			}
		}
	}
	console.log(level3_answers);
	console.log('Before saved');
	//call save to actually store within the database
	level3_answers.save(function(err, list, count){
		console.log('Saving the list');
		res.redirect('/level4');
	});
});
/*Get Level2 page */
router.get('/level2', function(req, res, next){
	res.render('level2');
});
router.post('/level2', function(req, res) {
	console.log('Within post');
	var level2_answers = new level2_schema({
		name: name_holder,
		color1: req.body.color1,
		color2: req.body.color2,
		color3: req.body.color3,
		color4: req.body.color4,
		color5: req.body.color5
	});
	if(true){
		if(req.body.color1 === 'Red'){
			if(req.body.color2 === 'White'){
				if(req.body.color3 === 'Blue'){
					if(req.body.color4 === 'Red'){
						if(req.body.color5 === 'Blue'){
							score_holder += 1;
						}
					}
				}
			}
		}
	}
	console.log(level2_answers);
	console.log('Before saved');
	//call save to actually store within the database
	level2_answers.save(function(err, list, count){
		console.log('Saving the list');
		res.redirect('/level3');
	});
});
/* Get level1 page */
router.get('/level1', function(req, res, next) {
	res.render('level1');
});
router.post('/level1', function(req, res) {
	console.log('Within post');
	obj_answers = [];
	var level1_answers = new level1_schema({
		name: name_holder,
		animal1: req.body.animal1,
		animal2: req.body.animal2,
		animal3: req.body.animal3
	});
	if(true){
		if(req.body.animal1 === 'Cat'){
			if(req.body.animal2 === 'Dog'){
				if(req.body.animal3 === 'Horse'){
					score_holder += 1;
				}
			}
		}
	}
	console.log(level1_answers);
	console.log('Before saved');
	//call save to actually store within the database
	level1_answers.save(function(err, list, count){
		console.log('Saving the list');
		res.redirect('/level2');
	});
});



module.exports = router;

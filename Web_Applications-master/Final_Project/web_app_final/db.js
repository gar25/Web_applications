var mongoose = require('mongoose');

var level1_schema = new mongoose.Schema({
	name: String,
	animal1: String,
	animal2: String,
	animal3: String
});

var level2_schema = new mongoose.Schema({
	name: String,
	color1: String,
	color2: String,
	color3: String,
	color4: String,
	color5: String
});

var level3_schema = new mongoose.Schema({
	name: String,
	animal1: String,
	animal2: String,
	animal3: String,
	animal4: String,
	animal5: String
});

var level4_schema = new mongoose.Schema({
	name: String,
	structure1: String,
	structure2: String,
	structure3: String,
	structure4: String,
	structure5: String
});

var level5_schema = new mongoose.Schema({
	name: String,
	number: String
});


mongoose.model('level1_schema', level1_schema);
mongoose.model('level2_schema', level2_schema);
mongoose.model('level3_schema', level3_schema);
mongoose.model('level4_schema', level4_schema);
mongoose.model('level5_schema', level5_schema);

mongoose.connect('mongodb://localhost/memoryDB');

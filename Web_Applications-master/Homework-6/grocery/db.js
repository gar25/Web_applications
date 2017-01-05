var mongoose = require('mongoose');
var URLSlugs = require('mongoose-url-slugs');

var Item = new mongoose.Schema({
	name: String,
	quantity: Number,
	checked: {type: Boolean, default: false}
});

var List = new mongoose.Schema({
	name: String,
	items: [Item],
	username: String
});

var passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new mongoose.Schema({
	name: String,
	password: String
});

// NOTE: we're using passport-local-mongoose as a plugin
// our schema for user looks pretty thin... but that's because
// the plugin inserts salt, password and username
UserSchema.plugin(passportLocalMongoose);

mongoose.model('User', UserSchema);

List.plugin(URLSlugs('name createdBy'));
mongoose.model('Item', Item);
mongoose.model('List', List);
mongoose.connect('mongodb://localhost/grocerydb');

var express = require('express'), 
    router = express.Router(),
    passport = require('passport'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

var List = mongoose.model('List');
var Item = mongoose.model('Item');

var list_temp_hold = List;

//have problems with the req.user field
//obtain the username from the req field
//however when trying to obtain the username for a 
//second time getting error cannot because it is undefined
//making temp variable to handle the problem
var temp_username = '';

router.get('/', function(req, res) {
	console.log('================');
	console.log(req.user.username);
	console.log('================');
	res.render('homepage');
});
//---------------------------------------
//---------------------------------------
//login get and post functions
router.get('/login', function(req, res) {
	res.render('login');
});
router.post('/login', function(req,res,next) {
  // NOTE: use the custom version of authenticate so that we can
  // react to the authentication result... and so that we can
  // propagate an error back to the frontend without using flash
  // messages
  passport.authenticate('local', function(err,user) {
    if(user) {
      // NOTE: using this version of authenticate requires us to
      // call login manually
      req.logIn(user, function(err) {
        res.redirect('/list');
      });
    } else {
      res.render('login', {message:'Your login or password is incorrect.'});
    }
  })(req, res, next);
  // NOTE: notice that this form of authenticate returns a function that
  // we call immediately! See custom callback section of docs:
  // http://passportjs.org/guide/authenticate/
});
//---------------------------------------
//---------------------------------------
//register get and post functions
router.get('/register', function(req, res) {
	res.render('register');
});
router.post('/register', function(req, res) {
  User.register(new User({username:req.body.username}), 
      req.body.password, function(err, user){
    if (err) {
      // NOTE: error? send message back to registration...
      res.render('register',{message:'Your registration information is not valid'});
    } else {
      // NOTE: once you've registered, you should be logged in automatically
      // ...so call authenticate if there's no error
      passport.authenticate('local')(req, res, function() {
      	temp_username = req.user;
        res.redirect('/list');
      });
    }
  });   
});
//---------------------------------------
//---------------------------------------
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});
//get the list homepage
router.get('/list', function(req, res) {
	List.find({username: req.user.username}, function(err, lists, count) {
	    	res.render('list', {lists: lists});
	});
});

//get the list create page
router.get('/list/create', function(req, res){
	res.render('list_create');
});

router.post('/list/create', function(req, res) {
	//create a new list object
	console.log('Right berfore within post')
	console.log(req.user.username);
	console.log('Within post');
	var list = new List({
		name: req.body.myList,
		username: req.user.username
	});
	console.log('==========');
	console.log(req.user.username);
	console.log('==========');
	list_temp_hold = list;
	console.log(list);
	console.log('Before saved');
	//call save to actually store within the database
	list.save(function(err, list, count){
		console.log('Saving the list');
		console.log(list.slug);
		res.redirect('/list/' + list.slug);
	});
});

router.get('/list/:slug', function(req, res){
	List.findOne({name: list_temp_hold.name}, function(err, lists, count) {
	    	res.render('edit', {lists: lists});
	});
});

router.post('/list/:slug', function(req, res) {
	//create a new list object
	console.log('Within post');
	var item = new Item({
		name: req.body.itemName,
		quantity: req.body.itemCount,
	});
	console.log(list_temp_hold.username);
	list_temp_hold.items.push(item);
	console.log(list_temp_hold);
	res.redirect('/list/' + list_temp_hold.slug);
});

module.exports = router;

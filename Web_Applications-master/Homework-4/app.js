var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var handlebars = require('express-handlebars').create({ defaultLayout:'main' });
var session = require('express-session');
//===============================================
app.set('port', process.env.PORT || 3000);
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
//------------------------------------------------
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
//------------------------------------------------
var sessionOptions = {
	secret: 'secret cookie thang',
	resave: false,
	saveUninitialized: false
};
//------------------------------------------------
//session middleware
app.use(session(sessionOptions));
//------------------------------------------------
//console logging middleware
app.use(function(req, res, next){
	console.log(req.method, req.path);
	console.log('=====');
	next();
});
//------------------------------------------------
//GLOBALS FOR STORAGE
myName = '';
var bird_listings = [];
bird_listings.push({name: 'Bald Eagle ', count: 3});
bird_listings.push({name: 'Yellow Billed Duck ', count: 7});
bird_listings.push({name: 'Great Cormorant ', count: 4});
var temp_hold = [];
temp_hold.push({name: 'Bald Eagle ', count: 3});
temp_hold.push({name: 'Yellow Billed Duck ', count: 7});
temp_hold.push({name: 'Great Cormorant ', count: 4});
var bird_listings_check = [];
for(var i = 0; i < bird_listings.length; i++){
	bird_listings_check.push(bird_listings[i]);
}
//------------------------------------------------
//Routers
app.get('/', function(req, res) { 
            res.render('home');
});
//------------------------------------------------
//routing information for the bird listing page
app.get('/birds', function(req, res) {
	console.log('req.body:', req.body); 
	console.log('req.session.settings_session ',req.session.settings_session);
	if(req.session.settings_session == undefined){
		req.session.birds = temp_hold;
	}
    res.render('list', {'birds': req.session.birds});
    //res.render('list', {'myName': myName});
});
//posting information for the form on the bird listing page
app.post('/birds', function(req, res) {
	myName = req.body.myName;
	var minimum = 0;
	var temp = 0;
	if(req.session.settings_session != undefined){
		minimum = req.session.settings_session;
	}
	for(var i = 0; i < bird_listings.length; i++){
		if(bird_listings[i].name == myName + ' '){
			bird_listings[i].count += 1;
			temp = 1;
		}
	}
	if(temp == 0){
		bird_listings.push({name: myName + ' ', count: 1});
	}
	//loop through the bird_listings to obtain the birds that have three or more as there count
	bird_listings_check = [];
	for(var i = 0; i < bird_listings.length; i++){
		if(bird_listings[i].count >= minimum){
			bird_listings_check.push(bird_listings[i]);
		}
	}
	if(req.session.settings_session == undefined){
		bird_listing_check = temp_hold;
	}else
		req.session.birds = bird_listings_check;


	res.redirect('/birds');
});
//------------------------------------------------
//routing information for the settings page
app.get('/settings', function(req, res) {
		console.log('req.body:', req.body); 
		console.log('req.session.settings_session ',req.session.settings_session);
        res.render('settings', {'settings_session': req.session.settings_session});
});
//posting information for the settings page
app.post('/settings', function(req, res) {
	console.log('req.body:', req.body); 
	console.log('req.session.settings_session ',req.session.settings_session);
	req.session.settings_session = req.body.settings_session;
	//obtain the correct listing of birds for the bird listing page
	bird_listings_check = [];
	for(var i = 0; i < bird_listings.length; i++){
		if(bird_listings[i].count >= req.session.settings_session){
			bird_listings_check.push(bird_listings[i]);
		}
	}
	if(req.session.settings_session == undefined){
		bird_listing_check = temp_hold;
	}else
		req.session.birds = bird_listings_check;
		
	res.redirect('/birds');
});
//------------------------------------------------
app.use(function(req, res, next){ res.status(404);
            res.render('404');
});
app.listen(app.get('port'), function(){
console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});
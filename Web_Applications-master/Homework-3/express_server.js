var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);
// set up handlebars view engine
var handlebars = require('express-handlebars') .create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//fortune cookie
var fortunes = [
"Conquer your fears or they will conquer you.", "Rivers need springs.",
"Do not fear what you don't know.",
"You will have a pleasant surprise.", "Whenever possible, keep it simple.",
];


//adding the static middleware before declaring any routes
app.use(express.static(__dirname + '/public_E'));


/*//adding routes for the home page and the about page
app.get('/', function(req, res){ res.type('text/plain');
            res.send('Meadowlark Travel');
});
app.get('/about', function(req, res){
            res.type('text/plain');
            res.send('About Meadowlark Travel');
});*/
//for logging request information
/*
app.use(function(req, res, next) {
    console.log('params for ', req.method, req.url);
    console.log('======');
    console.log('req.url:', req.url);
    console.log('req.method:', req.method);
    console.log('req.path:', req.path);
    console.log('req.query:', req.query);
    console.log('req.headers:', req.headers);
    console.log('req.body:', req.body);
    console.log('\n\n\n');
    next();
});
*/
//new routes for handlebars
app.get('/', function(req, res) { 
            var headerslist = req.headers;
          
            var obj = 'host: \n' + headerslist['host'];
            var obj1 = 'connection: ' + headerslist['connection'];
            var obj2 = 'accept: ' + headerslist['accept'];
            var obj3 = 'user-agent: ' + headerslist['user-agent'];
            var obj4 = 'referer: ' + headerslist['referer'];
            var obj5 = 'accept-encoding: ' + headerslist['accept-encoding'];
            var obj6 = 'accept-language: ' + headerslist['accept-language'];

            //var test = JSON.stringify(headerslist);

            //res.render('index', {headers: obj + '\n' + obj1 + '\n' + obj2 + '\n' + obj3 + '\n' + obj4 + 
              //          '\n' + obj5 + '\n' + obj6});

            res.render('index', {'headers': [obj, obj1, obj2, obj3, obj4, obj5, obj6]});



});
app.get('/about', function(req, res) {
			var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
            res.render('about', {fortune: randomFortune });
});
/*
//custom 404 page
app.use(function(req, res, next){ res.type('text/plain');
            res.status(404);
            res.send('404 - Not Found');
});
// custom 500 page
app.use(function(err, req, res, next){ console.error(err.stack);
            res.type('text/plain');
            res.status(500);
            res.send('500 - Server Error');
});*/
//new routes for handlebars
 // 404 catch-all handler (middleware)
app.use(function(req, res, next){ res.status(404);
            res.render('404');
});
    // 500 error handler (middleware)
app.use(function(err, req, res, next){ console.error(err.stack);
            res.status(500);
            res.render('500');
});

app.listen(app.get('port'), function(){
console.log( 'Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.' );
});
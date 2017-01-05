var http = require('http'),
fs = require('fs');
http.createServer(handleRequest).listen(3000);
var port = 3000;

console.log('Started server on port', port);


//serve static file from the textbook
/*
function serveStaticFile(res, path, contentType, responseCode) {
	if(!responseCode) responseCode = 200;
	fs.readFile(path, function(err,data) {
		if(err) {
			res.writeHead(500, { 'Content-Type': 'text/plain' }); 
			res.end('500 - Internal Error');
		}else{ res.writeHead(responseCode,
                   { 'Content-Type': contentType });
            res.end(data);
		}
	});
}*/

//serve static file from the slides
function serveStatic(res, path, contentType, resCode) {
	fs.readFile(path, function(err, data) {
		if (err) {
			res.writeHead(500, { 'Content-Type': 'text/plain' }); 
			res.end('500 - Internal Error');
		} else {
			res.writeHead(resCode, { 'Content-Type': contentType }); 
			res.end(data);
		}
	});
}
//date object
//toLocalString() converts a date object to a string using local conventions

//handleRequest
function handleRequest(req, res) {
	var d = new Date();
	//have regex that removes the trailing slash from string from textbook however
	//requests for the css and image load with the trailing slash so made manual change
	if(req.url === '/home/img/image1.png'){
		req.url = '/img/image1.png';
	}else if(req.url === '/home/css/base.css'){
		req.url = '/css/base.css';
	}else if(req.url === '/about/img/image2.png'){
		req.url = '/img/image2.png';
	}else if(req.url === '/about/css/base.css'){
		req.url = '/css/base.css';
	}else if(req.url === '/me/img/image2.png'){
		req.url = '/img/image2.png';
	}else if(req.url === '/me/css/base.css'){
		req.url = '/css/base.css';
	}
	//the request method is Get, Post, Etc however for this project we are only
	//obtaining static pages so simply going to print Get as the request type
	var temp = req.url;
	req.url = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
	if (req.url === '/home' || temp === '/') {
		console.log(d + ' Get ' + req.url + ' 200 OK');
		serveStatic(res, './public/index.html', 'text/html', 200);
	} else if (req.url === '/about') {
		console.log(d + ' Get ' + req.url + ' 200 OK');
		serveStatic(res, './public/about.html', 'text/html', 200);
	} else if (req.url === '/me'){
		console.log(d + ' Get ' + req.url + ' 301 Moved Permanently');
		serveStatic(res, './public/about.html', 'text/html', 301);
	} else if (req.url === '/img/image1.png') {
		console.log(d + ' Get ' + req.url + ' 200 OK');
		serveStatic(res, './public/img/image1.png', 'image/png', 200);
	} else if (req.url === '/img/image2.png') {
		console.log(d + ' Get ' + req.url + ' 200 OK');
		serveStatic(res, './public/img/image2.png', 'image/png', 200);
	} else if (req.url === '/css/base.css') { //find the correct content type for css
		console.log(d + ' Get ' + req.url + ' 200 OK');
		serveStatic(res, './public/css/base.css', 'text/css', 200);
	} else{ 
		console.log(d + ' Get ' + req.url + ' doesnotexist 404 Not Found');
		serveStatic(res, './public/404.html', 'text/html', 404);
	}
}
	
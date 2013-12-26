
/**
 * Module dependencies.
 */
/*
var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});*/

var edge = require('edge');
var http = require("http");
var url = require("url");

var getTop10Products = edge.func('sql', function () {/*
    select top 10 * from Products
*/});

http.createServer(function(request, response) {
    var uri = url.parse(request.url).pathname;
	
	getTop10Products(null, function (error, result) {
    if (error) throw error;
    console.log(result);
    console.log(result[0].ProductName);
    console.log(result[1].Price);
	response.setHeader("content-type", "text/plain");
         response.write(JSON.stringify(result));
    response.end();
});
	
}).listen(process.env.port || 8181);




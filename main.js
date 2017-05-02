var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var dust = require('dustjs-helpers');
var pg = require('pg');
var app = express();

var conString = "postgres://postgres:1234@localhost/recipes";

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req,res){
	res.render('index')
})
app.listen(3000, function(){
	console.log('Server start');
})
// var config = {
// 	user: 'foo',
// 	database: 'my_db',
// 	password: 'secret',
// 	host: 'localhost',
// 	port: 5432,
// 	max: 10,
// 	idleTimeoutMillis: 30000,
// };
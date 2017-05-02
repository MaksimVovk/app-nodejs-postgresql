var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var dust = require('dustjs-helpers');
var pg = require('pg');
var app = express();

var conString = "postgres://postgres:1234@localhost/postgres";

app.engine('dust', cons.dust);

app.set('view engine', 'dust');
app.set('views', __dirname + '/views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req,res){
	pg.connect(conString, function(err, client, done){
		if(err){
			return console.log('Error', err)
		}
		client.query('SELECT * from products', function(err, result){
			console.log(result)
			if(err){
				return console.log('not found database')
			}
			res.render('index', {products: result.rows})
			done();
		});
	});
});

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
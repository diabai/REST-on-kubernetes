const express =require('express');
const cors =require('cors');
const mysql =require('mysql');
const morgan = require('morgan');
const APP_PORT = 4000;

const app = express();

var table = 'movies';

var db_config = {
	host: '127.0.0.1',
	user: 'root',
	password: 'champion7',
	database: 'ognas'
};
const connection = mysql.createConnection(db_config);
connection.connect(function(err) {
	if(err) {
		return console.log('error while connecting: ' + err.message);
	}
	console.log("Connected to MySQL server.")
	});

	app.listen(APP_PORT,function(){
  	console.log("Listening on port "+ APP_PORT + "...");
  });


var bodyParser = require('body-parser');
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.get('/', (req, res) => {
	res.send('This is the app, i am healthy...')
});

app.get('/movies', (req, res) => {
	var QUERY = 'SELECT id, title FROM '+table+';';
	connection.query(QUERY, (err, results)=> {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results
			})
		}
	});
});

app.post('/add', (req, res) => {
	var title = req.body.title;
	var QUERY = 'INSERT INTO '+ table+ ' (title) VALUES ("'+title+'");';
	connection.query(QUERY, (err, results)=> {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results
			})
		}
	});
});

app.put('/update', (req, res) => {
	var id = req.body.id;
	var title = req.body.title;
	var QUERY = 'UPDATE '+ table+ ' SET title = "'+ title+ '" WHERE id = '+ id + ';';
	connection.query(QUERY, (err, results)=> {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results
			})
		}
	});
});

app.delete('/delete', (req, res) => {
  var id = req.body.id;
	var QUERY = 'DELETE FROM '+ table+ ' WHERE id = '+ id + ';';
	connection.query(QUERY, (err, results)=> {
		if (err) {
			return res.send(err);
		} else {
			return res.json({
				data: results
			})
		}
	});
});

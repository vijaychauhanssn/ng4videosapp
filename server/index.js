require('rootpath')();
var express = require('express');
var app = express();
var morgan = require('morgan');
var cors = require('cors');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');
var config = require('config.json');
var mongoose = require('mongoose');
var db = mongoose.connection;
var engines = require('consolidate');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');
// DEFINE MODEL
var Books = require('./models/books');

db.on('error', console.error);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// GET ALL BOOKS
app.get('/books', function(req,res){
  Books.find(function(err, books){
    if(err) return res.status(500).send({error: 'database failure'});
    res.json(books);
  });
});

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files

// CONNECT TO MONGODB SERVER
mongoose.connect(process.env.MONGOLAB_PINK_URI);


// CONNECT TO MONGODB SERVER
//mongoose.connect(process.env.MONGOLAB_PINK_URI);

//mongoose.connect("mongodb://admin:admin4044@ds111082.mlab.com:11082/heroku_0p9wsfrq", { useNewUrlParser: true });
// routes
app.use('/users', require('./controllers/users.controller'));
app.use('/videos', require('./controllers/videos.controller'));
// serve video files.
//app.use('/videos',express.static('videos'));
// serve client side code.
app.use('/',express.static('p'));
// start server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
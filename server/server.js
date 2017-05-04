var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var fs = require('fs');
var PORT = process.env.PORT || 3001;
var DB_URL = process.env.DB_URL || 'mongodb://localhost/db';

var mongoUri = DB_URL;
mongoose.connect(mongoUri);
var db = mongoose.connection;
db.on('error', function () {
  throw new Error('unable to connect to database at ' + mongoUri);
});

var app = express();
//app.use(express.bodyParser());
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './view'));
app.use('/static',express.static(path.join(__dirname,'../dist')));

// For dev server only
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

require('./models/portfolio'); // Load schema to have it available for server
require('./routes')(app);

app.get("*", function(req,res){
	return res.render('base',{})
})

app.listen(PORT);
console.log('Listening on port 3001...');
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var app = express();
var PORT = process.env.PORT || 3000;

var users = require('./routes/users');//user made module" hum ney khud banaya hy"

// Mongoose 
mongoose.connect("mongodb://arslanansari:arslan123@ds161179.mlab.com:61179/first_project");
var db = mongoose.connection;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));
app.use('/user', users);

app.listen(PORT);
console.log("Started on port>>" + PORT);
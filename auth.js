var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://192.168.0.9:27017/userInfo';
var bcrypt = require('bcrypt');

var signup = function(){
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  console.log(username, email, password);

  
}

var signin = function(){
  var email;
  var password;
}

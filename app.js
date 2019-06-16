
//handlebars.js
var express = require('express');
var cors = require('cors')
var http = require('http');
var axios=require('axios');
const bodyParser = require("body-parser")
const fs = require("fs")
const path = require("path")

//var db=require('./connect');



var app = express();
app.use(cors())
app.use(bodyParser.json())
 
var port = process.env.PORT;

/*app.get('/users', function (req, res) {
res.send({user:"123456"})


});*/

//adicionar novo user
/*app.post('/newUser', function (req, res) {
 
  var newUser = new userModel({
  userId:req.body._userId,
  username:req.body._username,
  password:req.body._password,
  email:req.body._email,
  address:req.body._adress,
  photo:req.body._photo,
  userTypeId: req.body._userType
 
 
 });
 console.log(newUser.username)
 console.log(newUser)
 //console.log(req.body.username)
 console.log(req.body._username)

  newUser.save();


});*/

//get logged user
//app.get('/loggedUser',function (req, res) {
    //pesquisar e guardar users
    let users;
    /*userModel.find({}, function(err, docs) {
    if (!err){ 
         users=docs;
        console.log(docs);
        process.exit();
    } else {throw err;}
});*/

//})


///fazer o require de todas as rotas
require("./Routes/user.route")(app)
require("./Routes/book.route")(app)
require("./Routes/library.route")(app)
require("./Routes/requisition.route")(app)
require("./Routes/category.route")(app)
require("./Routes/tag.route")(app)
require("./Routes/comment.route")(app)
require("./Routes/loggedUser.route")(app)
require("./Routes/notification.route")(app)



console.log("dir:"+ __dirname)    
app.listen(port, () => console.log("Server up"));

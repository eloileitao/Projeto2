// AuthController.js

/*var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());*/
const User = require('../models/userModels.js')


var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');



function generateToken(params={}){
  
  
}



async function register (req, res) {
  
  
  
  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  
  User.create({
    username : req.body.username,
    email : req.body.email,
    password : hashedPassword
  },
  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user."+ err)
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  }); 
};



////login
async function logIn (req, res)
{
    const email=req.body.email
    const password=req.body.password
    if(!email||!password){
      return res.status(400).send({error:"Missing Arguments"})
    }
    try {
       const user= await User.findOne({email}).select("+password")
       if(!user){
         return res.status(400).send("nao existe")
       }
       else{
         if(password!=user.password/*!await bcrypt.compare(password,user.password)*/){
           return res.status(400).send("passwordinvalida")
         }
         user.password=undefined;
          var token = jwt.sign({ _id: user._id, userTypeId:user.userTypeId,username:user.username,photo:user.photo }, config.secret, {
          expiresIn: 86400 // expires in 24 hours
          });
         return  res.status(200).send(token)
       }
       
       
    } catch (err) {
      console.log(err)
        return res.status(400).send({ error: `Could not login: ${err}` })
    }
}


module.exports = { register,logIn }
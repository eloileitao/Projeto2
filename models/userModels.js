const mongoose= require('../connect');
const Schema=mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId
//creat Schema and model

const userSchema= new Schema({
 username:{
  type:String,
  required:true
 },
 password:String,
 email:{
  type:String,
 required:true,
  unique:true
 },
 address:String,
 photo:String,
 userTypeId: Number
});
const userModel= mongoose.model('user',userSchema);

module.exports=userModel;
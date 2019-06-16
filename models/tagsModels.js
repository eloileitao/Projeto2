const mongoose= require('mongoose');
const Schema=mongoose.Schema;

//creat Schema and model

const tagSchema= new Schema({
 //tagId:Number,
 tagName:{
  type:String,
  unique:true
 }



});
const tagModel= mongoose.model('tag',tagSchema);

module.exports=tagModel;
const mongoose= require('mongoose');
const Schema=mongoose.Schema;

//creat Schema and model

const categorySchema= new Schema({
 nameCategory:{
  type:String,
  unique:true
 }


});
const categoryModel= mongoose.model('category',categorySchema);

module.exports=categoryModel;
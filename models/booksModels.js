const mongoose= require('mongoose');
const Schema=mongoose.Schema;


//creat Schema and model

const bookSchema= new Schema({
 
  title:String,
  cover:String,
  synopsis:String,
  author:String,
  releaseDate:Date,
  categoryId:String,
  tags:Array,
  publisher:String,
  numberPages:Number,
  condition: String,
  donorName:String,
  donationDate:Date,
  description: String,
  libraryId:String,
  scores:Array
});
const bookModel= mongoose.model('book',bookSchema);
module.exports=bookModel;
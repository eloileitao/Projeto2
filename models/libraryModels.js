const mongoose= require('mongoose');
const Schema=mongoose.Schema;

//creat Schema and model

const librarySchema= new Schema({
 libraryId:Number,
 location:String,
 adress:String,
 coordinatesLong:Number,
 coordinatesLat:Number,
 capacity:Number


});
const libraryModel= mongoose.model('library',librarySchema);

module.exports=libraryModel;
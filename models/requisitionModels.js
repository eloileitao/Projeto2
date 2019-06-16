const mongoose= require('mongoose');
const Schema=mongoose.Schema;

//creat Schema and model

const requisitionSchema= new Schema({
 
 userId:String,
 bookId:String,
 requisitionDate:Date,
 returnDate: Date
 
  



});
const requisitionModel= mongoose.model('requisition',requisitionSchema);

module.exports=requisitionModel;
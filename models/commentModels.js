const mongoose= require('mongoose');
const Schema=mongoose.Schema;

//creat Schema and model

const commentSchema= new Schema({
 bookId:String,
 userId:String,
 txtComment:String,
 commentDate:Date



});
const commentModel= mongoose.model('comment',commentSchema);

module.exports=commentModel;
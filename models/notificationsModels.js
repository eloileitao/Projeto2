const mongoose= require('mongoose');
const Schema=mongoose.Schema;

//creat Schema and model

const notificationSchema= new Schema({
 title:String,
 userId:String




});
const notificationModel= mongoose.model('notification',notificationSchema);

module.exports=notificationModel;
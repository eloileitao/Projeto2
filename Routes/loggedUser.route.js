const express = require("express")
const router = express.Router()
//const controller = require("../Controllers/user.controller")
const auth=require("../auth/AuthController")
const authMiddleware=require('../middlewares/auth.js')


router.use(authMiddleware);
router.get('/',(req, res)=>{
    /*req.userId=decoded._id;
        req.username=decoded.username;
        req.userTypeId=decoded.userTypeId;
        req.photo=decoded.photo;*/
    let user={ _id:req.userId, username:req.username,userTypeId:req.userTypeId,photo:req.photo}
    res.send( user)
})

module.exports = app => app.use("/getLoggedUser", router)
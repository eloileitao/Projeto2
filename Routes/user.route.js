    
const express = require("express")
const router = express.Router()
const controller = require("../Controllers/user.controller")
const auth=require("../auth/AuthController")

router.get("/", controller.getUser)
router.post("/", controller.postUser)
router.put("/:id", controller.putUser)
router.delete("/:id", controller.delUser)
router.post('/register',auth.register)
router.post('/logIn',auth.logIn)
console.log("route users up")
module.exports = app => app.use("/users", router)
const express = require("express")
const router = express.Router()
const controller = require("../Controllers/comment.controller")

console.log("router comment up")
router.get("/", controller.get)
router.post("/", controller.post)

module.exports = app => app.use("/comments", router)
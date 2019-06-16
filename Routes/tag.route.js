const express = require("express")
const router = express.Router()
const controller = require("../Controllers/tag.controller")

console.log("router tag up")
router.get("/", controller.get)
router.post("/", controller.post)
router.put("/:id", controller.put)
router.delete("/:id", controller.del)

module.exports = app => app.use("/tags", router)
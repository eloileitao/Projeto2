const express = require("express")
const router = express.Router()
const controller = require("../Controllers/category.controller")

console.log("router category up")
router.get("/", controller.get)
router.post("/", controller.post)
router.put("/:id", controller.put)
router.delete("/:id", controller.del)

module.exports = app => app.use("/categories", router)
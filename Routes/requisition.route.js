const express = require("express")
const router = express.Router()
const controller = require("../Controllers/requisition.controller")

console.log("router requisition up")
router.get("/", controller.get)
router.post("/", controller.post)
router.put("/:id", controller.put)

module.exports = app => app.use("/requisition", router)
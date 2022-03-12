const express = require('express');
const router = express.Router();
const controller = require("../controllers/todo.controller");

router.get("/", controller.getTodos);

module.exports = router;
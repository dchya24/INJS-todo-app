const express = require('express');
const router = express.Router();
const controller = require("../controllers/todo.controller");

router.get("/", controller.getTodos);
router.post("/todo", controller.createTodo);
router.put("/todo/:todoId", controller.updateTodo);

module.exports = router;
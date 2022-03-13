const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const controller = require("../controllers/todo.controller");

router.get("/", controller.getTodos);
router.post("/todo", controller.createTodo);
router.put("/todo/:todoId", controller.updateTodo);
router.delete("/todo/:todoId", controller.deleteTodo);

module.exports = router;
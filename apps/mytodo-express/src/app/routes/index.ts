import { addTodo, deleteTodo, getTodos, updateTodo } from "../controllers/todos"

import { Router } from "express"

const router: Router = Router()

router.get("/todos", getTodos)

router.post("/add-todo", addTodo)

router.put("/edit-todo/:id", updateTodo)

router.delete("/delete-todo/:id", deleteTodo)

export default router
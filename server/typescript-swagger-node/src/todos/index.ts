import { createRouter } from "./create-todo-router";
import Repository from "./memory-repository";
import { Router } from "./types";

const router = createRouter(new Repository());

const getAllTodos = router.getAllTodos;
const createTodo = router.createTodo;
const updateTodo = router.updateTodo;

export {
    createTodo,
    getAllTodos,
    updateTodo
};

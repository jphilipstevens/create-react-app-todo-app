import * as HttpStatusCodes from "http-status-codes";
import ModuleInjector from "../module-injector";

const repository = ModuleInjector.resolve("todo-reposity");

export const getAlltodos = (req, res) => {
    res.status(HttpStatusCodes.OK).json(repository.getAllTodos());
};

export const createTodo = (req, res) => {
    const newTodo = repository.addTodo(req.body);
    console.log(newTodo);
    res.status(HttpStatusCodes.CREATED).json(newTodo);
};

export const updateTodo = (req, res) => {
    res.status(HttpStatusCodes.OK).json({ update: repository.update(req.params.id, req.body) });
};

import * as HttpStatusCodes from "http-status-codes";
import repository from "./repository";

export const getAlltodos = (req, res) => {
    res.json(repository.getAllTodos());
};

export const createTodo = (req, res) => {
    const newTodo = repository.addTodo(req.body);
    console.log(newTodo);
    res.status(HttpStatusCodes.CREATED).json(newTodo);
};

export const updateTodo = (req, res) => {
    res.json({ update: repository.update(req.params.id, req.body) });
};

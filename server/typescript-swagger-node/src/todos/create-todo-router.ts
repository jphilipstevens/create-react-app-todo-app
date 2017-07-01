import { Repository, Router, Todo } from "./types";
import * as HttpStatusCodes from "http-status-codes";

const createRouter = (repository: Repository): Router => {

    return {
        getAllTodos: (request, response) => {
            response.status(HttpStatusCodes.OK).json(repository.getAllTodos());
        },
        createTodo: (request, response) => {
            const { completed, description } = request.body;
            const newTodo = repository.addTodo(completed, description);
            console.log(newTodo);
            response.status(HttpStatusCodes.CREATED).json(newTodo);
        },
        updateTodo: (request, response) => {
            response.status(HttpStatusCodes.OK).json({ update: repository.update(request.params.id, request.body) });
        }
    };
};

export { createRouter };
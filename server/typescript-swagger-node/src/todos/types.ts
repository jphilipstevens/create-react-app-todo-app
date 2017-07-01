import { Request, Response } from "express";

interface Todo {
    id: string;
    completed: boolean;
    description: string;
}

interface Repository {
    getAllTodos: () => Array<Todo>;
    addTodo: (completed: boolean, description: string) => Todo;
    update: (id: string, newTodo: Todo) => boolean;

}

interface Router {
    getAllTodos: (request: Request, response: Response) => void;
    createTodo: (request: Request, response: Response) => void;
    updateTodo: (request: Request, response: Response) => void;
}

export { Repository, Router, Todo };

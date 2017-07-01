import * as uuid from "node-uuid";
import { createTodo } from "./model-factories/create-todo";
import { Todo, Repository } from "./types"

class InMemoryRepository implements Repository {
    private database: Array<Todo>;

    constructor() {
        this.database = [createTodo(uuid.v4(), true, "start a Todo React App")];
    }

    public getAllTodos = () => this.database;

    public addTodo = (completed = false, description: string = "") => {
        const todo = createTodo(uuid.v4(), completed, description);
        this.database.push(todo);
        return todo;
    }

    public update = (id: string, newTodo: Todo) => {
        const point = this.database.findIndex(todo => todo.id === id);
        console.log(point);

        if (point !== -1) {
            this.database[point] = newTodo;
            return true;
        }

        return false;
    }
}

export default InMemoryRepository;

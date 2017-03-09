import uuid from "node-uuid";
import { createTodo } from "./models/todo";

// this is a subbed out database
const database = [createTodo(uuid.v4(), true, "start a Todo React App")];

const Repository = {};

Repository.getAllTodos = () => database;

Repository.addTodo = ({ completed = false, description = "" }) => {
    const todo = createTodo(uuid.v4(), completed, description);
    database.push(todo);
    return todo;
};

Repository.update = (id, newTodo) => {
    const point = database.findIndex(todo => todo.id === id);
    console.log(point);

    if (point !== -1) {
        database[point] = newTodo;
        return true;
    }

    return false;
};

export default Repository;

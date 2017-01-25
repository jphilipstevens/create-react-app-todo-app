import uuid from "node-uuid";

//this is a subbed out database
const database = [{
    id: uuid.v4(),
    completed: true,
    description: "start a Todo React App"
}];

const createTodo = ({completed = false, description = ""}) => {
    return Object.assign({ id: uuid.v4() }, { completed, description });
};

const Repository = {};

Repository.getAllTodos = () => database;

Repository.addTodo = ({completed = false, description = ""}) => {
    const todo = createTodo(completed, description);
    database.push(todo);
    return todo;
};

Repository.update = (id, newTodo) => {
    const point = database.findIndex(todo => todo.id === id);
    console.log(point);

    if(point !== -1 ){
        database[point] = newTodo;
        return true;
    } else {
        return false;
    }

};

export default Repository;
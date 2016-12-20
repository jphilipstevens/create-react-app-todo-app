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

Repository.update = (todo) => {
    const point = database.indexOf(todo);

    if(point !== -1 ){
        database[point] = todo;
        return true;
    } else {
        return false;
    }

};

export default Repository;
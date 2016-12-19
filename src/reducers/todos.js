import Actions from "../actions/todo";

const toggleTodo = (state = [], action) => {
  const updatedTodo = state.filter((todo) => todo.id === action.meta.todoId)
    .map((todo) => Object.assign({}, todo, {completed: !todo.completed}));
  
  const updatedState = state.filter((todo) => todo.id !== action.meta.todoId).concat(updatedTodo);
  return updatedState;
};

const addTodo = (state = [], action) => {
  return state.concat(action.payload);
};

const loadTodos = (state = [], action) => {
  return action.payload;
};

const todosStrategy = {
  [Actions.TOGGLE]: toggleTodo,
  [Actions.ADD]: addTodo,
  [Actions.LOAD]: loadTodos,
  default: (state) => state
};


const todos = (state = [], action) => {
  return (todosStrategy[action.type] || todosStrategy.default)(state, action);
};

export default todos;

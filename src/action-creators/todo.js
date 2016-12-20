import TodoActions from "../actions/todo";

export const addTodoAction = (todo) => ({
  type: TodoActions.ADD,
  payload: todo
});

export const loadTodosActionCreator = (todos) => ({
  type: TodoActions.LOAD,
  payload: todos
});

export const loadingActionCreator = (state) => ({
  type: TodoActions.LOADING,
  meta: state
});

export const errorActionCreator = (state) => ({
  type: TodoActions.ERROR,
  meta: state
});

export const toggleTodoAction = (todoId) => {
  return {
    type: TodoActions.TOGGLE,
    meta: {
      todoId
    }
  };
};

export const toggleTodo = (todo) => (dispatch, getstate, services) => {
  const updatedTodo = Object.assign({}, todo, {completed: !todo.completed})
  dispatch(loadingActionCreator(true));
  services.todoService.update(todo)
    .then((todo) => {
      dispatch(loadingActionCreator(false));
      dispatch(errorActionCreator(false));
      dispatch(toggleTodoAction(updatedTodo));
    })
    .catch((error) => {
      dispatch(loadingActionCreator(false));
      dispatch(errorActionCreator(true));
    });
  dispatch(toggleTodoAction(todo.id));
};

export const addTodo = (text) => (dispatch, getstate, services) => {
  dispatch(loadingActionCreator(true));
  services.todoService.add({text, completed: false})
    .then((todo) => {
      dispatch(loadingActionCreator(false));
      dispatch(errorActionCreator(false));
      dispatch(addTodoAction(todo));
    })
    .catch((error) => {
      dispatch(loadingActionCreator(false));
      dispatch(errorActionCreator(true));
    });
};

export const loadTodos = () => (dispatch, getstate, services) => {
  dispatch(loadingActionCreator(true));
  services.todoService.load()
    .then((todos) => {
      dispatch(loadingActionCreator(false));
      dispatch(errorActionCreator(false));
      dispatch(loadTodosActionCreator(todos));
    })
    .catch((error) => {
      dispatch(loadingActionCreator(false));
      dispatch(errorActionCreator(true));
    });
};

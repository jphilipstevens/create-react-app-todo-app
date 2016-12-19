import TodoActions from "../actions/todo";
import TodoService from "../services/todo-service";

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

export const toggleTodo = (todoId) => (dispatch) => {
  dispatch(toggleTodoAction(todoId));
};

export const addTodo = (text) => (dispatch) => {
  dispatch(loadingActionCreator(true));
  TodoService.add({text, completed: false})
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

export const loadTodos = () => (dispatch) => {
  dispatch(loadingActionCreator(true));
  TodoService.load()
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

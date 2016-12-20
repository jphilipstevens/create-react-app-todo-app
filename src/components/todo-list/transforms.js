import { toggleTodo, loadTodos } from "../../action-creators/todo";

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    isLoading: state.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (todo) => {
      dispatch(toggleTodo(todo));
    },
    load: () => {
      dispatch(loadTodos());
    }
  };
};

export {
  mapStateToProps,
  mapDispatchToProps
};

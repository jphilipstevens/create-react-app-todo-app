import Actions from "../actions/todo";

const setLoadingState = (state = false, action) => {
    return action.meta;
};


const todosStrategy = {
  [Actions.LOADING]: setLoadingState,
  default: (state) => state
};

const loading = (state = false, action) => {
  return (todosStrategy[action.type] || todosStrategy.default)(state, action);
};

export default loading;

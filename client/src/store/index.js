import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import todoService from "../services/todo-service";

const services = {
  todoService: todoService({baseUrl: ""})
};

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(thunk.withExtraArgument(services)),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

export default store;
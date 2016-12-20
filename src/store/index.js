import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import todoService from "../services/todo-service";

const stubbedLoad = () => {
  return Promise.resolve([{
    id: "1",
    text: "Todo 1",
    completed: false
  },
  {
    id: "2",
    text: "Todo 2",
    completed: true
  }])
};

const services = {
  todoService: {
    load: stubbedLoad,
    update: () => Promise.resolve({}),
    add: () => Promise.resolve({})
  }
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
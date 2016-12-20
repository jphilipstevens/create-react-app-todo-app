import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import TodoService from "../services/todo-service";


const stubbedLoad = () => (Promise.resolve([{
  id: 1,
  text: "Todo 1",
  completed: false
},
{
  id: 2,
  text: "Todo 2",
  completed: true
}])
);

const services = {
  todoService: Object.assign({}, TodoService, { load: stubbedLoad })
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
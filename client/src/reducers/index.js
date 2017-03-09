import { combineReducers } from "redux";
import todos from "./todos";
import isLoading from "./loading";

const todoApp = combineReducers({
  todos,
  isLoading
});

export default todoApp;

//import "babel-polyfill";
import "whatwg-fetch";

import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import Todos from "../components/todo-list";
import Todo from "../components/todo";
import store from "../store";

const NoMatch = ({ location }) => (
  <div>
    <h3>No match for <code>{location.pathname}</code></h3>
  </div>
)

const createTodo = (onTodoClick) => (todo) => (
  <Todo
    key={todo.id}
    {...todo}
    onClick={() => onTodoClick(todo)}
  />
);

class App extends React.Component {

  render(){
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact render={() => (<Todos createTodo={createTodo} />)} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Provider>
      </MuiThemeProvider>
    );
  }
}

export default App;

//import "babel-polyfill";
import "whatwg-fetch";

import React from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Provider } from "react-redux";
import injectTapEventPlugin from "react-tap-event-plugin";

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import Todos from "../components/todo-list";
import store from "../store";


class App extends React.Component {

  render(){
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <Todos />
        </Provider>
      </MuiThemeProvider>
    );
  }
}


export default App;

import React, { PropTypes } from "react";
import CircularProgress from 'material-ui/CircularProgress';

class TodoList extends React.Component {

  componentWillMount(){
    this.props.load()
  }

  render(){
    const todos = this.props.todos.sort((a, b) => {
        if (a.id > b.id) {
          return 1;
        }
        if (a.id < b.id) {
          return -1;
        }
        return 0;
    });
    const isLoading = this.props.isLoading;
    const createTodo = this.props.createTodo;
    return (
      <section>
        <h1>My Todos!</h1>
        {isLoading 
          ? <CircularProgress />  
          : todos.map(createTodo(this.props.onTodoClick))
        }
      </section>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired
  }).isRequired).isRequired,
  isLoading: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired,
  load: PropTypes.func.isRequired,
  createTodo: PropTypes.func.isRequired
};

export default TodoList;

import React, {PropTypes} from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";

const determineStyle = (completed) => (
  completed
    ? { textDecoration: "line-through"}
    : {}
);

const TodoTitle = ({description, completed}) => <span style={determineStyle(completed)}> {description} </span>;

const Todo = ({onClick, completed, description}) => (
    <AppBar
      title={<TodoTitle description={description} completed={completed} />}
      onTitleTouchTap={onClick}
      iconElementLeft={<IconButton> <NavigationClose/> </IconButton>}
    />
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
};

export default Todo;

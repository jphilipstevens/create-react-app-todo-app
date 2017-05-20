import React, { PropTypes } from "react";
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

// const determineStyle = (completed) => (
//   completed
//     ? { textDecoration: "line-through" }
//     : {}
// );

class Todo extends React.Component {

  constructor(){
    super();
    this.state = {
      expanded: true
    };
  }

  render() {
  
    const { onClick, completed, description } = this.props;

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={description}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardActions>
          <FlatButton label="Complete" />
        </CardActions>

      </Card>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired
};

export default Todo;

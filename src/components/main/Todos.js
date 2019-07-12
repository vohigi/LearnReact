import React, { Component } from 'react';
import Todo from './Todo';

export default class Todos extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <React.Fragment>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </React.Fragment>
    );
  }
}

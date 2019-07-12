import React, { Component } from 'react';

export default class Todo extends Component {
  state = {
    currentState: 'To Do'
  };
  doneClickHandler = () => {
    this.setState({ currentState: 'Done' });
  };
  deleteClickHandler(id) {
    this.props.deleteClickHandler(id);
  }
  render() {
    const { id, value } = this.props.todo;
    return (
      <div className="card col s6 offset-s3">
        <p className="card-content">
          {value}
          <span className="right">{this.state.currentState}</span>
        </p>
        <div className="card-action">
          <button className="btn right" onClick={this.doneClickHandler}>
            Done
          </button>
          <button
            className="btn"
            onClick={this.deleteClickHandler.bind(this, id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

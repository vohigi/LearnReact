import React, { Component } from 'react';
import Todo from './Todo';
import uuid from 'uuid';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default class Main extends Component {
  state = {
    value: '',
    todos: [{ id: '1', value: 'wog the dog' }]
  };
  clickHandler = e => {
    e.preventDefault();
    this.setState({
      value: '',
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          value: this.state.value
        }
      ]
    });
  };
  changeHadler = e => {
    this.setState({ value: e.target.value });
  };
  deleteClickHandler = id => {
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
    console.log(this.state.todos.filter(todo => todo.id !== id));
  };
  render() {
    const value = this.state.value;
    return (
      <div className="container">
        <h1 className="center-align">TO DO</h1>
        <div className="row" style={{ marginTop: '5rem' }}>
          <div className="input-field col s6 offset-s3">
            <input
              id="todo"
              type="text"
              name="value"
              value={value}
              className="validate center-align"
              placeholder="Enter Task HERE"
              style={{ fontSize: '2rem' }}
              onChange={this.changeHadler}
            />
          </div>
        </div>
        <div className="row">
          <div className="col s6 offset-s3">
            <button
              className="btn-large waves-effect waves-light"
              type="submit"
              name="action"
              style={{ width: '100%' }}
              onClick={this.clickHandler}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="row">
          {this.state.todos.map(todo => (
            <Todo
              key={todo.id}
              todo={todo}
              deleteClickHandler={this.deleteClickHandler}
            />
          ))}
        </div>
      </div>
    );
  }
}

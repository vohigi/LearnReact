import React, { Component } from 'react';
import Todo from './Todo';
import uuid from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { GET_TODOS } from '../../redux/actions/types';
import TextInput from './TextInput';
import Submit from './Submit';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class Main extends Component {
  state = {
    value: '',
    errors: {}
  };
  submitClickHandler = e => {
    e.preventDefault();
    const value = this.state.value;
    if (value === '') {
      this.setState({ errors: { value: 'To Do is required' } });
    }
    this.setState({
      value: '',
      errors: {},
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          value: value
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
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    const { value, errors } = this.state;
    return (
      <div className="container">
        <h1 className="center-align">TO DO</h1>

        <TextInput id="todo-input" placeholder="Enter Task Here" name="todo" />
        <Submit />
        <div className="row">
          {this.props.todos.map(todo => (
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
Main.propTypes = {
  todos: PropTypes.array.isRequired,
  getTodos: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  todos: state.todo.todos
});
const mapDispatchToProps = dispatch => ({
  getTodos: () => dispatch({ type: GET_TODOS })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

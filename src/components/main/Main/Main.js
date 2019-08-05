import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getTodos,
  addTodo,
  deleteTodo
} from '../../../redux/actions/todoActions';
import TextInput from '../Input/TextInput';
import Submit from '../Submit/Submit';
import ToDoList from '../ToDoList/ToDoList';

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
      return;
    }
    const newTodo = {
      id: uuid(),
      value: value,
      state: 'ACTIVE'
    };
    this.props.addTodo(newTodo);
    this.setState({
      value: '',
      errors: {}
    });
  };
  changeHadler = ({ target: { name, value } }) =>
    this.setState({ [name]: value });
  // componentDidMount() {
  //   this.props.getTodos();
  // }
  render() {
    const { value, errors } = this.state;
    const { todos, deleteTodo } = this.props;
    return (
      <div className='container'>
        <h1 className='center-align'>TO DO</h1>

        <TextInput
          id='todo-input'
          placeholder='Enter Task Here'
          name='value'
          changeHadler={this.changeHadler}
          value={value}
          error={errors.value}
        />
        <Submit clickHandler={this.submitClickHandler} />
        <ToDoList todoList={todos} removeTask={deleteTodo} />
      </div>
    );
  }
}

export default connect(
  ({ todo: { todos } }) => ({
    todos
  }),
  { getTodos, addTodo, deleteTodo }
)(Main);

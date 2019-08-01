import React, { Component } from 'react';
import Todo from '../Todo';
import uuid from 'uuid';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTodos, addTodo } from '../../../redux/actions/todoActions';
import TextInput from '../Input/TextInput';
import Submit from './Submit';

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
  changeHadler = e => this.setState({ [e.target.name]: e.target.value });
  componentDidMount() {
    this.props.getTodos();
  }
  render() {
    const { value, errors } = this.state;
    return (
      <div className="container">
        <h1 className="center-align">TO DO</h1>

        <TextInput
          id="todo-input"
          placeholder="Enter Task Here"
          name="value"
          changeHadler={this.changeHadler}
          value={value}
          error={errors.value}
        />
        <Submit clickHandler={this.submitClickHandler} />
        <div className="row">
          {this.props.todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
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

export default connect(
  mapStateToProps,
  { getTodos, addTodo }
)(Main);

import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../ToDoItem/TodoItem';

const ToDoList = ({ todoList, completeTask, removeTask }) => (
  <ul>
    {todoList.map(({ id, value, state }) => (
      <TodoItem
        doneClickHandler={completeTask}
        deleteClickHandler={removeTask}
        id={id}
        key={id}
        value={value}
        state={state}
      />
    ))}
  </ul>
);
ToDoList.propTypes = {
  tasksList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func
};

ToDoList.defaultProps = {
  tasksList: [],
  removeTask: () => {},
  completeTask: () => {}
};
export default ToDoList;

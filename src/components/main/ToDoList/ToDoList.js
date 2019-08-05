import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../ToDoItem/TodoItem';

const ToDoList = ({ todoList, completeTask, removeTask }) => (
  <ul className='collection'>
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
  todoList: PropTypes.array,
  removeTask: PropTypes.func,
  completeTask: PropTypes.func
};

ToDoList.defaultProps = {
  todoList: [{ id: '444', value: 'default prop', state: 'ACTIVE' }],
  removeTask: () => {},
  completeTask: () => {}
};
export default ToDoList;

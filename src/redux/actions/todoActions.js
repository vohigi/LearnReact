import { GET_TODOS, DELETE_TODO, ADD_TODO } from './types';

export const getTodos = () => {
  return {
    type: GET_TODOS
  };
};

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: todo
  };
};

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  };
};

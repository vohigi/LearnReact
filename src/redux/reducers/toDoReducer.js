import { GET_TODOS, DELETE_TODO, ADD_TODO } from '../actions/types';

const initialState = {
  todos: [{ id: '1', value: 'walk the dog', state: 'ACTIVE' }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos]
      };
    default:
      return state;
  }
};

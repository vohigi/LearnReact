import { GET_TODOS } from '../actions/types';

const initialState = {
  todos: [{ id: '1', value: 'walk the dog', state: 'ACTIVE' }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {
        ...state
      };
    default:
      return state;
  }
};

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TodoItem = ({
  id,
  value,
  state,
  doneClickHandler,
  deleteClickHandler
}) => {
  return (
    //col s6 offset-s3
    <li className='card collection-item mg-b'>
      <p className='card-content'>
        {value}
        <span className='right'>{state}</span>
      </p>
      <div className='card-action'>
        <button className='btn right' onClick={() => doneClickHandler()}>
          Done
        </button>
        <button className='btn' onClick={() => deleteClickHandler(id)}>
          Delete
        </button>
      </div>
    </li>
  );
};
TodoItem.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  state: PropTypes.string,
  doneClickHandler: PropTypes.func,
  deleteClickHandler: PropTypes.func
};
TodoItem.defaultProps = {
  id: '0',
  value: '',
  state: '',
  doneClickHandler: () => {},
  deleteClickHandler: () => {}
};
export default TodoItem;

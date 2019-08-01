import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({
  id,
  value,
  state,
  doneClickHandler,
  deleteClickHandler
}) => {
  return (
    <div className="card col s6 offset-s3">
      <p className="card-content">
        {value}
        <span className="right">{state}</span>
      </p>
      <div className="card-action">
        <button className="btn right" onClick={doneClickHandler}>
          Done
        </button>
        <button className="btn" onClick={deleteClickHandler(id)}>
          Delete
        </button>
      </div>
    </div>
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

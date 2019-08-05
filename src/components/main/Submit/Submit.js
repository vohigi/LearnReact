import React from 'react';
import PropTypes from 'prop-types';

const Submit = ({ clickHandler }) => {
  return (
    <div className='row'>
      <div className='col s6 offset-s3'>
        <button
          className='btn-large waves-effect waves-light'
          type='submit'
          name='action'
          style={{ width: '100%' }}
          onClick={clickHandler}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
Submit.propTypes = {
  clickHandler: PropTypes.func
};
Submit.defaultProps = {
  clickHandler: () => {}
};
export default Submit;

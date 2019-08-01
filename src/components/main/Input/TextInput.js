import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const TextInput = ({ value, error, id, placeholder, name, changeHadler }) => (
  <div className="row" style={{ marginTop: '5rem' }}>
    <div className="input-field col s6 offset-s3">
      <input
        id={id}
        type="text"
        name={name}
        value={value}
        className={classnames('validate center-align', { invalid: error })}
        placeholder={placeholder}
        style={{ fontSize: '2rem' }}
        onChange={changeHadler}
      />
      {error && <span className="helper-text" data-error={error} />}
    </div>
  </div>
);
TextInput.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  changeHadler: PropTypes.func
};
TextInput.defaultProps = {
  value: '',
  error: '',
  id: '',
  placeholder: '',
  name: '',
  changeHadler: () => {}
};
export default TextInput;

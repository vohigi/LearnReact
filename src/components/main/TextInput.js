import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    const { value, error, id, placeholder, name } = this.props;
    return (
      <div className="row" style={{ marginTop: '5rem' }}>
        <div className="input-field col s6 offset-s3">
          <input
            id={id}
            type="text"
            name={name}
            // value={value}
            error={error}
            className="validate center-align"
            placeholder={placeholder}
            style={{ fontSize: '2rem' }}
            onChange={this.changeHadler}
          />
        </div>
      </div>
    );
  }
}
export default TextInput;

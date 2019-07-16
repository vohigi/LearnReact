import React, { Component } from 'react';

class Submit extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <button
            className="btn-large waves-effect waves-light"
            type="submit"
            name="action"
            style={{ width: '100%' }}
            onClick={this.submitClickHandler}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default Submit;

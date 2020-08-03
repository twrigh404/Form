import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './form';

class Header extends Component {
  render() {
    return(
      <div className="">
        <h1>Fan Club Benefits</h1>
        <p>Hi! This is a survey to better suite you to the needs of Fan's Club!</p>
        <Form />
      </div>

    );
  }
}

export default Header;

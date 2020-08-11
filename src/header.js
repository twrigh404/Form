import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Form from './form';
import Container from '@material-ui/core/Container';

class Header extends Component {
  render() {
    return(
      <Container maxWidth="sm">
        <h1>Fan Club Benefits</h1>
        <p>Hi! This is a survey to better suite you to the needs of Fan's Club!</p>
        <Form />
      </Container>

    );
  }
}

export default Header;

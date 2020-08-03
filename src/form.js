import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './input';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        email: '',
        age: '',
        gender: '',
        expertise: '',
        about: ''

      }};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
    this.handleFullName = this.handleFullName.bind(this);

}



    handleFullName(event) {
      let value = event.target.value;
      this.setState( state => ({ newUser : state.newUser, name: value}));
    }

    handleClearForm() {

    }

    handleSubmit(event) {
      event.preventDefault();
    }

    render() {
      return (
          <form id="survey-form"onSubmit={this.handleSubmit}>
            <Input type={'text'}
               title= {'Full Name'}
               name= {'name'}
               value={this.state.newUser.name}
               placeholder = {'Enter your name'}
               onChange = {this.handleFullName}/> {/* Name of the user */}


          </form>
      );
    }
  }

  export default Form;

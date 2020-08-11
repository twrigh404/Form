import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Input from './input';
import TextField from '@material-ui/core/TextField';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      FirstName: '',
      LastName: ''
    }
}
 handleFirstChange = event => {
   this.setState({
     FirstName: event.target.value
   })
 }

 handleLastChange = event => {
   this.setState({
     LastName: event.target.value
   })
 }

handleSubmit = event => {
  event.preventDefault();
}



    render() {
      return (
          <form id="survey-form" onSubmit={this.handleSubmit}>
          <div>
            <TextField label="FirstName" type="text" variant="filled" value={this.state.FirstName} onChange={this.handleFirstChange}/>
          </div>
          <div>
            <TextField label="LastName" type="text" value={this.state.LastName} onChange={this.handleLastChange}/>
          </div>
          </form>

      );
    }
  }

  export default Form;

import React, { Component } from 'react';
import axios from "axios";
// import {withRouter} from 'react-router-dom'


class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = this.state;

    axios.post("http://localhost:8000/users", { name, email })
      .then((response) => {
        
        console.log('Form submitted:', response.data);
        // history.push('./login')
        
        this.setState({ name: '', email: '' });
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  render() {
    const { name, email } = this.state;

    return (
      <div>
        <h1>Registration Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default withRouter(RegistrationForm);


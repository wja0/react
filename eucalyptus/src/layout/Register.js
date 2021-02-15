import React, { Component } from 'react';
import RegisterForm from './RegisterForm';


class Register extends Component {
    handleCreate = (data) => {
      console.log(data);
    }
    render() {
        return (
          <div>
            <RegisterForm onCreate={this.handleCreate}/>
          </div>
        );
      }
  }
export default Register;
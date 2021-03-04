import React, { Component } from 'react';
import RegisterForm from './RegisterForm';


class Register extends Component {
    state= {
        register_info: []
    }
    handleCreate = (data) => {
        // console.log(data);
        const { register_info } = this.state;

        this.setState({
            name: data.name,
            id: data.id,
            password: data.password,
            check_password: data.check_password,
        })
        // console.log(this.state)

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
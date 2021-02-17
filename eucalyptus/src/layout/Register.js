import React, { Component } from 'react';
import RegisterForm from './RegisterForm';


class Register extends Component {
    state= {
        register_info: []
    }
    handleCreate = (data) => {
        console.log(this.number);
        console.log(data);
        const { register_info } = this.state;

        this.setState({
            nickname: data.nickname,
            id: data.id,
            password: data.password,
            check_password: data.check_password,
        })
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
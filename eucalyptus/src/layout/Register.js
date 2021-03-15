import React, { Component } from 'react';
import RegisterForm from './RegisterForm';


class Register extends Component {
    state= {
        register_info: []
    }
    handleCreate = (data) => {
        console.log(data);
<<<<<<< HEAD
        const { register_info } = this.state;
=======
        // const { register_info } = this.state;
>>>>>>> 265605d3024d676c69c3b87387e78ded68e2dade

        // this.setState({
        //     name: data.name,
        //     id: data.id,
        //     password: data.password,
        //     check_password: data.check_password,
        // })
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
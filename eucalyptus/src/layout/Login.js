import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.css';
import LoginForm from './LoginForm';

class login extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id : '',
        name : ''
      }
      this.handleCreate = this.handleCreate.bind(this);
    }
    handleCreate = (data) => {
      this.setState({id : data.id, name : data.name})
      // console.log(this.state)
    }
    submit (){
      this.props.onCreate(this.state);
    }
    render() {
      return (
        <div>
            <LoginForm onCreate={this.handleCreate}/>
            <div className = 'reg'>
                <Link to ="/Register">
                    <button className="register">회원가입</button>
                </Link>
            </div>
        </div>
      );
    }
}
export default withRouter(login);
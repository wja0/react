import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import LoginForm from './LoginForm';


class login extends Component {
    handleCreate = (data) => {
        console.log(data);
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

export default login;
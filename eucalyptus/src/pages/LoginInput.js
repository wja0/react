import React, { Component } from 'react';
import InputWithLabel from '../components/InputWithLabel';
import LoginButton from '../components/LoginButton';
import { Login } from '.';

class LoginInput extends Component {
    render() {
      return (
        <div>
        <InputWithLabel label="이메일" name="email" placeholder="이메일"/>
        <InputWithLabel label="비밀번호" name="password" placeholder="비밀번호" type="password"/>
        <LoginButton> Login </LoginButton>
        </div>
      );
    }
  }

export default LoginInput;
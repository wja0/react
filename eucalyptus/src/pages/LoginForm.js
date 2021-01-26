import React, { Component } from 'react';
import './Login.css';
import InputWithLabel from '../components/InputWithLabel';
import LoginButton from '../components/LoginButton';
import { Login } from '.';

class LoginForm extends Component {
    state = {
        id:'',
        password: ''
    }
    handleChange= (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleSumit = (e) => {
        e.preventDefault();                 //페이지 리로딩 방지(상태 잃어버리는 것 방지)
        this.props.onCreate(this.state);    //상태값 onCreate 통해 부모에게 전달
        this.setState({                     //상태초기화
            id: '',
            password: ''
        })
    }
    render() {
      return (
        <form onSubmit={this.handleSumit}>
        <div className="Login">
          <div className="ID">
                <input placeholder="enter ID" 
                       value={this.state.id}        //onChange 이벤트 발생-> e.target.value 통해 값 읽음->handleChange 함수 발생
                       onChange={this.handleChange} //name으로 속성 구분
                       name="id">                   
                </input>
          </div>
          <div className="password">
                <input placeholder="enter password" 
                       type="password" 
                       value={this.state.password} 
                       onChange={this.handleChange}
                       name="password">
                </input>
          </div>
          <button className="btn" type="submit"> 로그인 </button>

        </div>
        </form>
      );
    }
  }

export default LoginForm;
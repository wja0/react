import React, { Component } from 'react';
import './Register.css';
import { Link, withRouter } from "react-router-dom";
import sha256 from 'crypto-js/sha256';
import axios from "axios";

class RegisterForm extends Component{
    constructor(props) {
        super(props);
        this.handleSumit = this.handleSumit.bind(this);
        this.state = {
            name: '',
            id: '',
            password: '',
            check_password: '',
            correct: '',
            result : '',
            isunique:''
        };
      }
    handleChange= (e) => {
        this.setState({
            [e.target.name] : e.target.value
            // [e.target.name]: 설정한 태그의 name값을 event 객체를 통해 가져와서 사용함
        });

        // setTimeout: setState 변경된 값이 handleCheck에서 바로 반영되도록 함
        setTimeout(this.handleCheck, 100);       
    }
    handleSumit = (e) => {
        e.preventDefault();
        var hash = String(sha256(this.state.password)); 
        this.state.password = hash;     
        this.state.check_password = hash;    
        this.setState(this.state);          //상태값 업데이트
        this.props.onCreate(this.state);    //상태값 onCreate 통해 부모에게 전달
        const data  =  axios({
            method: "post",
            url: "http://210.117.181.118:4848/spring/register",
            data: {
                Name : this.state.name,
                ID : this.state.id,
                Pwd : this.state.password,
            },
            }).then(function (result) {
                console.log(result.data)
                // this.state.result = result.data
            });
            // console.log(data)
            this.props.history.push({
                pathname: `/register/done`,
                state: {
                  result: this.result,
                  id : this.id
                },
              });
    }

    handleCheck = () => {
        const{ password, check_password } = this.state;
        if(password.length < 1 || check_password.length < 1){
            this.setState({correct:''});
        }
        else if(password === check_password){
            this.setState({correct:'비밀번호 일치'});
        }
        else {
            this.setState({correct:'비밀번호 불일치'});
        }
    }

    handleClick = () =>{
        const data = axios({
            method:"post",
            url:"https://luck2901.github.io/react/",
            data:{
                ID : this.state.id,
            },
        }).then(response => response.text())
        .then(text =>{
            this.setState({
                isunique:text,
            })
        });
    }

    render() {
      return (

        <form onSubmit={this.handleSumit}>
        <div className="Register">
          <h1>회원가입</h1>
          
          <div className="nickname">
                <input placeholder="enter your name"
                       value={this.state.name}
                       onChange={this.handleChange}
                       name="name">
                </input>
          <div className="makeID">
          </div>
                <input placeholder="enter your ID"
                       value={this.state.id}
                       onChange={this.handleChange}
                       name="id">
                </input>
                <button type="button"
                        onClick={this.handleClick}>
                    아이디 중복 확인</button>
          </div>

          <div className="makePassword">
                <input placeholder="enter your password" type="password" 
                       value={this.state.password}
                       onChange={this.handleChange}
                       name="password">
                </input>
          </div>
          <div className="checkPassword">
                <input placeholder="enter your password again" type="password"
                       value={this.state.check_password}
                       onChange={this.handleChange}
                       name="check_password"
                       >
                 </input>
          </div>
          <div className="correct"> {this.state.correct} </div>
          <button className="join">가입하기</button>
        </div>
        </form>
      );
    }
}

export default withRouter(RegisterForm);
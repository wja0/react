import React, { Component, useEffect, useRef } from 'react';
import { Link, withRouter } from "react-router-dom";
import sha256 from 'crypto-js/sha256';
import axios from "axios";
import './Register.css';

class RegisterForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            id: '',
            password: '',
            check_password: '',
            correct: '',
            idcheck : false,
            result : '',
        };
        this.handleSumit = this.handleSumit.bind(this);
        this.handleClick = this.handleClick.bind(this);
      }
    passwordCheck =() =>{
        const {password, check_password} = this.state();
        if(password.length<1 || check_password<1) return false;
        else if(password ===check_password) return true;
        else return false;
    }

    handleChange= (e) => {
        this.setState({
            [e.target.name] : e.target.value
            // [e.target.name]: 설정한 태그의 name값을 event 객체를 통해 가져와서 사용함
        });

        // setTimeout: setState 변경된 값이 handleCheck에서 바로 반영되도록 함
        setTimeout(this.handleCheck, 100);       
    }
    handleSumit = async (e) => {
        e.preventDefault();
        var hash = String(sha256(this.state.password)); 
        this.state.password = hash;     
        this.state.check_password = hash;
            if(this.state.name==0)
            {
                window.alert('이름을 입력하세요')
            }
            else if(this.state.id==0)
            {
                window.alert('아이디를 입력하세요')
            }
            else if(this.state.password>=1&&this.state.check_password>=1&&this.state.password!==this.state.check_password){
                window.alert("비밀번호를 일치시켜주세요.");
            }
            else if(this.state.password==0 || this.state.password==0)
            {
                window.alert('비밀번호를 입력하세요')
            }
            else if(this.state.idcheck == false)
            {
                window.alert('아이디 중복 확인 검사필요')
            }
            else {
                const { data : {Return}, } = await axios ({
                    method: "post",
                    // url: "http://210.117.181.118:4848/spring/register",
                    url: "http://218.151.66.186:8080/spring/register",
                    data: {
                        Name : this.state.name,
                        ID : this.state.id,
                        Pwd : this.state.password,
                     },
                })

                window.alert('회원가입 완료!')
                this.setState({result: Return})
                this.props.onCreate(this.state);    //상태값 onCreate 통해 부모에게 전달
                this.props.history.push({
                    pathname: `/register/done`,
                    state: {
                    result : this.state.result,
                    id : this.state.id
                    },
                });
                    
            }
        
    }
    handleCheck = (e) => {
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
    handleClick = async (e) =>{ //아이디 중복확인 이벤트
        const {data : {isUnique}, } = await axios({
            method: "post", //get으로 진행했을 때 isunique:"true" 식으로 반환.
            // url:"http://210.117.181.118:4848/spring/isunique",
            url : "http://218.151.66.186:8080/spring/isunique",
            data:{
                ID : this.state.id,
            },
        })
        
        this.setState({idcheck: isUnique})
        if(this.state.idcheck == "True"){
            window.alert('사용가능한 아이디입니다')
        }
        else{
            window.alert('사용할 수 없는 아이디입니다')
        } 

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
          </div>
          <div className="makeID">
                <input placeholder="enter your ID"
                       value={this.setState.id}
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

          <div className = 'reg'>
              <button className="join" >가입하기</button>
            </div>
        </div>
        </form>
      );
    }
}

export default withRouter(RegisterForm); 
import React, { Component } from 'react';
import './Register.css';


class RegisterForm extends Component{
    state = {
        nickname:'',
        id:'',
        password: '',
        check_password: '',
        correct:''
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
        e.preventDefault();                 //페이지 리로딩 방지(상태 잃어버리는 것 방지)
        this.props.onCreate(this.state);    //상태값 onCreate 통해 부모에게 전달
        this.setState({                     //상태초기화
            nickname: '',
            id: '',
            password: '',
            check_password: '',
            correct: ''
        })
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

    render() {
      return (

        <form onSubmit={this.handleSumit}>
        <div className="Register">
          <h1>회원가입</h1>
          
          <div className="nickname">
                <input placeholder="enter your nickname"
                       value={this.setState.nickname}
                       onChange={this.handleChange}
                       name="nickname">
                </input>
          </div>
          <div className="makeID">
                <input placeholder="enter your ID"
                       value={this.setState.id}
                       onChange={this.handleChange}
                       name="id">
                </input>
                <button type="button">아이디 중복 확인</button>
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

export default RegisterForm;
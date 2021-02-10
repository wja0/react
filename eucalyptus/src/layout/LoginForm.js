import React, { Component } from 'react';
import './Login.css';
import { Login } from '../pages';
import sha256 from 'crypto-js/sha256'; // 해싱 -> npm install crypto-js

class LoginForm extends Component {
    state = {
        id:'',
        password: ''
    }
    handleChange= (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            // [e.target.name]: 설정한 태그의 name값을 event 객체를 통해 가져와서 사용함
          });
    }
    handleSumit = async (e) => {
        e.preventDefault();                 //페이지 리로딩 방지(상태 잃어버리는 것 방지)        
        var hash = String(sha256(this.state.password)); // 비밀번호 hash 값으로 인코딩
        this.state.password = hash;         // 인코딩 값으로 password 값 업데이트
        this.setState(this.state);          //상태값 업데이트
        this.props.onCreate(this.state);    //상태값 onCreate 통해 부모에게 전달
        // console.log로 값 확인
        
        // 서버 전송 코드. 정확하지 않음ㅠ
        // const {
        //   data: 
        //   { id, password },
        // } = await axios({
        //   method: "post",
        //   url: "http://210.117.181.118:4848/spring/",
        //   data: {
        //     ID : this.state.id,
        //     Pwd : this.state.password,
        //   },
        // }).then();

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
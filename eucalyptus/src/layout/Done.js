import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Done extends Component {

    render() {
      console.log(this.props)
      return (
        <div>
            <h1>회원가입이 완료되었습니다!</h1>

            <div className = 'done'>
                <Link to ="/Login">
                    <button className="doneButton">로그인으로 이동</button>
                </Link>
            </div>
        </div>
      );
    }
  }

export default Done;
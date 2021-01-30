import React, { Component } from "react";
import {Link, withRouter}  from "react-router-dom";
import axios from "axios";
import "./Textarea.css";
import { problem, submit } from "../pages";

class Textarea extends Component {
  constructor(props){
    super(props)
    this.submit = this.submit.bind(this);
    this.state = {
      result : [],
      pnum : props.props.match.params.id,
      code : "",
      info : "",
    };
  }
  handleChange = (event) => {
    this.setState({ code: event.target.value.substr(0) });
  };

  submit = async (e) => {
    e.preventDefault();
    const {data : {Problems}
    } = await axios({
        method : 'post',
        url : 'http://210.117.181.118:4848/spring/submitcode',
        data : {
          Pnum : this.state.pnum,
          code: this.state.code,
        }
    }).then();
    this.setState({result : Problems}); 
    // console.log(this.state)
    this.props.history.push({
      pathname: `/status/${this.state.pnum}`,
      state : {
        result : this.state.result
      }
      })
  };
  

  render() {
    const { pnum } = this.state;
    return (
      <div>
        <h1>문제번호 {pnum}</h1> 
        <div>
          
             <button onClick={this.submit}>submit</button>
            
        </div>

        <div className="language-select">
          <select>
            <option value="0">Select Language</option>
            <option value="1">C99</option>
            <option value="2">C++17</option>
            <option value="3">Python 3</option>
            <option value="4">Java 11</option>
          </select>
        </div>
        <form>
          <textarea
            value={this.state.code}
            onChange={this.handleChange}
          />
        
        {/* <button onClick={this.submit}>submit</button> */}
        </form>
      </div>
    );
  }
}

export default withRouter(Textarea);

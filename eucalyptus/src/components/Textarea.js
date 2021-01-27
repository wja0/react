import React, { Component } from "react";
import {Link}  from "react-router-dom";
import axios from "axios";
import "./Textarea.css";
import { problem } from "../pages";

class Textarea extends Component {
  params = this.props.match;
  state = {
    pnum : this.props.props.match.params.id,
    code : "",
    info : "",
    result : []
  };
  handleChange = (event) => {
    this.setState({ code: event.target.value.substr(0) });
  };

  submit = async (e) => {
    e.preventDefault();
    // console.log(this.props);
    const {
      data : {Problems}
    } = axios({
      method: "post",
      url: "http://211.33.49.253:8080/spring/submitcode",
      // url : "https://coala-oj.github.io/react/eucalyptus/src/pages/채점결과.json",
      data: {
        Pnum : this.state.pnum,
        code: this.state.code,
      },
    });
    console.log(Problems)
    this.setState({ value: "",  result : Problems });
    this.getPosts();
  };

  render() {
    //const { info } = this.state;
    // console.log(this.props.props.match.params.id)
    const { pnum } = this.state;

    return (
      <div>
        <h1>문제번호 {pnum}</h1>
        {/* <span>{}</span> */}
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
        {/* <button onClick={this.submit}><Link to ={{pathname: `/submit/${pnum}`}}>submit</Link></button> */}
        <button onClick={this.submit}>submit</button>


        </form>
      </div>
    );
  }
}

export default Textarea;

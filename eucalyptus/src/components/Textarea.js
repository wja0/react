import React, { Component } from "react";
import {Link}  from "react-router-dom";
import axios from "axios";
import "./Textarea.css";
import { problem, submit } from "../pages";

class Textarea extends Component {
  
  state = {
    Problems : [],
    pnum : this.props.props.match.params.id,
    code : "",
    info : "",
  };
  handleChange = (event) => {
    this.setState({ code: event.target.value.substr(0) });
  };

  Submit = async (e) => {
    e.preventDefault();
    // console.log(this.props);
    // try{
    // const {problems : []} = axios({
    //   method: "post",
    //   url: "http://211.33.49.253:8080/spring/submitcode",
    //   // url : "https://coala-oj.github.io/react/eucalyptus/src/pages/채점결과.json",
    //   data: {
    //     Pnum : this.state.pnum,
    //     code: this.state.code,
    //   }
      axios.post('http://211.33.49.253:8080/spring/submitcode',{
        Pnum : this.state.pnum,
        code: this.state.code,
      }).then(function (response) {
        // console.log(response.data.Problems)
        this.setState({ Problems : response.data.Problems });
        console.log(this.state.Problems)
      })
    // }
    //);
    // this.setState({ problems });
    // this.getPosts();
    // console.log({Problems})
  // } catch(e){
  //   console.error(e)
  }
  // }
  

  render() {
    const { pnum, Problems } = this.state;
    return (
      <div>
        <h1>문제번호 {pnum}</h1>
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
        {/* <button onClick={this.submit}><Link to ={{
          pathname: `/status/${pnum}`,
          state : {
            result : this.state.Problems
          }
          }}>submit</Link></button> */}
        <button onClick={this.Submit}>submit</button>
        </form>
      </div>
    );
  }
}

export default Textarea;

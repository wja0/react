import React, { Component } from "react";
import axios from "axios";
import "./Textarea.css";

class Textarea extends Component {
  state = {
    pnum : this.props.match,
    code : "",
    info : ""

  };
  params = this.props.match;
  handleChange = (event) => {
    this.setState({ code: event.target.value.substr(0) });
  };

  submit = async (e) => {
    e.preventDefault();
    console.log(this.props.match);
    const {
      data: { info },
    } = axios({
      method: "post",
      url: "http://211.33.49.253:8080/spring/submitcode",
      data: {
        //'Pnum' : this.params.params.id,
        Pnum: 1001,
        code: this.state.code,
      },
    });
    this.setState({ value: "" });
    this.getPosts();
  };

  render() {
    //const { info } = this.state;
    console.log(this.state.pnum)
    return (
      <div>
        <h1>문제번호</h1>
        <div class="language-select">
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
        {/* <button onClick={this.submit}><Link to ={{pathname: `/submit/${Pnum}`}}>submit</Link></button> */}
        <button onClick={this.submit}>submit</button>


        </form>
      </div>
    );
  }
}

export default Textarea;

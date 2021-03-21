import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./Textarea.css";
import { problem, submit } from "../pages";
import CodeMirror from '@uiw/react-codemirror';
import '../../node_modules/codemirror/keymap/sublime';
import '../../node_modules/codemirror/mode/clike/clike.js';
import '../../node_modules/codemirror/theme/neo.css';

class Textarea extends Component {
  constructor(props) {
    super(props);
    // console.log(props)
    this.submit = this.submit.bind(this);
    this.state = {
      id : "",
      result: [],
      pnum: props.props.match.params.id,
      code: "",
      info: "",
      lang_value: "",
    };
  }
  handleChange= (e) => {
    this.setState({
        code : e.getValue()
    });
    setTimeout(this.handleCheck, 100);       
}
  submit = async (e) => {
    e.preventDefault();
    const {
      data: { Problems },
    } = await axios({
      method: "post",
      url: "http://218.151.66.186:8080/spring/submitcode",
      data: {
        Pnum: this.state.pnum,
        code: this.state.code,
        ID : 'lee'
      },
    }).then();
    this.setState({ result: Problems });
    console.log(this.state.result)
    this.props.history.push({
      pathname: `/status/${this.state.pnum}`,
      state: {
        result: this.state.result,
      },
    });
  };

  render() {
    const { pnum } = this.state;
    return (
      <div>
        <h1 className="pnum-h1">{pnum}</h1>
        <div>
          <button className = "submit-button"onClick={this.submit}>submit</button>
        </div>

        <div className="language-select">
          <select>
            <option lang_value="C++">Select Language</option>
            <option lang_value="C">C99</option>
            <option lang_value="C++">C++17</option>
            <option lang_value="Python">Python 3</option>
            <option lang_value="Java">Java 11</option>
            <option lang_value="jsx">JSX</option>
          </select>
        </div>
        <form className="codemirror-form">
          <CodeMirror
            value = {this.state.code}
            options={{
              keyMap: 'sublime',
              theme : 'neo',
              lineNumbers : true,
              mode: 'text/x-c++src',
              tabSize: 4,
              height: "auto",
              viewportMargin: Infinity,
              lineWrapping: true,
              indentWithTabs: true,  
            }}
            onChange = {this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default withRouter(Textarea);

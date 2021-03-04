import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "./Textarea.css";
import { problem, submit } from "../pages";
import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/keymap/sublime';
import 'codemirror/theme/neo.css';
import setSize from '@uiw/react-codemirror';

class Textarea extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.state = {
      result: [],
      pnum: props.props.match.params.id,
      code: "",
      info: "",
      lang_value: "c++",
    };
  }

  submit = async (e) => {
    e.preventDefault();
    const {
      data: { Problems },
    } = await axios({
      method: "post",
      url: "http://210.117.181.118:4848/spring/submitcode",
      data: {
        Pnum: this.state.pnum,
        code: this.state.code,
      },
    }).then();
    this.setState({ result: Problems });
    // console.log(this.state)
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
            value={this.state.code}
            onChange={{code : this.state.value}}
            options={{
              theme: 'neo',
              keyMap: 'sublime',
              mode: 'C++',
              tabSize: 4,
            }}
          />
          {/* <button onClick={this.submit}>submit</button> */}
        </form>
      </div>
    );
  }
}

export default withRouter(Textarea);

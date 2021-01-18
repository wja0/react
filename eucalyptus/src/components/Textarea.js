import React, { Component } from "react";

class Textarea extends Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value.substr(0) });
  };

  render() {
    return (
      <div>
        <form>
          <h1>문제번호</h1>
          <textarea
            placeholder="Input your code"
            rows="50"
            cols="75"
            value={this.state.value}
            onChange={this.handleChange}
          />
        <button>submit</button>
        </form>
      </div>
    );
  }
}

export default Textarea;
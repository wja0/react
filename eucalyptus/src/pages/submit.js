import React, { Component } from "react";
import Textarea from "../components/Textarea";

class Submit extends Component {
  render() {
    // console.log(this.props)
    return (
      <div>
        <Textarea props={this.props}/>
      </div>
    );
  }
}

export default Submit;
import React, { Component } from "react";
import Textarea from "../components/Textarea";
import Subnavigation from "../layout/Subnavigation";

class submit extends Component {
  render() {
    // console.log(this.props.match)
    return (
      <div>
        <Subnavigation props={this.props} />
        <Textarea props={this.props}/>
      </div>
    );
  }
}

export default submit;
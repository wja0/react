import React, { Component } from "react";
import Textarea from "../components/Textarea";
import Subnavigation from "../layout/Subnavigation";

class submit extends Component {
  render() {
    return (
      <div>
        <Subnavigation Pnum={this.props.match.params.id} />
        <Textarea props={this.props}/>
      </div>
    );
  }
}

export default submit;
import React, { Component } from "react";
import Textarea from "../components/Textarea";
import Subnavigation from "../layout/Subnavigation";

class submit extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    // this.state= {
    //   Pnum : props.Pnum[0],
    //   id : props.id
    // }
  }
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
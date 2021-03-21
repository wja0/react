import { string } from 'prop-types';
import React, { Component } from 'react';
import Navigation from '../layout/Navigation'
import Title from '../layout/Title'

class Home extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: props.location.state,
      Name : ''
    }
  }
  handleCreate = (data) => {
    this.setState({id : data.id})
    console.log(this.state)
  }
  render(){
    return (
        <div>
          <Title></Title>
          <Navigation></Navigation>
          <h1>Home</h1>
        </div>
      );
  }
}
export default Home
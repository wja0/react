import { string } from 'prop-types';
import React, { Component } from 'react';

class Home extends React.Component{
  render(){
    console.log(this.props)
    return (
        <div>
          <h1>Home</h1>
        </div>
      );
  }
}
    

export default Home
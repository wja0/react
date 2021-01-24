import React, { Component } from 'react';
import "./Tmp.css"  
import Subnavigation from '../components/Subnavigation'

class Tmp extends Component {
  render() {
    return (
      <div className ="tmp">
            <Subnavigation />
          <h3>
            tmp page
          </h3>
        </div>
    );
  }
}
    
export default Tmp
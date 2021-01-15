import React, {Component} from 'react'
import { BrowserRouter, Route, Link, Switch} from "react-router-dom"
import styled from 'styled-components'
import Page from './pages/Pages'
import Navigation from './components/Navigation'

class App extends Component {
  render(){
    return (
        <div>
          <Navigation />
          <Page></Page>
        </div>
        
    );
  }
}

export default App;
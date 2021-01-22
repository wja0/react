import React, {Component} from 'react'
import { BrowserRouter, Route, Link, Switch} from "react-router-dom"
import styled from 'styled-components'
import Page from './pages/Pages'
import Navigation from './components/Navigation'
import Title from './components/Title'

class App extends Component {
  render(){
    return (
        <div>
          <Title></Title>
          <Navigation />
          <Page></Page>
        </div>
        
    );
  }
}

export default App;
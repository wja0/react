import React, {Component} from 'react'
import { BrowserRouter, Route, Link, Switch} from "react-router-dom"
import styled from 'styled-components'
import Page from './pages/Pages'
import Navigation from './layout/Navigation'
import Title from './layout/Title'
import HeaderContainer from './components/HeaderContainer';
import Subnavigation from './layout/Subnavigation'
class App extends Component {
  render(){
    return (
        <div>
          <HeaderContainer/>
          <Title></Title>
          <Navigation />
          <Subnavigation />
          <Page></Page>
        </div>
        
    );
  }
}

export default App;

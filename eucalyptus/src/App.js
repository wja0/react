import React, {Component} from 'react'
import styled from 'styled-components'
import Page from './pages/Pages'
import HeaderContainer from './containers/Base/HeaderContainer';
import Navigation from './layout/Navigation'
import Title from './layout/Title'
import storage from './lib/storage'
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userActions from './redux/modules/user'
class App extends Component {
  render(){
    return (
        <div> 
          <HeaderContainer/>
          <Page></Page>
        </div>
        
    );
  }
}
export default connect(
  null,
  (dispatch) => ({
      UserActions: bindActionCreators(userActions, dispatch)
  })
)(App);
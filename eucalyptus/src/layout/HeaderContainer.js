import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {LoginForm} from '../layout/LoginForm'
import LogoutButton from './LogoutButton.js';
import './HeaderContainer.css';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this.state= {
            authenticated : false,
            id : ''
        //   Pnum : props.Pnum[0],
        //   id : props.id
        }
    }
    logout = () => this.setState({
        id : '',
        authenticated:false})
    componentDidMount() {
        if(this.props.id!=undefined){
          this.setState({
              id : this.props.id.id,
              authenticated:true})
        }
      }
    handleCreate = (data) => {
        // console.log(data);
        // const { register_info } = this.state;
        // console.log(data)
    }
    render() {
        const {authenticated, id} = this.state
        // console.log(this.state)
        return (
            <div className = 'header'>
                {authenticated ? (
                    <Link to ={{pathname: `/user/${id}`}}><button className="headerButton">{id}</button></Link>
                    ) : (
                    <Link to="/login"><button className="headerButton" >Login</button></Link>
                    )}
                    {authenticated ? (<LogoutButton logout={this.logout} /> ): <Link to ="/Register">
                    <button className="headerButton" onCreate={this.handleCreate}>Register</button>
                </Link>}
                
            </div>
        );
    }
}

export default HeaderContainer;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderContainer.css';

class HeaderContainer extends Component {
    handleCreate = (data) => {
        // console.log(data);
        const { register_info } = this.state;
        console.log(data)
    }
    render() {
        return (
            <div className = 'header'>
                <Link to ="/Login"> 
                    <button className="headerButton" onCreate={this.handleCreate}>Login</button>
                </Link>
                <Link to ="/Register">
                    <button className="headerButton" onCreate={this.handleCreate}>Register</button>
                </Link>
            </div>
        );
    }
}

export default HeaderContainer;
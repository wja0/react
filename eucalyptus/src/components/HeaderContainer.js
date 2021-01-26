import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeaderContainer.css';

class HeaderContainer extends Component {
    render() {
        return (
            <div className = 'header'>
                <Link to ="/Login">
                    <button className="headerButton">Login</button>
                </Link>
            </div>
        );
    }
}

export default HeaderContainer;
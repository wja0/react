import React from 'react';

function LoginForm() {
    return (
        <div className="Login">
            <h1 className="text__Login">Login</h1>
            <input
                className="input__id"
                type="text"
                placeholder="id"
            />
            <input
                className="input__pw"
                type="password"
                placeholder="password"
            />
            <button className="button__Login">Login</button>
        </div>
    );
}

export default LoginForm;
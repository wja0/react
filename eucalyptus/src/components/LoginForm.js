import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';

const id = styled.input`
    color: ${oc.gray[8]};
`;

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
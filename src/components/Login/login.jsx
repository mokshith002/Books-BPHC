import React, { Component } from 'react';
import LoginForm from './loginform';
export default function Login(props) {

    return(
        <div class='d-flex p-3 justify-content-center align-items-center' style={{height: "70vh"}}>

                <LoginForm handleLogin={props.handleLogin}/>
          
        </div>
    )
};

import React, { Component } from 'react';
import LoginForm from './loginform';
import RegisterForm from './registerform';
export default function Login(props) {

    return(
        <div class='row p-3'>

            <div className='col'>
                <LoginForm/>
            </div>
            <div className='col'>
                <RegisterForm />
            </div>
        </div>
    )
};

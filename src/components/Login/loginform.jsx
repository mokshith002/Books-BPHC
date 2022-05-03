import axios from 'axios';
import React, { Component } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginForm(props) {

    const URL = `http://localhost:${5000}`;

    const navigate = useNavigate();

    const changeLogin = (id) => props.handleLogin(id);

    const submitLogin = () => {
        let Email = document.getElementById("logMail").value;
        let Pass = document.getElementById("logPass").value;
        axios.post(`${URL}/users/login`, { email: Email, password: Pass })
            .then(res => {
                if (res.data.success) {
                    localStorage.setItem("userId", res.data.userID);
                    console.log("In login form ", res.data.userID);
                    changeLogin(res.data.userID);
                    navigate('/');
                }
                else {
                    alert("Invalid credentials!");
                }
            })
            .catch(
                err => console.log(err.message)
            );
    }

    function handleSubmit(event){
        event.preventDefault();
        submitLogin();
    }

    return (

            <form onSubmit={handleSubmit}> 
                <div class="row"> <h2>Login</h2> </div>
                <div class="mb-3">
                    <label for="inputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="logMail" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="logPass" />
                </div>
              
                <button type="submit" class="btn btn-primary">Submit</button>
                <div id="emailHelp" class="form-text">Don't have an account? Register <Link to='/register'>here</Link>.</div>
            </form> 

    );
};

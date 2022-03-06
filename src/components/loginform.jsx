import axios from 'axios';
import React, { Component } from 'react';
export default function LoginForm(props) {

    const URL = `http://localhost:${5000}`;

    const submitLogin = () => {
        // event.preventDefault();
        let Email =  document.getElementById("logMail").value;
        let Pass = document.getElementById("logPass").value;
        axios.post(`${URL}/users/login`,{email:Email,password:Pass})
        .then(res => {
            if(res.data.success){
                localStorage.setItem("userId",res.data.userID);
                window.location.href = "http://localhost:3000";
            }
            else{
                alert("Invalid credentials!");
            }
        })
        .catch(
            err => console.log(err.message)
        );
    }

    return (
        <div class="card-body bg-secondary m-3">
            <h2>Login</h2>
            {/* <form action='' method='post'>
                <input type="text" name="logUname"></input><br />
                Username<br /><br />
                <input type="password" name="logPass"></input><br />
                Password<br /><br />
                <input type='submit' value="Submit"></input>
            </form> */}
                <input type="text" id="logMail"></input><br />
                Email<br /><br />
                <input type="password" id="logPass"></input><br />
                Password<br /><br />
                <button onClick={submitLogin}>Submit</button>
        </div>
    );
};

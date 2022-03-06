import axios from 'axios';
import React, { Component } from 'react';
export default function RegisterForm(params) {

    const URL = `http://localhost:${5000}`;

    const submitRegister = () => {
        let mail = document.getElementById("regMail").value;
        let pass1 = document.getElementById("regPass1").value;
        let pass2 = document.getElementById("regPass2").value;
        let ph = document.getElementById("regPhone").value;
        let addr = document.getElementById("regAddr").value;
        if(pass1 !== pass2){
            alert("Passwords do not match!");
            return;
        }
        axios.post(`${URL}/users/register`,{email:mail,password:pass1,phone:ph,address:addr})
        .then(res => {
            if(res.data.success){
                localStorage.setItem("userId",res.data.userID);
                window.location.href = "http://localhost:3000";
            }
            else{
                alert(res.data.message);
            }
        })
        .catch(
            err => console.log(err.message)
        );
    }

    return (
        <div class="card-body bg-secondary m-3">
            <h2>Register</h2>
            {/* <form action="" method='post'>
                <input type="text" name="regMail"></input><br />
                Email<br /><br />
                <input type="password" name="regPass1"></input><br />
                Password<br /><br />
                <input type="password" name="regPass2"></input><br />
                Confirm Password<br /><br />
                <input type="submit" value="Submit"></input>
            </form> */}
            <input type="text" id="regMail"></input><br />
            Email<br /><br />
            <input type="text" id="regPhone"></input><br />
            Phone<br /><br />
            <input type="text" id="regAddr"></input><br />
            Address<br /><br />
            <input type="password" id="regPass1"></input><br />
            Password<br /><br />
            <input type="password" id="regPass2"></input><br />
            Confirm Password<br /><br />
            <button onClick={submitRegister}>Submit</button>
        </div>
    );
};

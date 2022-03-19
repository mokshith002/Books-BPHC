import axios from 'axios';
import React, { Component } from 'react';
export default function RegisterForm(params) {

    const URL = `http://localhost:${5000}`;

    const submitRegister = () => {
        let mail = document.getElementById("regMail").value;
        let name = document.getElementById("regName").value;
        let pass1 = document.getElementById("regPass1").value;
        let pass2 = document.getElementById("regPass2").value;
        let ph = document.getElementById("regPhone").value;
        let addr = document.getElementById("regAddr").value;
        if(pass1 !== pass2){
            alert("Passwords do not match!");
            return;
        }
        axios.post(`${URL}/users/register`,{email:mail,name:name, password:pass1, phone:ph, address:addr})
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
        <div class="flex-shrink">
         <form>
                <div class="row"> <h2>Register</h2> </div>

                <div class="mb-3">
                    <label for="phone" class="form-label">Name</label>
                    <input type="tel" class="form-control" id="regName" />
                </div>

                <div class="mb-3">
                    <label for="inputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="regMail" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>

                <div class="mb-3">
                    <label for="phone" class="form-label">Phone number</label>
                    <input type="tel" class="form-control" id="regPhone" />
                </div>

                 <div class="mb-3">
                    <label for="address" class="form-label">Address</label>
                    <input type="text" class="form-control" id="regAddr" />
                </div>

                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="regPass1" />
                </div>

                <div class="mb-3">
                    <label for="passowrd" class="form-label">Confirm Password</label>
                    <input type="password" class="form-control" id="regPass2" />
                </div>
              
                <button type="submit" class="btn btn-primary" onClick={submitRegister} >Submit</button>
                <div id="emailHelp" class="form-text">Already have an account? Login <a href='/login'>here</a>.</div>
            </form> 

        </div>
    );
};

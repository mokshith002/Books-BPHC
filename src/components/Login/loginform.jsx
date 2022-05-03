import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function LoginForm(props) {

    const URL = `http://localhost:${5000}`;

    const [formData, setFormData] = useState({email:'', password: '' })

    const navigate = useNavigate();


    const submitLogin = async () => {
        await axios.post(`${URL}/users/login`, formData)
      .then((res) => {
        if (res.data.success) {
            console.log(res.data);
            localStorage.setItem('userId', res.data.userID);
            props.handleLogin(res.data.userID);
            navigate('/');
        } else {
          alert('Invalid Credentials');
        }
      })
      .catch((err) => console.log(err.message));
    }

    function handleSubmit(event){
        event.preventDefault();
        submitLogin();
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        console.log(formData);
    }

    return (

            <form onSubmit={handleSubmit}> 
                <div class="row"> <h2>Login</h2> </div>
                <div class="mb-3">
                    <label for="inputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="logMail" aria-describedby="emailHelp" value={formData.email} name='email' onChange = {handleChange}/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="logPass" value={formData.password} name='password' onChange={handleChange}/>
                </div>
              
                <button type="submit" class="btn btn-primary">Submit</button>
                <div id="emailHelp" class="form-text">Don't have an account? Register <Link to='/register'>here</Link>.</div>
            </form> 

    );
};

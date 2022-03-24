import React, { Component } from 'react';
import {Navigate, useNavigate, useMatch, Link} from 'react-router-dom';
import axios from 'axios';

export default function NavBar(props) {

  
    const [userRole, setUserRole] = React.useState('');

    const URL = `http://localhost:${5000}`;

    const id = localStorage.getItem('userId');

    const navigate = useNavigate();

    axios.get(`${URL}/users/${id}`)
        .then(res => {
            setUserRole(res.data.role);
        })
        .catch(err => console.log(err))

    const logButt = () => {
      if(id != undefined){
        return (
          <button class="btn" onClick={()=>{
            localStorage.removeItem('userId');
            navigate('/');
          }}>
            LOGOUT
          </button>
        );
      }else{
        return (
          <button class="btn" onClick={()=>{
            navigate('/login');
          }}>
            LOGIN
          </button>
        );
      }
    };

    return (

    <div>  
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="navbar-brand">
            <Link to="/" style={{ color: '#000', textDecoration: 'none', fontSize: 25 }}>Books@BPHC</Link>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item nav-link">
              <Link  style={{textDecoration:'none', color: "#000"}}to="/">Home</Link>
            </li>
            <li class="nav-item nav-link">
              <Link  style={{textDecoration:'none', color: "#000"}}to="/search">Search</Link>
            </li>
            <li class="nav-item nav-link">
              <Link  style={{textDecoration:'none', color: "#000"}}to="/listings">All Listings</Link>
            </li>
            <li class="nav-item nav-link">
              {localStorage.getItem('userId') && <Link  style={{textDecoration:'none', color: "#000"}}to="/listings/my-listings">My Listings</Link>}
            </li>
            <li class="nav-item nav-link">
              {localStorage.getItem('userId') && (userRole == 'Admin' || userRole == 'Moderator') && <Link  style={{textDecoration:'none', color: "#000"}}to="/users">Users</Link>}
            </li>
          </ul>
          <span class="navbar-text"> 
              {logButt()}
          </span>
        </div>
      </div>
    </nav>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>

    </div>

        
    );
}
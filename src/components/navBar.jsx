import React, { Component } from 'react';
import {Navigate} from 'react-router-dom';
import axios from 'axios';

export default function NavBar(props) {

    const localURL = "http://localhost:3000";

    const [userRole, setUserRole] = React.useState('');

    const URL = `http://localhost:${5000}`;

    const id = localStorage.getItem('userId');

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
            window.location.href = localURL;
          }}>
            LOGOUT
          </button>
        );
      }else{
        return (
          <button class="btn" onClick={()=>{
            window.location.href = localURL+"/login";
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
        <a class="navbar-brand" href={localURL}>Books-BPHC</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href={localURL}>Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={`${localURL}/search`}>Search</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={`${localURL}/listings`}>All Listings</a>
            </li>
            <li class="nav-item">
              {localStorage.getItem('userId') && <a class="nav-link" href={`${localURL}/listings/my-listings`}>My Listings</a>}
            </li>
            <li class="nav-item">
              {localStorage.getItem('userId') && (userRole == 'Admin' || userRole == 'Moderator') && <a class="nav-link" href={`${localURL}/users`}>Users</a>}
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
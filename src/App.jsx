import React from 'react';
import NavBar from './components/navBar';
import AllListings from './components/AllListings'
import Listing from './components/Listing'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import Home from './components/Home'
import Login from './components/login';


function App() {
    return ( 
        <div className = "App" >
            <NavBar />
            
            <Routes>
                <Route exact path = "/" element={<Home />} />
                <Route path = "/listings" element={<AllListings />} />
                <Route path = "/listings/:id" element={<Listing />} />
                <Route path = "/login" element={<Login />} />
            </ Routes>
        </div>
    );
}

export default App;
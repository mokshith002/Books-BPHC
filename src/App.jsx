import React from 'react';
import NavBar from './components/navBar';
import AllListings from './components/Books/Listings/AllListings'
import Listing from './components/Books/Listings/Listing'
import Search from './components/Books/Listings/search'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import Home from './components/Home'
import Login from './components/Login/login';
import Test from './components/Test';
import AddBook from './components/Books/AddBook';
import Register from './components/Login/register';
import EditBook from './components/Books/EditBook';
import MyListings from './components/Books/Listings/MyListings';
import AllUsers from './components/Users/AllUsers';
import UserListings from './components/Users/UserListings'


function App() {

    
    return ( 
        <div className = "App" >
            <NavBar />
            
            <Routes>
                <Route exact path = "/" element={<Home />} />
                <Route path = "/listings" element={<AllListings />} />
                <Route path = "/listings/:id" element={<Listing />} />
                <Route path = "/login" element={<Login />}/>
                <Route path = "/register" element={<Register />}/>
                <Route path = "/search" element={<Search />} />
                <Route path = "/listings/edit/:id" element={<EditBook />} />
                {/* <Route path = "/test" element={<AllUsers />} /> */}
                <Route path = "/listings/add" element={<AddBook/>} />
                <Route path = "/listings/my-listings" element={<MyListings />} />
                <Route path = "/users" element={<AllUsers />} />
                <Route path = "/users/listings/:id" element={<UserListings />} />
            </ Routes>
        </div>
    );
}

export default App;
import React from 'react';
import NavBar from './components/navBar';
import AllListings from './components/AllListings'
import Listing from './components/Listing'
import Search from './components/search'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
import Home from './components/Home'
import Login from './components/login';
import Test from './components/Test';
import AddBookForm from './components/addBookForm';
import Register from './components/register';
import EditBookForm from './components/EditBookForm'


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
                <Route path = "/listings/edit/:id" element={<EditBookForm />} />
                <Route path = "/test" element={<Test />} />
                <Route path = "/listings/add" element={<AddBookForm />} />
            </ Routes>
        </div>
    );
}

export default App;
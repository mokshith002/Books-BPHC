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
    useNavigate
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
import { UndoRounded } from '@material-ui/icons';


function App() {

    const [userId, setUserId] = React.useState(localStorage.getItem('userId'));
    const [userRole, setUserRole] = React.useState('');

    const URL = `http://localhost:${5000}`;

    React.useEffect(() => {
        
        axios.get(`${URL}/users/${userId}`)
            .then(res => {
                setUserRole(res.data.role);
            })
            .catch(err => console.log(err))

    })



    const navigate = useNavigate();
    
    const logButt = () => {
            
      if(userId != undefined){
        return (
          <button class="btn" onClick={()=>{
            localStorage.removeItem('userId');
            setUserRole('');
            setUserId(undefined);
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

    function updateUserId(newId){
        setUserId(newId);
    }
    
    return ( 
        <div className = "App" >
            <NavBar logToggle = {logButt} userId = {userId} userRole = {userRole}/>
            
            <Routes>
                <Route exact path = "/" element={<Home />} />
                <Route path = "/listings" element={<AllListings userRole = {userRole} userId = {userId}/>} />
                <Route path = "/listings/add" element={<AddBook userRole = {userRole} userId = {userId}/>} />
                <Route path = "/listings/:id" element={<Listing />} />
                <Route path = "/login" element={<Login handleLogin = {updateUserId}/>}/>
                <Route path = "/register" element={<Register />}/>
                <Route path = "/search" element={<Search />} />
                <Route path = "/listings/edit/:id" element={<EditBook userRole = {userRole} userId = {userId}/>} />
                <Route path = "/listings/my-listings" element={<MyListings userId = {userId} />} />
                <Route path = "/users" element={<AllUsers userRole = {userRole}/>} />
                <Route path = "/users/listings/:id" element={<UserListings userRole = {userRole}/>} />
            </ Routes>
        </div>
    );
}

export default App;
import EditBookForm from './Forms/EditBookForm';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useParams, Navigate} from "react-router-dom";
import WrongUser from '../AuthFail/WrongUser'
import NotLoggedIn from '../AuthFail/NotLoggedIn';

export default function EditBook(props) {

    const ID = useParams().id;

    const URL = `http://localhost:${5000}`;

    const [authorized, setAuthorized] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
  
    useEffect(() => {
      axios.get(`${URL}/listings/${ID}`)
      .then(res => {
        const state = res.data.sellerId === props.userId || props.userRole === 'Admin' || props.userRole === 'Moderator';
        setAuthorized(state);
        setIsLoading(false);
      })
      .catch(err => {
        setAuthorized(false);
      })
      isLoading ? console.log("Loading...") : console.log(`Authorized - ${authorized}`);
    })

    if(isLoading) return <></>

    return authorized ? <EditBookForm /> : localStorage.getItem('userId') ? <WrongUser /> : <NotLoggedIn />
}

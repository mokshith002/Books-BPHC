import EditBookForm from './Forms/EditBookForm';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useParams, Navigate} from "react-router-dom";
import WrongUser from '../AuthFail/WrongUser'
import NotLoggedIn from '../AuthFail/NotLoggedIn';

const EditBook = () => {

    const ID = useParams().id;

    const URL = `http://localhost:${5000}`;

    const [authorized, setAuthorized] = useState(false);
  
    useEffect(() => {
      axios.get(`${URL}/listings/${ID}`)
      .then(res => {
        const state = (res.data.sellerId === localStorage.getItem('userId'));
        setAuthorized(state);
      })
      .catch(err => {
        setAuthorized(false);
      })

      console.log(authorized);
    }, [])


    return authorized ? <EditBookForm /> : localStorage.getItem('userId') ? <WrongUser /> : <NotLoggedIn />
}

export default EditBook;
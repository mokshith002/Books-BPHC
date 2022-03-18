import React from 'react';
import AddBookForm from './Forms/AddBookForm';
import NotLoggedIn from '../AuthFail/NotLoggedIn';

export default function AddBook(){

    return localStorage.getItem('userId') ? <AddBookForm /> : <NotLoggedIn />
}
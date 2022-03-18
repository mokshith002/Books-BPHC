import React from 'react';
import { Navigate } from 'react-router';
import AddBookForm from './Forms/AddBookForm';

export default function AddBook(){

    return localStorage.getItem('userId') ? <AddBookForm /> : <Navigate to="/" />
}
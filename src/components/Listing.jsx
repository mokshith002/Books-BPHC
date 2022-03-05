import React, { Component, useState } from 'react';
import { useSearchParams, useParams, useMatch } from "react-router-dom";
import axios from 'axios';

export default function Listing(props) {
    const [listingInfo,setListingInfo] = useState({});

    const URL = `http://localhost:${5000}`;
    
    let ID = useParams().id;

    const copyToCB = ()=>{
        navigator.clipboard.writeText(window.location.href);
    }
    
    axios.get(`${URL}/listings/${ID}`)
    .then(res => {
        setListingInfo(
            res.data
        );
    });

    const {title,author,price,branches,courses} = listingInfo;
    return (
        <div className="row">
            <img src="https://notionpress.com/blog/wp-content/uploads/2015/07/001-book-brand-cover-back-presentation-mockup-psd.jpg" className="card-img-top" alt="..." />
            <h1>{title}</h1>
            <span class="bg-dark text-light">
                {window.location.href} <button onClick={copyToCB} class="btn-secondary">Copy URL</button>
            </span>
            <p>Author: {author}</p>
            <p>Price: {price}</p>
            <p>Branches: {branches}</p>
            <p>Courses: {courses}</p>
            {/* <button>Request Seller Contact</button> */}
        </div>
    );
};

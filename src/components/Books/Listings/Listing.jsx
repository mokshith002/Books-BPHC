import React, { Component, useState } from 'react';
import { useSearchParams, useParams, useMatch } from "react-router-dom";
import axios from 'axios';

export default function Listing(props) {
    const [listingInfo, setListingInfo] = useState({});

    const URL = `http://localhost:${5000}`;

    let ID = useParams().id;

    const copyToCB = () => {
        navigator.clipboard.writeText(window.location.href);
    }

    axios.get(`${URL}/listings/${ID}`)
        .then(res => {
            setListingInfo(
                res.data
            );
        });

    const { title, author, price, branches, courses } = listingInfo;
    return (
    <div>

        <div class="container mt-5 pt-5">


      <div class="row row-cols-1 row-cols-lg-2">
        <div class="col"><img src="https://notionpress.com/blog/wp-content/uploads/2015/07/001-book-brand-cover-back-presentation-mockup-psd.jpg" alt="..." /></div>
        <div class="col">

          <div class="row">
                    <h1>{title}</h1>
          </div>

          <div class="row">
                    <p>Author: {author}</p>
          </div>
          <div class="row">
                    <p>Price: {price}</p>
          </div>
          <div class="row">
                    <p>Branches: {branches}</p>
          </div>
          <div class="row">
                    <p>Courses: {courses}</p>
          </div>
          {window.location.href}<br /> <button onClick={copyToCB} class="btn btn-primary mt-3 align-self-start">Copy URL</button>
        </div>
      </div>

    </div>
  </div>

    );
};

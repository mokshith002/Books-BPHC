import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function Card(props) {
    const {title, author, courses, branches, price,link} = props;
    return (

        <div>

            <div className="card h-100 w-100" style={{width: "18rem"}}>
                <img src="https://notionpress.com/blog/wp-content/uploads/2015/07/001-book-brand-cover-back-presentation-mockup-psd.jpg" className="card-img-top" alt="..." />
                <div className="card-body flex-column d-flex">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-author">{author} </p>
                    <p className="card-price">{`₹${price}`} </p>
                    <p className="card-courses">{courses.map(x=>"["+x+"] ")} </p>
                    <p className="card-branches">{branches.map(x=>"("+x+") ")} </p>
                    <a href={link} className="btn btn-primary mt-auto align-self-start">Go to Page</a>
                </div>
            </div>

        </div>


    );
}
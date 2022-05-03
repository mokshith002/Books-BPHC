import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import {Navigate, useNavigate} from 'react-router-dom';

export default function Card(props) {
    const {title, author, courses, branches, price, listingId, sellerId} = props;

    const URL = `http://localhost:${5000}/listings`;

    const navigate = useNavigate();
    
    const links = {
        goTo: `${listingId}`,
        edit: `edit/${listingId}`
    }

    const handleDelete =async  () => {
        try {
            await axios.delete(`${URL}/delete/${listingId}`);
            alert("Succesfully deleted")
        } catch (error) {
            alert(error.message)
        }
        navigate("/listings")
    }

    function handleNavigate(url){
        navigate(`/listings/${url}`)
    }

    return (

        <div>

            <div className="card h-100 w-100" style={{width: "18rem"}}>
                <img src="https://notionpress.com/blog/wp-content/uploads/2015/07/001-book-brand-cover-back-presentation-mockup-psd.jpg" className="card-img-top" alt="..." />
                <div className="card-body flex-column d-flex">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-author">{author} </p>
                    <p className="card-prichref={link}e">{`₹${price}`} </p>
                    <p className="card-courses">{courses} </p>
                    <p className="card-branches">{branches} </p>
                    <div>
                        <button className="btn btn-success mt-auto align-self-start"onClick={() => handleNavigate(links.goTo)}>Go to Page</button>
                        {   (sellerId === props.userId || props.userRole == 'Admin' || props.userRole == 'Moderator') &&
                            <span>
                                <button className="btn btn-primary mt-auto align-self-start ms-5" onClick={() => handleNavigate(links.edit)}>Edit</button>
                                <button onClick={handleDelete} className="btn btn-danger mt-auto align-self-end ms-5">Delete</button>
                            </span>
                        }
                    </div>
                </div>
            </div>

        </div>


    );
}
import React, {useState, useEffect, useRef} from "react";
import Collapse from 'bootstrap';
import axios from 'axios';
import {Navigate, useNavigate} from 'react-router-dom';

export default function AccordionDemo(props) {

    const {user, id} = props;

        const URL = `http://localhost:${5000}/users`;
        const URL1 = `http://localhost:${3000}/users`;
      
        const navigate = useNavigate();


    const handleDelete = async  () => {
        try {
            await axios.delete(`${URL}/delete/${user._id}`);
            alert("Succesfully deleted")
        } catch (error) {
            alert(error.message)
        }
        navigate('/users');
    }

    const handleRoleChange = async () => {
      try{
        await axios.put(`${URL}/update/${user._id}`, {
          ...user,
          role: user.role == 'User' ? 'Moderator' : 'User'
        })
      } catch(err){
        alert(err.message)
      }
      navigate('/users')
    }

    const handleViewListings = () => {
       navigate(`/users/listings/${user._id}`)
    }

    const handleFlag = async () => {
      try{
        await axios.put(`${URL}/update/${user._id}`, {
          ...user,
          flagged: !user.flagged
        })
      }catch(err){
        alert(err.message)
      }
      navigate('/users')
    }
    

    return (
        // <div class="accordion" id="accordionExample">
          <div class="accordion-item mt-4" >
            <h2 class="accordion-header" id={`heading${id}`}>
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${id}`} aria-expanded="false" aria-controls={`collapse${id}`}>
                <h4>{user.name}</h4>
              </button>
            </h2>
            <div id={`collapse${id}`} class="accordion-collapse collapse is-collapsed" aria-labelledby={`heading${id}`} data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <h5><strong>Email - </strong>{user.email}</h5>
                <h5><strong>Phone - </strong>{user.phone}</h5>
                <h5><strong>Address - </strong>{user.address}</h5>
                <h5><strong>Role - </strong>{user.role}</h5>
                <h5><strong>User ID - </strong>{user._id}</h5>

                <button className="btn btn-primary mt-auto align-self-start" onClick={handleViewListings}>View Listings</button>
               {props.userRole === 'Admin' && <button className="btn btn-success mt-auto align-self-start ms-5" onClick={handleRoleChange}>{user.role === 'User' ? "Make Moderator" : "Make User"}</button>}
               {props.userRole === 'Admin' && <button  className="btn btn-danger mt-auto align-self-end ms-5" onClick={handleDelete}>Delete</button>}
               {(props.userRole === 'Moderator'|| props.userRole === 'Admin') && <button  className="btn btn-warning mt-auto align-self-end ms-5" onClick={handleFlag}>{user.flagged ? "Unflag" : "Flag"}</button>}
                         
                        
              </div>
            </div>
          </div>
    )
}
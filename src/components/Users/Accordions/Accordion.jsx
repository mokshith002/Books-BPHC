import React, {useState, useEffect, useRef} from "react";
import Collapse from 'bootstrap';
import axios from 'axios';
import {Navigate} from 'react-router-dom';

export default function AccordionDemo(props) {

    const {user, id} = props;

        const URL = `http://localhost:${5000}/users`;


    const handleDelete = async  () => {
        try {
            await axios.delete(`${URL}/delete/${user._id}`);
            alert("Succesfully deleted")
        } catch (error) {
            alert(error.message)
        }
        <Navigate to="/users"/>
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
      <Navigate to="/users"/>
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

                <button className="btn btn-primary mt-auto align-self-start">View Listings</button>
                <button className="btn btn-success mt-auto align-self-start ms-5" onClick={handleRoleChange}>{user.role === 'User' ? "Make Moderator" : "Make User"}</button>
                <button  className="btn btn-danger mt-auto align-self-end ms-5" onClick={handleDelete}>Delete</button>
                         
                        
              </div>
            </div>
          </div>
        // </div>   
    )
}
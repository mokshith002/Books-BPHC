import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useParams, Navigate} from "react-router-dom";

const EditBookForm = ()=> {

  const URL = `http://localhost:${5000}`;

  const ID = useParams().id;

  let currentListing = null;
  const [formData, setFormData] = useState({title: "", author: "", courses: "", price: 0, branches: ""});
  const abc = async () => {
    const res = await axios.get(`${URL}/listings/${ID}`,{
      headers:{
        "Access-Control-Allow-Origin":`${URL}`
      }
    })
   
    currentListing = res.data;
  
    console.log(currentListing);
    setFormData(currentListing);
  }
  useEffect(()=>{
    abc();
  }, [])

  const coursesList = ["", "CS F111", "CS F211", "CS F214", "ECE F111", "ECE F211", "ECE F214", "ME F111", "ME F241", "MATH F111", "MATH F211"];


  const handleChange = (event)=>{
    const {name, value} = event.target;
    let branch = formData.branches;
    if(name === "courses"){
      branch = coursesList[parseInt(value)].split()[0];
    }
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
      branches: branch
    }))
  }

  const handleSubmit = async (event) =>{
    event.preventDefault();
    console.log(formData);
    await axios.put(`${URL}/listings/update/${ID}`, ({
      ...formData,
      sellerId: localStorage.getItem('userId')
    }));
    <Navigate to="/listings"/>
  }


    return (

         <div class="container p-5">

        <div class="row text-center">
                <h2 class="">Edit Listing</h2>
            </div>

    <form onSubmit={handleSubmit}>
      <div class="form-group p-2">
        <label for="bookName">Book Name</label>
        <input type="text" class="form-control" id="bookName" placeholder="Book Name" value={formData.title} name="title" onChange={handleChange}/>
        <small class="form-text text-muted">Name of the textbook</small>
      </div>

      <div class="form-group p-2">
        <label for="bookName">Author</label>
        <input type="text" class="form-control" id="bookName" placeholder="Book Name" value={formData.author} name="author" onChange={handleChange}/>
      </div>

      <div class="form-group p-2">
      <select class="custom-select" value={formData.courses} name="courses" onChange={handleChange}>
        <option selected>Course Code</option>
        <option value="11">None</option>
        <option value="1">CS F111</option>
        <option value="2">CS F211</option>
        <option value="3">CS F214</option>
        <option value="4">EEE F111</option>
        <option value="5">EEE F211</option>
        <option value="6">EEE F214</option>
        <option value="7">ME F111</option>
        <option value="8">ME F241</option>
        <option value="9">MATH F111</option>
        <option value="10">MATH F211</option>

      </select>
      </div>

      {/* <div class="form-group p-2">
        <label for="description">Description</label>
        <input type="text-area" class="form-control" id="price" aria-describedby="description" placeholder="" />
        <small id="description" class="form-text text-muted">Brief Discription of the book</small>
      </div> */}


      <div class="form-group p-2">
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price" aria-describedby="price" placeholder="" value={formData.price} name="price"  onChange={handleChange}/>
        <small id="price" class="form-text text-muted">Choose a reasonable price</small>
      </div>


      {/* <div class="custom-file p-2">
        <input type="file" class="custom-file-input" id="customFile" />
        <label class="custom-file-label" for="bookImage">Choose image</label>
      </div> */}

      <div class="form-group p-2">
          <button type="submit" class="btn btn-primary">Submit</button>
      </div>

    </form>
  </div>



    );
}
export default EditBookForm;
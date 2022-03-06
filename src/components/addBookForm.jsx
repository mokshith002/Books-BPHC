import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    return (

         <div class="container p-5">

    <form>
      <div class="form-group p-2">
        <label for="bookName">Book Name</label>
        <input type="text" class="form-control" id="bookName" placeholder="Book Name" />
        <small class="form-text text-muted">Name of the textbook</small>
      </div>

      <div class="form-group p-2">
      <select class="custom-select">
        <option selected>Course Code</option>
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

      <div class="form-group p-2">
        <label for="description">Description</label>
        <input type="text-area" class="form-control" id="price" aria-describedby="description" placeholder="" />
        <small id="description" class="form-text text-muted">Brief Discription of the book</small>
      </div>


      <div class="form-group p-2">
        <label for="price">Price</label>
        <input type="number" class="form-control" id="price" aria-describedby="price" placeholder="" />
        <small id="price" class="form-text text-muted">Choose a reasonable price</small>
      </div>


      <div class="custom-file p-2">
        <input type="file" class="custom-file-input" id="customFile" />
        <label class="custom-file-label" for="bookImage">Choose image</label>
      </div>

      <div class="form-group p-2">
              <button type="submit" class="btn btn-primary">Submit</button>
      </div>

    </form>
  </div>



    );
}
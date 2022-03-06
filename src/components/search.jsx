import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Search() {
    return (

        <div class="container p-5">

    <div class="row text-center p-5">
      <h1>Search Books</h1>
    </div>


    <form>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon"
          aria-describedby="button-addon1" />
        <button class="btn btn-outline-secondary" type="submit" id="button-addon1"><svg width="22" height="22"
            viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.9339 20.4187L14.7922 13.2769C15.9004 11.8442 16.4999 10.0925 16.4999 8.24996C16.4999 6.04447 15.6392 3.97648 14.0827 2.41724C12.5262 0.857996 10.4527 0 8.24996 0C6.04722 0 3.97373 0.860746 2.41724 2.41724C0.857996 3.97373 0 6.04447 0 8.24996C0 10.4527 0.860746 12.5262 2.41724 14.0827C3.97373 15.6419 6.04447 16.4999 8.24996 16.4999C10.0925 16.4999 11.8414 15.9004 13.2742 14.7949L20.4159 21.9339C20.4369 21.9549 20.4617 21.9715 20.4891 21.9828C20.5165 21.9942 20.5458 22 20.5754 22C20.605 22 20.6344 21.9942 20.6617 21.9828C20.6891 21.9715 20.714 21.9549 20.7349 21.9339L21.9339 20.7377C21.9549 20.7167 21.9715 20.6919 21.9828 20.6645C21.9942 20.6371 22 20.6078 22 20.5782C22 20.5485 21.9942 20.5192 21.9828 20.4918C21.9715 20.4645 21.9549 20.4396 21.9339 20.4187V20.4187ZM12.6059 12.6059C11.44 13.7692 9.89446 14.4099 8.24996 14.4099C6.60547 14.4099 5.05998 13.7692 3.89398 12.6059C2.73074 11.44 2.08999 9.89446 2.08999 8.24996C2.08999 6.60547 2.73074 5.05723 3.89398 3.89398C5.05998 2.73074 6.60547 2.08999 8.24996 2.08999C9.89446 2.08999 11.4427 2.72799 12.6059 3.89398C13.7692 5.05998 14.4099 6.60547 14.4099 8.24996C14.4099 9.89446 13.7692 11.4427 12.6059 12.6059Z"
              fill="black" />
          </svg>
        </button>
      </div>

      <div class="form-group p-2 d-flex justify-content-center">
        <select class="custom-select">
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


    </form>





  </div>


    );
}
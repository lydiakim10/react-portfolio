import React from 'react';
import "../../App.css"

export default function Contact() {
  return (
    <div className='contactPage'>
      <h1>Contact Page</h1>
      <form>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="name" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name"></input>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control" id="email" placeholder="Enter Email"></input>
        </div>
        <div class="form-group">
            <label for="message">Message</label>
            <input type="message" class="form-control" id="message" placeholder="Enter Message"></input>
        </div>
        <button type="submit" class="btn btn-primary" className='submitBtn'>Submit</button>
    </form>
    </div>
  );
}
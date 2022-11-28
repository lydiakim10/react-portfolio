import React from 'react';
import profilePic from "../../assets/profile-pic.png"
import "../../App.css";

export default function About() {
  return (
    <div className='aboutpage'>
      <h1>About Me!</h1>
      <div className='profile'>
        <p>Lydia Kim</p>
        <img src={profilePic} className="profilePic" alt='LydiaPic'></img>
      </div>
      <p className='aboutBio'>
        Hi! My name is Lydia Kim and welcome to my portfolio!
      </p>
      <p className='aboutBio'>
        So a little background about me: I was born and raised in Southern California. I moved from Los Angeles County to Orange County.
      </p>
      <p className='aboutBio'>
        I went to Syracuse University in New York and graduated with a Bachelor of Science in Forensic Science and Psychology.
      </p>
      <p className='aboutBio'>
        Currently, I am an Accounts Receivable Cash Audit Clerk at MC LLC, working on New England's Jiffy Lube stores.
      </p>
      <p className='aboutBio'>
        I am also currently taking a Coding Bootcamp course with the University of California: Irvine: Division of Continuing Education. Through this coding bootcamp, I am hoping to pivot career paths and go into the world of full stack development.
      </p>
    </div>
  );
}

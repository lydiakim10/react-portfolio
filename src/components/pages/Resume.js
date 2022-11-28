import React from 'react';
import Resume from "../../assets/resume.png";

export default function ResumeFunct() {
  return (
    <div className='resumePage'>
      <div>
        <h1>My Resume</h1>
        <a href={Resume} className="downloadRes" download>Click to download resume!</a>
      </div>
      <div>
        <h3>Front End</h3>
        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
        </ul>
        <h3>Back End</h3>
        <ul>
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
        </ul>
      </div>
    </div>
  );
}

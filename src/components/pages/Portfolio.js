import React from 'react';
import pokemon from "../../assets/pokemon.png"
import notetaker from "../../assets/notetaker.png"
import teamProfile from "../../assets/team-profile.png"
import budgetTracker from "../../assets/budget-tracker.png"
import "../../App.css"

export default function Portfolio() {
  return (
    <div className='portfolioPage'>
      <h1>My Portfolio</h1>
      <p>
        <div class="card col-lg-4">
            <a href='https://github.com/lydiakim10/Rocket-Poket'><img src={pokemon} alt="Rocket Pocket" title='Rocket Pocket'></img></a>
            <div class="card-body">
                <p class="card-text">Rocket Pocket: Card Collection Database</p>
            </div>
        </div>
        <div class="card col-lg-4">
            <a href='https://github.com/lydiakim10/express.js-notetaker'><img src={notetaker} alt="Notetaker" title='Notetaker'></img></a>
            <div class="card-body">
                <p class="card-text">Express.js Notetaker</p>
            </div>
        </div>
        <div class="card col-lg-4">
            <a href='https://github.com/lydiakim10/team-profile-generator'><img src={teamProfile} alt="Team Profile" title='Team Profile'></img></a>
            <div class="card-body">
                <p class="card-text">OOP: Team Profile Generator</p>
            </div>
        </div>
        <div class="card col-lg-4">
            <a href='https://github.com/lydiakim10/project2-team1'><img src={budgetTracker} alt="Budget 2 Go" title='Budget 2 Go'></img></a>
            <div class="card-body">
                <p class="card-text">Budget 2 Go: Monthly Budget Tracker</p>
            </div>
        </div>
      </p>
    </div>
  );
};


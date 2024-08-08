import React from 'react'
import vanfront from '../assets/vanfront.png'
import MainButton from "../components/MainButton";
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <div className="about">
      <div className="about-inner">
        <img src={vanfront} alt="" />

        <h1>Don't squeeze in a sedan , when you could relax in a van</h1>

        <p>
          Our mission is to enliven your road trip with the perfect travel van
          reantal.Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch.(Hitch costs extra )
        </p>

        <p>
          Our team is full of vanlife enthusiast who know firsthand the majic of
          touring the world on 4 wheels.
        </p>

        <div className="card">
          <div className="text">
            <h2>Your destination is waiting.</h2>
            <h2>Your van is ready.</h2>
          </div>

<<<<<<< HEAD
          <MainButton title={"Explore our vans"} />

=======
          <Link to='/vans'><MainButton title={"Explore our vans"} /></Link>
          
>>>>>>> 0cc9309e5a2b154a6d36be5c293502ff10ff3ffe
        </div>
      </div>
    </div>
  );
}


export default About

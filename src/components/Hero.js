import React from 'react';
import './Hero.css';
import heroImage from '../images/computer_background.png'; // Adjust the path as needed
import profileImage from '../images/glenn_profile.jpg'; // Add the path for the profile image


function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hi, I'm Glenn</h1>
        <h2>A Power Platform Specialist</h2>
        <p>I'm dedicated to using Power BI, Power Apps, and Power Automate to improve business solutions and efficiency. Welcome to my portfolio.</p>
        <button>CHECKOUT MY WORK</button>
      </div>
      <div className="hero-image animated">
        <img src={heroImage} alt="Portfolio" />
      </div>
      <div className="profile-card">
        <img src={profileImage} alt="Glenn Sanford" className="profile-image" />
        <div className="profile-details">
          <h3>Glenn Sanford</h3>
          <h4>Power Platform Specialist</h4>
          <p>My strategic implementations have saved companies substantial amounts of money by driving innovation and streamlining operations.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;


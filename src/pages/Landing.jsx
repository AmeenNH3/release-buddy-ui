import React from "react";
import logo from "../assets/images/Logo.svg";
function Landing() {
  return (
    <>
      <div className="landing-container">
        <div className="l-navbar-container container">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
          </div>
          <div className="l-button-container">
            <button className="register-btn">Register</button>
          </div>
        </div>

        <div className="l-hero-text-container container">
          <h1 className="hero-title">
            Hassle free release <br></br> every time!
          </h1>
          <p className="hero-text">
            Everything you need for tracking <br></br> your release and more.
          </p>
        </div>
      </div>
    </>
  );
}

export default Landing;

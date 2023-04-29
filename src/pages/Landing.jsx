import React from "react";
import logo from "../assets/images/Logo.svg";

import homeImage from "../assets/images/home-image.svg";
import styled from "styled-components";
function Landing() {
  return (
    <>
      <Wrapper className="landing-container">
        <div className="l-navbar-container container">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
          </div>
          <div className="l-button-container">
            <button className="register-btn">Register</button>
          </div>
        </div>
        <div className="hero-content-container">
          <div className="l-hero-text-container">
            <h1 className="hero-title">
              Hassle free release <br></br> every time!
            </h1>
            <p className="hero-text">
              Everything you need for tracking <br></br> your release and more.
            </p>
          </div>
          <div className="form-container">
            <form className="login-form" action="">
              <div className="login-input-container">
                <ion-icon name="mail-outline"></ion-icon>
                <input type="text" name="" id="" placeholder="Email" />
              </div>
              <div className="login-input-container">
                <ion-icon name="key-outline"></ion-icon>
                <input type="text" name="" id="" placeholder="Password" />
              </div>
              <div className="login-input-container">
                <button className="login-btn">Login</button>
              </div>
            </form>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={homeImage} alt="" />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background: linear-gradient(
    240.57deg,
    rgba(107, 193, 255, 0.35) 1.38%,
    rgba(255, 255, 255, 0) 99.62%,
    #f9fbfd 99.62%
  );
  height: 100vh;
  button {
    border: none;
    font-family: "Nunito", sans-serif;
  }
  .l-navbar-container {
    padding-top: 2rem;
    /* background-color: #2562be; */
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .hero-content-container {
    margin: 0 auto;
    width: 80%;
    margin-top: 9.8rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    justify-content: space-between;
    z-index: 2;
  }

  .register-btn {
    font-size: 14px;
    font-weight: 600;
    /* background-color: red; */
    padding: 0.8rem 1.6rem;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 9px 0px rgba(89, 89, 89, 0.199);
    cursor: pointer;
    background-color: #fff;
    transition: all 0.2s;
  }

  .register-btn:hover {
    color: #fff;
    background-color: #257ebe;
  }

  .l-hero-text-container {
    /* margin-top: 9.8rem; */
  }

  .hero-title {
    font-size: 3.2rem;
    line-height: 1;
    color: #333;
  }
  .hero-text {
    margin-top: 1rem;
    color: #555;
    line-height: 1.5;
  }
  input {
    width: 100%;
    padding: 12px;
    padding-left: 2rem;
    border: none;
    outline: none;
    font-family: "Nunito", sans-serif;
    background: #ffffff;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
  }
  input::placeholder {
    color: #888;
  }
  .login-input-container {
    position: relative;
    width: 80%;
    margin: 0 auto;
  }
  ion-icon {
    color: #888;
    position: absolute;
    top: 50%;
    left: 2%;
    transform: translate(-2%, -50%);
  }
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }

  .hero-image-container {
    width: 40%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    /* z-index: -1; */
  }

  img {
    width: 100%;
    display: block;
  }

  .login-btn {
    display: block;
    margin-top: 1rem;
    width: 100%;
    padding: 10px;
    font-weight: 600;
    color: #fff;
    background: #257ebe;
    box-shadow: 0px 5px 9px rgba(0, 0, 0, 0.19);
    border-radius: 8px;
    text-align: center;
  }
`;

export default Landing;

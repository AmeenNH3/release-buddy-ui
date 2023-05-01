import React, { useEffect, useState } from "react";
import logo from "../assets/images/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import homeImage from "../assets/images/home-image.svg";
import styled from "styled-components";
import { loginUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
function Landing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const [showErrorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (user) navigate("/dashboard");
  }, [user, navigate]);

  const loginFormSubmitHandler = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginUser({ email, password }));
      console.log("form submitted");
    }
  };

  return (
    <>
      <Wrapper className="landing-container">
        <div className="l-navbar-container container">
          <div className="logo-container">
            <img src={logo} alt="Logo" />
          </div>
          <div className="l-button-container">
            <Link className="register-btn" to="/register">
              Register
            </Link>
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
            <div className="l-button-container">
              <Link className="register-btn cta-btn" to="/register">
                Register Now!
              </Link>
            </div>
          </div>
          <div className="form-container">
            <form className="login-form" onSubmit={loginFormSubmitHandler}>
              <div className="login-input-container">
                <ion-icon name="mail-outline"></ion-icon>
                <input
                  required
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="login-input-container">
                <ion-icon name="key-outline"></ion-icon>
                <input
                  required
                  type="text"
                  name=""
                  id=""
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="login-input-container">
                <button type="submit" className="login-btn">
                  Login
                </button>
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
    rgba(216, 215, 220, 0.35) 1.38%,
    rgba(255, 255, 255, 0) 99.62%,
    #ffffff 100%
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
    display: block;
    text-decoration: none;
    color: #257ebe;
    font-size: 14px;
    font-weight: 600;
    /* background-color: red; */
    padding: 0.8rem 1.6rem;
    border: 1px solid #257ebe;
    border-radius: 4px;
    /* box-shadow: 0px 4px 9px 0px rgba(89, 89, 89, 0.199); */
    cursor: pointer;
    /* background-color: #fff; */
    transition: all 0.2s;
  }

  .cta-btn {
    display: inline-block;
    margin-top: 1.5rem;
    background-color: #257ebe;
    color: #fff;
  }
  .register-btn.cta-btn:hover {
    color: #fff;
    background-color: #2e2e2e;
    border-color: #2e2e2e;
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
    z-index: -1;
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
    cursor: pointer;
    transition: all 0.2s;
  }
  .login-btn:hover {
    background-color: #2e2e2e;
  }
`;

export default Landing;

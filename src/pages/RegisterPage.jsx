import React from "react";
import styled from "styled-components";

function RegisterPage() {
  return (
    <Wrapper>
      <h1>Register Here!</h1>
      <div className="register-form-container">
        <form className="register-form">
          <div className="register-input-container">
            <ion-icon name="mail-outline"></ion-icon>
            <input type="email" name="" id="" placeholder="Email" />
          </div>
          <div className="register-input-container">
            <ion-icon name="key-outline"></ion-icon>
            <input type="password" name="" id="" placeholder="Password" />
          </div>
          <div className="register-input-container">
            <ion-icon name="key-outline"></ion-icon>
            <input type="password" name="" id="" placeholder="Confirm Password" />
          </div>
          <div className="register-input-container">
            <button type="submit" className="register-btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(116.87deg, #ffffff 2.98%, rgba(175, 175, 175, 0.38) 103.47%);
  /* background: red; */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  .register-form-container {
    width: 568px;
    display: flex;
    justify-content: center;
    align-items: center;
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
  .register-input-container {
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
  .register-form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  button {
    border: none;
    font-family: "Nunito", sans-serif;
  }
  .register-btn {
    display: block;
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    background-color: #257ebe;
    padding: 0.8rem 1.6rem;
    border: 1px solid #257ebe;
    border-radius: 4px;
    /* box-shadow: 0px 4px 9px 0px rgba(89, 89, 89, 0.199); */
    cursor: pointer;
    /* background-color: #fff; */
    transition: all 0.2s;
    width: 100%;
  }
  .register-btn:hover {
    color: #fff;
    background-color: #2e2e2e;
    border-color: #2e2e2e;
  }
`;
export default RegisterPage;

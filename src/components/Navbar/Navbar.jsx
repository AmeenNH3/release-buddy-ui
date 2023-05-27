import React from "react";
import styled from "styled-components";
import DashboardIcon from "../../assets/images/Dashboard.svg";
import { Link, useNavigate } from "react-router-dom";
import { clearValues, logoutUser } from "../../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const activeTicket = useSelector((state) => state.active.activeTicket);

  return (
    <Wrapper className="navbar">
      <div className="nav-header">
        <Link>
          <ion-icon name="apps-outline"></ion-icon>
        </Link>
      </div>
      <div className="nav-body">
        <Link to="/home">
          <ion-icon name="home-outline"></ion-icon>
        </Link>
        <Link to="/dashboard">
          <ion-icon name="apps-outline"></ion-icon>
        </Link>
        <Link to={`/ticket/${activeTicket}`}>
          <ion-icon name="ticket-outline"></ion-icon>
        </Link>
        <Link to="/settings">
          <ion-icon name="settings-outline"></ion-icon>
        </Link>
        <button
          onClick={() => {
            dispatch(clearValues());
            dispatch(logoutUser());
            navigate("/");
          }}
        >
          <ion-icon name="log-out-outline"></ion-icon>
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 64px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 1px 0px 0px rgba(121, 121, 121, 0.19);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 100;
  .nav-header {
    padding-top: 1.8rem;
  }
  .nav-body {
    margin-top: 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 2.4rem;
  }
  ion-icon {
    width: 24px;
    height: 24px;
    color: #ababab;
    cursor: pointer;
    transition: all 0.2s;
  }
  ion-icon:hover {
    color: #2b2b2b;
  }

  button {
    border: none;
    background: none;
  }
`;

export default Navbar;

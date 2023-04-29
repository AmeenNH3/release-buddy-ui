import React from "react";
import styled from "styled-components";
import DashboardIcon from "../../assets/images/Dashboard.svg";
function Navbar() {
  return (
    <Wrapper className="navbar">
      <div className="nav-header">
        <button>
          <ion-icon name="apps-outline"></ion-icon>
        </button>
      </div>
      <div className="nav-body">
        <button>
          <ion-icon name="home-outline"></ion-icon>
        </button>
        <button>
          <ion-icon name="apps-outline"></ion-icon>
        </button>
        <button>
          <ion-icon name="calendar-outline"></ion-icon>
        </button>
        <button>
          <ion-icon name="settings-outline"></ion-icon>
        </button>
        <button>
          <ion-icon name="log-out-outline"></ion-icon>
        </button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 64px;
  height: 100vh;
  background-color: #fff;
  box-shadow: 1px 0px 0px rgba(121, 121, 121, 0.19);
  display: flex;
  flex-direction: column;
  align-items: center;
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

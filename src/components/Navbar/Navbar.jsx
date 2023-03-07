import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="welcome-text-container">
        <h3>
          Welcome <span className="username">Ameen</span>,
        </h3>
      </div>
      <div className="links-container">
        <button className="logout-btn">
          Logout
          <span className="logout-icon">
            <ion-icon name="exit-outline"></ion-icon>
          </span>
        </button>
        <button className="profile-btn">
          <p>A</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;

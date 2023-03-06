import React from "react";

function Stats() {
  return (
    <div className="stats-container">
      <div className="stats-box not-stared-stats">
        <h2 className="stats-text">Not started</h2>
        <div className="stats-line"></div>
        <h2 className="stats-value">24</h2>
      </div>
      <div className="stats-box pending-stats">
        <h2 className="stats-text">Pending</h2>
        <div className="stats-line"></div>
        <h2 className="stats-value">5</h2>
      </div>
      <div className="stats-box completed-stats">
        <h2 className="stats-text">Completed</h2>
        <div className="stats-line"></div>
        <h2 className="stats-value">10</h2>
      </div>
    </div>
  );
}

export default Stats;

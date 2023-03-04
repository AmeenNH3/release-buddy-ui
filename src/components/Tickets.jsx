import React from "react";

function Tickets({ tickets }) {
  return (
    <div className="tickets-container">
      {tickets.map((item) => {
        return <h1>{item.name}</h1>;
      })}
    </div>
  );
}

export default Tickets;

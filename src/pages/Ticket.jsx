import React from "react";
import { useParams } from "react-router-dom";

function Ticket() {
  let { id } = useParams();
  return (
    <div className="margin-left">
      <h1>{id}</h1>
    </div>
  );
}

export default Ticket;

import React from "react";
import { useParams } from "react-router-dom";
import DraggableList from "../components/DraggableList/DraggableList";
function Ticket() {
  let { id } = useParams();
  return (
    <div className="margin-left">
      <h1>{id}</h1>
      <DraggableList></DraggableList>
    </div>
  );
}

export default Ticket;

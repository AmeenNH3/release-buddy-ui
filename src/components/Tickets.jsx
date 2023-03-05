import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveTicket } from "../features/tickets/ticketsSlice";

function Tickets({ tickets }) {
  const activeTicket = useSelector((state) => state.tickets.activeTicket);
  const dispatch = useDispatch();

  return (
    <div className="tickets-container">
      {tickets.map((item) => {
        return (
          <button
            key={item.id}
            className={item.id == activeTicket ? "ticket-btn active" : "ticket-btn"}
            onClick={() => dispatch(setActiveTicket(item.id))}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}

export default Tickets;

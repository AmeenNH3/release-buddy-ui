import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCheckedStacks, setActiveTicket } from "../../features/tickets/ticketsSlice";

function Tickets({ tickets, tableEditLock, changeTableEditLock }) {
  const activeTicket = useSelector((state) => state.active.activeTicket);
  const dispatch = useDispatch();

  return (
    <div className="tickets-container">
      {tickets.map((item) => {
        return (
          <button
            key={item.id}
            className={item.id == activeTicket ? "ticket-btn active" : "ticket-btn"}
            onClick={() => {
              if (tableEditLock != true) {
                dispatch(setActiveTicket(item.id));
              }
              dispatch(clearCheckedStacks());
            }}
          >
            {item.name}
          </button>
        );
      })}
      <button className="ticket-btn create-ticket-btn">+ Create new ticket</button>
    </div>
  );
}

export default Tickets;

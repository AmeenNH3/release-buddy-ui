import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCheckedStacks, setActiveTicket } from "../../features/tickets/ticketsSlice";

function Tickets({ tickets, tableEditLock, changeTableEditLock }) {
  const activeTicket = useSelector((state) => state.active.activeTicket);
  const dispatch = useDispatch();
  const [isShowMoreTickets, setIsShowMoreTickets] = useState(false);
  const [ticketsSliced, setTicketsSliced] = useState(tickets.slice(0, 4));

  const slicedTicketIDs = ticketsSliced.map((i) => i.id);

  if (!slicedTicketIDs.includes(activeTicket)) {
    let ticket = tickets.find((i) => i.id == activeTicket);
    if (ticketsSliced.length < 4) {
      setTicketsSliced((prev) => [...prev, ticket]);
    } else {
      setTicketsSliced((prev) => [...prev.slice(0, 3), ticket]);
    }
  }

  return (
    <>
      {isShowMoreTickets ? (
        <div className="show-more-modal">
          <button
            className="close-show-more-modal"
            onClick={() => setIsShowMoreTickets((prev) => !prev)}
          >
            <ion-icon className="show-more-modal-close-icon" name="close-outline"></ion-icon>
          </button>
          <div className="all-tickets-container">
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
                    setIsShowMoreTickets(false);
                  }}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="tickets-container">
        {ticketsSliced.map((item) => {
          return (
            <button
              key={item.id}
              className={item.id == activeTicket ? "ticket-btn active" : "ticket-btn"}
              onClick={() => {
                if (tableEditLock != true) {
                  dispatch(setActiveTicket(item.id));
                }
                dispatch(clearCheckedStacks());
                setIsShowMoreTickets(false);
              }}
            >
              {item.name}
            </button>
          );
        })}
        <button className="show-more-btn" onClick={() => setIsShowMoreTickets((prev) => !prev)}>
          <span className="dots">. . .</span>
        </button>
        <button className="ticket-btn create-ticket-btn">+ Create new ticket</button>
      </div>
    </>
  );
}

export default Tickets;

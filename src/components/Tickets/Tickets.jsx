import { set } from "lodash";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCheckedStacks, setActiveTicket } from "../../features/tickets/ticketsSlice";
import { addNewTicket, deleteActiveTicket } from "../../features/data/dataSlice";
function Tickets({ tickets, tableEditLock, changeTableEditLock }) {
  const lockTable = useSelector((state) => state.active.isEditLocked);
  const [isEditLocked, setisEditLocked] = useState(lockTable);

  const activeTicket = useSelector((state) => state.active.activeTicket);
  const dispatch = useDispatch();

  const [isShowMoreTickets, setIsShowMoreTickets] = useState(false);
  const [ticketsSliced, setTicketsSliced] = useState(tickets.slice(0, 4));
  const [showNewTicketInputModal, setshowNewTicketInputModal] = useState(false);
  const [newTicketName, setNewTicketName] = useState("");
  let slicedTicketIDs = ticketsSliced.map((i) => i.id);

  useEffect(() => {
    setisEditLocked(lockTable);
    return () => {
      setisEditLocked(false);
    };
  }, [lockTable]);

  useEffect(() => {
    setTicketsSliced(tickets.slice(0, 4));
  }, [tickets]);

  useEffect(() => {
    slicedTicketIDs = ticketsSliced.map((i) => i.id);
  }, [ticketsSliced]);

  const newTicketFormOnSubmitHandler = (e) => {
    e.preventDefault();
    if (newTicketName != "") {
      dispatch(addNewTicket({ name: newTicketName }));
    }
    setNewTicketName("");
  };

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
      {showNewTicketInputModal ? (
        <div className="new-ticket-input-modal">
          <form className="new-ticket-input-form" onSubmit={newTicketFormOnSubmitHandler}>
            <input
              id="ticket-name"
              name="ticket-name"
              className="new-ticket-input"
              type="text"
              placeholder="Enter Ticket name"
              value={newTicketName}
              onChange={(e) => setNewTicketName(e.target.value)}
            />

            <div className="new-ticket-btn-container">
              <button className="new-ticket-btn new-ticket-submit-btn" type="submit">
                Create
              </button>
              <button
                className="new-ticket-btn new-ticket-cancel-btn"
                onClick={() => {
                  setshowNewTicketInputModal(false);
                  setNewTicketName("");
                }}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
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
                    if (isEditLocked != true) {
                      dispatch(setActiveTicket(item.id));
                      dispatch(clearCheckedStacks());
                      setIsShowMoreTickets(false);
                    }
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
                if (isEditLocked != true) {
                  dispatch(setActiveTicket(item.id));
                  dispatch(clearCheckedStacks());
                  setIsShowMoreTickets(false);
                }
              }}
            >
              {item.name}
            </button>
          );
        })}
        <button className="show-more-btn" onClick={() => setIsShowMoreTickets((prev) => !prev)}>
          <span className="dots">. . .</span>
        </button>
        <button
          className="ticket-btn create-ticket-btn"
          onClick={() => {
            if (isEditLocked != true) setshowNewTicketInputModal(true);
          }}
        >
          + Create new ticket
        </button>
        <button
          className="delete-ticket-btn"
          title="Delete active ticket"
          onClick={() => {
            console.log(ticketsSliced);
            if (ticketsSliced.length > 1 && isEditLocked != true) {
              console.log(ticketsSliced.length);
              let newActiveTicket = ticketsSliced.find((item) => item.id != activeTicket);
              let ticketToBeDeleted = activeTicket;
              dispatch(setActiveTicket(newActiveTicket.id));
              dispatch(deleteActiveTicket(ticketToBeDeleted));
              dispatch(clearCheckedStacks());
              setIsShowMoreTickets(false);
            } else if (ticketsSliced.length == 1) {
              alert("Atleast one ticket should be present");
            }
          }}
        >
          <ion-icon className="delete-ticket-icon" name="trash-outline"></ion-icon>
        </button>
      </div>
    </>
  );
}

export default Tickets;

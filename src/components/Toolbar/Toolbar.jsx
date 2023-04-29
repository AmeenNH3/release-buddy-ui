import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCheckedStacks, setActiveTicket } from "../../features/tickets/ticketsSlice";
import { addNewTicket, deleteActiveTicket } from "../../features/data/dataSlice";
import styled from "styled-components";
import "../../main.css";
function Toolbar({ tickets }) {
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
      setNewTicketName("");
      setshowNewTicketInputModal(false);
    }
  };

  const deleteActiveTicketHandler = () => {
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
  };

  return (
    <Wrapper>
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

      <div className="toolbar-container-one">
        <button
          className="create-new-ticket-btn"
          onClick={() => {
            if (isEditLocked != true) setshowNewTicketInputModal(true);
          }}
        >
          + Create new ticket
        </button>
        <button
          className="delete-ticket-btn"
          title="Delete active ticket"
          onClick={deleteActiveTicketHandler}
        >
          <ion-icon className="delete-ticket-icon" name="trash-outline"></ion-icon>
          <span>Delete active Ticket</span>
        </button>
      </div>

      <div className="toolbar-container-save">
        <button className="save-data-btn">Save</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 64px;
  padding: 1.6rem 2.2rem;
  color: red;
  font-family: "Nunito", sans-serif;
  button {
    border: none;
    background: none;
    padding: 6px 22px;
    transition: all 0.3s;
    cursor: pointer;
    font-family: "Nunito", sans-serif;
    font-weight: 500;
    /* border: 1px solid rgba(85, 86, 90, 0.22); */
    border-radius: 4px;
  }
  .create-new-ticket-btn {
    color: #ffffff;
    background: #257ebe;
    border-radius: 4px;
  }
  .create-new-ticket-btn:hover {
    background-color: #003153;
  }
  .delete-ticket-btn {
    border: none;
  }
  .toolbar-container-one {
    display: flex;
    gap: 1.4rem;
  }
  .save-data-btn {
    background: #e4e4e4;
  }
  .save-data-btn:hover {
    background: #ababab;
  }
`;

export default Toolbar;

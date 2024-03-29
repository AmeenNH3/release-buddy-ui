import { set } from "lodash";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCheckedStacks, setActiveTicket } from "../../features/tickets/ticketsSlice";
import styled from "styled-components";
import { Link } from "react-router-dom";
function Tickets({ tickets }) {
  const lockTable = useSelector((state) => state.active.isEditLocked);
  const [isEditLocked, setisEditLocked] = useState(lockTable);

  const activeTicket = useSelector((state) => state.active.activeTicket);
  const dispatch = useDispatch();

  const [isShowMoreTickets, setIsShowMoreTickets] = useState(false);
  const [ticketsSliced, setTicketsSliced] = useState(tickets.slice(0, 4));

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
      <Wrapper className="tickets-container">
        {ticketsSliced.map((item) => {
          return (
            <Link
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
            </Link>
          );
        })}
        <button className="show-more-btn" onClick={() => setIsShowMoreTickets((prev) => !prev)}>
          <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
        </button>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  margin-left: 64px;
  height: 60px;
  padding-top: 1rem;
  padding-left: 2.8rem;
  max-width: calc(100vw - 64px);
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 40px; */
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
  background-color: #eeee;
  border-bottom: 1px solid #bebebe;
  button {
    background: none;
    border: none;
  }

  .show-more-btn {
    cursor: pointer;
    /* left: 0; */
    /* width: 20px; */
    padding-right: 1rem;
    ion-icon {
      width: 24px;
      height: 24px;
      color: #777;
    }

    ion-icon:hover {
      color: #333;
    }
  }

  .ticket-btn {
    text-decoration: none;
    font-family: "Nunito", sans-serif;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px 24px;
    width: 100%;
    height: 24px;
    border-radius: 4px;
    background: rgb(212, 212, 212);
    border: none;
    color: #777;
    cursor: pointer;
    transition: all 0.3s;
  }
  .ticket-btn:hover {
    background-color: #dfdfdf;
  }
  .ticket-btn.active {
    background-color: #9c9c9c;
    color: #fff;
  }
  .ticket-btn.active:hover {
    color: #fff;
    background-color: #4f4f4f;
  }
`;

export default Tickets;

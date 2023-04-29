import React from "react";
import TableRow from "./TableRow";
import { useState, useReducer } from "react";
import NewTableValue from "./NewTableValue";
import { useDispatch, useSelector } from "react-redux";
import { deleteStacks } from "../../features/data/dataSlice";
import { toggleEditLock } from "../../features/tickets/ticketsSlice";
function Table({ data }) {
  const dispatch = useDispatch();

  const stacksToBeDeleted = useSelector((state) => state.active.checkedStacks);
  const activeTicket = useSelector((state) => state.active.activeTicket);
  const [forceUpdate, setforceUpdate] = useState(false);
  let stacksData = data[0].stacks;
  let tableHeaders = [
    "",
    "S.No",
    "Stack Name",
    "Local Branch",
    "Tested Local Branch",
    "Merged to Develop",
    "Tested Develop",
    " Merged to Master",
    "Tested Master",
    "Bundle No",
    "Status",
    "Owner",
  ];

  const [addNewValue, setaddNewValue] = useState(false);

  function showModalHandler() {
    setaddNewValue((prev) => !prev);
  }

  return (
    <>
      {addNewValue ? <NewTableValue showModalHandler={showModalHandler}></NewTableValue> : true}
      <div className="table-container">
        <div className="stacks-button-container">
          <button
            className="stacks-btn add-new-btn"
            onClick={() => {
              dispatch(toggleEditLock(false));
              setaddNewValue(true);
            }}
          >
            + Insert
          </button>
          <button
            title={`${stacksToBeDeleted.length == 0 ? "select stacks to delete" : ""} `}
            className={` ${
              stacksToBeDeleted.length == 0
                ? "stacks-btn delete-btn greyed-out"
                : "stacks-btn delete-btn"
            }`}
            onClick={() => {
              if (stacksToBeDeleted.length > 0) {
                dispatch(deleteStacks({ activeTicket, stacksToBeDeleted }));
                setforceUpdate(!forceUpdate);
              }
            }}
          >
            Delete
          </button>
          <button className="stacks-btn filter-btn">
            <ion-icon name="filter-outline"></ion-icon>
            Filter
          </button>
          <button className="stacks-btn filter-btn">
            <ion-icon name="funnel-outline"></ion-icon>
            Sort
          </button>
        </div>
        <table>
          <thead>
            <tr className="table-header-row">
              {tableHeaders.map((item, index) => {
                return <th key={index}>{item}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {stacksData.map((stack, index) => {
              return (
                <TableRow
                  key={index}
                  index={index}
                  stack={stack}
                  forceUpdate={forceUpdate}
                ></TableRow>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;

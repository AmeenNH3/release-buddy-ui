import React from "react";
import TableRow from "./TableRow";
import { useState, useReducer } from "react";
import NewTableValue from "./NewTableValue";
import { useDispatch, useSelector } from "react-redux";
import { deleteStacks } from "../../features/data/dataSlice";
function Table({ data, tableEditLock, changeTableEditLock }) {
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
          <button className="stacks-btn add-new-btn" onClick={() => setaddNewValue(true)}>
            + add new
          </button>
          <button
            className="stacks-btn delete-btn"
            onClick={() => {
              console.log("dispatched");
              dispatch(deleteStacks({ activeTicket, stacksToBeDeleted }));
              setforceUpdate(!forceUpdate);
            }}
          >
            Delete
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
                  tableEditLock={tableEditLock}
                  changeTableEditLock={changeTableEditLock}
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

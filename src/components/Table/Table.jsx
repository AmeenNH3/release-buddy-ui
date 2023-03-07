import React from "react";
import TableRow from "./TableRow";
import { useState, useReducer } from "react";
import NewTableValue from "./NewTableValue";
function Table({ data, tableEditLock, changeTableEditLock }) {
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
  // For creating a copy of stacksData
  // let stacks = JSON.parse(JSON.stringify(stacksData));
  // Sorting  by id
  // stacks = stacks.sort((a, b) => a.id - b.id);

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
          <button className="stacks-btn delete-btn"> Delete</button>
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

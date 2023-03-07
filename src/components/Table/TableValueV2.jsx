import { head } from "lodash";
import React, { useState } from "react";
import { isStatus, getIconName, selectOptions } from "../helper";

function TableValueV2({ value, id, tableEditLock, changeTableEditLock, headerName, rowIndex }) {
  const [isEditable, setisEditable] = useState(false);
  const [tableValue, setTableValue] = useState(value);
  let className = null;
  let iconName = null;

  const handleChange = () => console.log("Handle Change");

  if (isStatus(tableValue)) {
    className = tableValue;
    iconName = getIconName(tableValue);
  }

  if (isEditable) {
    if (isStatus(tableValue) == null) {
      return (
        <td>
          <input
            className="table-input-value"
            value={tableValue}
            type="text"
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setisEditable((prev) => !prev);
                changeTableEditLock();
              }
            }}
          />
        </td>
      );
    } else {
      return <td>Is status not null</td>;
    }
  } else {
    if (headerName == "id") {
      return <td>{rowIndex + 1}</td>;
    } else if (headerName == "status") {
      return (
        <td className="table-status-value">
          <div className={`table-value status ${tableValue}`}>
            <span>{tableValue}</span>
          </div>
        </td>
      );
    } else if (isStatus(tableValue) != null) {
      return (
        <td
          onClick={() => {
            // if (tableEditLock != true && headerName != "status") {
            setisEditable((prev) => !prev);
            //   changeTableEditLock();
            // }
          }}
        >
          <div className={className ? `${tableValue} table-value` : "table-value"}>
            <ion-icon name={iconName}></ion-icon>
            <span>{tableValue}</span>
          </div>
        </td>
      );
    } else {
      return (
        <td
          onClick={() => {
            // if (tableEditLock != true) {
            setisEditable((prev) => !prev);
            //   changeTableEditLock();
            // }
          }}
        >
          {tableValue}
        </td>
      );
    }
  }
}

export default TableValueV2;

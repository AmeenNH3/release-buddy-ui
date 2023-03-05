import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeState } from "../features/data/dataSlice";
import { isStatus, getIconName, selectOptions } from "./helper";

function TableValue({ value, id, tableEditLock, changeTableEditLock, headerName }) {
  const dispatch = useDispatch();
  const activeTicket = useSelector((state) => state.active.activeTicket);

  const [isEditable, setisEditable] = useState(false);
  const [statusValue, setStatusValue] = useState(value);

  const handleChange = (e) => {
    setStatusValue(e.target.value);
    setisEditable((prev) => !prev);
    dispatch(changeState({ id, changedValue: e.target.value, activeTicket, headerName }));
    changeTableEditLock();
  };

  let className = null;
  let iconName = null;

  if (isEditable && isStatus(value)) {
    return (
      <td>
        <div className="select-container">
          <select value={statusValue} onChange={handleChange}>
            {selectOptions.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </td>
    );
  }

  if (isStatus(statusValue)) {
    className = statusValue;
    iconName = getIconName(statusValue);
  }

  if (className == null) {
    return (
      <td
        onClick={() => {
          if (tableEditLock != true) {
            setisEditable((prev) => !prev);
            changeTableEditLock();
          }
        }}
      >
        {value}
      </td>
    );
  } else {
    return (
      <td
        onClick={() => {
          if (tableEditLock != true) {
            setisEditable((prev) => !prev);
            changeTableEditLock();
          }
        }}
      >
        <div className={className ? `${statusValue} table-value` : "table-value"}>
          <ion-icon name={iconName}></ion-icon>
          <span>{statusValue}</span>
        </div>
      </td>
    );
  }
}

export default TableValue;

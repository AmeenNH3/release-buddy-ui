import { head } from "lodash";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyData } from "../../features/data/dataSlice";
import { isStatus, getIconName, selectOptions } from "../helper";

function TableValue({ value, id, tableEditLock, changeTableEditLock, headerName }) {
  const dispatch = useDispatch();
  const activeTicket = useSelector((state) => state.active.activeTicket);

  const [isEditable, setisEditable] = useState(false);
  const [statusValue, setStatusValue] = useState(value);

  const handleChange = (e) => {
    setStatusValue(e.target.value);

    if (isStatus(statusValue)) {
      setisEditable((prev) => !prev);
      dispatch(modifyData({ id, changedValue: e.target.value, activeTicket, headerName }));
      changeTableEditLock();
    }
  };

  let className = null;
  let iconName = null;

  if (isEditable && isStatus(value) == null && headerName != "id") {
    return (
      <td>
        <input
          className="table-input-value"
          value={statusValue}
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
  }

  if (isEditable && isStatus(value) && headerName != "status") {
    return (
      <td>
        <div className="select-container">
          <select
            hideSelectedValue
            value={statusValue}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === "Escape") {
                setisEditable((prev) => !prev);
                changeTableEditLock();
              }
            }}
          >
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
        className="table-value"
        onClick={() => {
          if (tableEditLock != true && headerName != "id") {
            setisEditable((prev) => !prev);
            changeTableEditLock();
          }
        }}
      >
        {statusValue}
      </td>
    );
  } else if (className != null && headerName != "status") {
    return (
      <td
        onClick={() => {
          if (tableEditLock != true && headerName != "status") {
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
  } else {
    return (
      <td className="table-status-value">
        <div className={`table-value status ${statusValue}`}>
          <span>{statusValue}</span>
        </div>
      </td>
    );
  }
}

export default TableValue;

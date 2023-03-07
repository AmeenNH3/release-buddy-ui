import { head } from "lodash";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modifyData } from "../../features/data/dataSlice";
import { isStatus, getIconName, selectOptions, findStatus } from "../helper";
import { toggleEditLock } from "../../features/tickets/ticketsSlice";

function TableValue({
  stack,
  value,
  id,
  tableEditLock,
  changeTableEditLock,
  headerName,
  rowIndex,
}) {
  const dispatch = useDispatch();
  const activeTicket = useSelector((state) => state.active.activeTicket);
  const lockTable = useSelector((state) => state.active.isEditLocked);
  const [isEditLocked, setisEditLocked] = useState(lockTable);
  const [isEditable, setisEditable] = useState(false);
  const [statusValue, setStatusValue] = useState(value);

  useEffect(() => {
    setisEditLocked(lockTable);
    return () => {
      setisEditLocked(false);
    };
  }, [lockTable]);

  const handleChange = (e) => {
    setStatusValue(e.target.value);
    if (isStatus(statusValue)) {
      setisEditable((prev) => !prev);
      dispatch(modifyData({ id, changedValue: e.target.value, activeTicket, headerName }));
      // changeTableEditLock();
      dispatch(toggleEditLock());
    }
  };

  let className = null;
  let iconName = null;

  if (isStatus(statusValue)) {
    className = statusValue;
    iconName = getIconName(statusValue);
  }

  if (isEditable && isStatus(value) == null && headerName != "id") {
    return (
      <td>
        <input
          className="table-input-value"
          value={statusValue}
          type="text"
          onChange={handleChange}
          onKeyDown={(e) => {
            if (isEditLocked == true && e.key === "Enter") {
              setisEditable((prev) => !prev);
              // changeTableEditLock();
              dispatch(toggleEditLock());
              dispatch(modifyData({ id, changedValue: statusValue, activeTicket, headerName }));
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
            value={statusValue}
            onChange={handleChange}
            onKeyDown={(e) => {
              if ((isEditLocked == true && e.key === "Enter") || e.key === "Escape") {
                setisEditable((prev) => !prev);
                // changeTableEditLock();
                dispatch(toggleEditLock());
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

  if (className == null && headerName != "id") {
    return (
      <td
        className="table-value"
        onClick={() => {
          // if (tableEditLock != true && headerName != "id") {
          if (isEditLocked == false && headerName != "id") {
            setisEditable((prev) => !prev);
            // changeTableEditLock();
            dispatch(toggleEditLock());
          }
        }}
      >
        {statusValue}
      </td>
    );
  } else if (className == null && headerName == "id") {
    return <td className="table-value">{rowIndex + 1}</td>;
  } else if (className != null && headerName != "status") {
    return (
      <td
        onClick={() => {
          // if (tableEditLock != true && headerName != "status") {
          if (isEditLocked == false && headerName != "status") {
            setisEditable((prev) => !prev);
            // changeTableEditLock();
            dispatch(toggleEditLock());
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
        <div className={`table-value status ${findStatus(stack)}`}>
          <span>{findStatus(stack)}</span>
        </div>
      </td>
    );
  }
}

export default TableValue;

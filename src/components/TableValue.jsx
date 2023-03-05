import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeState } from "../features/data/dataSlice";
import { isStatus, getIconName, selectOptions } from "./helper";

function TableValue({ value, id, editLock }) {
  const dispatch = useDispatch();

  const [isEditable, setisEditable] = useState(false);
  const [statusValue, setStatusValue] = useState(value);

  const handleChange = (e) => {
    setStatusValue(e.target.value);
    setisEditable((prev) => !prev);

    dispatch(changeState({ id: id, changedValue: e.target.value }));
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
          setisEditable((prev) => !prev);
        }}
      >
        {value}
      </td>
    );
  } else {
    return (
      <td onClick={() => setisEditable((prev) => !prev)}>
        <div className={className ? `${statusValue} table-value` : "table-value"}>
          <ion-icon name={iconName}></ion-icon>
          <span>{statusValue}</span>
        </div>
      </td>
    );
  }
}

export default TableValue;

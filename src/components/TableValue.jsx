import React from "react";

function TableValue({ value }) {
  let className = null;
  let iconName = null;
  if (
    value == "pending" ||
    value == "not-started" ||
    value == "completed" ||
    value == "in-progress"
  ) {
    className = value;
    if (value == "pending") {
      iconName = "alert-circle-outline";
    }
    if (value == "completed") {
      iconName = "checkmark-outline";
    }
    if (value == "not-started") {
      iconName = "stop-circle-outline";
    }
    if (value == "in-progress") {
      iconName = "alert-circle-outline";
    }
  }

  if (className == null) {
    return <td>{value}</td>;
  } else {
    return (
      <td>
        <div className={className ? `${value} table-value` : "table-value"}>
          <ion-icon name={iconName}></ion-icon>
          <span>{value}</span>
        </div>
      </td>
    );
  }
}

export default TableValue;

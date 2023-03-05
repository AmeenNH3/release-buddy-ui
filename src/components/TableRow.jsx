import React from "react";
import TableValue from "./TableValue";
function TableRow({ stack }) {
  const keys = Object.keys(stack);
  return (
    <tr>
      {keys.map((item, index) => {
        return <TableValue key={index} value={stack[item] ? stack[item] : "-"}></TableValue>;
      })}
    </tr>
  );
}

export default TableRow;

import React from "react";
import TableValue from "./TableValue";
function TableRow({ stack }) {
  const keys = Object.keys(stack);
  return (
    <tr>
      {keys.map((item, index) => {
        return (
          <TableValue
            editLock={false}
            key={`${stack.id}:${index}:${stack[item]}`}
            id={`${stack.id}:${index}:${stack[item]}`}
            value={stack[item] ? stack[item] : "-"}
          ></TableValue>
        );
      })}
    </tr>
  );
}

export default TableRow;

import React from "react";
import TableValue from "./TableValue";
import { keyHeaders } from "../../App";
import { v4 as uuidv4 } from "uuid";
import TableValueV2 from "./TableValueV2";
import { useState, useEffect } from "react";
import { addToCheckedStacks, removeFromCheckedStacks } from "../../features/tickets/ticketsSlice";
import { useDispatch } from "react-redux";

function TableRow({ stack, tableEditLock, changeTableEditLock, index }) {
  const dispatch = useDispatch();
  const keys = Object.keys(stack);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    console.log(isChecked);
    setIsChecked((prev) => !prev);

    // if (isChecked == true) {
    //   dispatch(addToCheckedStacks(stack.id));
    // } else {
    //   dispatch(removeFromCheckedStacks(stack.id));
    // }
  };
  useEffect(() => {
    if (isChecked == true) {
      dispatch(addToCheckedStacks(stack.id));
    } else {
      dispatch(removeFromCheckedStacks(stack.id));
    }
  }, [isChecked]);

  return (
    <tr className="table-row">
      <td>
        <input
          type="checkbox"
          name={stack.id}
          value={isChecked}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </td>
      {keys.map((item, i) => {
        return (
          <TableValue
            tableEditLock={tableEditLock}
            changeTableEditLock={changeTableEditLock}
            headerName={keyHeaders[i]}
            editLock={false}
            key={uuidv4()}
            id={stack.id}
            value={stack[item] ? stack[item] : "-"}
            rowIndex={index}
          ></TableValue>
          // <TableValueV2
          //   tableEditLock={tableEditLock}
          //   changeTableEditLock={changeTableEditLock}
          //   headerName={keyHeaders[i]}
          //   editLock={false}
          //   key={uuidv4()}
          //   id={stack.id}
          //   value={stack[item] ? stack[item] : "-"}
          //   rowIndex={index}
          // ></TableValueV2>
        );
      })}
    </tr>
  );
}

export default TableRow;

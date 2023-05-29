import React from "react";
import TableValue from "./TableValue";
import { keyHeaders } from "../../Dashboard";
import { v4 as uuidv4 } from "uuid";

import { useState, useEffect, useReducer } from "react";
import { addToCheckedStacks, removeFromCheckedStacks } from "../../features/tickets/ticketsSlice";
import { useDispatch, useSelector } from "react-redux";

function TableRow({ stack, index, forceUpdate }) {
  const activeTicket = useSelector((state) => state.active.activeTicket);
  const dispatch = useDispatch();
  const keys = Object.keys(stack);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };
  useEffect(() => {
    if (isChecked == true) {
      dispatch(addToCheckedStacks(stack.id));
    } else {
      dispatch(removeFromCheckedStacks(stack.id));
    }
  }, [isChecked]);

  useEffect(() => {
    if (isChecked == true) setIsChecked(false);
  }, [activeTicket]);

  useEffect(() => {
    //this is just to trigger unchecking of all checked stacks upon delete action
    if (isChecked == true) setIsChecked(false);
  }, [forceUpdate]);
  return (
    <tr className="table-row">
      <td>
        <input
          key={uuidv4()}
          type="checkbox"
          name={stack.id}
          value={isChecked}
          checked={isChecked}
          onChange={handleCheckboxChange}
          activeticket={activeTicket}
        />
      </td>
      {keys.map((item, i) => {
        return (
          <TableValue
            headerName={keyHeaders[i]}
            editLock={false}
            key={uuidv4()}
            id={stack.id}
            value={stack[item] ? stack[item] : "-"}
            rowIndex={index}
            stack={stack}
          ></TableValue>
        );
      })}
    </tr>
  );
}

export default TableRow;

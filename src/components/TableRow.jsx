import React from "react";
import TableValue from "./TableValue";
function TableRow({ stack }) {
  // let keys = Object.keys(stack);
  // let values =
  const keys = Object.keys(stack);
  return (
    <tr>
      {keys.map((item, index) => {
        return <TableValue key={index} value={stack[item] ? stack[item] : "-"}></TableValue>;
      })}
      {/* <TableValue key={1} value={stack.id}></TableValue>
      <TableValue key={2} value={stack.stackName}></TableValue>
      <TableValue key={3} value={stack.localBranch}></TableValue>
      <TableValue key={4} value={stack.testedLB}></TableValue>
      <TableValue key={5} value={stack.mergedToD}></TableValue>
      <TableValue key={6} value={stack.testedD}></TableValue>
      <TableValue key={7} value={stack.mergedToM}></TableValue>
      <TableValue key={8} value={stack.testedM}></TableValue>
      <TableValue key={9} value={stack.bundleNo ? stack.bundleNo : "-"}></TableValue>
      <TableValue key={10} value={stack.status}></TableValue> */}
      {/* <td>{stack.id}</td>
      <td>{stack.stackName}</td>
      <td>{stack.localBranch}</td>
      <td>{stack.testedLB}</td>
      <td>{stack.mergedToD}</td>
      <td>{stack.testedD}</td>
      <td>{stack.mergedToM}</td>
      <td>{stack.testedM}</td>
      <td>{stack.bundleNo ? stack.bundleNo : "-"}</td>
      <td>{stack.status}</td> */}
    </tr>
  );
}

export default TableRow;

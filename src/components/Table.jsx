import React from "react";
import TableRow from "./TableRow";
function Table({ data }) {
  let datas = data[0].stacks;
  let tableHeaders = [
    "S.No",
    "Stack Name",
    "Local Branch",
    "Tested LB",
    "Merged to D",
    "Tested D",
    " Merged to M",
    "Tested M",
    "Bundle No",
    "Status",
  ];

  let stacks = JSON.parse(JSON.stringify(datas));
  console.log(stacks);
  stacks = stacks.sort((a, b) => a.id - b.id);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {tableHeaders.map((item, index) => {
              return <th key={index}>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {stacks.map((stack, index) => {
            return <TableRow key={index} stack={stack}></TableRow>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

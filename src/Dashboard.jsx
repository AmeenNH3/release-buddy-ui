import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";
import Table from "./components/Table/Table";
import Tickets from "./components/Tickets/Tickets";
import { addNewTicket } from "./features/data/dataSlice";
export const keyHeaders = [
  "id",
  "stackName",
  "localBranch",
  "testedLB",
  "mergedToD",
  "testedD",
  "mergedToM",
  "testedM",
  "bundleNo",
  "status",
];

function Dashboard() {
  const dispatch = useDispatch();

  const [tableEditLock, settableEditLock] = useState(false);
  const activeTicket = useSelector((state) => state.active.activeTicket);
  const data = useSelector((state) => state.datas.data);
  const tickets = data.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  const tableData = data.filter((item) => item.id == activeTicket);
  function changeTableEditLock(val) {
    if (val == null) {
      settableEditLock((prev) => !prev);
    } else {
      settableEditLock(val);
    }
  }

  return (
    <>
      <main className="main">
        <Navbar></Navbar>
        {/* <Stats></Stats> */}
        {/* <Tickets
          tickets={tickets}
          tableEditLock={tableEditLock}
          changeTableEditLock={changeTableEditLock}
        ></Tickets>
        <Table
          data={tableData}
          tableEditLock={tableEditLock}
          changeTableEditLock={changeTableEditLock}
        ></Table> */}
      </main>
    </>
  );
}

export default Dashboard;

import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Stats from "./components/Stats/Stats";
import Table from "./components/Table/Table";
import Tickets from "./components/Tickets/Tickets";

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

function App() {
  const [dummyState, setdummyState] = useState(false);
  const [tableEditLock, settableEditLock] = useState(false);
  const activeTicket = useSelector((state) => state.active.activeTicket);
  const dummyData = useSelector((state) => state.datas.data);
  const tickets = dummyData.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });
  const tableData = dummyData.filter((item) => item.id == activeTicket);
  function changeTableEditLock(val) {
    if (val == null) {
      settableEditLock((prev) => !prev);
    } else {
      settableEditLock(val);
    }
  }

  return (
    <>
      <main className="main container">
        <Navbar></Navbar>
        <Stats></Stats>
        <Tickets
          tickets={tickets}
          tableEditLock={tableEditLock}
          changeTableEditLock={changeTableEditLock}
        ></Tickets>
        <Table
          data={tableData}
          tableEditLock={tableEditLock}
          changeTableEditLock={changeTableEditLock}
        ></Table>
      </main>
    </>
  );
}

export default App;

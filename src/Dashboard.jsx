import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Toolbar from "./components/Toolbar/Toolbar";
import Stats from "./components/Stats/Stats";
import Table from "./components/Table/Table";
import Tickets from "./components/Tickets/Tickets";
import { addNewTicket } from "./features/data/dataSlice";
import { fetchInitialData } from "./features/data/dataThunks";
import { useNavigate } from "react-router-dom";
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
  "owner",
];

function Dashboard() {
  const dispatch = useDispatch();
  const { user, token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [tableEditLock, settableEditLock] = useState(false);
  const activeTicket = useSelector((state) => state.active.activeTicket);
  const data = useSelector((state) => state.datas.data);

  const [tickets, setTickets] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (user && token && data.length == 0) {
      dispatch(fetchInitialData());
    }

    if (!user || !token) {
      navigate("../");
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (data.length != 0) {
      setTickets(
        data.map((item) => {
          return {
            id: item.id,
            name: item.name,
          };
        })
      );
      setTableData(data.filter((item) => item.id == activeTicket));
    }
  }, [data, activeTicket]);

  function changeTableEditLock(val) {
    if (val == null) {
      settableEditLock((prev) => !prev);
    } else {
      settableEditLock(val);
    }
  }

  return (
    <>
      <Toolbar tickets={tickets}></Toolbar>
      {/* <Stats></Stats> */}
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
    </>
  );
}

export default Dashboard;

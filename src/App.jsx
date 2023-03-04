import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Table from "./components/Table";
import Tickets from "./components/Tickets";
import dummyData from "./dummy_data.json";

function App() {
  const activeTicket = useSelector((state) => state.tickets.activeTicket);
  const tickets = dummyData.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  const tableData = dummyData.filter((item) => item.id == activeTicket);

  return (
    <>
      <main className="main container">
        {/* <Navbar></Navbar>
        <Stats></Stats> */}
        <Tickets tickets={tickets}></Tickets>
        <Table data={tableData}></Table>
      </main>
    </>
  );
}

export default App;

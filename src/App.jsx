import { useState } from "react";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Table from "./components/Table";
import Tickets from "./components/Tickets";
import dummyData from "./dummy_data.json";

function App() {
  const tickets = dummyData.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  return (
    <>
      <main className="main container">
        {/* <Navbar></Navbar>
        <Stats></Stats> */}
        <Tickets tickets={tickets}></Tickets>
        <Table data={dummyData}></Table>
      </main>
    </>
  );
}

export default App;

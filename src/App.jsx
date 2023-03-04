import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
import Table from "./components/Table";
import Tickets from "./components/Tickets";
// import dummyData from "./dummy_data.json";
import { v4 as uuidv4 } from "uuid";

// let dummyData = [
//   {
//     id: 1,
//     key: uuidv4(),
//     name: "PPI Change",
//     stacks: [
//       {
//         id: 1,
//         stackName: "stackOne",
//         localBranch: "ppi_change",
//         testedLB: "completed",
//         mergedToD: "pending",
//         testedD: "not-started",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "in-progress",
//       },
//       {
//         id: 2,
//         stackName: "stackTwo",
//         localBranch: "ppi_change",
//         testedLB: "completed",
//         mergedToD: "completed",
//         testedD: "not-started",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "in-progress",
//       },
//       {
//         id: 3,
//         stackName: "stackThree",
//         localBranch: "ppi_change",
//         testedLB: "completed",
//         mergedToD: "completed",
//         testedD: "pending",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "in-progress",
//       },
//       {
//         id: 4,
//         stackName: "stackFour",
//         localBranch: "ppi_change",
//         testedLB: "completed",
//         mergedToD: "completed",
//         testedD: "completed",
//         mergedToM: "completed",
//         testedM: "completed",
//         bundleNo: 1245,
//         status: "completed",
//       },
//       {
//         id: 5,
//         stackName: "stackFive",
//         localBranch: "ppi_change",
//         testedLB: "not-started",
//         mergedToD: "not-started",
//         testedD: "not-started",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "not-started",
//       },
//     ],
//   },
//   {
//     id: 2,
//     key: uuidv4(),
//     name: "Mongo Atlas",
//     stacks: [
//       {
//         id: 2,
//         stackName: "stackOne",
//         localBranch: "mongo_atlas",
//         testedLB: "completed",
//         mergedToD: "pending",
//         testedD: "not-started",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "in-progress",
//       },
//       {
//         id: 1,
//         stackName: "stackTwo",
//         localBranch: "mongo_atlas",
//         testedLB: "completed",
//         mergedToD: "completed",
//         testedD: "not-started",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "in-progress",
//       },
//       {
//         id: 4,
//         stackName: "stackThree",
//         localBranch: "mongo_atlas",
//         testedLB: "completed",
//         mergedToD: "completed",
//         testedD: "pending",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "in-progress",
//       },
//       {
//         id: 3,
//         stackName: "stackFour",
//         localBranch: "mongo_atlas",
//         testedLB: "completed",
//         mergedToD: "completed",
//         testedD: "completed",
//         mergedToM: "completed",
//         testedM: "completed",
//         bundleNo: 1245,
//         status: "completed",
//       },
//       {
//         id: 5,
//         stackName: "stackFive",
//         localBranch: "mongo_atlas",
//         testedLB: "not-started",
//         mergedToD: "not-started",
//         testedD: "not-started",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "not-started",
//       },
//     ],
//   },
//   {
//     id: 3,
//     key: uuidv4(),
//     name: "Monthly Release",
//     stacks: [
//       {
//         id: 4,
//         stackName: "stackOne",
//         localBranch: "bug-fix",
//         testedLB: "completed",
//         mergedToD: "pending",
//         testedD: "not-started",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "in-progress",
//       },
//       {
//         id: 2,
//         stackName: "stackTwo",
//         localBranch: "region-change",
//         testedLB: "completed",
//         mergedToD: "completed",
//         testedD: "not-started",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "in-progress",
//       },
//       {
//         id: 3,
//         stackName: "stackThree",
//         localBranch: "bug-fix",
//         testedLB: "completed",
//         mergedToD: "completed",
//         testedD: "pending",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "in-progress",
//       },
//       {
//         id: 1,
//         stackName: "stackFour",
//         localBranch: "change-logo",
//         testedLB: "completed",
//         mergedToD: "completed",
//         testedD: "completed",
//         mergedToM: "completed",
//         testedM: "completed",
//         bundleNo: 1245,
//         status: "completed",
//       },
//       {
//         id: 5,
//         stackName: "stackFive",
//         localBranch: "issue-fix",
//         testedLB: "not-started",
//         mergedToD: "not-started",
//         testedD: "not-started",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "not-started",
//       },
//       {
//         id: 6,
//         stackName: "stackSix",
//         localBranch: "issue-fix",
//         testedLB: "not-started",
//         mergedToD: "not-started",
//         testedD: "not-started",
//         mergedToM: "not-started",
//         testedM: "not-started",
//         bundleNo: null,
//         status: "not-started",
//       },
//     ],
//   },
// ];

function App() {
  const activeTicket = useSelector((state) => state.tickets.activeTicket);
  const dummyData = useSelector((state) => state.datas.data);

  const tickets = dummyData.map((item) => {
    return {
      id: item.id,
      name: item.name,
    };
  });

  const tableData = dummyData.filter((item) => item.id == activeTicket);

  console.log(dummyData);

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

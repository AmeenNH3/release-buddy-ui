import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

function changeDataHelper(data, ticketID, stackID, keyName, changeValue) {
  const dataNew = data.map((ticket) => {
    if (ticket.id == ticketID) {
      let newTicket = { ...ticket };
      let newStacks = ticket.stacks;
      newStacks = newStacks.map((item) => {
        if (item.id == stackID) {
          let stack = { ...item };
          console.log(keyName);
          stack[keyName] = changeValue;
          return stack;
        }
        return item;
      });
      newTicket = { ...newTicket, stacks: newStacks };
      return newTicket;
    }
    return ticket;
  });

  return dataNew;
}

export const dataSlice = createSlice({
  name: "datas",
  initialState: {
    data: [
      {
        id: 1,
        key: uuidv4(),
        name: "PPI Change",
        stacks: [
          {
            id: 1,
            stackName: "stackOne",
            localBranch: "ppi_change",
            testedLB: "completed",
            mergedToD: "pending",
            testedD: "not-started",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "pending",
          },
          {
            id: 2,
            stackName: "stackTwo",
            localBranch: "ppi_change",
            testedLB: "completed",
            mergedToD: "completed",
            testedD: "not-started",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "pending",
          },
          {
            id: 3,
            stackName: "stackThree",
            localBranch: "ppi_change",
            testedLB: "completed",
            mergedToD: "completed",
            testedD: "pending",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "pending",
          },
          {
            id: 4,
            stackName: "stackFour",
            localBranch: "ppi_change",
            testedLB: "completed",
            mergedToD: "completed",
            testedD: "completed",
            mergedToM: "completed",
            testedM: "completed",
            bundleNo: 134,
            status: "completed",
          },
          {
            id: 5,
            stackName: "stackFive",
            localBranch: "ppi_change",
            testedLB: "not-started",
            mergedToD: "not-started",
            testedD: "not-started",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "completed",
          },
        ],
      },
      {
        id: 2,
        key: uuidv4(),
        name: "Mongo Atlas",
        stacks: [
          {
            id: 2,
            stackName: "stackOne",
            localBranch: "mongo_atlas",
            testedLB: "completed",
            mergedToD: "pending",
            testedD: "not-started",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "pending",
          },
          {
            id: 1,
            stackName: "stackTwo",
            localBranch: "mongo_atlas",
            testedLB: "completed",
            mergedToD: "completed",
            testedD: "not-started",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "pending",
          },
          {
            id: 4,
            stackName: "stackThree",
            localBranch: "mongo_atlas",
            testedLB: "completed",
            mergedToD: "completed",
            testedD: "pending",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "pending",
          },
          {
            id: 3,
            stackName: "stackFour",
            localBranch: "mongo_atlas",
            testedLB: "completed",
            mergedToD: "completed",
            testedD: "completed",
            mergedToM: "completed",
            testedM: "completed",
            bundleNo: 1245,
            status: "completed",
          },
          {
            id: 5,
            stackName: "stackFive",
            localBranch: "mongo_atlas",
            testedLB: "not-started",
            mergedToD: "not-started",
            testedD: "not-started",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "not-started",
          },
        ],
      },
      {
        id: 3,
        key: uuidv4(),
        name: "Monthly Release",
        stacks: [
          {
            id: 4,
            stackName: "stackOne",
            localBranch: "bug-fix",
            testedLB: "completed",
            mergedToD: "pending",
            testedD: "not-started",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "pending",
          },
          {
            id: 2,
            stackName: "stackTwo",
            localBranch: "region-change",
            testedLB: "completed",
            mergedToD: "completed",
            testedD: "not-started",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "not-started",
          },
          {
            id: 3,
            stackName: "stackThree",
            localBranch: "bug-fix",
            testedLB: "completed",
            mergedToD: "completed",
            testedD: "pending",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "pending",
          },
          {
            id: 1,
            stackName: "stackFour",
            localBranch: "change-logo",
            testedLB: "completed",
            mergedToD: "completed",
            testedD: "completed",
            mergedToM: "completed",
            testedM: "completed",
            bundleNo: 1245,
            status: "completed",
          },
          {
            id: 5,
            stackName: "stackFive",
            localBranch: "issue-fix",
            testedLB: "not-started",
            mergedToD: "not-started",
            testedD: "not-started",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "not-started",
          },
          {
            id: 6,
            stackName: "stackSix",
            localBranch: "issue-fix",
            testedLB: "not-started",
            mergedToD: "not-started",
            testedD: "not-started",
            mergedToM: "not-started",
            testedM: "not-started",
            bundleNo: null,
            status: "not-started",
          },
        ],
      },
    ],
  },
  reducers: {
    modifyData: (state, action) => {
      let activeTicket = action.payload.activeTicket;
      let row = action.payload.id.charAt(0);
      let key = action.payload.headerName;
      let value = action.payload.changedValue;

      state.data = changeDataHelper(state.data, activeTicket, row, key, value);
    },
    addNewStack: (state, action) => {},
  },
});

export default dataSlice.reducer;

export const { modifyData } = dataSlice.actions;

import { createSlice, current } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { changeDataHelper, addNewStackHelper, deleteStacksHelper } from "../../components/helper";

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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
            id: uuidv4(),
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
      let stackId = action.payload.id;
      let key = action.payload.headerName;
      let value = action.payload.changedValue;
      console.log(activeTicket, stackId, key, value);
      state.data = changeDataHelper(state.data, activeTicket, stackId, key, value);
    },
    addNewStack: (state, action) => {
      let activeTicket = action.payload.activeTicket;
      let dataN = action.payload.newStackData;

      state.data = addNewStackHelper(state.data, activeTicket, dataN);
    },
    deleteStacks: (state, action) => {
      let activeTicket = action.payload.activeTicket;
      let stacksIdsToBeDeleted = action.payload.stacksToBeDeleted;
      console.log(activeTicket);
      console.log(stacksIdsToBeDeleted);
      state.data = deleteStacksHelper(state.data, activeTicket, stacksIdsToBeDeleted);
    },
  },
});

export default dataSlice.reducer;

export const { modifyData, addNewStack, deleteStacks } = dataSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { changeDataHelper, addNewStackHelper, deleteStacksHelper } from "../../components/helper";
import { dummy } from "../../dummy";

const dataSlice = createSlice({
  name: "datas",
  initialState: {
    data: dummy,
  },
  reducers: {
    modifyData: (
      state,
      { payload: { activeTicket, id: stackId, headerName: key, changedValue: value } }
    ) => {
      state.data = changeDataHelper(state.data, activeTicket, stackId, key, value);
    },
    addNewStack: (state, { payload: { activeTicket, newStackData: dataN } }) => {
      state.data = addNewStackHelper(state.data, activeTicket, dataN);
    },
    deleteStacks: (
      state,
      { payload: { activeTicket, stacksToBeDeleted: stacksIdsToBeDeleted } }
    ) => {
      state.data = deleteStacksHelper(state.data, activeTicket, stacksIdsToBeDeleted);
    },
    addNewTicket: (state, { payload: { name } }) => {
      const newTicket = {
        id: uuidv4(),
        name,
        stacks: [],
      };
      state.data.push(newTicket);
    },
    deleteActiveTicket: (state, { payload }) => {
      state.data = state.data.filter((ticket) => ticket.id !== payload);
    },
  },
});

export const { modifyData, addNewStack, deleteStacks, addNewTicket, deleteActiveTicket } =
  dataSlice.actions;

export default dataSlice.reducer;

// import { createSlice, current } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";
// import { changeDataHelper, addNewStackHelper, deleteStacksHelper } from "../../components/helper";
// import { dummy } from "../../dummy";

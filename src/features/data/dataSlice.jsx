import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { changeDataHelper, addNewStackHelper, deleteStacksHelper } from "../../components/helper";
import { customFetch, removeUserFromLocalStorage } from "../user/userSlice";
import { fetchInitialData, saveData } from "./dataThunks";
import { clearStore } from "./dataThunks";
const dataSlice = createSlice({
  name: "datas",
  initialState: {
    data: [],
    status: "idle",
    error: null,
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
    logoutUser: (state) => {
      removeUserFromLocalStorage();
    },
  },
  extraReducers: {
    [fetchInitialData.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchInitialData.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    },
    [fetchInitialData.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [clearStore.fulfilled]: (state, action) => {
      console.log("Store Cleared!");
    },
    [clearStore.rejected]: (state, action) => {
      console.log("Failed to clear store!");
    },
    [saveData.pending]: (state, action) => {
      console.log("Saving tickets");
    },
    [saveData.fulfilled]: (state, action) => {
      console.log("Tickets saved!");
    },
    [saveData.rejected]: (state, action) => {
      console.log("Failed to save tickets!");
    },
  },
});

export const { modifyData, addNewStack, deleteStacks, addNewTicket, deleteActiveTicket } =
  dataSlice.actions;

export default dataSlice.reducer;

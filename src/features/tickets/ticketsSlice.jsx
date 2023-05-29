import { createSlice } from "@reduxjs/toolkit";

export const ticketsSlice = createSlice({
  name: "active",
  initialState: {
    activeTicket: null,
    isEditLocked: false,
    checkedStacks: [],
  },
  reducers: {
    setActiveTicket: (state, action) => {
      state.activeTicket = action.payload;
    },
    toggleEditLock: (state, action) => {
      if (action.payload == null) {
        if (state.isEditLocked) state.isEditLocked = false;
        else state.isEditLocked = true;
      } else {
        state.isEditLocked = action.payload;
      }
    },
    addToCheckedStacks: (state, action) => {
      state.checkedStacks.push(action.payload);
    },
    removeFromCheckedStacks: (state, action) => {
      let checked = state.checkedStacks.filter((stack) => stack != action.payload);
      state.checkedStacks = checked;
    },
    clearCheckedStacks: (state, action) => {
      state.checkedStacks = [];
    },
  },
});

export const {
  setActiveTicket,
  toggleEditLock,
  addToCheckedStacks,
  clearCheckedStacks,
  removeFromCheckedStacks,
} = ticketsSlice.actions;
export default ticketsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

function includesCheck(data, value) {
  if (data == null) return false;
  const newData = data.map((item) => {
    if (item == value) return true;
  });
  return false;
}

export const ticketsSlice = createSlice({
  name: "active",
  initialState: {
    activeTicket: 1,
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
      // const newStack = action.payload;
      // let data = [...state.checkedStacks];
      // if (includesCheck(data, newStack) == false) {
      //   state.checkedStacks = { ...state.checkedStacks, newStack };
      // }
    },
    removeFromCheckedStacks: (state, action) => {
      let checked = state.checkedStacks.filter((stack) => stack != action.payload);
      state.checkedStacks = checked;
      // const deleteStack = action.payload;
      // let data = [...state.checkedStacks];
      // if (includesCheck(data, deleteStack) == true)
      //   state.checkedStacks = state.checkedStacks.filter((stack) => stack.id != deleteStack);
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

import { createSlice } from "@reduxjs/toolkit";

export const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    activeTicket: 1,
  },
  reducers: {
    setActiveTicket: (state, action) => {
      state.activeTicket = action.payload;
    },
  },
});

export const { setActiveTicket } = ticketsSlice.actions;
export default ticketsSlice.reducer;

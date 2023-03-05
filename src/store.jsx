import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./features/tickets/ticketsSlice";
import dataReducer from "./features/data/dataSlice";
export default configureStore({
  reducer: {
    active: ticketsReducer,
    datas: dataReducer,
  },
});

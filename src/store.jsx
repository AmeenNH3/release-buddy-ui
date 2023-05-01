import { configureStore } from "@reduxjs/toolkit";
import ticketsReducer from "./features/tickets/ticketsSlice";
import dataReducer from "./features/data/dataSlice";
import userReducer from "./features/user/userSlice";
export default configureStore({
  reducer: {
    active: ticketsReducer,
    datas: dataReducer,
    user: userReducer,
  },
});

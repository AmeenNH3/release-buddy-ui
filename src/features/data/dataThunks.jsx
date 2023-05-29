import { createAsyncThunk } from "@reduxjs/toolkit";
import { customFetch } from "../user/userSlice";
import { logoutUser } from "../user/userSlice";
export const fetchInitialData = createAsyncThunk("data/fetchInitialData", async (_, thunkAPI) => {
  try {
    const response = await customFetch.get("/data/allTickets", {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
});

export const saveData = createAsyncThunk("data/saveData", async (_, thunkAPI) => {
  try {
    const response = await customFetch.post("/data/saveTickets", thunkAPI.getState().datas.data, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
});

export const clearStore = createAsyncThunk("data/clearStore", async (message, thunkAPI) => {
  try {
    console.log("Clearing Store!");
    thunkAPI.dispatch(logoutUser());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
});

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  console.log(error);
  if (error.response.status == 401 || error.response.status == 403) {
    console.log("Unauthorized");
    console.log(thunkAPI.getState());
    thunkAPI.dispatch(clearStore(error.response.data));
    return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
  }
  return thunkAPI.rejectWithValue(error.response.data);
};

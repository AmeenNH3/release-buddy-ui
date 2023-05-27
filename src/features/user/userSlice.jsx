import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const customFetch = axios.create({
  baseURL: "http://localhost:8093/api/v1",
});

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
};

export const addUserToLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};

const userInitialState = {
  user: getUserFromLocalStorage(),
};

export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPI) => {
  try {
    const response = await customFetch.post("/auth/authenticate", user);
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    handleChange: (state, { payload }) => {
      const { name, value } = payload;
      state.user[name] = value;
    },
    clearValues: () => {
      return userInitialState;
    },
    logoutUser: (state) => {
      state.user = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {
      console.log("User pending");
    },
    [loginUser.fulfilled]: (state, action) => {
      console.log("User fulfilled");

      state.user = action.payload.user;
      addUserToLocalStorage(state.user);
    },
    [loginUser.rejected]: (state, action) => {
      alert("Please enter valid credentials");
    },
  },
});

export default userSlice.reducer;
export const { logoutUser, clearValues, handleChange } = userSlice.actions;

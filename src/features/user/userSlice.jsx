import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const customFetch = axios.create({
  baseURL: "http://localhost:8093/api/v1",
});

export const getTokenFromLocalStorage = () => {
  const result = localStorage.getItem("token");
  const token = result ? result : null;
  return token;
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
};

export const addUserToLocalStorage = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

const userInitialState = {
  user: getUserFromLocalStorage(),
  token: getTokenFromLocalStorage(),
};

export const loginUser = createAsyncThunk("user/loginUser", async (user, thunkAPI) => {
  try {
    const response = await customFetch.post("/auth/authenticate", user);
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
      state.token = null;
      removeUserFromLocalStorage();
    },
  },
  extraReducers: {
    [loginUser.pending]: (state) => {},
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      addUserToLocalStorage(state.user, state.token);
    },
    [loginUser.rejected]: (state, action) => {
      alert("Please enter valid credentials");
    },
  },
});

export default userSlice.reducer;
export const { logoutUser, clearValues, handleChange } = userSlice.actions;

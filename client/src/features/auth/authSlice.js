import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthAction from "./authAPI";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  token: null,
};
export const userLogin = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      return await AuthAction.login(user);
    } catch (error) {
      const msg = error.res.data.msg;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const userLogout = createAsyncThunk(
  "auth/logout",
  async (token, thunkAPI) => {
    try {
      return await AuthAction.logout(token);
    } catch (error) {
      const msg = error.res.data.msg;
      return thunkAPI.rejectWithValue(msg);
    }
  }
);
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(userLogin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.user = null;
      })
      .addCase(userLogout.fulfilled, (state, action) => {
        state.user = null;
      });
  },
});
export const { reset } = authSlice.actions;
export default authSlice.reducer;

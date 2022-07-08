import {configureStote,createAsyncThunk}from '@reduxjs/toolkit';
import userAction from './userAction';
const initialState={
   user:[],
   isLoading:false,
   isError:false,
   isSuccess:false,
    message:''
}
export const createUser = createAsyncThunk(
  'goals/create',
  async (goalData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token
      return await userAction.createUser(goalData, token)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return thunkAPI.rejectWithValue(message)
    }
  }
)
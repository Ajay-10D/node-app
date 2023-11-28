import { createSlice } from "@reduxjs/toolkit";
import { userAction } from "../action";

const userReducer = createSlice({
  name: "user",
  initialState: {
    sts: false,
    msg: null,
    data: [],
    error: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(userAction.pending, (state) => {
        state.sts = false;
      })
      .addCase(userAction.fulfilled, (state, action) => {
        state.initialState = action.payload;
      });
  },
});

export default userReducer;

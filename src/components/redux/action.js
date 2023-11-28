import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const userAction = createAsyncThunk("userAction", async (data) => {
  console.log(data);
  const res = await axios.post(
    "http://localhost:500/api/user/create-user",
    data
  );
  const resData = res.data;
  console.log(resData);
  return resData;
});

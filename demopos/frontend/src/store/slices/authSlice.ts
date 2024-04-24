import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { count: 30 },
  reducers: {},
});

export default authSlice.reducer;

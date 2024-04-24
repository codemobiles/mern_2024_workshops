import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  count: number;
}

const initialState: AuthState = { count: 30 };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {}

const initialState: AuthState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;

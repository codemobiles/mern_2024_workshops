import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  count: number;
}

const initialState: AuthState = { count: 30 };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authSelector = (state: RootState) => state.authReducer
export default authSlice.reducer;

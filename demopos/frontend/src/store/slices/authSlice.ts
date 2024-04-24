import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  count: number;
}

const initialState: AuthState = { count: 30 };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    add: (state) => {
      state.count = state.count + 1;
    },
    del: (state) => {
      state.count = state.count - 1;
    },
  },
});

export const { add, del } = authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;

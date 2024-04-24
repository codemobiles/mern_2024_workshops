import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AuthState {
  count: number;
}

const initialState: AuthState = { count: 30 };

// export const addAsync = createAsyncThunk("addAsync", async () => {
//   // simulate doing somethings for 1 secs
//   await new Promise((resolve) => setTimeout(resolve, 1000));
// });

export const addAsync = createAsyncThunk("addAsync", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
});

export const delAsync = createAsyncThunk("delAsync", async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return 2;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    add: (state) => {
      // await new Promise((resolve) => setTimeout(resolve, 3000));
      state.count = state.count + 1;
    },
    del: (state) => {
      state.count = state.count - 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addAsync.fulfilled, (state) => {
      state.count = state.count + 1;
    });

    builder.addCase(delAsync.fulfilled, (state, action) => {
      state.count = state.count - action.payload;
    });
  },
});

export const { add, del } = authSlice.actions;
export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LoginResult, RegisterResult } from "@/types/auth-result.type";
import { User } from "@/types/user.type";
import { httpClient } from "@/utils/HttpClient";
import { server } from "@/utils/constants";

export interface AuthState {
  loginResult?: LoginResult;
  registerResult?: RegisterResult;
  isAuthenticating: boolean;
  isAuthented: boolean;
  isError: boolean;
}

export const login = createAsyncThunk("auth/login", async (user: User) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const result = await httpClient.post(server.LOGIN_URL, user);
  if (result.data.result === "ok") {
    const { token } = result.data;
    localStorage.setItem(server.TOKEN_KEY, token);
    return result.data;
  }
  throw Error();
});

export const register = createAsyncThunk("auth/register", async (user: User) => {
  const result = await httpClient.post<RegisterResult>(server.REGISTER_URL, user);
  if (result.data.result === "ok") {
    return result.data;
  }

  throw Error();
});

const initialState: AuthState = {
  isAuthenticating: true,
  isAuthented: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login Success
    builder.addCase(login.fulfilled, (state, action) => {
      state.isAuthented = true;
      state.isAuthenticating = false;
      state.isError = false;
      state.loginResult = action.payload;
    });

    // Login Faield
    builder.addCase(login.rejected, (state) => {
      state.isAuthented = false;
      state.isAuthenticating = false;
      state.isError = true;
    });

    // Login In progessing
    builder.addCase(login.pending, (state) => {
      state.isAuthenticating = true;
      state.isError = false;
      state.isAuthented = false;
    });

    // Register Success
    builder.addCase(register.fulfilled, (state, action) => {
      state.isError = false;
      state.isAuthenticating = false;
      state.registerResult = action.payload;
    });

    // Register Faield
    builder.addCase(register.rejected, (state) => {
      state.isError = true;
      state.isAuthenticating = false;
    });

    // Register In progessing
    builder.addCase(register.pending, (state) => {
      state.isError = false;
      state.isAuthenticating = true;
    });
  },
});

export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;

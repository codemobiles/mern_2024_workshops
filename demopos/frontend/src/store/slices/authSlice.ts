import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { LoginResult, RegisterResult } from "@/types/auth-result.type";
import { User } from "@/types/user.type";
import { httpClient } from "@/utils/HttpClient";
import { apiUrl, server } from "@/utils/constants";

export interface AuthState {
  loginResult?: LoginResult;
  registerResult?: RegisterResult;
  isAuthenticating: boolean;
  isAuthented: boolean;
  isError: boolean;
}

export const login = async (user: User) => {
  const result = await httpClient.post(server.LOGIN_URL, user);
  return result.data;
};

const initialState: AuthState = {
  isAuthenticating: true,
  isAuthented: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const authSelector = (state: RootState) => state.authReducer;
export default authSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import counterReducer from "@/store/slices/counterSlice";
import authReducer from "@/store/slices/authSlice";
import stockReducer from "@/store/slices/stockSlice";
import shopReducer from "@/store/slices/shopSlice";

// let store: any = undefined;
const store = configureStore({
  reducer: { counterReducer, authReducer, stockReducer, shopReducer },
  devTools: true,
});

// export type of root state from reducers
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export default store;

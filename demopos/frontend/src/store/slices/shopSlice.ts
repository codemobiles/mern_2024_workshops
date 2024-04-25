import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

type StateProps = {
  mOrderLines: any;
};

const initialState: StateProps = {
  mOrderLines: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addOrder: () => {},
    removeOrder: () => {},
    shopSelector: () => {},
    togglePayment: () => {},
  },
});

export const shopSelector = (state: RootState) => state.shopReducer;
export const { addOrder, removeOrder, togglePayment } = shopSlice.actions;
export default shopSlice.reducer;

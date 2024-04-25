import { createSlice } from "@reduxjs/toolkit";

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

export const { addOrder, removeOrder, shopSelector, togglePayment } = shopSlice.actions;
export default shopSlice.reducer;

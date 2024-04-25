import { createSlice } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {},
  reducers: {
    addOrder: () => {},
    removeOrder: () => {},
    shopSelector: () => {},
    togglePayment: () => {},
  },
});

export const { addOrder, removeOrder, shopSelector, togglePayment } = shopSlice.actions;
export default shopSlice.reducer;

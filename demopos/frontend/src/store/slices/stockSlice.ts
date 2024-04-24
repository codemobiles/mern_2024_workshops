import { Product } from "@/types/product.type";
import { httpClient } from "@/utils/HttpClient";
import { server } from "@/utils/constants";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface StockState {
  stockAllResult: Product[];
  stockOneResult: Product | null;
}

export const getProducts = createAsyncThunk("stock/getProducts", async () => {
  const result = await httpClient.get<Product[]>(server.PRODUCT_URL);
  return result.data;
});

const initialState: StockState = {
  stockAllResult: [],
  stockOneResult: null,
};

const stockSlice = createSlice({
  name: "stock",
  initialState,
  reducers: {},
});

export default stockSlice.reducer;

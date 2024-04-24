import { getProducts, stockSelector } from "@/store/slices/stockSlice";
import { RootState, useAppDispatch } from "@/store/store";
import { light } from "@mui/material/styles/createPalette";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

type Props = {};

export default function StockPage({}: Props) {
  const dispatch = useAppDispatch();
  const stockReducer = useSelector(stockSelector);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
      StockPage
      <ul>
        {stockReducer.stockAllResult.map((e) => (
          <li key={e._id}>{e.name}</li>
        ))}
      </ul>
    </div>
  );
}

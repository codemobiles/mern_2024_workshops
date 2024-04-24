import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { stockSelector, getProducts } from "@/store/slices/stockSlice";
import { useAppDispatch } from "@/store/store";
import { useSelector } from "react-redux";
import { imageUrl } from "@/utils/constants";

const columns: GridColDef[] = [
  { field: "product_id", headerName: "เลขที่", width: 70 },
  {
    field: "image",
    headerName: "รูป",
    width: 100,
    renderCell: ({ value }) => <img alt="" src={`${imageUrl}/images/${value}?dummy=${Math.random()}`} className="w-[70px] h-[70px] rounded-[5%]" />,
  },
  { field: "name", headerName: "ชื่อ", width: 330 },
  { field: "stock", headerName: "คงเหลือ", width: 330 },
  { field: "price", headerName: "ราคา", width: 330 },
];

export default function StockPage() {
  const dispatch = useAppDispatch();
  const stockReducer = useSelector(stockSelector);

  React.useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row.product_id}
        rows={stockReducer.stockAllResult}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}

// import { getProducts, stockSelector } from "@/store/slices/stockSlice";
// import { RootState, useAppDispatch } from "@/store/store";
// import { light } from "@mui/material/styles/createPalette";
// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";

// type Props = {};

// export default function StockPage({}: Props) {
//   const dispatch = useAppDispatch();
//   const stockReducer = useSelector(stockSelector);

//   useEffect(() => {
//     dispatch(getProducts());
//   }, [dispatch]);

//   return (
//     <div>
//       StockPage
//       <ul>
//         {stockReducer.stockAllResult.map((e) => (
//           <li key={e._id}>{e.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

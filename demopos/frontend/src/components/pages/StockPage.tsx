import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "product_id", headerName: "เลขที่", width: 70 },
  { field: "name", headerName: "ชื่อ", width: 330 },
  { field: "stock", headerName: "คงเหลือ", width: 330 },
  { field: "price", headerName: "ราคา", width: 330 },
];

const rows = [{ product_id: 1, name: "Snow", stock: 10, price: 100 }];

export default function StockPage() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        getRowId={(row) => row.product_id}
        rows={rows}
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

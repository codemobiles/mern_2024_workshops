import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useAppDispatch } from "@/store/store";
import { getTransactions, shopSelector } from "@/store/slices/shopSlice";
import { useSelector } from "react-redux";

const columns: GridColDef[] = [
  { field: "transaction_id", headerName: "ID", width: 70 },
  { field: "total", headerName: "Total", width: 130 },
];

export default function TransactionPage() {
  const dispatch = useAppDispatch();
  const shopReducer = useSelector(shopSelector);
  React.useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

  return (
    <div style={{ height: 400, width: "100%" }}>
      {/* {JSON.stringify(shopReducer.transactionAllResult)} */}

      <DataGrid
        getRowId={(row) => row.transaction_id}
        rows={shopReducer.transactionAllResult}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}

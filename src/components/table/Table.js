import React from "react";
import { AgGridReact } from "ag-grid-react";

const Table = () => {
  const data = [{ system: "Aterra", headerName: "Customer Name" }];
  const columns = [
    {
      headerName: "System",
      field: "system",
      filter: true,
    },
    {
      headerName: "Customer Name",
      field: "customerName",
      filter: true,
    },
  ];
  return (
    <div className="ag-theme-alpine" style={{ width: "100%", height: "500px" }}>
      <AgGridReact rowData={data} columnDefs={columns} />
    </div>
  );
};

export default Table;

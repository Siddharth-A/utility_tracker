import * as React from 'react';
import Paper from '@mui/material/Paper';
import { DataGrid } from '@mui/x-data-grid';
import { fakeData } from './data';

// Define columns
const columns = [
    { field: 'date', headerName: 'Date', width: 150, headerAlign: 'center' },
    { field: 'utility', headerName: 'Utility', width: 150, headerAlign: 'center' },
    { 
        field: 'bill', 
        headerName: 'Bill', 
        headerAlign: 'center', 
        type: 'number', 
        align: 'left',
    }
];

const currencyFormat = (value) =>
    value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    });

// Transform `fakeData` into table-friendly format
const rows = fakeData.flatMap((entry, index) =>
    Object.keys(entry)
      .filter((key) => key !== "month" && key !== "year") // Exclude month and year fields
      .map((utility, utilityIndex) => ({
        id: `${index}-${utilityIndex}`, // Generate a unique ID
        date: `${entry.month} ${entry.year}`, // Combine Month + Year
        utility: utility, // Utility name
        bill: currencyFormat(entry[utility]) ?? 0, // Ensure bill is always a valid number
      }))
);

export default function DataTable() {
  return (
    <Paper sx={{ height: 800, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10, 20]}
        sx={{ border: 0 }}
        autoPageSize
        density='compact'
      />
    </Paper>
  );
}

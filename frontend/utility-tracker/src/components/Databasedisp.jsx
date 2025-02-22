import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import DataTable from "./Datatable";


function Databasedisp({ toggleDarkMode }) {
  const theme = useTheme(); // Get the current theme
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default, // Apply theme background
        color: theme.palette.text.primary, // Apply text color based on theme
        minHeight: "100vh", // Ensure full viewport height
        width: "auto",
      }}
    >
      <DataTable />
    </Box>
  )
}

export default Databasedisp;

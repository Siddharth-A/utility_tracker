import * as React from "react";
import Pie from "./Pie";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

import Monthlypaperview from "./Monthlypaperview";

function Dashboard({ toggleDarkMode }) {
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
      <Monthlypaperview />
      {/* <Chart /> */}
      <Pie />
    </Box>
  )
}

export default Dashboard;

import * as React from "react";
import Navbar from "./components/Navbar";
import Chart from "./components/Chart";
import Pie from "./components/Pie";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import "./App.css";

function App({ toggleDarkMode }) {
  const theme = useTheme(); // Get the current theme
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default, // Apply theme background
        color: theme.palette.text.primary, // Apply text color based on theme
        minHeight: "100vh", // Ensure full viewport height
      }}
    >
      <Navbar toggleDarkMode={toggleDarkMode}/>
      <Chart />
      {/* <Pie /> */}
      <p>test abce </p>
    </Box>
  )
}

export default App;

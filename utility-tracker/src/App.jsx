import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Pie from "./components/Pie";
import Chart from "./components/Chart";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Bottombar from "./components/bottomBar";
import Monthlypaperview from "./components/Monthlypaperview";

function App({ toggleDarkMode }) {
  const theme = useTheme(); // Get the current theme
  return (
    <Router>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default, // Apply theme background
          color: theme.palette.text.primary, // Apply text color based on theme
          minHeight: "100vh", // Ensure full viewport height
          width: "auto",
        }}
      >
        <Navbar toggleDarkMode={toggleDarkMode}/>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
        <Bottombar />
        {/* <Monthlypaperview /> */}
        {/* <Chart /> */}
        {/* <Pie /> */}
      </Box>
    </Router>
  )
}

export default App;

import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Bottombar from "./components/bottomBar";
import Dashboard from "./components/Dashboard";
import Databasedisp from "./components/Databasedisp";

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
          <Route path="/database" element={<Databasedisp />} />
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          
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

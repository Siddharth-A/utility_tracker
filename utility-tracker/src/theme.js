import { createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

// Light Theme
export const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#69f0ae" },
      secondary: { main: red[900] },
      background: {
        default: "#ffffff",  // Light background
        paper: "#f4f4f4",
      },
    },
  });
  
  // Dark Theme
  export const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: grey[900] },
      secondary: { main: red[500] },
      background: {
        default: "#121212",  // Dark background
        paper: "#1e1e1e",
      },
      text: {
        primary: "#ffffff",  // White text for dark mode
      },
    },
  });

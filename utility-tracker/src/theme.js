import { createTheme } from "@mui/material/styles";
import { purple, grey } from "@mui/material/colors";

// Light Theme
export const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: { main: "#69f0ae" },
      secondary: { main: purple[400] },
      background: {
        default: "#ffffff",  // Light background
        paper: "#f4f4f4",
      },
      Alectra: { main: "#79C99E" },
      Bhydro: { main: "#02A9EA" },
      Enbridge: { main: "#E09F3E" },
      Reliance: { main: "#F9627D" },
    },
  });
  
  // Dark Theme
  export const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: grey[900] },
      secondary: { main: purple[700] },
      background: {
        default: "#121212",  // Dark background
        paper: "#1e1e1e",
      },
      Alectra: { main: "#aaec89" },
      Bhydro: { main: "#b689ec" },
      Enbridge: { main: "#eccd89" },
      Reliance: { main: "#ec89e6" },
      text: {
        primary: "#ffffff",  // White text for dark mode
      },
      typography: {
        // fontFamily: 'BlinkMacSystemFont',
      },
    },
  });
//   const palette = ["#79C99E", "#02A9EA", "#E09F3E", "#F9627D"];
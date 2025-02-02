import { createTheme } from "@mui/material/styles";
import { red, grey } from "@mui/material/colors";

// Light Theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#69f0ae",
    },
    secondary: {
      main: red[900],
    },
  },
});

// Dark Theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: grey[900],
    },
    secondary: {
      main: red[500],
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});

import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./theme";
import App from "./App";

function Root() {
  const [isDarkMode, setIsDarkMode] = useState(false);  // State to manage theme

  return (
    <StrictMode>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <App toggleDarkMode={() => setIsDarkMode((prev) => !prev)} />
      </ThemeProvider>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")).render(<Root />);
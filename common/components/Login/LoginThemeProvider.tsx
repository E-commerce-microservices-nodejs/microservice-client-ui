import { createTheme, ThemeProvider } from "@mui/material";
import { FC, ReactNode } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff4400",
    },
    secondary: {
      light: "#0066ff",
      main: "#0044ff",
      contrastText: "#ffcc00",
    },

    contrastThreshold: 3,

    tonalOffset: 0.2,
  },
});

const LoginThemeProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default LoginThemeProvider;

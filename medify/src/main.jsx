import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home/Home.jsx";
import Search from "./Search/Search.jsx";
import MyBookings from "./MyBookings/MyBookings.jsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2AA7FF",
      contrastText: "#fff",
      light: "#2AA8FF",
      dark: "#0C8CE5",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Disables uppercase
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: Home },
      { path: "search", Component: Search },
      { path: "my-bookings", Component: MyBookings },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);

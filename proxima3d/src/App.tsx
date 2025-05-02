import "./App.css";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ThemeProvider } from "./components/theme-provider";
import "./localization/i18next";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;

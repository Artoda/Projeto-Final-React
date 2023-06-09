import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./common/style/global";
import { AllRoutes } from "./routes/Routes";
import { AuthProvider } from "./contexts/auth"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <AllRoutes />
      <GlobalStyle />
    </AuthProvider>
  </React.StrictMode>
);

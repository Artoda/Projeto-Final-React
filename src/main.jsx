import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./common/style/global";
import { AllRoutes } from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AllRoutes />
    <GlobalStyle />
  </React.StrictMode>
);

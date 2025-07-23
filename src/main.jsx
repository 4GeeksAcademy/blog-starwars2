import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { GlobalProvider } from "./hooks/useGlobalReducer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";


ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalProvider>
    <RouterProvider router={router} />
  </GlobalProvider>
);

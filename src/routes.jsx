import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import Single from "./pages/Single.jsx";
import Demo from "./pages/Demo.jsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/:type/:uid", element: <Single /> },
      { path: "/demo", element: <Demo /> },
      { path: "*", element: <h1>Not found</h1> }
    ]
  }
]);

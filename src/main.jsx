import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* --> 🎌 Setting routes For our page. In this case, we have only single Parent route i.e. <App /> */
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

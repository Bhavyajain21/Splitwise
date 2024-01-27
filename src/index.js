import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import AddFriend from "./components/AddFriend";
import AddTransaction from "./components/AddTransaction";
import PaymentHistory from "./components/PaymentHistory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "addfriend",
        element: <AddFriend />,
      },
      {
        path: "addTransaction",
        children: [
          {
            path: ":transId",
            element: <AddTransaction />,
          },
        ],
      },
      {
        path: "history",
        element: <PaymentHistory />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

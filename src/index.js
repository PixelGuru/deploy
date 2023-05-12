import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import Login from "./pages/Login";
import Users from "./pages/Users";
import PrivateRoute from "./routes/PrivateRoute";
import ToDo from "./pages/ToDo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute component={<Login />} />,
  },
  {
    path:'/todo',
    element: <PrivateRoute component={<ToDo />} />
  },
  {
    path:'/users',
    element: <PrivateRoute component={<Users />} />
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

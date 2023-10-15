import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddCofee from "./Components/AddCofee";
import UpdateCofee from "./Components/UpdateCofee";
import Main from "./Components/Main";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import AuthProvider from "./provider/AuthProvider";
import Users from "./Components/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <App />,
        loader: () => fetch("http://localhost:5000/coffee"),
      },
      {
        path: "/addCoffee",
        element: <AddCofee></AddCofee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCofee></UpdateCofee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffee/${params.id}`),
      },
      {
        path: '/signin',
        element:<SignIn></SignIn>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/users',
        element: <Users></Users>,
        loader: () => fetch('http://localhost:5000/user'),
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

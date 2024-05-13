import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./Components/Home/Home.jsx";
import SignIn from "./Components/Users/SignIn.jsx";
import SignUp from "./Components/Users/SignUp.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import Details from "./Components/Home/Details.jsx";
import AllFoods from "./Components/Pages/AllFoods.jsx";
import Gallery from "./Components/Pages/Gallery.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/all",
        element: <AllFoods></AllFoods>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader:({params})=>fetch(`http://localhost:1000/home/${params.id}`)
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);

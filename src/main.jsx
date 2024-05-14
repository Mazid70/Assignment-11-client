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
import BuyFood from "./Components/Pages/BuyFood.jsx";
import OrderFood from "./Components/Pages/OrderFood.jsx";
import UserAddFood from "./Components/Pages/UserAddFood.jsx";
import UserFoodShocase from "./Components/Pages/UserFoodShocase.jsx";
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
        path: "/addfood",
        element: <UserAddFood></UserAddFood>,
      },
      {
        path: "/myfood/user/:email",
        element: <UserFoodShocase></UserFoodShocase>,
        loader:({params})=>fetch(`http://localhost:1000/userfood/${params.email}`)
      },
      {
        path: "/myorder/user/:email",
        element: <OrderFood></OrderFood>,
        loader:({params})=>fetch(`http://localhost:1000/buy/${params.email}`)
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
        loader:()=>fetch('http://localhost:1000/gallery')
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader:({params})=>fetch(`http://localhost:1000/home/${params.id}`)
      },
      {
        path: "/buy/:id",
        element: <BuyFood></BuyFood>,
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

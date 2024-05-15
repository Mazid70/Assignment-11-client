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
import Error from "./Components/Pages/Error.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
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
      },
      {
        path: "/myorder/user/:email",
        element: <OrderFood></OrderFood>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
        loader:()=>fetch('https://assignment-11-server-eight-phi.vercel.app/gallery')
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader:({params})=>fetch(`https://assignment-11-server-eight-phi.vercel.app/home/${params.id}`)
      },
      {
        path: "/buy/:id",
        element: <BuyFood></BuyFood>,
        loader:({params})=>fetch(`https://assignment-11-server-eight-phi.vercel.app/home/${params.id}`)
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

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";

var root = ReactDOM.createRoot(document.getElementById("root"));

const GroceryStore = lazy(() => import("./components/GroceryStore.js"));

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocerystore",
        element: (
          <Suspense fallback={<Shimmer />}>
            <GroceryStore />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

root.render(<RouterProvider router={appRoute} />);

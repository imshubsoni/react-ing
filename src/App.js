import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./components/AppLayout";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

var root = ReactDOM.createRoot(document.getElementById("root"));


const appRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />
    },
    {
        path: "/about",
        element: <About />,
    },
    {
        path: "/contact",
        element: <Contact />
    }
]);

root.render(<RouterProvider router={appRoute} />);

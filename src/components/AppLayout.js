import React, { useEffect, useState } from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Shubham Soni",
    };

    setUserName(data.name);
  });

  return (
    <UserContext.Provider value={{ loggedInUserName: userName }}>
      <div className="app-layout">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default AppLayout;

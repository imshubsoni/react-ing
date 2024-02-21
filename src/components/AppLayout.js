import React, { useEffect, useState } from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/reduxStore/appStore";

const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Shubham Soni",
    };

    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUserName: userName, setUserName }}>
        <div className="app-layout">
          <UserContext.Provider value={{ loggedInUserName: "Elon Musk" }}>
            <Header />
          </UserContext.Provider>
          <Outlet />
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

export default AppLayout;

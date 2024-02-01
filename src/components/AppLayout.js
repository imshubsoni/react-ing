import React from "react";
import Body from "./Body";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default AppLayout;

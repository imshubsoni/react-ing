import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./RestaurantsList";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20200610/ourmid/pngtree-food-delivery-logo-design-image_381320.jpg"
        ></img>
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>Previous Orders</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>Login</li>
        </ul>
      </div>
    </div>
  );
};

const ResCard = (props) => {
  const { resData } = props;
  return (
    <div
      className="res-card-container"
      style={{ backgroundColor: "lightgray", padding: "5px" }}
    >
      <div className="res-card-image-container">
        <img
          className="res-card-image"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resData.info.cloudinaryImageId
          }
        ></img>
      </div>
      <div className="res-card-desc-container">
        <h2>{resData.info.name}</h2>
        <h4>{resData.info.cuisines.join(", ")}</h4>
        <h4>{resData.info.avgRating} Stars</h4>
        <h4>{resData.info.costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime} Mins</h4>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search-container">
        <input className="search-box" placeholder="Search" name="search" />
        <button className="search-button">Search</button>
      </div>
      <div className="res-container">
        {resList.map((restaurantInfo) => (
          <ResCard resData={restaurantInfo} />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {};

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

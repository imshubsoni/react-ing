import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li><a href="/">Home</a></li>
          <li>Previous Orders</li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact Us</a></li>
          <li>Cart</li>
          <li>
            <button
              className="btn-login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

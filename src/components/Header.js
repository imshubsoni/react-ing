import useOnlineStatus from "../utils/useOnlineStatus";
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header-container flex justify-between m-4 p-4 bg-green-200 rounded-lg shadow-zinc-400 shadow-lg sticky">
      <div className="logo-container">
        <img className="logo w-20" src={LOGO_URL}></img>
      </div>
      <div className="nav-items-container flex items-center">
        <ul className="nav-items flex">
          <li className="px-4 font-bold">
            Online Status: {onlineStatus ? "🌝" : "🌚"}
          </li>
          <li className="px-4 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:underline">
            <Link to="/grocerystore">Grocery</Link>
          </li>
          <li className="px-4 hover:underline">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 hover:underline">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 hover:underline">Cart</li>
          <li className="px-4">
            <button
              className="btn-login py-2 px-4 bg-slate-100 border border-solid border-black rounded-lg -mt-2 hover:bg-slate-200 hover:rounded-3xl transition-all ease-in-out duration-500"
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

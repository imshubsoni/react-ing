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

export default Header;

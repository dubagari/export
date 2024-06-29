import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./css/Header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);

  const navscroll = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", navscroll);
  return (
    <header className={navbar ? "header active" : "header active"}>
      <Link to="/" className="logo">
        <h2>
          bee<span>zet</span>
        </h2>
      </Link>
      <div className="bars">
        <i class="ri-menu-line"></i>
      </div>
      <ul>
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/product">
          <li>Product</li>
        </NavLink>
        <NavLink to="/contactus">
          <li>Contact us</li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;

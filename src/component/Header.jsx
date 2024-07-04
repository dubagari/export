import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const navscroll = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", navscroll);

  return (
    <header className={navbar ? "header active" : "header "}>
      <Link to="/" className="logo">
        <h2>
          bee<span>zet</span>
        </h2>
      </Link>
      <div className="menu" onClick={() => setMobile(!mobile)}>
        {mobile ? (
          <i class=" ri-close-fill "></i>
        ) : (
          <i className="ri-menu-line "></i>
        )}
      </div>
      <div className={mobile ? "nav-mobile-link" : "nav-bar"}>
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
      </div>
    </header>
  );
};

export default Header;

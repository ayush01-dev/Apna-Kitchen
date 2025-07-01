import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Rlogo from "../assets/img/logo.png";

const Logo = () => {
  return <img src={Rlogo} alt="logo" id="logo" />;
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((store) => store?.cart?.Items || []);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div id="Header">
      <Logo />

      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div id="navbar" className={isMenuOpen ? "active" : ""}>
        <ul>
          <Link to="/" onClick={closeMenu}>
            <li className="liTag">Home</li>
          </Link>
          <Link to="/about" onClick={closeMenu}>
            <li className="liTag">About us</li>
          </Link>
          <Link to="/contact" onClick={closeMenu}>
            <li className="liTag">Contact Us</li>
          </Link>
          <Link to="/grocery" onClick={closeMenu}>
            <li className="liTag">Grocery</li>
          </Link>
          <Link to="/cart" onClick={closeMenu}>
            <li className="loggedInBtn">
              🛒 Cart - <span>{cartItems.length}</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;

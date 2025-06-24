import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Rlogo from "../assets/img/logo.png"; // Importing logo image

const Logo = () => {
  return (
    <img src={Rlogo} alt="logo" id="logo" />
  );
};

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
  const cartItems = useSelector((store) => store?. cart.Items); // Subscribing to cart store

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <li className="liTag">Home</li>
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)}>
            <li className="liTag">About us</li>
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            <li className="liTag">Contact Us</li>
          </Link>
          <Link to="/grocery" onClick={() => setIsMenuOpen(false)}>
            <li className="liTag">Grocery</li>
          </Link>
          <Link to="/cart" onClick={() => setIsMenuOpen(false)}>
            <li className="loggedInBtn">Cart - {cartItems.length}</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
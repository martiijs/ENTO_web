import React from "react";
import { Link } from "react-router-dom";
import './home.css'
const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/about" className="nav-button">About</Link>
        <Link to="/store" className="nav-button">Store</Link>
        <Link to="/about-us" className="nav-button">About Us</Link>
        <Link to="/contact-us" className="nav-button">Contact Us</Link>
      </nav>
    </header>
  );
};

export default Header;

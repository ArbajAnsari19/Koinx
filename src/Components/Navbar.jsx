// Navbar.js
import React, { useState } from 'react';
import img from '../assets/image1.png';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`Navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo">
        <img className="image" src={img} alt="Logo" />
      </div>
      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#info">Crypto Taxes</a>
        <a href="">Free Tools</a>
        <a href="">Resource Center</a>
        <button className="btn1">Get Started</button>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <i className="ri-close-line"></i> : <i className="ri-menu-line"></i>}
      </button>
    </nav>
  );
};

export default Navbar;

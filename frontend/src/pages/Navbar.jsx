import React from 'react';
import '../Styles/SideNavbar.css';
import { FaHome, FaUser, FaBell, FaSearch, FaShoppingCart, FaHeart, FaSyncAlt } from 'react-icons/fa';

const SideNavbar = () => {
  return (
    <div className="side-navbar">
      {/* Amazon logo icon */}
      <div className="logo-icon">
        <div className="circle-icon">
          <i className="fab fa-amazon">
          </i>
        </div>
      </div>

      {/* Home icon */}
      <div className="nav-item">
        <div className="circle-icon home">
          <FaHome />
        </div>
        Home
      </div>

      {/* User icon */}
      <div className="nav-item">
        <FaUser />
      </div>

      {/* Bell/Notifications icon */}
      <div className="nav-item">
        <FaBell />
      </div>

      {/* Search icon */}
      <div className="nav-item">
        <FaSearch />
      </div>

      {/* Cart icon */}
      <div className="nav-item">
        <FaShoppingCart />
      </div>

      {/* Heart/Favorites icon */}
      <div className="nav-item">
        <FaHeart />
      </div>

      {/* Sync (Reload) icon */}
      <div className="nav-item">
        <FaSyncAlt />
      </div>
    </div>
  );
};

export default SideNavbar;

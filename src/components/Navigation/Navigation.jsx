import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoggedIn, currentUser, onLoginClick, onLogoutClick }) {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__logo">
        NewsExplorer
      </NavLink>

      <ul className="nav__links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav__link ${isActive ? "nav__link--active" : ""}`
            }
          >
            Home
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink
              to="/saved-articles"
              className={({ isActive }) =>
                `nav__link ${isActive ? "nav__link--active" : ""}`
              }
            >
              Saved Articles
            </NavLink>
          </li>
        )}
      </ul>

      <div className="nav__auth">
        {!isLoggedIn ? (
          <button className="nav__button" onClick={onLoginClick}>
            Sign In
          </button>
        ) : (
          <button
            className="nav__button nav__button--logout"
            onClick={onLogoutClick}
          >
            {currentUser} ⎋
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navigation;

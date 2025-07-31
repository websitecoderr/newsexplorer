import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";

function Header({
  isLoggedIn,
  onLoginClick,
  onLogoutClick,
  currentUser,
  isSavedPage,
}) {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? "hidden" : "auto";
    document.body.classList.toggle("menu-open", !isMenuOpen);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("menu-open");
    };
  }, []);

  return (
    <header
      className={`header ${isMenuOpen ? "active" : ""} ${
        isSavedPage ? "saved-page" : ""
      } ${isMenuOpen && isSavedPage ? "saved-page--menu-open" : ""}`}
    >
      <div className="header__container">
        <Link to="/" className="header__logo" aria-label="Go to homepage">
          NewsExplorer
        </Link>

        <button
          className={`header__hamburger ${isMenuOpen ? "hidden" : ""}`}
          onClick={toggleMenu}
          aria-label="Open menu"
        >
          ☰
        </button>

        <button
          className={`header__close ${!isMenuOpen ? "hidden" : ""}`}
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          ×
        </button>

        <nav className="header__nav">
          {!isLoggedIn ? (
            <ul className={`header__links ${isMenuOpen ? "active" : ""}`}>
              <li>
                <Link
                  to="/"
                  className={`header__link ${
                    location.pathname === "/" ? "header__link--active" : ""
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <button
                  className={`header__button signin ${
                    isMenuOpen ? "active" : ""
                  }`}
                  onClick={onLoginClick}
                  aria-label="Sign in"
                >
                  Sign in
                </button>
              </li>
            </ul>
          ) : (
            <div
              className={`header__nav--logged-in ${isMenuOpen ? "active" : ""}`}
            >
              <Link
                to="/"
                className={`header__link ${
                  location.pathname === "/" ? "header__link--active" : ""
                }`}
              >
                Home
              </Link>
              <Link
                to="/saved-articles"
                className={`header__link ${
                  location.pathname === "/saved-articles"
                    ? "header__link--active"
                    : ""
                } ${isSavedPage ? "saved-page" : ""} ${
                  location.pathname === "/" ? "header__link--inactive" : ""
                }`}
              >
                Saved articles
              </Link>
              <button
                className="header__user-button"
                onClick={onLogoutClick}
                aria-label="Log out"
              >
                {currentUser}
              </button>
            </div>
          )}
        </nav>
      </div>

      <div className="header__divider" aria-hidden="true"></div>

      {isMenuOpen && (
        <div className="header__overlay" onClick={toggleMenu}></div>
      )}
    </header>
  );
}

export default Header;

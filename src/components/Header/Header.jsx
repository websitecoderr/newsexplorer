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
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    document.body.style.overflow = newState ? "hidden" : "auto";
    document.body.classList.toggle("menu-open", newState);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
      document.body.classList.remove("menu-open");
    };
  }, []);

  return (
    <>
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
            aria-expanded={isMenuOpen}
          >
            ☰
          </button>

          <button
            className={`header__close ${!isMenuOpen ? "hidden" : ""}`}
            onClick={toggleMenu}
            aria-label="Close menu"
            aria-expanded={isMenuOpen}
          >
            ×
          </button>

          <nav className="header__nav">
            <ul className={`header__links ${isMenuOpen ? "active" : ""}`}>
              <li>
                <Link
                  to="/"
                  className={`header__link ${
                    location.pathname === "/" ? "header__link--active" : ""
                  } ${isMenuOpen ? "header__link--home" : ""}`}
                >
                  Home
                </Link>
              </li>

              {isLoggedIn ? (
                <>
                  <li>
                    <Link
                      to="/saved-articles"
                      className={`header__link ${
                        location.pathname === "/saved-articles"
                          ? "header__link--saved header__link--active"
                          : "header__link--inactive"
                      } ${isMenuOpen ? "header__link--menu-open" : ""}`}
                    >
                      Saved articles
                    </Link>
                  </li>
                  <li>
                    <button
                      className={`header__user-button ${
                        isSavedPage
                          ? "header__user-button--saved"
                          : "header__user-button--home"
                      }`}
                      onClick={onLogoutClick}
                      aria-label="Log out"
                    >
                      {currentUser}
                    </button>
                  </li>
                </>
              ) : (
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
              )}
            </ul>
          </nav>
        </div>
      </header>

      {isMenuOpen && (
        <div className="header__overlay" onClick={toggleMenu}></div>
      )}
    </>
  );
}

export default Header;

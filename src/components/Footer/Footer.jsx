import React from "react";
import "./Footer.css";
import facebookIcon from "../../images/facebookIcon.svg";
import githubIcon from "../../images/githubIcon.svg";

function Footer({ isSavedPage }) {
  return (
    <footer className={`footer ${isSavedPage ? "saved-page" : ""}`}>
      <div className="footer__container">
        <div className="footer__left">
          <p className="footer__copyright">
            © 2025 Supersite, Powered by News API
          </p>
        </div>

        <div className="footer__right">
          <nav className="footer__nav">
            <a href="/" className="footer__link">
              Home
            </a>
            <a
              href="https://practicum.com"
              className="footer__link footer__link--tripleten"
              target="_blank"
              rel="noopener noreferrer"
            >
              TripleTen
            </a>
          </nav>

          <div className="footer__social">
            <a
              href="https://github.com/your-username/news-explorer"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon-wrapper"
            >
              <img src={githubIcon} alt="GitHub" className="footer__icon" />
            </a>
            <a
              href="https://www.facebook.com/your-facebook-page"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__icon-wrapper"
            >
              <img src={facebookIcon} alt="Facebook" className="footer__icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

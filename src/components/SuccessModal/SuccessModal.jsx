import React from "react";
import "./SuccessModal.css";
import { Link } from "react-router-dom";

function SuccessModal({ isOpen, onClose, openLoginModal }) {
  if (!isOpen) return null;

  return (
    <div className="success-modal" role="dialog" aria-modal="true">
      <section className="success-modal__content">
        <button
          className="success-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="success-modal__title">
          Registration successfully completed!
        </h2>
        <p className="success-modal__message">
          <Link
            className="success-modal__link"
            to="/"
            onClick={() => {
              onClose();
              openLoginModal();
            }}
          >
            Sign in
          </Link>
          .
        </p>
      </section>
    </div>
  );
}

export default SuccessModal;

import React, { useEffect } from "react";
import "./ModalWithForm.css";

function ModalWithForm({
  title,
  children,
  onSubmit,
  onClose,
  submitText = "Submit",
  errorMessage = "",
  isOpen,
}) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        <h2 className="modal__title">{title}</h2>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          {errorMessage && <p className="modal__error">{errorMessage}</p>}
          <button type="submit" className="modal__submit">
            {submitText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;

import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./LoginModal.css";
function LoginModal({
  isOpen,
  onClose,
  onLogin,
  onSwitchToRegister,
  errorMessage,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (emailValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailValue);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (value && !validateEmail(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const isFormValid = () => {
    const hasValidEmail = email && validateEmail(email);
    const hasPassword = password.trim().length > 0;
    const hasNoErrors = !emailError;
    return hasValidEmail && hasPassword && hasNoErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      onLogin({ email, password });
    }
  };
  return (
    <ModalWithForm
      title="Sign in"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitText="Sign in"
      errorMessage={errorMessage}
      isFormValid={isFormValid()}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          className={`modal__input ${emailError ? "modal__input--error" : ""}`}
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter email"
          required
        />
        {emailError && <span className="modal__error-text">{emailError}</span>}
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          className="modal__input"
          value={password}
          onChange={handlePasswordChange}
          placeholder="Enter Password"
          required
        />
      </label>
      <p className="modal__switch">
        Not yet registered?{" "}
        <button
          type="button"
          className="modal__switch-button"
          onClick={onSwitchToRegister}
        >
          Sign up
        </button>
      </p>
    </ModalWithForm>
  );
}
export default LoginModal;

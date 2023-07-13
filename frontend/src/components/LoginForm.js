import React from "react";
import "./LoginForm.css";

const LoginForm = ({ onLogin }) => {
  // Komponentens logik och renderingsstruktur för inloggningsformuläret
  return (
    <>
      <div className="container">
        <div className="image"></div>
        <div className="login-form">
          <div className="button-container">
            <button onClick={handleSubmit} className="google-button">
              Logga in med Google
            </button>
            <button onClick={handleSubmit} className="facebook-button">
              Logga in med Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );

  function handleSubmit(event) {
    event.preventDefault();
    // Logik för att validera och skicka inloggningsuppgifter
    // Anropa onLogin-funktionen om inloggningen lyckas
    onLogin();
  }
};

export default LoginForm;

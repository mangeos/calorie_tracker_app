import React from "react";
import "./LoginForm.css";
import { FaArrowRightLong, FaGoogle, FaFacebook } from "react-icons/fa6";
const LoginForm = () => {
  // Komponentens logik och renderingsstruktur för inloggningsformuläret
  return (
    <>
      <div className="container">
        <div className="image">
          <p
            style={{
              display: "flex",
              flexDirection: "row",
              fontSize: "70px",
              fontWeight: "bold",
            }}
          >
            <span style={{ color: "white" }}>Calorie</span>-Tracker
          </p>
          <FaArrowRightLong style={{ fontSize: 400 }} />
        </div>
        <div className="login-form">
          <div className="button-container">
            <button onClick={handleSubmit} className="google-button">
              <FaGoogle />
              Logga in med Google
            </button>
            <button onClick={handleSubmit} className="facebook-button">
              <FaFacebook /> Logga in med Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );

  async function handleSubmit(event) {
    event.preventDefault();
    // Logik för att validera och skicka inloggningsuppgifter

    // Make a request for a user with a given ID
    window.location.href = "http://localhost:3001/api/login";
  }
};

export default LoginForm;

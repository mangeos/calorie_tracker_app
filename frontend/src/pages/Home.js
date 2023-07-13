import React, { useState } from "react";
import LoginForm from "./../components/LoginForm";
import HomeComponent from "../components/HomeComponent";

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /*   const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }; */

  return (
    <div>
      {isLoggedIn ? (
        <HomeComponent />
      ) : (
        <LoginForm onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default Home;

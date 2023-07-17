import React from "react";
import LoginForm from "./../components/LoginForm";

const Login = () => {
  // vid ett knapptryck så ska det scollas ner automatiskt till den rubriken på sidan.
  /*   const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }; */

  return (
    <div>
      <LoginForm />
    </div>
  );
};

export default Login;

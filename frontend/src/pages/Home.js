import React from "react";

import HomeComponent from "../components/HomeComponent";

const Home = () => {
  // vid ett knapptryck så ska det scollas ner automatiskt till den rubriken på sidan.
  /*   const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }; */

  return (
    <div>
      <HomeComponent />
    </div>
  );
};

export default Home;

import React from "react";
import "./HomeComponent.css";
import Header from "./Header";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function HomeComponent() {
  return (
    <div className="container2">
      <Header />
      <div className="content">
        <section>
          <div className="card">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbar
                value={50}
                text={
                  <tspan style={{ display: "flex", flexDirection: "row" }}>
                    <tspan>adada</tspan>
                    <tspan>adada</tspan>
                  </tspan>
                }
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  /*     rotation: 0.25, */

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "round",

                  // Text size
                  textSize: "16px",

                  // How long animation takes to go from one percentage to another, in seconds
                  /* pathTransitionDuration: 0.5, */

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `rgb(24, 170, 102)`,
                  textColor: "black",
                  trailColor: "rgb(233, 235, 237)",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="card">
            <p>Testar</p>
          </div>
        </section>
        <section className="section-bottom">
          <div className="card">
            <p>Testar</p>
          </div>
        </section>
      </div>
      <footer>
        <p>© 2023 Calorie-Tracker</p>
      </footer>
    </div>
  );
}

export default HomeComponent;

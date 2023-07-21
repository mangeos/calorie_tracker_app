import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import "./Weight.css";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
function Weight() {
  const [weight, setWeight] = useState([]);
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Mar",
      "Mar",
      "Mar",
      "Mar",
      "Mar",
      "Mar",
      "Mar",
      "Mar",
      "Mar",
    ],
    datasets: [
      {
        labels: "daadas",
        data: [3, 2, 1],
        backgroundColor: "black",
      },
    ],
  };

  const options = {
    plugins: {
      legend: true,
    },
    scales: {
      y: {
        min: 3,
        max: 8,
      },
    },
  };
  const handleButtonClick = () => {
    alert(
      text.length > 0 ? text : weight.length > 0 ? weight[0].weightValue : ""
    );
  };
  useEffect(() => {
    const getWeight = async () => {
      const weightsFromTheServer = await fetchWeight();
      setWeight(weightsFromTheServer);
    };

    getWeight();
  }, []);

  //fetch data weight
  const fetchWeight = async () => {
    const res = await fetch("http://localhost:3000/api/weights", {
      credentials: "include",
    });
    const data = await res.json();

    console.log(data);
    return data;
  };
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };
  return (
    <>
      <div className="container2">
        <Header />
        <div className="content">
          <section>
            <div className="card">
              <p style={{ fontSize: "30px", fontWeight: "bold" }}>Min Vikt</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "500px",
                  border: "1px solid #ccc",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                    Start: 87 kg
                  </p>
                  <br></br>
                  <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                    Aktuell: 87 kg
                  </p>
                  <br></br>
                  <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                    Mål: 87 kg
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                    Ange din vikt
                  </p>
                  <input
                    style={{
                      width: "90px",
                      padding: "8px",
                      borderRadius: "4px",
                      border: "1px solid #ccc",
                      fontSize: "14px",
                      outline: "none",
                    }}
                    type="number"
                    step={0.1}
                    min={0}
                    value={
                      text.length > 0
                        ? text
                        : weight.length > 0
                        ? weight[0].weightValue
                        : ""
                    }
                    onChange={handleInputChange}
                  />
                  <br></br>
                  <br></br>
                  <button className="custom-button" onClick={handleButtonClick}>
                    SparaVikt
                  </button>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100px",
                  }}
                >
                  <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                    Förändring: -8 kg
                  </p>
                  <br></br>
                  <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                    Kvar: 2 kg
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="card">
              <div style={{ width: 200, height: 200 }}>
                {weight.map((element) => {
                  return <p key={element.id}>{element.weight}/kg</p>;
                })}
              </div>
            </div>
          </section>
          <section className="section-bottom">
            <div className="card">
              <Line data={data} options={options}></Line>
            </div>
          </section>
        </div>
        <footer>
          <p>© 2023 Calorie-Tracker</p>
        </footer>
      </div>
    </>
  );
}

export default Weight;

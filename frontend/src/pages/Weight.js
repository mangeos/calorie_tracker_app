import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import "./Weight.css";
import axios from "axios";
import apiRequests from "./../api/api";
import Footer from "./../components/Footer";
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
  const apiUrl = "http://localhost:3001/api/weights"; // Api gateWay
  const [weight, setWeight] = useState([]);
  const data = {
    labels: weight.map((element) => {
      return element.date;
    }),

    datasets: [
      {
        labels: "Weight History",
        data: weight.map((element) => {
          return element.weight;
        }),
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
        min: 60,
        max: 100,
      },
    },
  };

  const checkIfDateAlreadyExists = (dateToCheck) => {
    return weight.some((element) => {
      // Här antar jag att datumen representeras som JavaScript Date-objekt i arrayen weight.
      // Om det inte är fallet, justera jämförelsen här beroende på hur datumen är representerade.
      return element.date === dateToCheck;
    });
  };

  const handleButtonClick = async () => {
    // Skapa ett nytt datumobjekt för dagens datum
    const today = new Date();

    // Konvertera datumet till "YYYY-MM-DD" format
    const formattedDate = today.toISOString().slice(0, 10);

    const postOrPutRequest = checkIfDateAlreadyExists(formattedDate);

    if (!postOrPutRequest) {
      alert(text.length > 0 ? text : weight.length > 0 ? weight[0].weight : "");

      // Skapa det nya elementet med datumet
      const newItemWithDate = {
        weight:
          text.length > 0 ? text : weight.length > 0 ? weight[0].weight : "",
        date: formattedDate,
      };

      try {
        await axios.post(apiUrl, newItemWithDate, { withCredentials: true });
        /*  fetchDataFromApi(); // Hämta data på nytt efter POST för att visa den uppdaterade listan
      setNewItem({
        id: "",
        vikt: "",
        datum: "2023-02-22",
      }); // Återställ formuläret efter POST */
        const weightsFromTheServer = await apiRequests.getAllWeigts();
        setWeight(weightsFromTheServer);
      } catch (error) {
        console.error("Error posting data to API:", error);
      }
    } else {
      alert("datum finns redan registrerat");

      // Skapa det nya elementet med datumet
      const newItemWithDate = {
        weight:
          text.length > 0 ? text : weight.length > 0 ? weight[0].weight : "",
        date: formattedDate,
      };

      try {
        await axios.put(apiUrl, newItemWithDate, { withCredentials: true });
        /*  fetchDataFromApi(); // Hämta data på nytt efter POST för att visa den uppdaterade listan
      setNewItem({
        id: "",
        vikt: "",
        datum: "2023-02-22",
      }); // Återställ formuläret efter POST */
        const weightsFromTheServer = await apiRequests.getAllWeigts();
        setWeight(weightsFromTheServer);
      } catch (error) {
        console.error("Error posting data to API:", error);
      }
    }
  };
  useEffect(() => {
    const getWeight = async () => {
      const weightsFromTheServer = await apiRequests.getAllWeigts();
      setWeight(weightsFromTheServer);
    };

    getWeight();
  }, []);
  const [text, setText] = useState("");

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  // Function to generate rows for the table
  const renderTableRow = (value) => {
    return (
      <tr key={value.date}>
        <td>{value.date}</td>
        <td>{value.weight + "/kg"}</td>
        <td>+2/kg</td>
      </tr>
    );
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
                    Start: {weight.length > 0 ? weight[0].weight : ""}
                    /kg
                  </p>
                  <br></br>
                  <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                    Aktuell:
                    {weight.length > 0
                      ? " " + weight[weight.length - 1].weight
                      : ""}
                    /kg
                  </p>
                  <br></br>
                  <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                    Mål: 75 kg
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
                        ? weight[weight.length - 1].weightValue
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
              <Line data={data} options={options}></Line>
            </div>
          </section>
          <section className="section-bottom">
            <div className="card">
              <div style={{ width: 300 }}>
                <h2>Data Table</h2>
                <table>
                  <tbody>{weight.map((value) => renderTableRow(value))}</tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Weight;

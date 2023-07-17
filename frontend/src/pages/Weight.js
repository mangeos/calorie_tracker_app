import React, { useState, useEffect } from "react";
import Header from "./../components/Header";
import "./Weight.css";

function Weight() {
  const [weight, setWeight] = useState([]);

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
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  backgroundColor: "grey",
                  height: "80px",
                  width: "200px",
                }}
              >
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
                  value={text}
                  onChange={handleInputChange}
                />
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
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>User ID</th>
                      <th>Weight</th>
                      <th>Weight Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weight.map((item, index) => (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.userId}</td>
                        <td>{item.weight}</td>
                        <td>{item.weightValue}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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

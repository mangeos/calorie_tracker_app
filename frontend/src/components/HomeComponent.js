import React, { useState } from "react";
import "./HomeComponent.css";
import Header from "./Header";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function HomeComponent() {
  const [items, setItems] = useState([]);
  const [inputProduct, setInputProduct] = useState("");
  const [inputCalories, setInputCalories] = useState("");

  const handleProductChange = (event) => {
    setInputProduct(event.target.value);
  };

  const handleCaloriesChange = (event) => {
    // The Math.max() static method returns the largest of the numbers given
    const newCaloriesValue = Math.max(0, event.target.value); // Ensure the value is not less than 0
    setInputCalories(newCaloriesValue);
  };

  const handleAddItem = () => {
    if (inputProduct.trim() !== "") {
      const newItem = {
        product: inputProduct,
        calories: inputCalories,
      };
      setItems([...items, newItem]);
      setInputProduct("");
      setInputCalories("");
      console.log(items);
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div className="container2">
      <Header />
      <div className="content">
        <section>
          <div className="card">
            <div style={{ width: 200, height: 200 }}>
              <CircularProgressbar
                value={50}
                // reduce multiplicerar alla nummer i en array och returnerar ett nummer
                text={`${items.reduce(
                  (total, item) => total + parseInt(item.calories),
                  0
                )} calories`}
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
            <h1>Product and Calories Tracker</h1>
            <div>
              <input
                type="text"
                value={inputProduct}
                onChange={handleProductChange}
                placeholder="Enter product name"
              />
              <input
                type="number"
                value={inputCalories}
                onChange={handleCaloriesChange}
                placeholder="Enter calories"
              />
              <button onClick={handleAddItem}>Add</button>
            </div>
          </div>
        </section>
        <section className="section-bottom">
          <div className="card">
            <ul>
              {items.map((item, index) => (
                <li key={index}>
                  <strong>{item.product}</strong> - {item.calories} calories
                  <button onClick={() => handleDeleteItem(index)}>
                    Delete
                  </button>
                </li>
              ))}
            </ul>
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

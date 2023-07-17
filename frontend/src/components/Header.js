import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <div className="header-content">
        <p>Calorie-Tracker</p>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/weight">Weight</Link>
            </li>
            <li>
              <Link to="#">Progress</Link>
            </li>
            <li>
              <Link to="#">Profile</Link>
            </li>
          </ul>
        </nav>
        <button className="logout-button">
          <Link to="http://localhost:3000/api/logout">Logout</Link>
        </button>
      </div>
    </header>
  );
}

export default Header;

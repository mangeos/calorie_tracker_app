import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Weight from "./pages/Weight";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/weight" element={<Weight />} />
    </Routes>
  );
}

export default App;

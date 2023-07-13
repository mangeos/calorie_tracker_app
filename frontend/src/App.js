import "./App.css";
import Home from "./pages/Home";
import Weight from "./pages/Weight";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/weight" element={<Weight />} />
    </Routes>
  );
}

export default App;

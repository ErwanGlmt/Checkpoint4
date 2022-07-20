import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Play from "./pages/Play";
import Categories from "./pages/Categories";
import AddRules from "./pages/AddRules";
import Contact from "./pages/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Play" element={<Play />} />
        <Route path="/Categories" element={<Categories />} />
        <Route path="/AddRules" element={<AddRules />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

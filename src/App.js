import "./App.css";
import React from "react";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">REACT ROUTER</h1>
      <BrowserRouter>
        <Link to="/">Home</Link> <Link to="/About">About</Link>{" "}
        <Link to="/Contact">Contact</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

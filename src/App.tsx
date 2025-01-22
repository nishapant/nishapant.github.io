import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Photos from "./Photos";
import Projects from "./Projects";
import Writing from "./Writing";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Photos />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

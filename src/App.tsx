import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Photos from "./Photos";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Photos />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

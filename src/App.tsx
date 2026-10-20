import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Photos from "./Photos";
import Writing, { Essay } from "./Writing";
export default function App() {
  return <BrowserRouter><Routes><Route path="/" element={<Home />} /><Route path="/archive" element={<Photos />} /><Route path="/photos" element={<Navigate to="/archive" replace />} /><Route path="/writing" element={<Writing />} /><Route path="/writing/:slug" element={<Essay />} /><Route path="*" element={<Navigate to="/" replace />} /></Routes></BrowserRouter>;
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GalleryPage from "./pages/GalleryPage";
import QuoteGenerator from "./pages/QuoteGenerator";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<GalleryPage />} />
        <Route path="/quote" element={<QuoteGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;

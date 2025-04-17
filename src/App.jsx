// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Mission from "./components/Mission";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Aboutpage from "./page/Aboutpage";
import Resultpage from "./page/Resultpage";
import "./styles/App.css";

function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Mission />
      <Events />
      <Footer />
    </>
  );
}


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/results" element={<Resultpage />} />
      </Routes>
    </Router>
  );
} 

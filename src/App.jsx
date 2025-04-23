// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Mission from "./components/Mission.jsx";
import Events from "./components/Events.jsx";
import Footer from "./components/Footer.jsx";
import Aboutpage from "./page/Aboutpage.jsx";
import Resultpage from "./page/Resultpage.jsx";
import Contactpage from "./page/Contactpage.jsx";
import Navbar from "./components/Navbar.jsx";
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
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/results" element={<Resultpage />} />
      </Routes>
    </Router>
  );
} 
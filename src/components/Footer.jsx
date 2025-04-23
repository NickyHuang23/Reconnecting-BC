// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About UGBC</Link></li>
          <li><Link to="/results">Results</Link></li>
          <li><a href="https://www.bc.edu/bc-web/offices/studentaffairs/sites/ugbc.html" target="_blank" rel="noopener noreferrer">Join</a></li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} UGBC, Boston College. All rights reserved.</p>
    </footer>
  );
}
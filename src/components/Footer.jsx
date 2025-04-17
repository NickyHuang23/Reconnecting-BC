// src/components/Footer.jsx
import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About UGBC</a></li>
          <li><a href="#">Results</a></li>
          <li><a href="#">Join</a></li>
        </ul>
      </nav>
      <p>&copy; {new Date().getFullYear()} UGBC, Boston College. All rights reserved.</p>
    </footer>
  );
}

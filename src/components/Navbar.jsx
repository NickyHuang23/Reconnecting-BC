import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">Instagram</span>
      <button className="notif-btn">
        <img
          src="https://cdn.glitch.global/4d873118-9ddc-4785-bfc9-1c5b2da1914f/notifications.svg?v=1744142855582"
          alt="notifications"
        />
      </button>
    </nav>
  );
}
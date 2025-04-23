import React from "react";
import "../styles/Contactpage.css";

export default function Contactpage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <div className="container">
        <h1>Contact Us</h1>

        <div className="contact-info">
          <p><strong>Email:</strong> ugbc@bc.edu</p>
          <p><strong>Address:</strong> UGBC office in Carney 106</p>
        </div>

        <form
          action="https://formspree.io/f/yourFormID"
          method="POST"
        >
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" rows="5" placeholder="Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="footer">
        &copy; {new Date().getFullYear()} BC Unplugged, All rights reserved.
      </div>
    </div>
  );
}

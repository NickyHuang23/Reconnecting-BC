import React from "react";
import "../styles/Header.css";

export default function Header() {
  return (
    <section className="header-section">
      <h4>Personalise. Purpose. Progress.</h4>
      <h1>
        BE PART OF<br />
        <span className="highlight">THE EXCELLENCE</span>
      </h1>
      <p>
        The Undergraduate Government of Boston College (UGBC)
        is a student government created to enrich the lives of
        students attending Boston College. We are promoting further
        development and progress of our organization, Boston College
        as a whole, and each of our fellow eagles as individuals.
      </p>
      <div className="cta-buttons">
        <button className="gold">I want to tune in</button>
        <button className="white">I want to turn up</button>
      </div>
    </section>
  );
}

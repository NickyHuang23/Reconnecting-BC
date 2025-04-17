// src/components/Mission.jsx
import React from "react";
import "../styles/Mission.css";

export default function Mission() {
  return (
    <section className="mission">
      <h4>Our mission</h4>
      <h2>CURA PERSONALIS<br />CARE OF THE WHOLE PERSON</h2>

      <div className="mission-cards">
        <div className="card">
          <img src="/academic-icon.png" alt="Academic" />
          <h3>Academic Affairs</h3>
          <p>
            Pursue academic initiatives and improvements as the Boston College undergraduate
            population grows and diversifies.
          </p>
        </div>

        <div className="card">
          <img src="/studentlife-icon.png" alt="Student Life" />
          <h3>Student Life</h3>
          <p>
            Effectively respond to undergraduate student life concerns to accommodate
            the needs and interests of students.
          </p>
        </div>
      </div>
    </section>
  );
}

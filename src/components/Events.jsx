// src/components/Events.jsx
import React from "react";
import "../styles/Events.css";

export default function Events() {
  return (
    <section className="events">
      <h2>
        UPCOMING<br />
        <span className="highlight">EVENTS</span>
      </h2>

      <div className="event-grid">
        <div className="event-card">
          <img src="/event1.jpg" alt="Event 1" />
          <div className="event-meta">
            <div className="tags">
              <span className="tag tag1">Tag1</span>
              <span className="tag tag2">Tag2</span>
              <span className="tag tag3">Tag3</span>
              <span className="date">dd/mm/yyyy</span>
            </div>
            <h3>Title of the event1</h3>
            <p>"Description of the event1"</p>
            <a href="#">Explore this event</a>
          </div>
        </div>

        <div className="event-card">
          <img src="/event2.jpg" alt="Event 2" />
          <div className="event-meta">
            <div className="tags">
              <span className="tag tag1">Tag1</span>
              <span className="tag tag2">Tag2</span>
              <span className="tag tag3">Tag3</span>
              <span className="date">dd/mm/yyyy</span>
            </div>
            <h3>Title of the event2</h3>
            <p>"Description of the event2"</p>
            <a href="#">Explore this event</a>
          </div>
        </div>
      </div>
    </section>
  );
}

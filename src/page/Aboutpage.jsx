import React from "react";
import "../styles/Aboutpage.css";

export default function Aboutpage() {
  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <div className="container">
        <h1>About Us</h1>

        <div className="section">
          <h2>Our Purpose</h2>
          <p>
            The Undergraduate Government of Boston College (UGBC) is a student
            government created to enrich the lives of students attending Boston
            College. Its purpose is to serve on behalf of students' interests and
            to help cultivate an engaged and caring student community.
            Furthermore, the student government works to actualize the rights and
            responsibilities of students to the greater community, while promoting
            growth academically, socially, and spiritually.
          </p>
        </div>

        <div className="section">
          <h2>UGBC Mission</h2>
          <p>
            The general student body of Boston College entrusts the Undergraduate
            Student Government of Boston College (UGBC) to serve as an advocate, a
            unified voice for students’ interests and a representative body to the
            larger Boston College community, to lead the student body by providing
            social, cultural, formational and educational programs and activities
            that expand the scope of the educational experience— by providing the
            most effective use of student money and effort, by informing students
            of issues which are their concern and to eliminate confusion about
            those issues, by representing the General Student Body to the
            surrounding community, the Board of Trustees, the President, the
            Administration and any other appropriate body or organization and to
            give input to those bodies relating to student opinion, by encouraging
            student participation and input; and to be more worthy of the Motto of
            Boston College, “Ever to Excel”.
          </p>
        </div>

        <div className="section">
          <h2>Executive Council</h2>
          <div className="team-grid">
            <div className="team-member">
              <img
                src="https://cdn.glitch.global/a78cde70-6d54-4775-815b-bbf77f6a653b/meghan_heckelman.jpg?v=1744576604371"
                alt="Meghan Heckelman"
              />
              <div className="member-name">Meghan Heckelman</div>
              <div className="member-role">President</div>
            </div>

            <div className="team-member">
              <img
                src="https://cdn.glitch.global/a78cde70-6d54-4775-815b-bbf77f6a653b/katie_garrigan.jpg?v=1744576598635"
                alt="Katie Garrigan"
              />
              <div className="member-name">Katie Garrigan</div>
              <div className="member-role">Vice President</div>
            </div>

            <div className="team-member">
              <img
                src="https://cdn.glitch.global/a78cde70-6d54-4775-815b-bbf77f6a653b/ellie.png?v=1744576578671"
                alt="Ellie Cost"
              />
              <div className="member-name">Ellie Cost</div>
              <div className="member-role">Chief of Staff</div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">&copy; 2025 BC Unplugged, All rights reserved.</div>
    </div>
  );
}

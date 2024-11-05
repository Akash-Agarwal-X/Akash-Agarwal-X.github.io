import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello Everyone, I am <span className="purple"><b>Akash Agarwal</b> </span>
            from <span className="purple"><b>Pune, India.</b> </span>
            <br />
            I’m currently pursuing my <span className="purple"><b>Master's</b> </span>in <span className="purple"><b>Software Engineering</b> </span>at <span className="purple"><b>Arizona State University</b></span> and bring over two years of experience as a software developer, specializing in full-stack technologies and cloud platforms like AWS and GCP.<br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "RGB(0, 102, 204)" }}>
            "Live, learn, and grow!"{" "}
          </p>
          <footer className="blockquote-footer">Akash Agarwal</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

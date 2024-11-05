import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./PublicationsCards";
import Particle from "../Particle";
import consciousness from "../../Assets/Projects/Understanding-the-Nature-of-Consciousness-with-AI.jpeg";
import blackhole from "../../Assets/Projects/AI-Enabled-Black-Hole-Detection-and-Deflection.jpeg";

function Publications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Publications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few publications I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={consciousness}
              isBlog={true}
              title="Understanding the Nature of Consciousness with AI"
              description="The research paper explores how artificial intelligence (AI) enhances our understanding of consciousness, including self-awareness and perception. It demonstrates AI's ability to model consciousness, analyze neural data for patterns, and conduct human-machine interaction experiments, offering valuable insights into the nature of consciousness."
              demoLink="https://www.irjet.net/archives/V10/i8/IRJET-V10I8149.pdf"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blackhole}
              isBlog={true}
              title="AI-Enabled Black Hole Detection and Deflection"
              description="This research paper focuses on detecting black holes and using artificial intelligence (AI) to mitigate their potential threats. It highlights the dangers posed by black holes, including their immense gravitational pull, and emphasizes AI's role in analyzing gravitational wave data, modeling black hole dynamics, and developing effective deflection strategies to protect our planet."
              demoLink="https://www.irjet.net/archives/V10/i9/IRJET-V10I924.pdf"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;

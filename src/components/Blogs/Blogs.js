import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./BlogCards";
import Particle from "../Particle";
import playwright from "../../Assets/Projects/Leveraging-AI-to-Automate-Test-Case-Generation-with-Playwright.jpeg";

function Publications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Blogs </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few blogs I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={playwright}
              isBlog={true}
              title="Leveraging AI to Automate Test Case Generation with Playwright"
              description="This blog discusses the role of artificial intelligence (AI) in enhancing automated testing within software development, focusing on its ability to improve the efficiency and sophistication of test case generation. It highlights Playwright, a powerful end-to-end testing framework developed by Microsoft, as a tool for leveraging AI in the automation of test case creation."
              demoLink="https://www.neovasolutions.com/2024/05/23/leveraging-ai-to-automate-test-case-generation-with-playwright/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;

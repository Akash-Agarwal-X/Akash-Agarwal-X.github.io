import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Cloudplatform from "./Cloudplatform";
import Languagestack from "./Languagestack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import DevOpsStack from "./DevOpsStack";
import DBStack from "./DBStack";
import Frameworkstack from "./Frameworkstack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Discover Who <strong className="purple">I Am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <b>Professional Skillset</b>
        </h1>
        <br />
        <h2 className="project-heading">
          <strong className="purple">Programming Languages</strong>
        </h2>

        <Languagestack />
        <h2 className="project-heading">
          <strong className="purple">Cloud Platform</strong>
        </h2>
        <Cloudplatform />

        <h2 className="project-heading">
          <strong className="purple">DevOps Tools</strong>
        </h2>
        <DevOpsStack />

        <h2 className="project-heading">
          <strong className="purple">Databases & Query Languages</strong>
        </h2>
        <DBStack />

        <h2 className="project-heading">
          <strong className="purple">Frameworks & Libraries</strong>
        </h2>
        <Frameworkstack />

        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;

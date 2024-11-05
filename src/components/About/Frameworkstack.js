// import React from "react";
// import { Col, Row } from "react-bootstrap";
// import {
//   DiNodejs,
// } from "react-icons/di";
// import {
//   SiReact,
//   SiVuedotjs,
//   SiFlask,
//   SiAngular,
//   SiSpringboot,
//   SiMocha,
//   SiCypress,
//   SiPytest,
//   SiJunit5,
//   SiWebdriverio,
//   SiSelenium,
// } from "react-icons/si";

// function Frameworkstack() {
//   return (
//     <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiReact />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiVuedotjs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiAngular />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <DiNodejs />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiFlask />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSpringboot />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiMocha />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiCypress />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiPytest />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiJunit5 />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiWebdriverio />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons">
//         <SiSelenium />
//       </Col>
//     </Row>
//   );
// }

// export default Frameworkstack;

import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import {
  DiNodejs,
} from "react-icons/di";
import {
  SiReact,
  SiVuedotjs,
  SiFlask,
  SiAngular,
  SiSpringboot,
  SiMocha,
  SiCypress,
  SiPytest,
  SiJunit5,
  SiWebdriverio,
  SiSelenium,
} from "react-icons/si";

function Frameworkstack() {
  return (
    <Container>
      <Row style={{ justifyContent: "center", paddingBottom: "50px", gap: "30px" }}>
        {[
          { icon: <SiReact />, label: "React" },
          { icon: <SiVuedotjs />, label: "Vue.js" },
          { icon: <SiAngular />, label: "Angular" },
          { icon: <DiNodejs />, label: "Node.js" },
          { icon: <SiFlask />, label: "Flask" },
          { icon: <SiSpringboot />, label: "Spring Boot" },
          { icon: <SiMocha />, label: "Mocha" },
          { icon: <SiCypress />, label: "Cypress" },
          { icon: <SiPytest />, label: "PyTest" },
          { icon: <SiJunit5 />, label: "JUnit 5" },
          { icon: <SiWebdriverio />, label: "WebdriverIO" },
          { icon: <SiSelenium />, label: "Selenium" },
        ].map((framework, index) => (
          <Col xs={4} md={2} className="tech-icon-container" key={index}>
            <div className="flip-card">
              <div className="flip-card-inner">
                {/* Front side with icon */}
                <div className="flip-card-front tech-icons">
                  {framework.icon}
                </div>
                {/* Back side with text */}
                <div className="flip-card-back tech-icons">
                  <p style={{ fontSize: '24px' }}>{framework.label}</p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Frameworkstack;
